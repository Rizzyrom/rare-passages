# Rare Passages Portfolio — Master To-Do

_Source of truth for what is done, what Claude can still do alone, and what only Rom can unblock. Updated 2026-08-18 evening._

Repos: `Rizzyrom/safari-awaits` · `Rizzyrom/rare-passages` (both `main`, CI quality-gate on every push). **Certified this evening:** lint 0 · build clean · Playwright SA 12/12 · a11y CLEAN (SA 15 routes, RP 12) · mobile CLEAN (SA 16, RP 12) · image CLEAN (SA 19, RP 12). GA4 live on both. Both live on real domains, still noindex.

**Where we are on the 6→10 scale (honest):** Everything I control is at the bar. SA: 115 static pages (46 at the start), every surface through at least one adversarial critic round and the homepage through two, every confirmed finding fixed, a hero no competitor could also be running, real three-step intake, all three decision tools covering all eight countries with visible review dates, 24 itineraries and nine experiences as first-class routes with activity-specific photography, 32 regions, a real CRM-shaped lead pipeline. RP: corporate register enforced twice through source-level review; every fabrication gone; honest tiers; bounded metadata. Both: lint 0, all audits clean, CI on every push, live and verified. What remains between here and 10 is not buildable by me — it is the two items below, plus real photography over stock, plus indexing.

## The two things that move the needle most, both yours, both under 5 minutes
1. ~~Founder bio + photo~~ **DONE as a first-person founder’s note** (owner decision: no name, no photograph). Lives on /about, linked from the homepage standard.
2. **GHL inbound webhook URL** → leads land tagged in your CRM instead of a 503. Setup doc: `safari-awaits/docs/lead-webhook-contract.md`.
3. **Booking calendar URL** (GHL calendar / Cal.com) → /planning-call opens a real calendar. Until then it honestly routes to the brief with a call request.

---

## Legend
- **[ROM]** needs an account, payment, legal signature, or a decision only the owner can make
- **[CLAUDE]** automatable — say the word and it ships
- **[BOTH]** Rom supplies a value/decision, Claude wires it

---



## 1. LAUNCH BLOCKERS — nothing goes live until these clear

| # | Item | Owner | Notes |
|---|---|---|---|
| 1.1 | ~~Buy domains~~ + ~~point DNS~~ **DONE** — you already owned both (GoDaddy, privacy on, paid to Aug 2027). Claude attached each to its Vercel project and set `A @ → 216.198.79.1`. Both live over HTTPS. | [CLAUDE] | Auto-renew: verify it is ON in GoDaddy |
| 1.2 | Trademark screen: "Safari Awaits" + "Rare Passages" + both marks | [ROM] | Blocked list already flags this. Do before spending on print/social. |
| 1.3 | Legal review: Terms, Privacy, Affiliate Disclosure, seller-of-travel position, planning-fee language, data handling | [ROM] | Privacy + Terms now show a visible 'Draft — pending legal review' notice; remove it after review and the launch gate unblocks |
| 1.4 | Outside Agents host-agency application (or document direct-partner authority) | [ROM] | Revenue model depends on this |
| 1.5 | Approve indexing | [ROM] | Then [CLAUDE] flips noindex in 3 places per CLAUDE.md, in documented order |
| 1.6 | ~~Deploy to Vercel~~ **DONE** — both projects auto-deploy from GitHub `main`; live on the real domains | [CLAUDE] | — |

## 2. PRODUCTION ENV VARS — code is ready, values are not

