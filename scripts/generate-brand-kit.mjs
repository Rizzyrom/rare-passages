// Rare Passages brand kit generator. SVG masters + exact-size PNGs via
// Playwright Chromium. Rerun after any logo change.
import { chromium } from "@playwright/test";
import { mkdirSync, writeFileSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const OUT = "public/brand";
mkdirSync(OUT, { recursive: true });

const INK = "#0a1628", PAPER = "#f7f2e8", GOLD = "#c8a44d", NAVY = "#1a3154";

const paths = readFileSync("src/components/logo-paths.ts", "utf8");
const WORD_D = JSON.parse(paths.match(/WORDMARK_D = (".*");/)[1]);
const WORD_W = parseFloat(paths.match(/WORDMARK_W = ([\d.]+);/)[1]);
const MK = JSON.parse(readFileSync("src/components/logo-mark.json", "utf8"));

let gseq = 0;
const mark = (horizon) => {
  const gid = `star${gseq++}`;
  const glints = MK.glints.map(([x1, y1, x2, y2]) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"/>`).join("");
  const refl = MK.reflection.map((r) => `<line x1="${r.x1}" y1="${r.y}" x2="${r.x2}" y2="${r.y}" opacity="${r.opacity}"/>`).join("");
  const h = MK.horizon;
  return `
  <defs><linearGradient id="${gid}" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="${MK.gradient.from}"/><stop offset="1" stop-color="${MK.gradient.to}"/>
  </linearGradient></defs>
  <path d="${MK.starPath}" fill="url(#${gid})"/>
  <g stroke="${MK.starColor}" stroke-width="${MK.glintWidth}">${glints}</g>
  <g stroke="${MK.starColor}" stroke-width="${MK.reflectionWidth}">${refl}</g>
  <rect x="${h.x}" y="${h.y}" width="${h.w}" height="${h.h}" fill="${horizon}"/>`;
};

const LOCKUP_W = 84 + 34 + WORD_W;
const lockup = (ink) => `
  <g transform="translate(0, -1.5)">${mark(ink)}</g>
  <g transform="translate(118, 78)"><path d="${WORD_D}" fill="${ink}"/></g>`;
const STACK_W = WORD_W + 20;
const stacked = (ink) => `
  <g transform="translate(${(STACK_W - 84) / 2}, 0)">${mark(ink)}</g>
  <g transform="translate(10, 182)"><path d="${WORD_D}" fill="${ink}"/></g>`;

const svg = (w, h, vb, body, bg) =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="${vb}">${bg ? `<rect width="100%" height="100%" fill="${bg}"/>` : ""}${body}</svg>`;

const files = {
  "rp-mark.svg": svg(840, 840, "0 0 84 84", mark(INK)),
  "rp-mark-cream.svg": svg(840, 840, "0 0 84 84", mark(PAPER)),
  "rp-lockup-ink.svg": svg(Math.round(LOCKUP_W), 100, `0 0 ${LOCKUP_W.toFixed(0)} 100`, lockup(INK)),
  "rp-lockup-cream.svg": svg(Math.round(LOCKUP_W), 100, `0 0 ${LOCKUP_W.toFixed(0)} 100`, lockup(PAPER)),
  "rp-stacked-ink.svg": svg(Math.round(STACK_W), 200, `0 0 ${STACK_W.toFixed(0)} 200`, stacked(INK)),
  "rp-stacked-cream.svg": svg(Math.round(STACK_W), 200, `0 0 ${STACK_W.toFixed(0)} 200`, stacked(PAPER)),
};
for (const [name, content] of Object.entries(files)) writeFileSync(`${OUT}/${name}`, content);

const page_ = (body, bg) => `<!doctype html><style>*{margin:0}body{background:${bg}}svg{display:block}</style>${body}`;
const center = (inner, w, h, bg) => page_(`<div style="width:${w}px;height:${h}px;display:grid;place-items:center;background:${bg}">${inner}</div>`, bg);
const avatarMark = (horizon) => svg(560, 560, "0 0 84 84", mark(horizon));
const bannerLockup = (ink, h) => svg(Math.round(LOCKUP_W * (h / 100)), h, `0 0 ${LOCKUP_W.toFixed(0)} 100`, lockup(ink));

const rasters = [
  ["rp-avatar-ink.png", 1024, 1024, center(avatarMark(PAPER), 1024, 1024, INK)],
  ["rp-avatar-navy.png", 1024, 1024, center(avatarMark(PAPER), 1024, 1024, NAVY)],
  ["rp-avatar-paper.png", 1024, 1024, center(avatarMark(INK), 1024, 1024, PAPER)],
  ["rp-banner-x.png", 1500, 500, page_(`
    <div style="position:relative;width:1500px;height:500px;background:${INK};overflow:hidden">
      <div style="position:absolute;left:100px;top:50%;transform:translateY(-54%)">${bannerLockup(PAPER, 116)}</div>
      <div style="position:absolute;left:0;right:0;bottom:96px;height:2px;background:${GOLD}"></div>
      <div style="position:absolute;left:100px;bottom:56px;font:600 15px Manrope,Arial;letter-spacing:6px;color:#8a93a8">FIVE BRANDS. ONE STANDARD.</div>
    </div>`, INK)],
  ["rp-banner-linkedin.png", 1584, 396, page_(`
    <div style="position:relative;width:1584px;height:396px;background:${NAVY};overflow:hidden">
      <div style="position:absolute;left:96px;top:50%;transform:translateY(-54%)">${bannerLockup(PAPER, 100)}</div>
      <div style="position:absolute;left:0;right:0;bottom:78px;height:2px;background:${GOLD}"></div>
      <div style="position:absolute;left:96px;bottom:44px;font:600 13px Manrope,Arial;letter-spacing:5px;color:#e8dec8">HIGH-TICKET TRAVEL, INTELLIGENTLY MATCHED</div>
    </div>`, NAVY)],
  ["rp-logo-email.png", 840, 79, page_(bannerLockup(INK, 79), "transparent")],
  ["rp-logo-email-cream.png", 840, 79, page_(bannerLockup(PAPER, 79), "transparent")],
];

const browser = await chromium.launch();
const page = await browser.newPage();
for (const [name, w, h, html] of rasters) {
  await page.setViewportSize({ width: w, height: h });
  await page.setContent(html);
  await page.screenshot({ path: `${OUT}/${name}`, omitBackground: name.includes("email") });
  console.log("raster", name);
}
await browser.close();
console.log("kit complete ->", resolve(OUT));
