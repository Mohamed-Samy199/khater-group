import type {
  ArcShowcaseItem,
  DivisionCertification,
  DivisionProject,
  StandardSolution,
} from '@/types/divisions';

const un = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1000&q=80`;

export const TECH_CATEGORIES: string[] = [
  'All',
  'Scoreboards & Displays',
  'Timing & Aquatic Systems',
  'Court Lighting',
];

export const TECH_SOLUTIONS: StandardSolution[] = [
  {
    id: 'electronic-scoreboards',
    name: 'Electronic Multisport Scoreboards',
    category: 'Scoreboards & Displays',
    scopeBadge: 'FIBA Compliant',
    description:
      'Complete line of indoor and outdoor electronic LED scoreboards for basketball, handball, volleyball, football, and rugby, engineered with Stramatel to meet FIBA, FFBB, and LNB international standards.',
    image: un('photo-1504450758481-7338eba7524a'),
    scopeItems: [
      'Basketball, handball & volleyball LED scoreboards',
      'Outdoor football & rugby electronic displays',
      '24-second shot clocks & possession indicators',
      'Ball-impact resistant polycarbonate front faces',
    ],
  },
  {
    id: 'video-displays-cubes',
    name: 'LED Video Screens & Video Cubes',
    category: 'Scoreboards & Displays',
    scopeBadge: 'Broadcast Display',
    description:
      'High-definition indoor and outdoor LED video walls, suspended center-hung arena video cubes, and hybrid scoreboard-video systems delivering live scores, replays, and dynamic media.',
    image: un('photo-1519861531473-9200262188bf'),
    scopeItems: [
      'Scoreboards with integrated LED video screens',
      'Full-color indoor & outdoor LED video walls',
      'Center-hung arena video cubes',
      'Dedicated broadcast video control systems',
    ],
  },
  {
    id: 'scorepad-console',
    name: 'Scorepad Multisport Control Consoles',
    category: 'Scoreboards & Displays',
    scopeBadge: 'Touchscreen Control',
    description:
      'Intuitive multi-sport touchscreen keyboard console (Scorepad) enabling arena operators to control scoreboards, LED video displays, and facility TVs across multiple sports from one interface.',
    image: un('photo-1551288049-bebda4e38f71'),
    scopeItems: [
      'Multisport touchscreen operating console',
      'Unified scoreboard, video screen & TV control',
      'Wireless RF & hardwired court connectivity',
      'Pre-loaded international federation match rules',
    ],
  },
  {
    id: 'pool-touchpad-starting',
    name: 'Swimming Pool Touchpad Starting Systems',
    category: 'Timing & Aquatic Systems',
    scopeBadge: 'Millisecond Precision',
    description:
      'Competition-grade swimming pool touchpad starting and finish systems built to World Aquatics (FINA) specifications, registering lane touches with millisecond accuracy and instant scoreboard sync.',
    image: un('photo-1576013551627-0cc20b96c2a7'),
    scopeItems: [
      'High-sensitivity competition lane touchpads',
      'Starting blocks & electronic start signaling',
      'Automated real-time sync to aquatic scoreboards',
      'Elimination of manual stopwatch human error',
    ],
  },
  {
    id: 'athletics-timing',
    name: 'Competition Sports Timing Systems',
    category: 'Timing & Aquatic Systems',
    scopeBadge: 'Official Race Timing',
    description:
      'Reliable electronic timing systems engineered for competitive track, aquatics, and indoor arena events where every millisecond defines official championship results.',
    image: un('photo-1461896836934-ffe607ba8211'),
    scopeItems: [
      'Electronic start & finish line timing sensors',
      'Automated split-time & race data transmission',
      'Direct integration with arena LED displays',
      'Redundant competition backup power systems',
    ],
  },
  {
    id: 'arena-sync-networks',
    name: 'Integrated Arena Control & Sync Systems',
    category: 'Timing & Aquatic Systems',
    scopeBadge: 'Turnkey Electronics',
    description:
      'End-to-end electronics engineering, signal cabling, horn synchronization, and technical commissioning uniting scoreboards, timing consoles, and venue displays into one seamless network.',
    image: un('photo-1518770660439-4636190af475'),
    scopeItems: [
      'Synchronized shot clock, game clock & horn links',
      'Structured arena signal & power cabling',
      'On-site installation, calibration & commissioning',
      'Technical operator training & ongoing support',
    ],
  },
  {
    id: 'court-lighting-poles',
    name: 'Court Lighting Poles & Outdoor LED',
    category: 'Court Lighting',
    scopeBadge: 'Weatherproof LED',
    description:
      'Engineered galvanized court lighting poles and weatherproof LED floodlight arrays tailored for outdoor tennis, basketball, padel, volleyball, and football courts with uniform visibility.',
    image: un('photo-1554068865-24cecd4e34b8'),
    scopeItems: [
      'Structural galvanized court lighting poles',
      'Weatherproof, energy-efficient LED luminaires',
      'Anti-glare optical beam distribution',
      'Consistent night-play safety & ball visibility',
    ],
  },
  {
    id: 'stadium-arena-lighting',
    name: 'Indoor Arena & Stadium Floodlighting',
    category: 'Court Lighting',
    scopeBadge: 'Adjustable Lux Levels',
    description:
      'Advanced high-output LED lighting systems for indoor sports halls and multi-venue stadiums, providing adjustable illumination levels for daily training, tournaments, and broadcast events.',
    image: un('photo-1522778119026-d647f0596c20'),
    scopeItems: [
      'High-bay indoor arena LED floodlighting',
      'Adjustable training & championship lux presets',
      'Low-glare, flicker-free broadcast illumination',
      'High energy efficiency & extended service life',
    ],
  },
];

export const TECH_PROJECTS: DivisionProject[] = [
  {
    name: 'Cairo Stadium — FIBA U19 Basketball World Cup',
    location: 'Cairo, Egypt (Verified Reference)',
    type: 'International Championship Arena Electronics',
    capacity: 'FIBA World Cup Deployment',
    details:
      'Deployment of international federation-compliant electronic scoreboards, LED video display systems, and precision shot-clock timing integration supporting the FIBA U19 Basketball World Cup at Cairo Stadium.',
    image: un('photo-1504450758481-7338eba7524a'),
    highlight: 'Official Verified Event',
  },
  {
    name: 'Olympic & Semi-Olympic Aquatic Timing Complexes',
    location: 'National & Club Swimming Venues',
    type: 'FINA-Compliant Pool Touchpad & Timing',
    capacity: 'Millisecond Lane Automation',
    details:
      'Turnkey supply and integration of swimming pool touchpad starting systems, lane finish sensors, starting blocks, and synchronized aquatic digital scoreboards built to World Aquatics standards.',
    image: un('photo-1576013551627-0cc20b96c2a7'),
    highlight: 'Aquatic Timing Domain',
  },
  {
    name: 'Multi-Purpose Indoor Halls & Club Arenas',
    location: 'Sporting Clubs & Academic Venues',
    type: 'Scoreboards, Video Cubes & Scorepad Control',
    capacity: 'Multisport Electronic Systems',
    details:
      'Comprehensive indoor hall upgrades featuring Stramatel multisport LED scoreboards, centralized Scorepad touchscreen consoles, suspended video displays, and high-bay LED arena lighting.',
    image: un('photo-1519861531473-9200262188bf'),
    highlight: 'Indoor Arena Domain',
  },
  {
    name: 'Illuminated Outdoor Courts & Athletic Complexes',
    location: 'Clubs, Resorts & Sports Cities',
    type: 'Court Lighting Poles & Track Timing',
    capacity: 'All-Weather Day & Night Play',
    details:
      'Engineering and erection of weatherproof galvanized court lighting poles with precision LED optics for tennis, padel, basketball, and athletics venues requiring uniform illumination.',
    image: un('photo-1554068865-24cecd4e34b8'),
    highlight: 'Outdoor Lighting Domain',
  },
];

export const TECH_CERTIFICATIONS: DivisionCertification[] = [
  {
    key: 'fiba',
    code: 'FIBA Approved',
    sub: 'Basketball Federation',
    title: 'FIBA Compliant Scoreboards & Clocks',
    scope: 'Scoreboards, Shot Clocks & Consoles',
    text: 'Electronic LED scoreboards, 24-second possession displays, and multisport control consoles meeting International Basketball Federation (FIBA), FFBB, and LNB technical criteria.',
    image: un('photo-1504450758481-7338eba7524a'),
  },
  {
    key: 'stramatel',
    code: 'STRAMATEL',
    sub: 'Official French Partner',
    title: 'European Sports Electronics Partner',
    scope: 'Scoreboards, Scorepad & Video Cubes',
    text: 'Official partnership with Stramatel (France), delivering world-class electronic scoring boards, Scorepad touchscreen consoles, and arena LED video solutions across Egypt.',
    image: un('photo-1519861531473-9200262188bf'),
  },
  {
    key: 'finaTiming',
    code: 'World Aquatics',
    sub: 'FINA Standards',
    title: 'Aquatic Touchpad & Timing Compliance',
    scope: 'Touchpads, Starting Blocks & Displays',
    text: 'Competitive swimming pool touchpad starting systems and electronic timing equipment engineered to millisecond-accurate World Aquatics (FINA) tournament specifications.',
    image: un('photo-1576013551627-0cc20b96c2a7'),
  },
  {
    key: 'iaafTiming',
    code: 'World Athletics',
    sub: 'IAAF Standards',
    title: 'Track Electronic Timing Equipment',
    scope: 'Starting Blocks & Timing Integration',
    text: 'Approved competition athletic equipment including starting blocks, race timing interfaces, and synchronized trackside electronic display systems for stadiums.',
    image: un('photo-1461896836934-ffe607ba8211'),
  },
  {
    key: 'enLighting',
    code: 'EN 12193',
    sub: 'Sports Illumination',
    title: 'European Sports Lighting Standard',
    scope: 'Lux Uniformity & Glare Control',
    text: 'Court lighting poles and indoor arena LED luminaires calibrated to EN 12193 guidelines for horizontal/vertical lux uniformity, minimal glare, and crisp night visibility.',
    image: un('photo-1522778119026-d647f0596c20'),
  },
  {
    key: 'ipProtection',
    code: 'IP65 / IK08',
    sub: 'Hardware Protection',
    title: 'Weatherproof & Ball-Impact Durability',
    scope: 'Outdoor Poles, LEDs & Arena Boards',
    text: 'Electronic displays and outdoor court lighting fixtures rated for dust-tight weather resistance (IP65) and heavy sports ball impact protection (IK08/DIN 18032-3).',
    image: un('photo-1554068865-24cecd4e34b8'),
  },
];

export const ARC_TECH_ITEMS: ArcShowcaseItem[] = [
  { name: 'LED Scoreboards', img: un('photo-1504450758481-7338eba7524a') },
  { name: 'Video Cubes', img: un('photo-1519861531473-9200262188bf') },
  { name: 'Scorepad Consoles', img: un('photo-1551288049-bebda4e38f71') },
  { name: 'Pool Touchpads', img: un('photo-1576013551627-0cc20b96c2a7') },
  { name: 'Precision Timing', img: un('photo-1461896836934-ffe607ba8211') },
  { name: 'Court Lighting Poles', img: un('photo-1554068865-24cecd4e34b8') },
  { name: 'Arena Floodlights', img: un('photo-1522778119026-d647f0596c20') },
];
