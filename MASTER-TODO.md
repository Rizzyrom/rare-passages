# Rare Passages Portfolio — Master To-Do

_Source of truth for what is done, what Claude can still do alone, and what only Rom can unblock. Updated 2026-08-18 01:00 PDT._

Repos: `Rizzyrom/safari-awaits` · `Rizzyrom/rare-passages` (both `main`, both green: lint 0, build clean, Playwright passing).

---

## Legend
- **[ROM]** needs an account, payment, legal signature, or a decision only the owner can make
- **[CLAUDE]** automatable — say the word and it ships
- **[BOTH]** Rom supplies a value/decision, Claude wires it

---

## 1. LAUNCH BLOCKERS — nothing goes live until these clear

| # | Item | Owner | Notes |
|---|---|---|---|
| 1.1 | Buy **safariawaits.com** + **rarepassages.com** (both parked at GoDaddy) | [ROM] | Privacy + auto-renew on. Then point DNS: `A @ → 76.76.21.21`, `CNAME www → cname.vercel-dns.com` |
| 1.2 | Trademark screen: "Safari Awaits" + "Rare Passages" + both marks | [ROM] | Blocked list already flags this. Do before spending on print/social. |
| 1.3 | Legal review: Terms, Privacy, Affiliate Disclosure, seller-of-travel position, planning-fee language, data handling | [ROM] | Privacy + Terms are still marked DRAFT in code — launch-check gate fails until un-drafted |
| 1.4 | Outside Agents host-agency application (or document direct-partner authority) | [ROM] | Revenue model depends on this |
| 1.5 | Approve indexing | [ROM] | Then [CLAUDE] flips noindex in 3 places per CLAUDE.md, in documented order |
| 1.6 | Deploy both sites to Vercel (preview URLs first — noindex protects them) | [CLAUDE] | Needs Vercel project link — can do via MCP or CLI once you approve |

## 2. PRODUCTION ENV VARS — code is ready, values are not

