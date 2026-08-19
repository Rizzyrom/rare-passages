# Launch day — the exact sequence (do not run until Outside Agents approval + legal sign-off)

Everything below is staged. Indexing is currently OFF and stays off until the owner says go.

## 1. Flip indexing (one commit)
- `next.config.ts`: remove the `X-Robots-Tag: noindex, nofollow` header block
- `src/app/layout.tsx`: change `robots: { index: false, follow: false }` → `{ index: true, follow: true }`
- `src/app/robots.ts`: add `sitemap: "https://<domain>/sitemap.xml"`
- Remove the draft notices from Privacy and Terms (legal must have signed off first — launch-check will still fail otherwise)
- Commit: "Open to indexing" · push · confirm `curl -sI https://<domain>/ | grep -i x-robots` returns nothing

## 2. Tell search engines (same hour)
- Google Search Console (already verified): Sitemaps → submit `/sitemap.xml`; URL Inspection → Request indexing on `/`, `/destinations`, top 5 guides
- Bing Webmaster: import from GSC, submit sitemap
- IndexNow: key file is live at `/a23afd9b50727e41d174c2ae513840f1.txt`. Ping:
  `curl "https://api.indexnow.org/indexnow?url=https://<domain>/&key=a23afd9b50727e41d174c2ae513840f1"`
  Then bulk-submit the sitemap URLs (script: `node scripts/indexnow-submit.mjs` — reads sitemap, POSTs in batches of 100)

## 3. Verify (same day)
- `site:<domain>` in Google returns the homepage within 24–72h
- GA4 real-time shows traffic; Search Console Coverage shows Discovered/Indexed rising
- Run `node scripts/launch-check.mjs` — must be all green (webhooks, Turnstile pair, GA, no draft notices)

## 4. Owner-only prerequisites (must be true before step 1)
- [ ] Outside Agents approval received (host agency / IATA credential)
- [ ] Legal reviewed Privacy + Terms; draft notices removed
- [ ] LEAD_WEBHOOK_URL / NEWSLETTER_WEBHOOK_URL (SA) · INQUIRY_WEBHOOK_URL (RP) set in Vercel → GHL
- [ ] NEXT_PUBLIC_TURNSTILE_SITE_KEY + TURNSTILE_SECRET_KEY set in Vercel (pair)
- [ ] Domains verified in GSC (done) · GA4 receiving (done: SA G-CVFR5YCEB6, RP G-7DYE16BP79)
