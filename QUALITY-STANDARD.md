# Quality Standard — the bar every surface is judged against

_Pass/fail per criterion. A surface ships only when every criterion passes and three adversarial critics (design, copy, conversion) return zero confirmed findings. Derived from teardowns of Micato, Go2Africa, Jacada, Yellow Zebra, andBeyond, Ennismore, Sircle; and from Aman/Singita as the aesthetic ceiling._

## A. Universal (every page, both sites)
- [ ] A1 No sentence a Condé Nast Traveler editor would cut. No filler, no hedging, no "discover/embark/unforgettable/world-class/seamless".
- [ ] A2 No claim we cannot prove today. No counts of our own output presented as credentials.
- [ ] A3 Every image is high-resolution (3840 masters), warm natural light, no stock tells, no on-image credit; alt text describes what is shown.
- [ ] A4 Typography carries the page: Cormorant display at scale, Manrope body ≤ 38em, uppercase labels tracked. Zero hardcoded hex; tokens only.
- [ ] A5 Composition is editorial: asymmetry, whitespace, one full-bleed moment per long page. Nothing reads as a template or a card grid of equal boxes.
- [ ] A6 Motion is rare and slow (≤ 0.8s ease, reduced-motion safe). No bounce.
- [ ] A7 375px: no overflow, tap targets ≥ 44px, text ≥ 11px, tables scroll in their own container.
- [ ] A8 axe WCAG 2.1 AA: zero violations. Focus visible. Contrast ≥ 4.5:1 body / 3:1 large.
- [ ] A9 `<title>` ≤ 60 chars incl. suffix, keyword-first; meta description 140–160; canonical apex; OG image; relevant schema (Article/FAQPage/TouristDestination/BreadcrumbList).
- [ ] A10 Every page links to at least two other pages contextually (not just nav/footer).
- [ ] A11 One primary CTA per screen; specific verb ("Find my safari", "Book a planning call"), never "Get started/Learn more".
- [ ] A12 Loads with hero LCP image `priority`, everything else lazy; no layout shift on fonts or images.

## B. Safari Awaits homepage
- [ ] B1 Hero states the proposition in one line and one photograph; italic accent; no stat bar.
- [ ] B2 Standfirst reads as a magazine opening spread, not a paragraph.
- [ ] B3 Destinations shown as editorial strips with ghost numerals; each has season + budget + two links.
- [ ] B4 One interlude image with a single italic line.
- [ ] B5 The tools (estimator, comparator, month matrix) are surfaced above the fold of the second screen — they are the differentiator.
- [ ] B6 Trust is expressed as method and refusal, never as numbers we do not have.
- [ ] B7 Final CTA is a full-bleed photo with two paths: brief and planning call.

## C. Destination page
- [ ] C1 Hero photo is of that place, at golden hour, verified sharp at 100%.
- [ ] C2 Byline + last-reviewed + standards link visible before the intro.
- [ ] C3 Sections: overview · fit/unfit · regions (each linkable) · seasonality table · pricing tiers with per-couple totals · wildlife · itineraries · FAQ (schema) · sources · related guides · CTA. Numbered ghost numerals.
- [ ] C4 At least one interlude photo mid-page.
- [ ] C5 Cross-links to /compare, /when-to-go, /costs-and-timing in body copy.
- [ ] C6 Every factual claim (fees, ages, seasons) is either sourced or phrased as guidance.

## D. Guide page
- [ ] D1 seoTitle keyword-first ≤ 44 chars raw; H1 editorial; byline; Article + FAQPage schema with datePublished/dateModified.
- [ ] D2 Category photo band under hero.
- [ ] D3 Answer panel (thesis) → sections → questions grid → FAQ → sources → related → CTA.
- [ ] D4 Links to the relevant destination(s) and at least one tool in body copy.

## E. Tools (estimator, comparator, month matrix)
- [ ] E1 Returns ranges/verdicts, never false precision; exclusions and caveats on screen; last-reviewed date.
- [ ] E2 Keyboard operable; aria-live results; labelled controls; works at 375px.
- [ ] E3 Every interaction fires a GA4 event with parameters (which country, tier, season, month).
- [ ] E4 Ends in a specific CTA that carries context forward.

## F. Conversion + lead pipeline
- [ ] F1 Two paths everywhere: written brief (form) and planning call.
- [ ] F2 Form is a consultation intake: serif step titles, underline fields, progress, honest states; consent opt-in; Turnstile ready.
- [ ] F3 Fail-closed: 503 with an honest message when persistence is unconfigured — never fake success.
- [ ] F4 Payload documented (docs/lead-webhook-contract.md); qualification tier + referral ID attached; UTM/landing page captured.
- [ ] F5 Leads land in the CRM (GHL) with tags (brand, tier, destination, source); auto-acknowledgement sent.
- [ ] F6 GA4 events at each form step, submit, success, error, and call-booked.

## G. Brand
- [ ] G1 Mark legible at 16px favicon and 1500px banner; single geometry source; kit regenerable in one command.
- [ ] G2 Guidelines page a designer would respect: mark, lockup rules, clearspace, color roles with contrast notes, type scale, voice do/say, photography direction, boilerplate, downloads.
- [ ] G3 OG image, favicon, email signature, social avatars/banners all current with the mark.

## H. Rare Passages (corporate)
- [ ] H1 Register is a hospitality group, not a consumer site: no commission mechanics, no revenue/valuation, no consumer stats.
- [ ] H2 Brands presented in tiers (Active · In development · Horizon) with a page each.
- [ ] H3 Routes exist and are substantive: /develop (partner with us), /press (kit + boilerplate + assets), /standards (the group operating standard as a public document), /careers, /about, /contact.
- [ ] H4 Primary CTA is "Partner with us"; contact routes to CRM with tags.
- [ ] H5 Family brand system visible: shared horizon, star mark, relationship to each vertical's mark explained.

## I. Infrastructure
- [ ] I1 GA4 loaded on both with anonymize_ip; custom events for tools, forms, calls, outbound partner clicks.
- [ ] I2 CI on every push: lint, build, tests, mobile audit, image audit, a11y audit — red blocks merge.
- [ ] I3 Env vars set in Vercel (GA IDs now; webhooks + Turnstile when supplied); launch-check gates documented.
- [ ] I4 IndexNow key staged; robots/sitemap/noindex reversal documented as a one-commit change.
- [ ] I5 Search Console verified (owner done); sitemap submitted the day indexing is approved.

## Scoring
Surface score = criteria passed / criteria applicable. Ship threshold = 100% AND zero confirmed critic findings after ≥ 2 loops. Portfolio "10/10" = every surface at threshold on both sites.
