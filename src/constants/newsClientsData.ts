import type {
  ClientSector,
  FlagshipAmaala,
  GlobalPartner,
  NewsStory,
  RegionalPresenceData,
} from '@/types/newsClients';

const un = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=80`;

export const AMAALA_OFFICIAL_IMAGE = 'https://www.khatersports.com/images/khater-news/pop.jpeg';

export const FLAGSHIP_AMAALA: FlagshipAmaala = {
  eyebrow: 'Flagship International Milestone · Saudi Vision 2030',
  client: 'Red Sea Global — Amaala Triple Bay',
  country: 'Kingdom of Saudi Arabia',
  status: 'Approved Vendor · First 3 Contracts Secured',
  summary:
    'Khater Sports achieved official Approved Vendor status with Red Sea Global and successfully secured its first three contracts for the landmark Amaala Triple Bay Project—delivering world-class turnkey sports infrastructure aligned with Saudi Vision 2030.',
  highlights: [
    'Official Approved Vendor qualification with Red Sea Global',
    'First three sports infrastructure contracts secured at Amaala Triple Bay',
    'Ultra-luxury regenerative tourism destination aligned with Saudi Vision 2030',
    'Backed on-ground by Khater Jeddah Office & exclusive KSA partner Advanced Sports Technologies',
  ],
  image: AMAALA_OFFICIAL_IMAGE,
};

export const REGIONAL_PRESENCE: RegionalPresenceData = {
  eyebrow: 'Regional Presence & Representation',
  title: 'Operating Across Egypt, Saudi Arabia & MENA',
  summary:
    'Founded in Egypt in 1987, Khater Group delivers turnkey sports, aquatic, play, landscape, and arena technology infrastructure across the Middle East and Africa—supported by dedicated regional offices and exclusive in-kingdom representation.',
  stats: [
    { value: '1987', label: 'Established in Egypt' },
    { value: '2', label: 'Regional Hubs (Cairo & Jeddah)' },
    { value: '12+', label: 'Global Manufacturing Partners' },
    { value: '5', label: 'Integrated Sectors' },
  ],
  offices: [
    {
      role: 'Group Headquarters',
      country: 'Egypt',
      entity: 'Khater Group — Cairo HQ',
      address: 'Namaa Building, Ramsis Extension St., Nasr City, Cairo',
    },
    {
      role: 'Regional Office',
      country: 'Saudi Arabia',
      entity: 'Khater Sports — Jeddah Branch',
      address: '3729 Khalid Ibn Luaai, Jeddah, Kingdom of Saudi Arabia',
    },
  ],
  exclusiveAgent: {
    badge: 'Exclusive Local Agent in Saudi Arabia',
    name: 'Advanced Sports Technologies',
    legalEntity: 'Advanced Sports Technologies for Projects Co.',
    arabicName: 'Advanced Sports Technologies for Projects Co.',
    description:
      'Authorized exclusive agency representing Khater across the Kingdom of Saudi Arabia, managing local contracting, Vision 2030 vendor qualification, and on-ground project execution.',
  },
};

export const CLIENT_SECTORS: ClientSector[] = [
  {
    id: 'international-regional',
    number: '01',
    title: 'International & Hospitality Clients',
    subtitle: 'Saudi Arabia · Red Sea & Luxury Destinations',
    description:
      'Trusted by flagship regional developers, coastal destinations, and five-star hospitality properties across Saudi Arabia and Egypt’s Red Sea coast.',
    clients: [
      'Red Sea Global (Amaala Triple Bay — KSA)',
      'Intercontinental Hotel',
      'Al Gouna Sports Venues',
    ],
  },
  {
    id: 'national-stadiums',
    number: '02',
    title: 'National Stadiums & Olympic Villages',
    subtitle: 'International Championships & Federations',
    description:
      'Delivering FIFA, FIH, FIBA, FINA, and World Athletics compliant arenas, tracks, fields, and swimming complexes for Egypt’s foremost national sporting venues.',
    clients: [
      'Cairo Stadium (FIBA U19 World Cup)',
      'Borg El Arab International Stadium',
      'Port Said Sport City & Olympic Village',
      'Air Defense Olympic Village',
      'Suez Canal Authority Stadium',
      'Ismailia & Suez & Banha Stadiums',
    ],
  },
  {
    id: 'academic-institutions',
    number: '03',
    title: 'International Universities & Schools',
    subtitle: 'Academic Excellence & Campus Athletics',
    description:
      'Trusted by leading international universities and British/American schools to construct certified athletic tracks, indoor multi-purpose halls, football fields, and swimming pools.',
    clients: [
      'American University in Cairo (AUC)',
      'Haileybury International School',
      'Alexandria University Stadium',
      'Cairo University',
      'New Giza University',
    ],
  },
  {
    id: 'premier-clubs',
    number: '04',
    title: 'Premier Sporting Clubs & Developments',
    subtitle: 'Heritage Clubs & Master Communities',
    description:
      'Long-standing infrastructure partner for Egypt’s most prestigious sporting clubs and residential master developments across courts, squash arenas, pools, and playgrounds.',
    clients: [
      'Al Ahly Club (Sheikh Zayed)',
      'Heliopolis Club & Maadi Club',
      'Shooting Club Kattamia',
      'ZED Park & Wadi Degla',
      'Madinaty Club & Katameya Heights',
      'Smouha, Petrosport, Platinum & Royal City Clubs',
    ],
  },
];

export const PARTNER_CATEGORIES: string[] = [
  'All',
  'Flooring & Tracks',
  'Squash & Climbing',
  'Electronics & Timing',
  'Aquatics & Pools',
];

export const GLOBAL_PARTNERS: GlobalPartner[] = [
  {
    name: 'Conica',
    country: 'Switzerland',
    code: 'CH',
    category: 'Flooring & Tracks',
    division: 'Khater Sports',
    divisionColor: '#DE1F26',
    specialty: 'World Athletics & Federation Rubber Flooring',
    description:
      'Swiss-engineered seamless polyurethane and rubber athletic track and multi-sport flooring systems meeting strict international sports federation performance standards.',
  },
  {
    name: 'Prestige',
    country: 'United States',
    code: 'US',
    category: 'Flooring & Tracks',
    division: 'Khater Sports',
    divisionColor: '#DE1F26',
    specialty: 'Engineered Rubber-Padded Court Systems',
    description:
      'American-developed rubber-padded sports flooring systems engineered for superior athlete joint protection, shock absorption, and consistent competition ball rebound.',
  },
  {
    name: 'Star Gum',
    country: 'Poland',
    code: 'PL',
    category: 'Flooring & Tracks',
    division: 'Khater Sports & Play',
    divisionColor: '#DE1F26',
    specialty: 'Specialized Sports Rubber Flooring',
    description:
      'European manufacturer of specialized sports and athletic rubber flooring systems deployed across multi-purpose courts and recreation zones.',
  },
  {
    name: 'McWil',
    country: 'United States',
    code: 'US',
    category: 'Squash & Climbing',
    division: 'Khater Sports',
    divisionColor: '#DE1F26',
    specialty: 'WSF-Accredited Squash Courts & Glass Walls',
    description:
      'World Squash Federation (WSF) accredited producer supplying championship prefabricated court wall panels, tempered glass backwalls, and precision fittings.',
  },
  {
    name: 'Gezolan',
    country: 'Switzerland',
    code: 'CH',
    category: 'Flooring & Tracks',
    division: 'Khater Sports & Play',
    divisionColor: '#90268F',
    specialty: 'Premium EPDM Rubber Granules & Surfaces',
    description:
      'High-grade Swiss EPDM rubber flooring systems engineered for long-term UV stability, shock absorption, and outdoor athletic and playground durability.',
  },
  {
    name: 'Rebound',
    country: 'United Kingdom',
    code: 'UK',
    category: 'Squash & Climbing',
    division: 'Khater Sports',
    divisionColor: '#DE1F26',
    specialty: 'WSF-Accredited Court Plaster & Paint',
    description:
      'Industry-leading British manufacturer of high-impact squash court plaster and competition wall paint systems accredited by the World Squash Federation.',
  },
  {
    name: 'Entre-Prises (EP Climbing)',
    country: 'France',
    code: 'FR',
    category: 'Squash & Climbing',
    division: 'Khater Sports & Play',
    divisionColor: '#90268F',
    specialty: 'IFSC Competition & Clip ’n Climb Walls',
    description:
      'French global pioneer of IFSC-certified competition speed walls, climbing gyms, school installations, and Clip ’n Climb leisure adventure structures.',
  },
  {
    name: 'Stramatel',
    country: 'France',
    code: 'FR',
    category: 'Electronics & Timing',
    division: 'Khater Tech',
    divisionColor: '#6481BD',
    specialty: 'FIBA Scoreboards, Scorepad & Video Cubes',
    description:
      'Premier French manufacturer of FIBA-approved multisport LED scoreboards, Scorepad touchscreen consoles, shot clocks, and arena LED video display systems.',
  },
  {
    name: 'Bodet',
    country: 'France',
    code: 'FR',
    category: 'Electronics & Timing',
    division: 'Khater Tech',
    divisionColor: '#6481BD',
    specialty: 'Professional Scoreboards & Arena Displays',
    description:
      'Renowned French sports electronics brand providing high-visibility indoor and outdoor scoreboards and synchronized time displays for arenas and clubs.',
  },
  {
    name: 'ALGE-Timing',
    country: 'Austria',
    code: 'AT',
    category: 'Electronics & Timing',
    division: 'Khater Tech',
    divisionColor: '#6481BD',
    specialty: 'Millisecond Electronic Timing Systems',
    description:
      'Austrian precision sports timing specialist delivering electronic finish systems, start gates, and competition timing equipment where every millisecond counts.',
  },
  {
    name: 'Malmsten',
    country: 'Sweden',
    code: 'SE',
    category: 'Aquatics & Pools',
    division: 'Khater Aquatics',
    divisionColor: '#14C1E2',
    specialty: 'Olympic & FINA Swimming Pool Accessories',
    description:
      'Official Swedish supplier of international racing lane lines, anti-wave dividers, starting equipment, and Olympic aquatic competition accessories.',
  },
  {
    name: 'AstralPool · Hayward · Bomba PSH',
    country: 'Spain',
    code: 'ES',
    category: 'Aquatics & Pools',
    division: 'Khater Aquatics',
    divisionColor: '#14C1E2',
    specialty: 'Commercial Pumps, Filters & Pool MEP',
    description:
      'Leading Spanish and European swimming pool mechanical brands providing high-efficiency commercial pumps, filtration tanks, and durable circulation systems.',
  },
];

export const NEWS_CATEGORIES: string[] = [
  'All',
  'Regional Expansion',
  'Championships',
  'Certifications',
  'Global Alliances',
];

export const NEWS_STORIES: NewsStory[] = [
  {
    id: 'red-sea-global-amaala',
    featured: true,
    category: 'Regional Expansion',
    tag: 'Saudi Vision 2030',
    location: 'Amaala Triple Bay, Saudi Arabia',
    division: 'Khater Group · KSA',
    title:
      'Khater Sports Named Approved Vendor with Red Sea Global & Secures First Three Contracts at Amaala Triple Bay',
    excerpt:
      'Marking a major milestone in Khater’s regional growth across the Kingdom of Saudi Arabia, the company achieved Approved Vendor status with Red Sea Global and won its initial three contracts for Amaala Triple Bay.',
    body: [
      'Khater Sports officially announced its accreditation as an Approved Vendor with Red Sea Global, one of the flagship regenerative tourism developers driving Saudi Arabia’s Vision 2030.',
      'Following rigorous technical qualification, Khater secured its first three contracts for the iconic Amaala Triple Bay Project—delivering international-grade sports infrastructure and turnkey athletic environments tailored to ultra-luxury coastal sustainability standards.',
      'Operations in the Kingdom are backed directly by Khater’s Jeddah presence (3729 Khalid Ibn Luaai, Jeddah) and exclusive local partner Advanced Sports Technologies, enabling rapid on-ground engineering and delivery across Saudi Arabia.',
    ],
    keyFacts: [
      'Approved Vendor qualification with Red Sea Global',
      'First 3 contracts secured at Amaala Triple Bay',
      'Aligned with Saudi Vision 2030 sustainability standards',
      'Supported by Khater Jeddah Office & KSA local agency',
    ],
    image: AMAALA_OFFICIAL_IMAGE,
    isOfficialPoster: true,
  },
  {
    id: 'cairo-stadium-fiba-u19',
    featured: false,
    category: 'Championships',
    tag: 'International Tournament',
    location: 'Cairo Stadium, Egypt',
    division: 'Khater Tech & Sports',
    title: 'Cairo Stadium Equipped for the FIBA U19 Basketball World Cup',
    excerpt:
      'Deploying FIBA-compliant electronic scoreboards, LED video display systems, and precision shot-clock timing for world-stage basketball competition in Cairo.',
    body: [
      'Khater Sports played a key technical role in equipping Cairo Stadium for the international FIBA U19 Basketball World Cup, supplying federation-compliant sports electronics and digital arena displays.',
      'In partnership with French electronics leader Stramatel, the deployment integrated high-brightness LED scoreboards, synchronized possession clocks, and broadcast-ready video display controls engineered for international championship reliability.',
    ],
    keyFacts: [
      'FIBA-approved electronic scoring & video displays',
      'Partnered with Stramatel (France)',
      'Hosted international World Cup competition at Cairo Stadium',
    ],
    image: un('photo-1504450758481-7338eba7524a'),
  },
  {
    id: 'port-said-fih-cat4',
    featured: false,
    category: 'Certifications',
    tag: 'FIH Category 4',
    location: 'Port Said Sport City, Egypt',
    division: 'Khater Sports',
    title: 'Port Said Sport City Hockey Field Certified Under FIH Quality Programme Category 4',
    excerpt:
      'International Hockey Federation (FIH) accreditation validates Khater’s turnkey synthetic hockey turf engineering and sub-base precision at Port Said Sport City.',
    body: [
      'The competition hockey field delivered by Khater Sports at Port Said Sport City achieved official certification under the International Hockey Federation (FIH) Quality Programme for Hockey Turf, classified as Category 4.',
      'Alongside hockey turf, Khater’s broader footprint at Port Said Sport City and Port Said Olympic Village spans certified squash courts, tennis courts, and competition swimming pool facilities.',
    ],
    keyFacts: [
      'Certified under FIH Quality Programme — Category 4',
      'Full turnkey sub-base and synthetic hockey turf installation',
      'Part of multi-discipline delivery at Port Said Sport City',
    ],
    image: un('photo-1515703407324-5f753afd8be8'),
  },
  {
    id: 'ksa-jeddah-expansion',
    featured: false,
    category: 'Regional Expansion',
    tag: 'GCC Footprint',
    location: 'Jeddah, Saudi Arabia',
    division: 'Khater Group',
    title: 'Expanding Across Saudi Arabia Through Dedicated Jeddah Office & Exclusive Local Agency',
    excerpt:
      'Strengthening direct engineering presence in the Gulf with our Jeddah office and exclusive Saudi partner Advanced Sports Technologies.',
    body: [
      'Building on over 40 years of market leadership since 1987 in Egypt, Khater has expanded its regional footprint into Saudi Arabia with a dedicated office in Jeddah (Khalid Ibn Luaai) and an exclusive local agency with Advanced Sports Technologies (شركة تقنيات الرياضات المتطورة للمشاريع).',
      'The regional hub brings all five specialized Khater Group sectors—Sports, Play, Scapes, Tech, and Aquatics—closer to giga-projects, clubs, schools, and developers across the Middle East and Africa.',
    ],
    keyFacts: [
      'Physical office presence in Jeddah, Saudi Arabia',
      'Exclusive local agency: Advanced Sports Technologies',
      'Direct regional support across MENA & Africa',
    ],
    image: un('photo-1522778119026-d647f0596c20'),
  },
  {
    id: 'entre-prises-climbing-alliance',
    featured: false,
    category: 'Global Alliances',
    tag: 'IFSC Certified',
    location: 'Egypt & MENA',
    division: 'Khater Sports & Play',
    title: 'Partnering with Entre-Prises (France) for IFSC-Certified Competition & Leisure Climbing Walls',
    excerpt:
      'Introducing world-class competition speed walls, climbing gyms, and Clip ’n Climb interactive walls through accredited French engineering.',
    body: [
      'Through its partnership with globally renowned French manufacturer Entre-Prises (EP Climbing) and the Clip ’n Climb concept, Khater delivers turnkey climbing structures certified to International Federation of Sport Climbing (IFSC) standards.',
      'Solutions span official competition speed walls, university and school climbing installations, commercial climbing gyms, and family leisure venues.',
    ],
    keyFacts: [
      'Official collaboration with Entre-Prises (France)',
      'IFSC-certified competition speed walls',
      'Covers gyms, schools, universities & Clip ’n Climb leisure centers',
    ],
    image: un('photo-1522163182402-834f871fd851'),
  },
  {
    id: 'khater-heritage-1987',
    featured: false,
    category: 'Global Alliances',
    tag: 'Since 1987',
    location: 'Nasr City HQ, Cairo',
    division: 'Khater Group',
    title: '40+ Years of Multi-Sector Sports & Environmental Engineering Across Egypt & MENA',
    excerpt:
      'From our founding in 1987 to five specialized divisions uniting certified European & American manufacturers under one turnkey roof.',
    body: [
      'Founded in Egypt in 1987, Khater evolved from sporting goods trading into the region’s premier turnkey builder of Olympic stadiums, university athletic complexes, FINA swimming pools, active play parks, architectural landscapes, and arena electronics.',
      'Today, Khater Group unites five dedicated divisions—Khater Sports, Khater Play, Khater Scapes, Khater Tech, and Khater Aquatics—backed by over 12 accredited international partners from Switzerland, France, the USA, UK, Austria, Sweden, Spain, and Poland.',
    ],
    keyFacts: [
      'Established in Egypt in 1987 (40+ years of heritage)',
      '5 integrated divisions: Sports, Play, Scapes, Tech & Aquatics',
      '12+ accredited European & American partner brands',
    ],
    image: un('photo-1461896836934-ffe607ba8211'),
  },
];
