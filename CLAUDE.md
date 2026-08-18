# Rare Passages Parent — Agent Build Guide

> Read this before writing any code in this repo. The parent portfolio master doc is at `../CLAUDE.md`.

## What This Is

Rare Passages (rarepassages.com) is the **parent portfolio brand** that houses 5+ specialist travel verticals. Safari Awaits is the first active vertical. This site showcases the portfolio, explains the business model, and drives investor/partner interest.

**Currently NOT indexing** — intentional until the site and all verticals are launch-ready. Enforced by
`X-Robots-Tag: noindex, nofollow` in `next.config.ts` plus `robots: { index: false, follow: false }` in
`layout.tsx`. `robots.ts` deliberately still allows crawling so those directives are actually read —
a `Disallow` would hide them and risk URL-only indexing.

## Architecture

```
src/
├── app/
│   ├── layout.tsx              → Root layout (fonts, header, footer, metadata)
│   ├── page.tsx                → Homepage (hero, portfolio verticals, business model, growth section, CTA)
│   ├── globals.css             → Design system (CSS tokens + component styles)
│   ├── robots.ts               → robots.txt (allows crawl by design; noindex enforced via header + metadata)
│   ├── sitemap.ts              → Static sitemap
│   ├── about/page.tsx          → About page
│   ├── contact/               → Contact page (fail-closed /api/inquiries intake)
│   ├── how-we-work/           → Methodology page
│   ├── portfolio/
│   │   ├── page.tsx            → Portfolio index
│   │   └── [slug]/page.tsx    → Dynamic vertical detail page
├── components/
│   ├── SiteHeader.tsx         → Fixed nav header
│   ├── SiteFooter.tsx         → Footer
│   ├── ContactForm.tsx        → Contact form (wired to /api/inquiries, fail-closed)
├── data/
│   ├── verticals.ts           → 5 portfolio vertical definitions
│   └── images.ts              → Image URLs
```

## Design System

Same architecture as Safari Awaits but different color palette (deeper, maritime-natural):

```css
--ink: #0a1628; --forest: #1a3154; --moss: #3a5780;
--sand: #e8dec8; --paper: #f7f2e8; --clay: #7d6224;  /* text-safe antique gold for light surfaces */
--gold: #c8a44d; --muted: #5b6672;   /* --gold is for the star + dark surfaces only */
```

Fonts: Same — Cormorant Garamond (display), Manrope (body)
Uses Lucide React icons (safari-awaits does not — don't mix)

## Verticals Data Model

```typescript
interface Vertical {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  status: 'active' | 'horizon' | 'development';
  statusLabel: string;
  category: string;
  heroImage: string;
  shortDescription: string;
  fullDescription: string;
  featuredDestinations: string[];
  keyHighlights: string[];
  guestCapacity: string;
  priceGuide: string;
  sustainabilityRating: string;
  externalUrl?: string;          // Links to the vertical's own site (e.g., safariawaits.com)
  verticalPillars: { title: string; description: string }[];
  sampleItineraries: { title: string; duration: string; regions: string; description: string }[];
}
```

### Current verticals:
1. **Safari Awaits** (active) — links to safariawaits.com
2. **Expedition Maritime** (active) — not yet deployed
3. **Private Islands** (horizon) — not yet built
4. **Alpine Retreats** (horizon) — not yet built
5. **Grand Rail Journeys** (horizon) — not yet built

## Key Differences from Safari Awaits

- **Inquiry intake** — /api/inquiries, fail-closed (503 in production without INQUIRY_WEBHOOK_URL / optional INQUIRY_WEBHOOK_TOKEN)
- **One API route** — /api/inquiries (guarded: rate limit, size cap, honeypot)
- **Noindex** — intentionally not indexing
- **Lucide icons** — uses lucide-react for icons
- **Tailwind v4** — imported but most styling is custom CSS
- **No tests** — no Playwright setup yet

## Build

```bash
npm install
npm run dev    # localhost:3000
npm run build  # Production build
npm run lint    # ESLint
```

## Deployment

Target: Vercel. Domain: rarepassages.com (currently parked at GoDaddy).

DNS when ready:
```
A record:     @    → 76.76.21.21
CNAME record: www  → cname.vercel-dns.com
```

Keep `robots: { index: false, follow: false }` until all verticals are launch-ready and the owner approves indexing.

## Brand

Star-over-water mark (north star + horizon + reflection) — geometry in
src/components/logo-mark.json, wordmark outlined in logo-paths.ts
(scripts/generate-logo.mjs). Kit in public/brand/ via
scripts/generate-brand-kit.mjs; guidelines at /brand. Family system with
Safari Awaits: shared horizon, different sky.

## Accessibility

WCAG 2.1 AA clean via axe-core (scripts/a11y-audit.mjs). Two token rules keep it that way:
--clay (text-safe) for eyebrows/labels on light ground; --gold only for the star mark and dark
surfaces. Header is transparent only on "/" (hero); every other route renders solid.

## Rules

1. Use CSS custom properties from globals.css — never hardcode colors
2. Match existing component naming (PascalCase for components, unlike safari-awaits which uses kebab-case)
3. Don't index this site until owner approves
4. No emojis in content
5. Never commit secrets

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