| Var | Site | Owner | What it does |
|---|---|---|---|
| `LEAD_WEBHOOK_URL` (+`_TOKEN`) | SA | [BOTH] | Where /get-matched leads land (CRM/GHL/Zapier). Site **fails closed** (503) without it — no fake success |
| `NEWSLETTER_WEBHOOK_URL` (+`_TOKEN`) | SA | [BOTH] | Footer signup (Beehiiv/Mailchimp/GHL). Fails closed without it |
| `INQUIRY_WEBHOOK_URL` (+`_TOKEN`) | RP | [BOTH] | Contact form intake. Fails closed without it |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | SA (RP: [CLAUDE] to add) | [BOTH] | GA4 property id — script loads only when set |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` + `TURNSTILE_SECRET_KEY` | SA | [BOTH] | Cloudflare Turnstile — **must be set together**; launch-check now enforces the pairing |

Suggestion: GHL is already in your stack (Zen Maid). One GHL inbound webhook per form is the fastest path — [CLAUDE] can write the payload mapping.

## 3. ACCOUNTS & PRESENCE

| # | Item | Owner |
|---|---|---|
| 3.1 | Create social handles for both brands (Instagram, LinkedIn, X, Pinterest, YouTube) — kits have avatars + banners sized and ready in `public/brand/` | [ROM] |
| 3.2 | Re-add footer social links once accounts exist | [CLAUDE] |
| 3.3 | Set up brand email addresses (hello@safariawaits.com etc.) — signature HTML is in each kit | [ROM] |
| 3.4 | Google Business Profile / Search Console / Bing Webmaster for both domains (post-launch) | [BOTH] |
| 3.5 | Vercel + GitHub org hygiene: safari-awaits repo is private, rare-passages is **public** — decide if that's intended | [ROM] |

## 4. SAFARI AWAITS — remaining automatable work

| # | Item | Owner | Effort |
|---|---|---|---|
| 4.1 | Elevate 3 legacy Tailwind pages (operators, safari-types, costs-and-timing) to the editorial system | [CLAUDE] | Medium |
| 4.2 | SEO pass 2: apply keyword map to all 14 guide titles/metas/H1s + Article schema `datePublished` | [CLAUDE] | Medium |
| 4.3 | Content roadmap: 88-page plan exists; write next 10 guides against DataForSEO gaps (Zambia/Namibia/Rwanda demand) | [CLAUDE] + [ROM] voice sign-off | Large |
| 4.4 | Testimonials/social proof section — **needs real clients** first | [ROM] | — |
| 4.5 | Booking-path affiliate links — need partner program IDs | [ROM] | — |
| 4.6 | Upstash Redis rate limiting (only at real traffic) | [CLAUDE] | Small |
| 4.7 | CMS (Sanity/Contentlayer) — only when content velocity demands it | [CLAUDE] | Large |
| 4.8 | Real photography shoot to replace stock (biggest single brand upgrade available) | [ROM] budget + [CLAUDE] integration | — |

## 5. RARE PASSAGES — remaining automatable work

| # | Item | Owner | Effort |
|---|---|---|---|
| 5.1 | Editorial elevation to SA's standard (numbered sections, interludes, photo bands on vertical pages) | [CLAUDE] | Medium |
| 5.2 | Photo curation sweep via Unsplash/Pexels APIs (RP library not yet audited like SA's) | [CLAUDE] | Medium |
| 5.3 | ContactForm: migrate remaining Tailwind hex utilities to tokens (pre-existing debt) | [CLAUDE] | Small |
| 5.4 | GA4 script (mirror SA's env-gated pattern) | [CLAUDE] | Small |
| 5.5 | Investor/partner deck export from brand kit (PDF) | [CLAUDE] | Small |
| 5.6 | Decide Expedition Maritime: it's marked "active" but has no site — build vertical #2 or demote to "horizon" | [ROM] decision → [CLAUDE] |

## 6. BRAND SYSTEM

| # | Item | Owner |
|---|---|---|
| 6.1 | Sign off both marks (SA dawn-over-grassland, RP star-over-water) — or request iterations | [ROM] |
| 6.2 | Vertical marks for future brands share the horizon: Expedition Maritime (moon over water?), Alpine (peak), Rail (?), Islands (palm/atoll) — design when each is greenlit | [CLAUDE] |
| 6.3 | Print collateral (business cards, letterhead) from kit | [CLAUDE] on request |
| 6.4 | Register brand fonts commercially if ever self-hosting beyond Google Fonts | [ROM] |

## 7. RECURRING (post-launch)

- Weekly: DataForSEO rank check on the 28-keyword map — [CLAUDE] can script
- Monthly: `npm run verify` + `image-audit` + `mobile-audit` on both repos — [CLAUDE]
- Quarterly: refresh keyword volumes, review guides for freshness — [CLAUDE]

---

## DONE THIS SESSION (2026-08-17 → 18)

**Safari Awaits** — 22 commits: noindex lockdown; font-cycle bug (serif never rendered) fixed; next/image everywhere; OG image; breadcrumbs+schema; honest stats; fail-closed newsletter; editorial homepage + subpage recomposition; scroll reveals; floating CTA; consultation-grade form; cross-links; GA4/Turnstile/rate-limit (all env-gated); loading state; lint 76→0; voice audit; 6-photo curation via API; 3840px masters + heroes on next/image (image audit CLEAN); credits removed from photos; mobile pass (audit CLEAN); DataForSEO keyword map + titles; radiant dawn mark w/ grassland + full brand kit + `/brand` guidelines + email signature; high-effort review pass — 10 findings, all fixed (Turnstile rewrite, rate-limit hardening, payload whitelist, shared http helpers, mark single-sourced).

**Rare Passages** — 5 commits: noindex; font-cycle fixed; contact form no longer fakes success (fail-closed `/api/inquiries`); next/image; loading state; star-over-water mark + kit + `/brand` + OG + signature; eslint fixed, smoke tests (8/8), mobile + image audits CLEAN; review pass fixes.

**Both**: `MASTER-TODO.md` (this file), reusable audit scripts, brand generators.
