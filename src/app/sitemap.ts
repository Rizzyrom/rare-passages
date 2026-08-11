import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/portfolio", "/how-we-work"];
  const base = "https://rarepassages.com";
  
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/portfolio" ? 0.9 : 0.7,
  }));
}
