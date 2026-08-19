export interface Vertical {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  status: 'active' | 'horizon' | 'development';
  statusLabel: string;
  category: string;
  heroImage: string;
  shortDescription: string;
  fullDescription: string;
  featuredDestinations: string[];
  keyHighlights: string[];
  guestCapacity: string;
  priceGuide: string;
  sustainabilityRating: string;
  externalUrl?: string;
  verticalPillars: {
    title: string;
    description: string;
  }[];
  sampleItineraries: {
    title: string;
    duration: string;
    regions: string;
    description: string;
  }[];
}

export const PORTFOLIO_VERTICALS: Vertical[] = [
  {
    id: 'safari-awaits',
    slug: 'safari-awaits',
    name: 'Safari Awaits',
    tagline: 'Curated African Safaris & Wilderness Sanctuaries',
    status: 'active',
    statusLabel: 'Flagship Vertical',
    category: 'Wilderness & Wildlife',
    heroImage: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2400&auto=format&fit=crop',
    shortDescription: 'Real access to Africa’s most pristine private reserves, solar-powered luxury camps, and guide-led wildlife encounters.',
    fullDescription: 'Safari Awaits is the group’s first brand: an independent African safari planner covering eight countries — Botswana, Tanzania, Kenya, South Africa, Namibia, Zambia, Zimbabwe, and Rwanda and Uganda — with published decision tools, bylined and sourced guides, an operator framework, and full cost transparency before any commitment. It is the working proof of the group standard.',
    featuredDestinations: [
      'Okavango Delta & Linyanti, Botswana',
      'Serengeti & Ngorongoro Crater, Tanzania',
      'Volcanoes National Park, Rwanda (Gorilla Trekking)',
      'Greater Kruger & Sabi Sands, South Africa',
      'Masai Mara & Laikipia Plateau, Kenya'
    ],
    keyHighlights: [
      'Eight countries known to the concession: Botswana, Tanzania, Kenya, South Africa, Namibia, Zambia, Zimbabwe, Rwanda & Uganda',
      'Three published decision tools: a cost estimator, a destination comparator and a month-by-month matrix',
      'Every guide bylined, sourced and dated; a published operator framework and editorial standard',
      'The willingness to say no: wrong month, wrong country, wrong year'
    ],
    guestCapacity: 'Couples, families and small groups; private-vehicle and exclusive-use options where operators offer them',
    priceGuide: 'Cost transparency is a brand standard: safariawaits.com publishes an estimator, tiers per couple and a comparator',
    sustainabilityRating: 'Operators assessed on conservation and community position under the group standard',
    externalUrl: 'https://safariawaits.com',
    verticalPillars: [
      {
        title: 'Private Concessions Only',
        description: 'We avoid crowded public national park roads, opting for exclusive private land concessions where off-road tracking and night drives are privileged rights.'
      },
      {
        title: 'Expert Naturalist Pairing',
        description: 'Every safari is accompanied by the best trackers and field biologists whose deep ecological knowledge turns sightings into profound educational moments.'
      },
      {
        title: 'Conscious Conservation',
        description: 'Every bed-night booked directly sustains local indigenous community employment and funds wildlife ranger units in key migration corridors.'
      }
    ],
    sampleItineraries: [
      {
        title: 'The Great Kalahari & Delta Waters',
        duration: '10 Days / 9 Nights',
        regions: 'Makgadikgadi Pans, Okavango Delta, Linyanti Concession',
        description: 'Meander from desert meerkats and quad-biking across salt pans to luxury mokoro canoes through flooded lily channels.'
      },
      {
        title: 'Kingdoms of the Migration & Primate Sanctuaries',
        duration: '12 Days / 11 Nights',
        regions: 'Serengeti Mara Ecosystem & Rwandan Cloud Forests',
        description: 'Witness the iconic river crossings of the Great Migration before flying private to Rwanda for mountain gorilla habituation tracking.'
      }
    ]
  },
  {
    id: 'expedition-cruises',
    slug: 'expedition-cruises',
    name: 'Expedition Maritime',
    tagline: 'Polar and remote-ocean expeditions',
    status: 'development',
    statusLabel: 'In Development',
    category: 'Polar & Island Maritime',
    heroImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2400&auto=format&fit=crop',
    shortDescription: 'The polar and remote-ocean brand, in development. It will apply the Safari Awaits method to expedition sailings: an operator framework for vessels, honest cost transparency, and a small number of routes known properly.',
    fullDescription: 'Expedition Maritime is in development and does not yet take enquiries. The group is defining the operator framework for expedition vessels — ice class, guest numbers, guiding and safety standard, conservation position — before any route is represented. Operators and founders who run this properly can start the conversation on the Develop page.',
    featuredDestinations: [],
    keyHighlights: [],
    guestCapacity: 'To be defined with the founding operator',
    priceGuide: 'Published when the first partner is confirmed',
    sustainabilityRating: 'Assessed against the group standard before launch',
    verticalPillars: [],
    sampleItineraries: []
  },
  {
    id: 'coastal-sanctuaries',
    slug: 'coastal-sanctuaries',
    name: 'Coastal & Island Sanctuaries',
    tagline: 'Private islands and coastal sanctuaries',
    status: 'horizon',
    statusLabel: 'Horizon',
    category: 'Coastal & Island Sanctuaries',
    heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2400&auto=format&fit=crop',
    shortDescription: 'A horizon brand for private islands and coastal sanctuaries. Not yet in development; no properties are represented.',
    fullDescription: 'This is a horizon brand. It is not in development and represents no properties. It will be built the way Safari Awaits was — a small number of places examined completely — with a founding partner who runs an island properly and wants it represented properly.',
    featuredDestinations: [],
    keyHighlights: [],
    guestCapacity: 'To be defined with the founding operator',
    priceGuide: 'Published when the first partner is confirmed',
    sustainabilityRating: 'Assessed against the group standard before launch',
    verticalPillars: [],
    sampleItineraries: []
  },
  {
    id: 'alpine-retreats',
    slug: 'alpine-retreats',
    name: 'Alpine Retreats',
    tagline: 'Mountain lodges and chalets',
    status: 'horizon',
    statusLabel: 'Horizon',
    category: 'Alpine & Mountain',
    heroImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2400&auto=format&fit=crop',
    shortDescription: 'A horizon brand for mountain lodges and private chalets. Not yet in development; no properties are represented.',
    fullDescription: 'Alpine Retreats is a horizon brand. It is not in development and represents no properties. The category will be examined and built once a founding partner is identified.',
    featuredDestinations: [],
    keyHighlights: [],
    guestCapacity: 'To be defined with the founding operator',
    priceGuide: 'Published when the first partner is confirmed',
    sustainabilityRating: 'Assessed against the group standard before launch',
    verticalPillars: [],
    sampleItineraries: []
  },
  {
    id: 'transcontinental-journeys',
    slug: 'transcontinental-journeys',
    name: 'Grand Rail Journeys',
    tagline: 'Long-distance rail',
    status: 'horizon',
    statusLabel: 'Horizon',
    category: 'Rail',
    heroImage: 'https://images.unsplash.com/photo-1532105956626-9569c03602f6?q=80&w=2400&auto=format&fit=crop',
    shortDescription: 'A horizon brand for long-distance rail. Not yet in development; no operators or routes are represented.',
    fullDescription: 'Grand Rail Journeys is a horizon brand. It is not in development and represents no operators or routes. It will name no third-party services as its own; if built, it will examine and represent rail operators under the group standard.',
    featuredDestinations: [],
    keyHighlights: [],
    guestCapacity: 'To be defined with the founding operator',
    priceGuide: 'Published when the first partner is confirmed',
    sustainabilityRating: 'Assessed against the group standard before launch',
    verticalPillars: [],
    sampleItineraries: []
  }
];

export const BRAND_PRINCIPLES = [
  {
    number: '01',
    title: 'Research before recommendation',
    description: 'Every destination, season and operator a brand recommends has been examined by a named person against primary sources. Historical guidance is labeled as guidance, and every guide carries a byline and a last-reviewed date.'
  },
  {
    number: '02',
    title: 'The whole cost, first',
    description: 'A traveler sees the full price — transfers, park and concession fees, levies, supplements — before any commitment. Teaser rates and undisclosed markups are prohibited across the group.'
  },
  {
    number: '03',
    title: 'The willingness to say no',
    description: 'A brand tells a traveler when the month, the country or the year is wrong. A recommendation that cannot lose the booking is not a recommendation.'
  },
  {
    number: '04',
    title: 'Partners examined, then re-examined',
    description: 'Operators enter a brand’s recommendations only after assessment against guiding standard, safety practice, conservation and community position, and pricing transparency. Standing is reviewed every season. No operator can pay to be recommended.'
  },
  {
    number: '05',
    title: 'One design language, honestly applied',
    description: 'Every brand shares a horizon, a type system and a photographic standard: natural light, real places, no stock tells. If it looks templated, it fails.'
  }
];

