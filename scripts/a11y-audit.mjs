// Accessibility audit: axe-core over every route, WCAG 2.1 AA. Exits nonzero on serious/critical.
import { chromium } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
const BASE = process.env.AUDIT_BASE || "http://localhost:3102";
const routes = (process.env.AUDIT_ROUTES || "/,/portfolio,/portfolio/safari-awaits,/portfolio/expedition-maritime,/about,/careers,/press,/standards,/develop,/how-we-work,/contact,/brand").split(",");
const browser = await chromium.launch(); const context = await browser.newContext({ viewport: { width: 1280, height: 900 } }); const page = await context.newPage();
let bad = 0; const seen = new Map();
for (const route of routes) {
  await page.goto(BASE + route, { waitUntil: "networkidle" });
  await page.addStyleTag({ content: "html.has-reveal [data-reveal]{opacity:1 !important;transform:none !important;transition:none !important}" });
  await page.evaluate(() => document.querySelectorAll("[data-reveal]").forEach(e => e.classList.add("is-revealed")));
  await page.waitForTimeout(300);
  const r = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa"]).analyze();
  for (const v of r.violations) {
    const key = v.id; const c = seen.get(key) || { impact: v.impact, help: v.help, routes: new Set(), nodes: 0, sample: v.nodes[0]?.html?.slice(0, 120) };
    c.routes.add(route); c.nodes += v.nodes.length; seen.set(key, c);
    if (v.impact === "serious" || v.impact === "critical") bad++;
  }
}
await browser.close();
if (!seen.size) console.log("A11Y CLEAN across", routes.length, "routes");
for (const [id, c] of [...seen].sort((a) => (a[1].impact === "critical" ? -1 : 1))) {
  console.log(`\n[${c.impact}] ${id} — ${c.help}\n  routes: ${[...c.routes].join(", ")}\n  nodes: ${c.nodes}\n  e.g. ${c.sample}`);
}
if (bad) process.exitCode = 1;
