# Rare Passages Parent — Agent Build Guide

> Read this before writing any code in this repo. The parent portfolio master doc is at `../CLAUDE.md`.

## What This Is

Rare Passages (rarepassages.com) is the **parent portfolio brand** that houses 5+ specialist travel verticals. Safari Awaits is the first active vertical. This site showcases the portfolio, explains the business model, and drives investor/partner interest.

**Currently NOT indexing** — `robots: { index: false, follow: false }` in layout.tsx. This is intentional until the site and all verticals are launch-ready.

## Architecture

```
src/
├── app/
│   ├── layout.tsx              → Root layout (fonts, header, footer, metadata)
│   ├── page.tsx                → Homepage (hero, portfolio verticals, business model, growth section, CTA)
│   ├── globals.css             → Design system (CSS tokens + component styles)
│   ├── robots.ts               → robots.txt (noindex — intentional)
│   ├── sitemap.ts              → Static sitemap
│   ├── about/page.tsx          → About page
│   ├── contact/               → Contact page with form (NOT wired to backend)
│   ├── how-we-work/           → Methodology page
│   ├── portfolio/
│   │   ├── page.tsx            → Portfolio index
│   │   └── [slug]/page.tsx    → Dynamic vertical detail page
├── components/
│   ├── SiteHeader.tsx         → Fixed nav header
│   ├── SiteFooter.tsx         → Footer
│   ├── ContactForm.tsx        → Contact form (client component, not wired to API)
├── data/
│   ├── verticals.ts           → 5 portfolio vertical definitions
│   └── images.ts              → Image URLs
```

## Design System

Same architecture as Safari Awaits but different color palette (deeper, maritime-natural):

```css
--ink: #0a1628; --forest: #1a3154; --moss: #3a5780;
--sand: #e8dec8; --paper: #f7f2e8; --clay: #c8a44d;
--gold: #c8a44d; --muted: #6b7588;
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

- **No lead form** — uses a contact form instead (not wired to any API)
- **No API routes** — purely static/content site
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

## Rules

1. Use CSS custom properties from globals.css — never hardcode colors
2. Match existing component naming (PascalCase for components, unlike safari-registry which uses kebab-case)
3. Don't index this site until owner approves
4. No emojis in content
5. Never commit secrets
