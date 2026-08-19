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
    fullDescription: 'Safari Awaits represents the pinnacle of African wilderness exploration. Working strictly with private concessions that restrict vehicle density and enforce rigorous habitat protection, Safari Awaits connects discerning travelers with intimate, low-impact luxury camps in Botswana, Tanzania, Kenya, Rwanda, and South Africa.',
    featuredDestinations: [
      'Okavango Delta & Linyanti, Botswana',
      'Serengeti & Ngorongoro Crater, Tanzania',
      'Volcanoes National Park, Rwanda (Gorilla Trekking)',
      'Greater Kruger & Sabi Sands, South Africa',
      'Masai Mara & Laikipia Plateau, Kenya'
    ],
    keyHighlights: [
      'Strict limit of 4-6 guest suites per wilderness camp',
      'Private charter logistics between deep bush airstrips',
      'Pairing with FGASA Level 3 expert field guides',
      'Direct contribution to rhino anti-poaching & community conservancies'
    ],
    guestCapacity: 'Private charters & exclusive lodge buyouts (1-16 guests)',
    priceGuide: 'Bespoke journeys from $1,800 to $4,500 per person/day',
    sustainabilityRating: '100% Solar-Powered / Zero Single-Use Plastics',
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
    tagline: 'Polar & Remote Oceanic Explorations',
    status: 'development',
    statusLabel: 'In Development',
    category: 'Polar & Island Maritime',
    heroImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2400&auto=format&fit=crop',
    shortDescription: 'The polar and remote-ocean vertical, in development: expedition sailings to Antarctica, Svalbard, the Galápagos and the Northwest Passage, matched with the same rigour as Safari Awaits.',
    fullDescription: 'Expedition Maritime will apply the Safari Awaits method to the sea: an operator framework for expedition vessels, honest cost transparency, and a small number of routes known properly rather than a catalogue. It is in development and does not yet take enquiries.',
    featuredDestinations: [
      'Antarctic Peninsula, South Georgia & Falkland Islands',
      'High Arctic, Svalbard Archipelago & Greenland Fjords',
      'Galápagos Volcanic Archipelago',
      'Northwest Passage & Canadian High Arctic',
      'Chilean Fjords & Cape Horn'
    ],
    keyHighlights: [
      'PC6 Polar Class hull design with zero-speed stabilizers',
      'Scientist-led field expeditions & daily Zodiac landings',
      'Onboard Citizen Science laboratories & submarine equipment',
      '1:1 guest-to-expedition crew ratio for smooth safety'
    ],
    guestCapacity: 'Ultra-boutique vessels (76 to 142 guests maximum)',
    priceGuide: 'Voyages from $14,000 to $48,000 per guest per expedition',
    sustainabilityRating: 'Hybrid Electric / Clean Fuel / Zero Anchoring',
    verticalPillars: [
      {
        title: 'Pristine Marine Access',
        description: 'Our small-vessel footprint permits entry to narrow fjords and shallow coves that large cruise liners can never reach.'
      },
      {
        title: 'Intellectual Rigor',
        description: 'Lectures and field guidance by glaciologists, ornithologists, marine mammal researchers, and polar historians.'
      },
      {
        title: 'Extreme Comfort in Extreme Realms',
        description: 'Nordic saunas, heated outdoor plunge pools, fine dining, and floor-to-ceiling glass observation lounges.'
      }
    ],
    sampleItineraries: [
      {
        title: 'Antarctica, South Georgia & the South Sandwich Islands',
        duration: '19 Days / 18 Nights',
        regions: 'Ushuaia, Drake Passage, South Georgia, Antarctic Peninsula',
        description: 'Stand amidst 200,000 king penguins on Salisbury Plain before ice-cruising through towering tabular bergs in the Weddell Sea.'
      },
      {
        title: 'Realm of the Polar Bear: High Svalbard',
        duration: '10 Days / 9 Nights',
        regions: 'Longyearbyen, Spitsbergen, Hinlopen Strait, Ice Edge',
        description: 'Track polar bears on pack ice, navigate glaciated fjords, and witness walrus haul-outs under the midnight sun.'
      }
    ]
  },
  {
    id: 'coastal-sanctuaries',
    slug: 'coastal-sanctuaries',
    name: 'Coastal & Island Sanctuaries',
    tagline: 'Private Islands & Remote Atoll Estates',
    status: 'horizon',
    statusLabel: 'Horizon Vertical, Launching 2027',
    category: 'Private Islands & Sanctuaries',
    heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2400&auto=format&fit=crop',
    shortDescription: 'Real private island takeovers and oceanfront architectural sanctuaries across the Indian Ocean, South Pacific, and Caribbean.',
    fullDescription: 'Designed for complete seclusion, our Coastal & Island Sanctuaries vertical pairs high-net-worth families with fully-staffed private island estates. From marine conservation atolls in the Seychelles to secluded archipelagos in French Polynesia, each sanctuary guarantees total privacy and custom superyacht tenders.',
    featuredDestinations: [
      'Outer Atolls, Seychelles',
      'Laucala & Mamanuca Islands, Fiji',
      'Tuamotu Archipelago, French Polynesia',
      'Private Cays, Exumas & Grenadines'
    ],
    keyHighlights: [
      'Complete private island buyouts',
      'Private chef, butler, and dive master included',
      'Helipad and deep-water superyacht berth capabilities'
    ],
    guestCapacity: 'Exclusive private estates (2 to 24 guests)',
    priceGuide: 'Island buyouts from $25,000 to $90,000 per night',
    sustainabilityRating: 'Coral Nursery Regeneration & Solar Microgrid',
    verticalPillars: [
      {
        title: 'Absolute Privacy Protocols',
        description: 'No external guests, private airspace monitoring, and strict security compliance.'
      },
      {
        title: 'Oceanic Conservation',
        description: 'Direct support of local marine protected areas and sea turtle nesting sanctuaries.'
      }
    ],
    sampleItineraries: []
  },
  {
    id: 'alpine-retreats',
    slug: 'alpine-retreats',
    name: 'Alpine & High-Altitude Retreats',
    tagline: 'Heli-Ski Chalets & Himalayan Sanctuaries',
    status: 'horizon',
    statusLabel: 'In Development',
    category: 'Mountain & High-Altitude',
    heroImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2400&auto=format&fit=crop',
    shortDescription: 'Ski-in/ski-out architectural chalets with private heli-pads, mountain guides, and high-altitude wellness sanctuaries.',
    fullDescription: 'Connecting guests to untouched powder bowls and majestic mountain ridges in the Alps, British Columbia, Patagonia, and Bhutan. Curated for those who demand the best skiing, mountain solitude, and private mountain chalets.',
    featuredDestinations: [
      'Verbier & Zermatt, Switzerland',
      'Courchevel 1850 & Val d’Isère, France',
      'Revelstoke & Monashee Range, Canada (Private Heli-Skiing)',
      'Paro & Punakha Valleys, Bhutan'
    ],
    keyHighlights: [
      'Private helicopter access and IFMGA mountain guides',
      'In-chalet Michelin-trained chefs & spa wellness teams',
      'Secluded mountain refuges accessible only by private transfer'
    ],
    guestCapacity: 'Private chalet groups (4 to 20 guests)',
    priceGuide: 'Chalets from $40,000 to $180,000 per week',
    sustainabilityRating: 'Geothermal Heating & Zero Alpine Impact',
    verticalPillars: [
      {
        title: 'First-Tracks Privilege',
        description: 'Exclusive backcountry permits and private heli-ski terrain concessions.'
      }
    ],
    sampleItineraries: []
  },
  {
    id: 'transcontinental-journeys',
    slug: 'transcontinental-journeys',
    name: 'Grand Rail & Overland Expeditions',
    tagline: 'Private Luxury Trains & Overland Convoys',
    status: 'horizon',
    statusLabel: 'In Development',
    category: 'Overland & Grand Travel',
    heroImage: 'https://images.unsplash.com/photo-1532105956626-9569c03602f6?q=80&w=2400&auto=format&fit=crop',
    shortDescription: 'Chartered vintage rail carriages and private luxury mobile safari encampments navigating historical trade routes and wilderness corridors.',
    fullDescription: 'Restoring the golden age of romantic exploration through private train car charters across Southern Africa, Europe, and Asia, complemented by luxury mobile overland camps.',
    featuredDestinations: [
      'Pretoria to Victoria Falls (Rovos Rail Private Carriage)',
      'Paris to Istanbul (Venice Simplon-Orient-Express)',
      'Silk Road Trans-Continental Corridor'
    ],
    keyHighlights: [
      'Private vintage train carriages attached to historic engines',
      'Bespoke mobile glamping encampments moved by land teams',
      'Private historian & sommelier on board'
    ],
    guestCapacity: 'Carriage charters (2 to 12 guests)',
    priceGuide: 'Custom rail journeys from $18,000 to $65,000 per cabin',
    sustainabilityRating: 'Carbon-Neutral Rail Offsets',
    verticalPillars: [
      {
        title: 'Timeless Elegance',
        description: 'Restored 1920s Art Deco interiors, mahogany finishes, and private en-suite staterooms.'
      }
    ],
    sampleItineraries: []
  }
];

