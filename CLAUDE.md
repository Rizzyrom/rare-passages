# Rare Passages Parent — Agent Build Guide

> Read this before writing any code in this repo. The parent portfolio master doc is at `../CLAUDE.md`.

## What This Is

Rare Passages (rarepassages.com) is the **corporate site of a specialist travel group** (think Ennismore, Sircle). It presents the brands in tiers, the group operating standard, and routes for partners, press and talent. It does NOT talk to travelers, publish revenue/commission mechanics, or make claims the group cannot prove today. Safari Awaits is the first (and only active) brand.

**Currently NOT indexing** — intentional until the site and all verticals are launch-ready. Enforced by
`X-Robots-Tag: noindex, nofollow` in `next.config.ts` plus `robots: { index: false, follow: false }` in
`layout.tsx`. `robots.ts` deliberately still allows crawling so those directives are actually read —
a `Disallow` would hide them and risk URL-only indexing.

## Architecture

```
src/
├── app/
│   ├── layout.tsx              → Root layout (fonts, header, footer, metadata)
│   ├── page.tsx                → Homepage (hero, brands, partner-with-us CTA)
│   ├── globals.css             → Design system (CSS tokens + component styles)
│   ├── robots.ts               → robots.txt (allows crawl by design; noindex enforced via header + metadata)
│   ├── sitemap.ts              → Static sitemap
│   ├── about/page.tsx          → About page
│   ├── contact/               → Contact page (fail-closed /api/inquiries intake)
│   ├── how-we-work/           → Partner examination process
│   ├── develop/               → Partner with us (primary CTA)
│   ├── standards/             → The group operating standard (public document)
│   ├── press/                 → Boilerplate, facts, assets
│   ├── careers/               → Honest: no open roles yet
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
2. **Expedition Maritime** (development) — no site, vessel or partner yet; copy must say so
3. **Private Islands** (horizon) — not yet built
4. **Alpine Retreats** (horizon) — not yet built
5. **Grand Rail Journeys** (horizon) — not yet built

## Key Differences from Safari Awaits

- **Inquiry intake** — /api/inquiries, corporate (organisation/role/audience/region), fail-closed (503 in production without INQUIRY_WEBHOOK_URL); tags brand:rare-passages + audience:*
- **One API route** — /api/inquiries (guarded: rate limit, size cap, honeypot)
- **Noindex** — intentionally not indexing
- **Lucide icons** — uses lucide-react for icons
- **Tailwind v4** — imported but most styling is custom CSS
- **No Playwright tests yet** — a11y/mobile/image audits exist (scripts/*.mjs, server on :3102) and run in CI

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
A record:     @    → 216.198.79.1   (current Vercel IP; 76.76.21.21 is legacy but still works)
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


## Register rules (owner-set, non-negotiable)
- Corporate voice only. No consumer CTAs ("plan a journey", "start your journey"), no budget bands,
  no "curators", no concierge fantasy ("private jet tarmac", "24/7").
- No revenue, commission, valuation, "acquirable asset", "acquisition multiples", "how we make money".
- No fabricated proof: no percentages to trusts, no "military-grade", no counts. Principles must
  match /standards word for word in spirit — the site must not contradict its own standard.
- Brand tiers: active / development / horizon — statusLabel is what renders; portfolio must show all three.
- Quality method and adversarial critic loop: see safari-awaits/CLAUDE.md "The Quality Method";
  the standard is QUALITY-STANDARD.md (section H is this site).

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