| Var | Site | Owner | What it does |
|---|---|---|---|
| `LEAD_WEBHOOK_URL` (+`_TOKEN`) | SA | [BOTH] | Where /get-matched leads land (CRM/GHL/Zapier). Site **fails closed** (503) without it — no fake success |
| `NEWSLETTER_WEBHOOK_URL` (+`_TOKEN`) | SA | [BOTH] | Footer signup (Beehiiv/Mailchimp/GHL). Fails closed without it |
| `INQUIRY_WEBHOOK_URL` (+`_TOKEN`) | RP | [BOTH] | Contact form intake. Fails closed without it |
| ~~`NEXT_PUBLIC_GA_MEASUREMENT_ID`~~ **DONE** | SA + RP | — | SA G-CVFR5YCEB6, RP G-7DYE16BP79 as code defaults; env overrides. Live and firing events. |
| `NEXT_PUBLIC_BOOKING_URL` | SA | [BOTH] | Calendar for planning calls (GHL calendar / Cal.com). /planning-call opens it when set |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` + `TURNSTILE_SECRET_KEY` | SA | [BOTH] | Cloudflare Turnstile — **must be set together**; launch-check now enforces the pairing |

Suggestion: GHL is already in your stack (Zen Maid). One GHL inbound webhook per form is the fastest path — [CLAUDE] can write the payload mapping.

## 3. ACCOUNTS & PRESENCE

| # | Item | Owner |
|---|---|---|
| 3.1 | Create social handles for both brands (Instagram, LinkedIn, X, Pinterest, YouTube) — kits have avatars + banners sized and ready in `public/brand/` | [ROM] |
| 3.2 | Re-add footer social links once accounts exist (removed from **both** sites — RP also had placeholders) | [CLAUDE] |
| 3.3 | Set up brand email addresses (hello@safariawaits.com etc.) — signature HTML is in each kit | [ROM] |
| 3.4 | Google Business Profile / Search Console / Bing Webmaster for both domains (post-launch) | [BOTH] |
| 3.5 | Vercel + GitHub org hygiene: safari-awaits repo is private, rare-passages is **public** — decide if that's intended | [ROM] |

## 4. SAFARI AWAITS — remaining automatable work

**Shipped this evening [CLAUDE]:** competitive audit (COMPETITIVE-AUDIT.md) · cost estimator · destination comparator · month matrix · four new destinations (Namibia, Zambia, Zimbabwe, Rwanda & Uganda) with photography · bylines on guides/destinations · homepage recomposed through two rounds of adversarial critics (tools at screen two, refusal-led standard, two honest paths, worked answers, named-human link, 'we never hold your money') · /planning-call · lead pipeline with names, UTM, GHL-shaped payload and call preference · superlative and British-spelling sweep · GA4 events · CI · IndexNow · LAUNCH-DAY.md · QUALITY-STANDARD.md.

| # | Item | Owner | Effort |
|---|---|---|---|
| ~~4.A~~ | ~~Critic loop on destination + guide templates~~ **DONE** — dead pricing/wildlife/tripStyles content rendered on all 8; grid bug; numerals; og:image on 24 pages; form budget-label data bug; consent scope | [CLAUDE] | — |
| ~~4.B~~ | ~~Region sub-pages~~ **DONE** — 32 routes, six deep (Mara 8,100/mo, Serengeti, Okavango, Sossusvlei, Volcanoes, Ngorongoro) | [CLAUDE] | — |
| ~~4.C~~ | ~~Experiences layer~~ **DONE** — nine at /experiences; safari-types retired (308) | [CLAUDE] | — |
| 4.D | Itinerary objects (8–10 named, costed, routed) with their own enquiry — the destination itineraries exist as data; promote to routes | [CLAUDE] | 3h |
| ~~4.E~~ | ~~/safari-planner~~ **DONE** | [CLAUDE] | — |
| ~~4.G~~ | ~~Critic loops on form, tools, about, experiences, indexes~~ **DONE** — fake 3-step form made real; matrix 4→8 countries; experience photos depict the activity; indexes recomposed; grid-safety rule sitewide | [CLAUDE] | — |
| ~~4.H~~ | ~~RP round two~~ **DONE** — SA record on RP de-brochured; metadata bounded; doubled tile; regressions | [CLAUDE] | — |
| ~~4.D~~ | ~~Itinerary routes~~ **DONE** — 24 at /itineraries with own enquiry | [CLAUDE] | — |
| 4.I | Next critic round after owner items land (founder block with real bio/photo changes the trust composition on /about and the byline) | [CLAUDE] | 1h |
| 4.J | Real photography: a shot list per slot for the founder's first trips (stock is now at its ceiling) | [CLAUDE] | 1h |
| 4.F | Photography brief per slot + a real-photography plan for the founder's first trips (stock is the ceiling we are at) | [BOTH] | 1h + travel |
| 4.1 | ~~Elevate 3 legacy Tailwind pages~~ **DONE** — dossier system, zero hex in src/app | [CLAUDE] | — |
| 4.2 | ~~SEO pass 2~~ **DONE** — keyword-first seoTitles ≤59 chars incl. suffix, datePublished | [CLAUDE] | — |
| 4.3 | Content roadmap: 88-page plan exists; write next 10 guides against DataForSEO gaps (Zambia/Namibia/Rwanda demand) | [CLAUDE] + [ROM] voice sign-off | Large |
| 4.4 | Testimonials/social proof section — **needs real clients** first | [ROM] | — |
| 4.5 | Booking-path affiliate links — need partner program IDs | [ROM] | — |
| 4.6 | Upstash Redis rate limiting (only at real traffic) | [CLAUDE] | Small |
| 4.7 | CMS (Sanity/Contentlayer) — only when content velocity demands it | [CLAUDE] | Large |
| 4.8 | Real photography shoot to replace stock (biggest single brand upgrade available) | [ROM] budget + [CLAUDE] integration | — |

## 5. RARE PASSAGES — remaining automatable work

| # | Item | Owner | Effort |
|---|---|---|---|
| 5.1 | ~~Editorial elevation to SA's standard~~ **DONE** — numerals, reveals, interlude, hero on next/image | [CLAUDE] | — |
| 5.2 | ~~Photo curation sweep~~ **DONE** — dead arctic URL replaced, hero upgraded, honest credits | [CLAUDE] | — |
| 5.3 | ~~ContactForm hex → tokens~~ **DONE** — also: live /contact page was a mailto: form bypassing the API; real form now mounted | [CLAUDE] | — |
| 5.4 | ~~GA4 script~~ **DONE** — env-gated | [CLAUDE] | — |
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

**Safari Awaits** — 23 commits: noindex lockdown; font-cycle bug (serif never rendered) fixed; next/image everywhere; OG image; breadcrumbs+schema; honest stats; fail-closed newsletter; editorial homepage + subpage recomposition; scroll reveals; floating CTA; consultation-grade form; cross-links; GA4/Turnstile/rate-limit (all env-gated); loading state; lint 76→0; voice audit; 6-photo curation via API; 3840px masters + heroes on next/image (image audit CLEAN); credits removed from photos; mobile pass (audit CLEAN); DataForSEO keyword map + titles; radiant dawn mark w/ grassland + full brand kit + `/brand` guidelines + email signature; high-effort review pass — 10 findings, all fixed (Turnstile rewrite, rate-limit hardening, payload whitelist, shared http helpers, mark single-sourced); legacy pages (safari-types/operators/costs) rebuilt on the dossier system — zero hex left in src/app.

**Rare Passages** — 9 commits: noindex; font-cycle fixed; contact form no longer fakes success (fail-closed `/api/inquiries`); next/image; loading state; star-over-water mark + kit + `/brand` + OG + signature; eslint fixed, smoke tests (8/8), mobile + image audits CLEAN; review pass fixes; vertical pages elevated (numerals, interlude, hero on next/image); dead photo replaced + hero upgraded; real API form mounted on /contact (was a mailto: form), consent opt-in, GA4.

**Both**: `MASTER-TODO.md` (this file), reusable audit scripts (mobile, image, **a11y**), brand generators. **Late session:** WCAG 2.1 AA clean on both sites (SA clay/muted darkened; RP gold/clay split — RP nav was rendering white-on-paper on every subpage, fixed); RP homepage recomposed + fabricated '42-point audit' / '2.5% conservation trust' claims rewritten honestly across 9 places; second review passes fixed dossier cascade bugs on SA.
