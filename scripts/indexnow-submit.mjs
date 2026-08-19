// Submit every sitemap URL to IndexNow in batches. Run on launch day only.
const host = process.argv[2]; if (!host) { console.error("usage: node scripts/indexnow-submit.mjs <domain>"); process.exit(1); }
const key = "a23afd9b50727e41d174c2ae513840f1";
const xml = await (await fetch(`https://${host}/sitemap.xml`)).text();
const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
for (let i = 0; i < urls.length; i += 100) {
  const batch = urls.slice(i, i + 100);
  const r = await fetch("https://api.indexnow.org/indexnow", { method: "POST", headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ host, key, keyLocation: `https://${host}/${key}.txt`, urlList: batch }) });
  console.log(`batch ${i / 100 + 1}: ${batch.length} urls → ${r.status}`);
}
