import { MetadataRoute } from "next";
import { PORTFOLIO_VERTICALS } from "@/data/verticals";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://rarepassages.com";
  const staticRoutes: { path: string; freq: "weekly" | "monthly"; priority: number }[] = [
    { path: "", freq: "weekly", priority: 1 },
    { path: "/about", freq: "monthly", priority: 0.7 },
    { path: "/portfolio", freq: "monthly", priority: 0.9 },
    { path: "/how-we-work", freq: "monthly", priority: 0.7 },
    { path: "/contact", freq: "monthly", priority: 0.7 },
  ];

  const staticEntries = staticRoutes.map((r) => ({
    url: `${base}${r.path}`,
    lastModified: new Date(),
    changeFrequency: r.freq,
    priority: r.priority,
  }));

  const verticalEntries = PORTFOLIO_VERTICALS.map((v) => ({
    url: `${base}/portfolio/${v.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticEntries, ...verticalEntries];
}