export const BRAND_PRINCIPLES = [
  {
    number: '01',
    title: 'Research before recommendation',
    description: 'Every destination, season and operator a brand recommends has been examined by a named person against primary sources. Historical guidance is labelled as guidance, and every guide carries a byline and a last-reviewed date.'
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

export const FAQS = [
  {
    question: 'Does Rare Passages sell travel directly or act as a booking engine?',
    answer: 'Rare Passages is the parent holding brand and quality curator. We provide global portfolio strategy, traveler matching, and quality oversight. Bookings are handled through our direct specialist verticals (such as Safari Awaits) or our private concierge desk with real guarantees.'
  },
  {
    question: 'How do you vet partner lodges, cruise ships, and charter operators?',
    answer: 'Every property and vessel in our portfolio is assessed against a published vetting standard. Criteria include maximum guest density, solar/renewable energy usage, indigenous employment ratios, emergency medevac readiness, and field guide certifications.'
  },
  {
    question: 'Can Rare Passages manage journeys across multiple verticals in one trip?',
    answer: 'Yes. One of our core advantages is orchestrating grand multi-vertical journeys - such as combining a luxury wildlife safari in East Africa with a private expedition cruise through the Seychelles or Madagascar.'
  },
  {
    question: 'What is the minimum lead time required for booking?',
    answer: 'Due to strict conservation guest caps at flagship lodges and limited cabin capacity on polar expedition ships, we recommend planning 6 to 14 months in advance. However, our direct relationships allow us to secure short-notice cancellations for private clients.'
  }
];
