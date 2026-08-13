import { MetadataRoute } from "next";
import { PORTFOLIO_VERTICALS } from "@/data/verticals";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://rarepassages.com";
  const staticRoutes = ["", "/about", "/portfolio", "/how-we-work", "/contact"];
  
  const staticEntries = staticRoutes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : ("monthly" as const),
    priority: route === "" ? 1 : route === "/portfolio" ? 0.9 : 0.7,
  }));

  const verticalEntries = PORTFOLIO_VERTICALS.map((v) => ({
    url: `${base}/portfolio/${v.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticEntries, ...verticalEntries];
}
