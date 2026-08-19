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
    desktop: img("https://images.unsplash.com/photo-1673204285354-93fcafba6a7a", 3840),
    mobile: img("https://images.unsplash.com/photo-1673204285354-93fcafba6a7a", 3840),
    alt: "A grey sea under low cloud, the horizon almost dissolved",
    photographer: "Stefanie Jockschat",
    source: "https://unsplash.com/photos/a-large-body-of-water-under-a-cloudy-sky-pYkDjv6PQnE",
    license: "Unsplash",
  },
  verticals: {
    "safari-awaits": {
      card: img("https://images.unsplash.com/photo-1608030455229-342a2f339bb8", 3840),
      hero: img("https://images.unsplash.com/photo-1608030455229-342a2f339bb8", 3840),
      alt: "Mist lying over a plain at first light, a herd grazing far off",
      photographer: "Andreas Rasmussen",
      source: "https://unsplash.com/photos/green-trees-beside-body-of-water-during-daytime-xtuh5y_Th90",
    },
    "expedition-cruises": {
      card: img("https://images.unsplash.com/photo-1729361150007-c578c30fbe2e", 3840),
      hero: img("https://images.unsplash.com/photo-1729361150007-c578c30fbe2e", 3840),
      alt: "A small vessel in a wide grey sea under cloud",
      photographer: "Richard Multimedia",
      source: "https://unsplash.com/photos/a-boat-in-the-middle-of-the-ocean-on-a-foggy-day-72GcUxBCTOE",
    },
    "coastal-sanctuaries": {
      card: img("https://images.unsplash.com/photo-1511210239642-769786e18e3b", 3840),
      hero: img("https://images.unsplash.com/photo-1511210239642-769786e18e3b", 3840),
      alt: "Pale turquoise shallows seen from above, abstract",
      photographer: "Alexandra Nicolae",
      source: "https://unsplash.com/photos/aerial-photography-of-mountains-A4sSXg8I_h4",
    },
    "alpine-retreats": {
      card: img("https://images.unsplash.com/photo-1667204240878-c256c123e693", 3840),
      hero: img("https://images.unsplash.com/photo-1667204240878-c256c123e693", 3840),
      alt: "A mountain ridge emerging from cloud",
      photographer: "Fabien Maurin",
      source: "https://unsplash.com/photos/a-mountain-with-clouds-around-it-h77xQt59wIo",
    },
    "transcontinental-journeys": {
      card: img("https://images.unsplash.com/photo-1705062717946-53098c25f96d", 3840),
      hero: img("https://images.unsplash.com/photo-1705062717946-53098c25f96d", 3840),
      alt: "Railway tracks running toward mountains in flat light",
      photographer: "Ivan Cherepanov",
      source: "https://unsplash.com/photos/a-black-and-white-photo-of-power-lines-and-mountains-EfZ_QFs9Seo",
    },
  },
  editorial: {
    conservation: {
      url: img("https://images.unsplash.com/photo-1761592749690-e2402acc8839", 3840),
      alt: "Storm light over an open plain",
      photographer: "Kinyua Seaman",
      source: "https://unsplash.com/photos/dirt-road-leading-to-rolling-hills-under-cloudy-sky-M60rNQfLMbg",
    },
    arctic: {
      url: img("https://images.unsplash.com/photo-1549320681-b6f1cf24be64", 3840),
      alt: "Blue glacier ice meeting grey water",
      photographer: "Paul Carroll",
      source: "https://unsplash.com/photos/snow-covered-rocks-during-daytime-I53vswmQqC0",
    },
  },
  sections: {
    ctaBackground: img("https://images.unsplash.com/photo-1781098184894-61271e16174c", 3840), // Jaspreet Singh, Unsplash
  },
} as const;
