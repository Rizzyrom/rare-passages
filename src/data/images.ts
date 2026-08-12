// Rare Passages, Premium Image Library
// All images from Unsplash (free commercial use, no attribution required)

function img(raw: string, w: number, q = 82) {
  const base = raw.split("?")[0];
  return `${base}?w=${w}&q=${q}&fm=jpg&auto=format`;
}

export const photos = {
  hero: {
    desktop: img("https://images.unsplash.com/photo-1502790658-f2b9677d6997?w=1920&q=82&fm=jpg&auto=format", 1920),
    mobile: img("https://images.unsplash.com/photo-1502790658-f2b9677d6997?w=800&q=82&fm=jpg&auto=format", 800),
    alt: "Dramatic remote landscape",
    photographer: "Unsplash",
    license: "Unsplash",
  },
  verticals: {
    "safari-awaits": {
      card: img("https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&q=82&fm=jpg&auto=format", 800),
      hero: img("https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1920&q=82&fm=jpg&auto=format", 1920),
      alt: "African savanna at golden hour",
      photographer: "Damian Patkowski",
      source: "https://unsplash.com/photos/T-LfvX-7IVg",
    },
    "expedition-cruises": {
      card: img("https://images.unsplash.com/photo-1539623235364-3b810e162475?w=800&q=82&fm=jpg&auto=format", 800),
      hero: img("https://images.unsplash.com/photo-1539623235364-3b810e162475?w=1920&q=82&fm=jpg&auto=format", 1920),
      alt: "Glacier in polar waters",
      photographer: "Unsplash",
      source: "https://unsplash.com",
    },
    "coastal-sanctuaries": {
      card: img("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=82&fm=jpg&auto=format", 800),
      hero: img("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=82&fm=jpg&auto=format", 1920),
      alt: "Tropical island aerial",
      photographer: "Unsplash",
      source: "https://unsplash.com",
    },
    "alpine-retreats": {
      card: img("https://images.unsplash.com/photo-1551632811-156074d8c4ee?w=800&q=82&fm=jpg&auto=format", 800),
      hero: img("https://images.unsplash.com/photo-1551632811-156074d8c4ee?w=1920&q=82&fm=jpg&auto=format", 1920),
      alt: "Alpine mountain landscape",
      photographer: "Unsplash",
      source: "https://unsplash.com",
    },
    "transcontinental-journeys": {
      card: img("https://images.unsplash.com/photo-1474487548417-78e4a6711c25?w=800&q=82&fm=jpg&auto=format", 800),
      hero: img("https://images.unsplash.com/photo-1474487548417-78e4a6711c25?w=1920&q=82&fm=jpg&auto=format", 1920),
      alt: "Luxury train journey through landscape",
      photographer: "Unsplash",
      source: "https://unsplash.com",
    },
  },
  editorial: {
    conservation: {
      url: img("https://images.unsplash.com/photo-1557442936-7495a00f8a55?w=1600&q=82&fm=jpg&auto=format", 1600),
      alt: "Elephant in the wild",
      photographer: "Unsplash",
      source: "https://unsplash.com",
    },
    arctic: {
      url: img("https://images.unsplash.com/photo-1534088560297-1ecb8e03f6f4?w=1600&q=82&fm=jpg&auto=format", 1600),
      alt: "Polar bear on ice",
      photographer: "Unsplash",
      source: "https://unsplash.com",
    },
  },
  sections: {
    ctaBackground: img("https://images.unsplash.com/photo-1502790658-f2b9677d6997?w=1920&q=82&fm=jpg&auto=format", 1920),
  },
} as const;
