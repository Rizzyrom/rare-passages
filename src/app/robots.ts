import { MetadataRoute } from "next";

// Pre-launch: crawling stays ALLOWED on purpose so the noindex directive (X-Robots-Tag in
// next.config.ts + metadata.robots in layout.tsx) is actually read. Disallow would hide it.
// At launch: restore `sitemap: "https://rarepassages.com/sitemap.xml"` and drop the noindex header.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
  };
}
