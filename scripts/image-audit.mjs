// Runtime image-resolution audit. Crawls pages, measures every <img> and
// CSS background-image, and flags anything where the served pixels fall
// short of rendered CSS pixels x devicePixelRatio.
import { chromium } from "@playwright/test";

const BASE = process.env.AUDIT_BASE ?? "http://localhost:3102";
const routes = ["/", "/portfolio", "/portfolio/safari-awaits", "/portfolio/expedition-maritime", "/about", "/careers", "/press", "/standards", "/develop", "/how-we-work", "/contact", "/brand"];

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1728, height: 1080 }, deviceScaleFactor: 2 });

const failures = [];
for (const route of routes) {
  await page.goto(BASE + route, { waitUntil: "networkidle" });
  await page.evaluate(() => new Promise((r) => setTimeout(r, 400)));
  const results = await page.evaluate(async () => {
    const out = [];
    const dpr = devicePixelRatio;
    // <img> elements. naturalWidth is density-corrected for srcset images
    // (a 3840px file selected at 2.2x density reports ~1728), so decode the
    // actual bitmap instead of trusting naturalWidth.
    for (const img of document.images) {
      const rect = img.getBoundingClientRect();
      if (rect.width < 40 || !img.currentSrc) continue;
      const needed = Math.round(rect.width * dpr);
      let actual = 0;
      try {
        const blob = await (await fetch(img.currentSrc)).blob();
        const bmp = await createImageBitmap(blob);
        actual = bmp.width;
        bmp.close();
      } catch { actual = img.naturalWidth; }
      if (actual && actual < needed * 0.9) {
        out.push({ kind: "img", src: img.currentSrc.slice(0, 140), natural: actual, needed, rendered: Math.round(rect.width) });
      }
    }
    // CSS backgrounds
    const probes = [];
    for (const el of document.querySelectorAll("*")) {
      const bg = getComputedStyle(el).backgroundImage;
      const m = bg && bg.match(/url\("(https?:[^"]+)"\)/);
      if (!m) continue;
      const rect = el.getBoundingClientRect();
      if (rect.width < 100 || rect.height < 60) continue;
      probes.push({ url: m[1], needed: Math.round(rect.width * dpr), rendered: Math.round(rect.width) });
    }
    await Promise.all(probes.map((p) => new Promise((resolve) => {
      const i = new Image();
      i.onload = () => { p.natural = i.naturalWidth; resolve(); };
      i.onerror = () => { p.natural = 0; resolve(); };
      i.src = p.url;
    })));
    for (const p of probes) {
      if (p.natural && p.natural < p.needed * 0.9) {
        out.push({ kind: "bg", src: p.url.slice(0, 140), natural: p.natural, needed: p.needed, rendered: p.rendered });
      }
    }
    return out;
  });
  for (const r of results) failures.push({ route, ...r });
}
await browser.close();

if (failures.length === 0) {
  console.log("CLEAN: no upscaled images across", routes.length, "routes at 1728px/2x");
} else {
  console.log(failures.length, "UPSCALED IMAGES:");
  for (const f of failures) console.log(`  [${f.route}] ${f.kind} natural=${f.natural} needed=${f.needed} rendered=${f.rendered}\n    ${f.src}`);
  process.exitCode = 1;
}
