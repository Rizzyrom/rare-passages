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
    tagline: 'African safari, planned independently',
    status: 'active',
    statusLabel: 'Active',
    category: 'African Safari',
    heroImage: 'https://images.unsplash.com/photo-1608030455229-342a2f339bb8?w=3840&q=82&fm=jpg&auto=format',
    shortDescription: 'The group’s first brand: an independent safari planner covering eight African countries, with published decision tools, bylined guides and full cost transparency.',
    fullDescription: 'Safari Awaits is the group’s first brand and the working proof of the standard. It covers eight countries — Botswana, Tanzania, Kenya, South Africa, Namibia, Zambia, Zimbabwe, and Rwanda and Uganda — with published decision tools (a cost estimator, a destination comparator, a month matrix), bylined and sourced guides, a published operator framework, and the full cost shown before any commitment. It owns no camps; it examines and represents operators.',
    featuredDestinations: [
      'Okavango Delta and Chobe, Botswana',
      'Serengeti and Ngorongoro, Tanzania',
      'Maasai Mara and the conservancies, Kenya',
      'Sabi Sand and the malaria-free reserves, South Africa',
      'Volcanoes National Park, Rwanda'
    ],
    keyHighlights: [
      'Eight countries known to the concession',
      'Three published decision tools no enquiry is needed to use',
      'Every guide bylined, sourced and dated; operator framework and editorial standard published',
      'The willingness to say no: wrong month, wrong country, wrong year'
    ],
    guestCapacity: 'Couples, families and small groups; private-vehicle and exclusive-use options where operators offer them',
    priceGuide: 'Full cost transparency is a brand standard; pricing lives on safariawaits.com',
    sustainabilityRating: 'Operators assessed on conservation and community position under the group standard',
    externalUrl: 'https://safariawaits.com',
    verticalPillars: [
      { title: 'Research before recommendation', description: 'Destinations, seasons and operators examined against primary sources by a named person; historical guidance labeled as guidance.' },
      { title: 'The whole cost, first', description: 'Transfers, park and concession fees, levies and supplements shown before any commitment. No teaser rates.' },
      { title: 'Examined, then re-examined', description: 'Operators enter recommendations only after assessment against the framework, and are reviewed each season.' },
      { title: 'The willingness to say no', description: 'Wrong month, wrong country, wrong year — the brand says so, and what it would do instead.' }
    ],
    sampleItineraries: []
  },
  {
    id: 'expedition-cruises',
    slug: 'expedition-cruises',
    name: 'Expedition Maritime',
    tagline: 'Polar and remote-ocean expeditions',
    status: 'development',
    statusLabel: 'In Development',
    category: 'Polar & Island Maritime',
    heroImage: 'https://images.unsplash.com/photo-1729361150007-c578c30fbe2e?w=3840&q=82&fm=jpg&auto=format',
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
    heroImage: 'https://images.unsplash.com/photo-1511210239642-769786e18e3b?w=3840&q=82&fm=jpg&auto=format',
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
    heroImage: 'https://images.unsplash.com/photo-1667204240878-c256c123e693?w=3840&q=82&fm=jpg&auto=format',
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
    heroImage: 'https://images.unsplash.com/photo-1705062717946-53098c25f96d?w=3840&q=82&fm=jpg&auto=format',
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

