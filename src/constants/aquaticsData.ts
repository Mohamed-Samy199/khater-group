import type {
  ArcShowcaseItem,
  DivisionCertification,
  DivisionProject,
  StandardSolution,
} from '@/types/divisions';

const un = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1000&q=80`;

export const AQUATICS_CATEGORIES: string[] = [
  'All',
  'Competition Pools',
  'Leisure & Custom Pools',
  'Mechanical & Equipment',
];

export const AQUATICS_SOLUTIONS: StandardSolution[] = [
  {
    id: 'olympic-pools',
    name: 'Olympic Swimming Pools',
    category: 'Competition Pools',
    scopeBadge: '50m × 25m FINA Spec',
    description:
      'Championship-grade 50m × 25m Olympic pools with a minimum depth of 2 meters, built strictly to World Aquatics (FINA) specifications with competition lanes, buffer lanes, and starting setups.',
    image: un('photo-1576013551627-0cc20b96c2a7'),
    scopeItems: [
      '50m × 25m international competition dimensions',
      'Minimum 2.0m regulation water depth',
      'Competition & outer buffer lane layouts',
      'World Aquatics (FINA) tolerance compliance',
    ],
  },
  {
    id: 'semi-olympic-pools',
    name: 'Semi-Olympic Pools',
    category: 'Competition Pools',
    scopeBadge: '25m Club & Academy',
    description:
      'Versatile 25-meter semi-Olympic pools ideal for sporting clubs, international schools, community centers, swimming instruction, and high-frequency athletic training.',
    image: un('photo-1519315901367-f34ff9154487'),
    scopeItems: [
      'Standard 25m short-course training format',
      'Engineered for clubs, schools & academies',
      'Anti-wave lane dividers & lane markings',
      'Balanced competitive & instructional utility',
    ],
  },
  {
    id: 'concrete-prefab-pools',
    name: 'Concrete & Prefabricated Pool Builds',
    category: 'Competition Pools',
    scopeBadge: 'Turnkey Structural',
    description:
      'Full-scope civil and structural aquatic engineering offering both reinforced concrete pool shells and precision prefabricated modular pools built for exact competition tolerances.',
    image: un('photo-1575429198097-0414ec08e8cd'),
    scopeItems: [
      'Reinforced waterproof concrete construction',
      'Precision prefabricated modular pool shells',
      'Overflow perimeter gutters & ceramic finishes',
      'Engineered structural longevity & sealing',
    ],
  },
  {
    id: 'competition-accessories',
    name: 'Competition Pool Gear & Accessories',
    category: 'Competition Pools',
    scopeBadge: 'Tournament Ready',
    description:
      'Complete outfitting of competition aquatic venues with international-grade starting blocks, anti-wave racing lane ropes, backstroke flags, reels, and marine-grade ladders.',
    image: un('photo-1530549387789-4c1017266635'),
    scopeItems: [
      'Competition starting blocks & platforms',
      'Anti-wave lane ropes & storage reels',
      'Backstroke & false-start warning lines',
      'Stainless steel ladders & deck fittings',
    ],
  },
  {
    id: 'leisure-pools',
    name: 'Leisure & Recreational Pools',
    category: 'Leisure & Custom Pools',
    scopeBadge: 'Resorts & Clubs',
    description:
      'Architectural entertainment and recreational pools designed for relaxation, social gatherings, luxury hospitality resorts, residential compounds, and family clubhouses.',
    image: un('photo-1540541338287-41700207dee6'),
    scopeItems: [
      'Custom freeform & architectural pool shapes',
      'Hospitality, resort & clubhouse leisure decks',
      'Dedicated shallow family & kids zones',
      'Seamless synergy with Khater Scapes patios',
    ],
  },
  {
    id: 'filtration-pumps',
    name: 'Mechanical Systems, Pumps & Filters',
    category: 'Mechanical & Equipment',
    scopeBadge: 'Low-Maintenance MEP',
    description:
      'International-grade aquatic mechanical rooms featuring high-efficiency commercial circulation pumps, sand filtration units, and water treatment designed to minimize maintenance costs.',
    image: un('photo-1566073771259-6a8506099945'),
    scopeItems: [
      'Commercial high-efficiency circulation pumps',
      'Heavy-duty filtration & balancing tanks',
      'Automated water clarity & chemical dosing',
      'Engineered to minimize operational costs',
    ],
  },
  {
    id: 'heating-circulation',
    name: 'Pool Heating & Water Circulation',
    category: 'Mechanical & Equipment',
    scopeBadge: 'All-Season Comfort',
    description:
      'Integrated aquatic heating and balanced water circulation systems allowing swimming clubs, schools, and resorts to operate comfortably throughout winter and evening hours.',
    image: un('photo-1582268611958-ebfd161ef9cf'),
    scopeItems: [
      'Commercial heat exchangers & heat pumps',
      'Uniform thermal water distribution loops',
      'Automated temperature regulation controls',
      'Year-round training & hospitality readiness',
    ],
  },
  {
    id: 'touchpad-timing-integration',
    name: 'Touchpad Starting & Timing Sync',
    category: 'Mechanical & Equipment',
    scopeBadge: 'Synergy with Tech',
    description:
      'Competition swimming pool touchpad starting systems and electronic finish sensors engineered in synergy with Khater Tech for millisecond race timing and automatic scoreboard sync.',
    image: un('photo-1560090995-01632a28895b'),
    scopeItems: [
      'Lane-end competition finish touchpads',
      'Electronic starting block relay detection',
      'Direct sync to poolside LED scoreboards',
      'Millisecond accuracy with zero manual error',
    ],
  },
];

export const AQUATICS_PROJECTS: DivisionProject[] = [
  {
    name: 'Maadi Club Swimming Pools',
    location: 'Cairo, Egypt',
    type: 'Olympic & Recreational Aquatic Facilities',
    capacity: 'Premier Heritage Club',
    details:
      'Execution and outfitting of Olympic and recreational swimming pool facilities for Maadi Club, delivering durable water circulation, competition equipment, and international quality finishes.',
    image: un('photo-1576013551627-0cc20b96c2a7'),
    highlight: 'Verified Club Portfolio',
  },
  {
    name: 'Air Defense Olympic Village',
    location: 'New Cairo, Egypt',
    type: 'Olympic-Grade Swimming Pool Installations',
    capacity: 'Multi-Venue Olympic Complex',
    details:
      'Turnkey swimming pool installations built to competitive aquatic standards inside the Air Defense Olympic Village, supporting institutional training and national-level aquatic competitions.',
    image: un('photo-1519315901367-f34ff9154487'),
    highlight: 'Verified Olympic Complex',
  },
  {
    name: 'Port Said Olympic Village',
    location: 'Port Said, Egypt',
    type: 'Competition Aquatic & Pool Facilities',
    capacity: 'Regional Sports City',
    details:
      'Construction and mechanical commissioning of competition swimming pool infrastructure within Port Said Olympic Village, integrating international filtration and racing accessories.',
    image: un('photo-1575429198097-0414ec08e8cd'),
    highlight: 'Verified Sports City',
  },
  {
    name: 'Haileybury International School',
    location: 'Cairo, Egypt',
    type: 'Academic & Training Swimming Pool',
    capacity: 'International School Campus',
    details:
      'Purpose-built educational swimming pool facilities engineered for student aquatic development, swimming lessons, and inter-school athletic meets with safe deck ergonomics.',
    image: un('photo-1540541338287-41700207dee6'),
    highlight: 'Verified Academic Venue',
  },
];

export const AQUATICS_CERTIFICATIONS: DivisionCertification[] = [
  {
    key: 'fina',
    code: 'World Aquatics',
    sub: 'FINA Specifications',
    title: 'Olympic Pool Competition Standards',
    scope: '50m × 25m Pools, Depth & Lane Geometry',
    text: 'Concrete and prefabricated Olympic pools constructed to strict World Aquatics (FINA) specifications covering 50m × 25m dimensions, minimum 2m depth, starting blocks, and touchpads.',
    image: un('photo-1576013551627-0cc20b96c2a7'),
  },
  {
    key: 'structural',
    code: 'Precision Build',
    sub: 'Concrete & Prefabricated',
    title: 'Dual Structural Pool Engineering',
    scope: 'Waterproofing, Modular Shells & Tolerances',
    text: 'Turnkey expertise across both reinforced concrete shells and precision prefabricated pools engineered to maintain strict millimeter-level competition length tolerances.',
    image: un('photo-1575429198097-0414ec08e8cd'),
  },
  {
    key: 'mechanical',
    code: 'Commercial MEP',
    sub: 'Pumps & Filtration',
    title: 'Low-Maintenance Mechanical Systems',
    scope: 'Filtration, Circulation & Sanitation',
    text: 'International mechanical plant equipment including high-efficiency pumps, commercial filters, and circulation piping configured to maximize water clarity while minimizing upkeep costs.',
    image: un('photo-1566073771259-6a8506099945'),
  },
  {
    key: 'timingSync',
    code: 'Touchpad Sync',
    sub: 'Aquatic Electronics',
    title: 'Millisecond Lane Timing Integration',
    scope: 'Starting Blocks, Touchpads & Scoreboards',
    text: 'Seamless mechanical and electrical preparation for FINA-compliant touchpad starting systems and digital poolside scoreboards engineered alongside Khater Tech.',
    image: un('photo-1560090995-01632a28895b'),
  },
  {
    key: 'thermal',
    code: 'All-Season Heat',
    sub: 'Thermal Circulation',
    title: 'Pool Heating & Energy Management',
    scope: 'Heat Exchangers & Balanced Flow',
    text: 'Engineered aquatic heating and hydraulic return distribution systems maintaining steady, comfortable water temperatures for year-round competitive and leisure operations.',
    image: un('photo-1582268611958-ebfd161ef9cf'),
  },
  {
    key: 'deckSafety',
    code: 'Aquatic Safety',
    sub: 'Deck & Water Hygiene',
    title: 'Wet-Zone Ergonomics & Deck Safety',
    scope: 'Anti-Slip Coping, Overflow & Access',
    text: 'High-grip wet-zone perimeter decks, flush overflow channels, and corrosion-resistant marine-grade stainless accessories ensuring safe operation for athletes and families.',
    image: un('photo-1540541338287-41700207dee6'),
  },
];

export const ARC_AQUATICS_ITEMS: ArcShowcaseItem[] = [
  { name: 'Olympic Pools', img: un('photo-1576013551627-0cc20b96c2a7') },
  { name: 'Semi-Olympic Pools', img: un('photo-1519315901367-f34ff9154487') },
  { name: 'Leisure Pools', img: un('photo-1540541338287-41700207dee6') },
  { name: 'Prefabricated Pools', img: un('photo-1575429198097-0414ec08e8cd') },
  { name: 'Filtration & Pumps', img: un('photo-1566073771259-6a8506099945') },
  { name: 'Competition Gear', img: un('photo-1530549387789-4c1017266635') },
  { name: 'Touchpad Timing', img: un('photo-1560090995-01632a28895b') },
];
