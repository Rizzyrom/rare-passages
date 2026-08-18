// Rare Passages, Premium Image Library
// All images from Unsplash (free commercial use, no attribution required)

// Rule: request sources LARGER than the largest rendered size (3840 covers
// retina full-bleed at 1920 CSS px). next/image downscales per device — an
// undersized source forces upscaling and visible pixelation.
function img(raw: string, w: number, q = 82) {
  const base = raw.split("?")[0];
  return `${base}?w=${w}&q=${q}&fm=jpg&auto=format`;
}

export const photos = {
  hero: {
    desktop: img("https://images.unsplash.com/photo-1785957493897-28e405838f8a?w=2400&q=82&fm=jpg&auto=format", 3840),
    mobile: img("https://images.unsplash.com/photo-1785957493897-28e405838f8a?w=2400&q=82&fm=jpg&auto=format", 3840),
    alt: "Fjord walls rising through cloud at dusk",
    photographer: "Marek Piwnicki",
    license: "Unsplash",
  },
  verticals: {
    "safari-awaits": {
      card: img("https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=2400&q=82&fm=jpg&auto=format", 3840),
      hero: img("https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=2400&q=82&fm=jpg&auto=format", 3840),
      alt: "African savanna at golden hour",
      photographer: "Damian Patkowski",
      source: "https://unsplash.com/photos/T-LfvX-7IVg",
    },
    "expedition-cruises": {
      card: img("https://images.unsplash.com/photo-1567618890770-5fba551e55fb?w=2400&q=82&fm=jpg&auto=format", 3840),
      hero: img("https://images.unsplash.com/photo-1567618890770-5fba551e55fb?w=2400&q=82&fm=jpg&auto=format", 3840),
      alt: "Glacier in polar waters",
      photographer: "Unsplash contributor",
      source: "https://unsplash.com",
    },
    "coastal-sanctuaries": {
      card: img("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=2400&q=82&fm=jpg&auto=format", 3840),
      hero: img("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=2400&q=82&fm=jpg&auto=format", 3840),
      alt: "Tropical island aerial",
      photographer: "Unsplash contributor",
      source: "https://unsplash.com",
    },
    "alpine-retreats": {
      card: img("https://images.unsplash.com/photo-1554474642-2f39300c5433?w=2400&q=82&fm=jpg&auto=format", 3840),
      hero: img("https://images.unsplash.com/photo-1554474642-2f39300c5433?w=2400&q=82&fm=jpg&auto=format", 3840),
      alt: "Alpine mountain landscape",
      photographer: "Unsplash contributor",
      source: "https://unsplash.com",
    },
    "transcontinental-journeys": {
      card: img("https://images.unsplash.com/photo-1762446093114-13c46bfeb26f?w=2400&q=82&fm=jpg&auto=format", 3840),
      hero: img("https://images.unsplash.com/photo-1762446093114-13c46bfeb26f?w=2400&q=82&fm=jpg&auto=format", 3840),
      alt: "Luxury train journey through landscape",
      photographer: "Unsplash contributor",
      source: "https://unsplash.com",
    },
  },
  editorial: {
    conservation: {
      url: img("https://images.unsplash.com/photo-1577971132997-c10be9372519?w=2400&q=82&fm=jpg&auto=format", 3840),
      alt: "Elephant in the wild",
      photographer: "Unsplash contributor",
      source: "https://unsplash.com",
    },
    arctic: {
      url: img("https://images.unsplash.com/photo-1536164832230-6c238c58f740", 3840),
      alt: "Polar bear swimming through Arctic sea ice",
      photographer: "Annie Spratt",
      source: "https://unsplash.com",
    },
  },
  sections: {
    ctaBackground: img("https://images.unsplash.com/photo-1785957493897-28e405838f8a?w=2400&q=82&fm=jpg&auto=format", 3840),
  },
} as const;
