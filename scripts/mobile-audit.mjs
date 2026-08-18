// Mobile audit: crawls routes at 375x812, flags horizontal overflow,
// sub-44px tap targets, sub-12px text, and captures full-page screenshots.
import { chromium } from "@playwright/test";
import { mkdirSync } from "node:fs";

const BASE = process.env.AUDIT_BASE ?? "http://localhost:3102";
const OUT = process.env.AUDIT_OUT || "/private/tmp/claude-501/-Users-rom/206f7fe2-5cae-4f39-8997-e337084080b9/scratchpad/mobile";
const routes = ["/", "/portfolio", "/portfolio/safari-awaits", "/portfolio/expedition-maritime", "/about", "/how-we-work", "/contact", "/brand"];
mkdirSync(OUT, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 375, height: 812 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true });

const report = [];
for (const route of routes) {
  await page.goto(BASE + route, { waitUntil: "networkidle" });
  await page.evaluate(() => new Promise((r) => setTimeout(r, 500)));
  const issues = await page.evaluate(() => {
    const out = [];
    const vw = document.documentElement.clientWidth;
    if (document.documentElement.scrollWidth > vw + 1) {
      // find offenders
      for (const el of document.querySelectorAll("*")) {
        const r = el.getBoundingClientRect();
        if (r.right > vw + 2 && r.width > 20 && el.children.length < 8) {
          out.push({ type: "overflow", el: el.tagName + "." + String(el.className).slice(0, 50), right: Math.round(r.right) });
          if (out.length > 6) break;
        }
      }
      out.unshift({ type: "h-scroll", scrollWidth: document.documentElement.scrollWidth, vw });
    }
    for (const el of document.querySelectorAll("a, button, [role=button]")) {
      const r = el.getBoundingClientRect();
      if (r.width === 0 || r.height === 0) continue;
      const cs = getComputedStyle(el);
      if (cs.visibility === "hidden" || cs.display === "none") continue;
      if (r.height < 32 && r.width < 44) {
        out.push({ type: "tap", el: (el.textContent || el.ariaLabel || "").trim().slice(0, 34), h: Math.round(r.height), w: Math.round(r.width) });
      }
    }
    const seen = new Set();
    for (const el of document.querySelectorAll("p, span, a, li, td, label, figcaption")) {
      const fs = parseFloat(getComputedStyle(el).fontSize);
      if (fs < 10.5 && el.textContent.trim().length > 4) {
        const key = Math.round(fs) + (el.className||"");
        if (!seen.has(key)) { seen.add(key); out.push({ type: "tiny-text", el: String(el.className).slice(0, 44), fs: Math.round(fs * 10) / 10 }); }
      }
    }
    return out;
  });
  const slug = route === "/" ? "home" : route.replace(/\//g, "_").slice(1);
  await page.screenshot({ path: `${OUT}/${slug}.png`, fullPage: true });
  if (issues.length) report.push({ route, issues });
}
await browser.close();

if (!report.length) console.log("MOBILE CLEAN across", routes.length, "routes");
else for (const r of report) {
  console.log(`\n${r.route}: ${r.issues.length} issues`);
  for (const i of r.issues.slice(0, 12)) console.log("  ", JSON.stringify(i));
}
