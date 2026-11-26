import type {
  ArcShowcaseItem,
  DivisionCertification,
  DivisionProject,
  PlaySolution,
} from '@/types/divisions';

export const PLAY_CATEGORIES: string[] = [
  'All',
  'Play Structures',
  'Safety Flooring',
  'Climbing & Adventure',
  'Inclusive & Early Years',
];

const un = (id: string) => `https://images.unsplash.com/${id}?q=80&w=900&auto=format&fit=crop`;

export const PLAY_SOLUTIONS: PlaySolution[] = [
  {
    id: 'multi-play-towers',
    name: 'Themed Multi-Play Towers',
    category: 'Play Structures',
    badge: 'EN 1176 Compliant',
    description:
      'Multi-level architectural play structures combining spiral tube slides, suspension bridges, crawl tunnels, and lookout cabins designed for active coordination and social play.',
    image: un('photo-1545558014-8692077e9b5c'),
    specs: {
      capacity: 'Up to 60 Children',
      ageGroup: '3 – 14 Years',
      standard: 'EN 1176-1 / 3 / 4 Compliance',
      materials: 'HDPE, Galvanized Steel, Robinia Wood',
    },
    features: ['Modular expansion', 'Anti-pinch joints', 'UV-resistant coatings'],
  },
  {
    id: 'epdm-wet-pour',
    name: 'Seamless EPDM Safety Flooring',
    category: 'Safety Flooring',
    badge: 'EN 1177 HIC Tested',
    description:
      'Two-tier impact-absorbing rubber surface: thick recycled SBR shock-pad base topped with a colored virgin EPDM wear layer. Engineered for certified Critical Fall Heights (CFH) up to 3.0m.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSEJzz3wh7UwVtV88j69MQ8PlWTg2KaxrWrqFvyoe_TUa-L7qEFgJgRbQ&s=10',
    specs: {
      thickness: '15mm – 120mm custom CFH',
      system: 'Dual-Layer Wet-Pour (SBR + EPDM)',
      standard: 'EN 1177 Impact Absorption',
      palette: '24 UV-Stable Pigment Colors',
    },
    features: ['Seamless pour-in-place', 'Slip-resistant all-weather', 'Custom graphic inlays'],
  },
  {
    id: 'climbing-pyramids',
    name: 'Spatial Rope & Climbing Pyramids',
    category: 'Climbing & Adventure',
    badge: 'High-Tensile Steel Core',
    description:
      'High-tensile steel-reinforced poly-rope networks, geometric mast pyramids, and bouldering elements that train three-dimensional spatial awareness, grip strength, and dynamic balance.',
    image: 'https://parksupplies.co.nz/wp-content/uploads/2021/04/K1-Rope-Pyramid-Dual-Climber_KC2-Stonefields.png',
    specs: {
      ropeCore: 'Steel-Strand Vandal-Resistant Core',
      height: '3.5m – 9.0m Pyramids',
      ageGroup: '5 – 16 Years',
      anchors: 'Reinforced Sub-Surface Concrete Footings',
    },
    features: ['High-tensile load capacity', 'Vandal-proof aluminium ferrules', '3D spatial geometry'],
  },
  {
    id: 'inclusive-play',
    name: 'Universal Inclusive Playgrounds',
    category: 'Inclusive & Early Years',
    badge: 'Universal Access Design',
    description:
      'Barrier-free play spaces engineered for all abilities, featuring zero-threshold wheelchair ramps, sensory tactile play panels, ground-flush carousels, and vestibular stimulation swings.',
    image: un('photo-1500964757637-c85e8a162699'),
    specs: {
      accessibility: '100% Wheelchair Accessible',
      sensoryElements: 'Sound, Tactile, Visual Stations',
      standards: 'EN 1176-1 / Universal Access Principles',
      safetyRating: 'Full-Coverage Soft EPDM Transitions',
    },
    features: ['Flush transfer points', 'Acoustic chimes & bells', 'Multi-user adaptive seats'],
  },
  {
    id: 'early-years-sensory',
    name: 'Early Years & Toddler Wonderlands',
    category: 'Inclusive & Early Years',
    badge: 'Soft-Edge Safety',
    description:
      'Low-fall-height sensory exploration spaces tailored for nurseries, daycares, and family clubs. Features tactile discovery paths, mini mounds, soft-edge crawl caves, and imaginative roleplay huts.',
    image: un('photo-1566454544259-f4b94c3d758c'),
    specs: {
      fallHeight: '< 0.6m Zero-Risk Profile',
      ageGroup: '1 – 4 Years',
      surfaces: 'Padded Foam Shockpads + Soft EPDM',
      finishes: 'Non-toxic, food-grade contact polymers',
    },
    features: ['Ergonomic grip sizes', 'Tactile cognitive panels', 'Gentle slope soft play'],
  },
  {
    id: 'robinia-nature-play',
    name: 'Organic Robinia Nature Play',
    category: 'Play Structures',
    badge: 'Class 1 Hardwood Timber',
    description:
      'Rustic play environments sculpted from natural hardwood Robinia timber. Naturally resistant to decay without chemical treatment, integrating effortlessly into park landscapes and green compounds.',
    image: un('photo-1502086223501-7ea6ecd79368'),
    specs: {
      timberClass: 'Durability Class 1 (Robinia Pseudoacacia)',
      preservation: 'Naturally rot-resistant without chemicals',
      sourcing: 'Sustainably Managed Natural Forests',
      aesthetics: 'Curved organic logs & treehouse decks',
    },
    features: ['100% Eco-friendly', 'Splinter-free planed finish', 'Landscape integration'],
  },
  {
    id: 'rubber-tiles-puzzle',
    name: 'High-Density Interlocking Rubber Tiles',
    category: 'Safety Flooring',
    badge: 'Heavy Traffic Proven',
    description:
      'Modular vulcanized and puzzle rubber tiles engineered for heavy pedestrian traffic, school play areas, outdoor fitness zones, and rapid installation over concrete or compacted gravel.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8B7--bFUN6iEC4I7wq7klCjD6eiD3P54y_rF0ghZA37YVST3mubkMGBw&s=10',
    specs: {
      dimensions: '500x500mm / 1000x1000mm',
      thickness: '25mm – 50mm Interlocking',
      density: 'High-compaction SBR / EPDM blend',
      drainage: 'Integrated underside channel grid',
    },
    features: ['Rapid modular replacement', 'Internal drainage channels', 'Anti-fatigue bounce'],
  },
  {
    id: 'interactive-splash-pads',
    name: 'Zero-Depth Aquatic Splash Parks',
    category: 'Climbing & Adventure',
    badge: 'Zero-Depth Water Safety',
    description:
      'Zero-standing-water interactive splash parks built in synergy with Khater Aquatics. Equipped with sensor-activated ground jets, dumping water buckets, water cannons, and slip-rated aquatic EPDM.',
    image: un('photo-1533227268428-f9ed0900fb3b'),
    specs: {
      waterDepth: '0.0m (Zero standing water)',
      filtration: 'Continuous closed-loop UV sanitation',
      surface: 'Chlorine-resistant textured aquatic rubber',
      automation: 'Interactive smart sequencing valves',
    },
    features: ['Zero lifeguard requirement', 'Recirculating water-saver loop', 'Touch-free spray sensors'],
  },
];

export const PLAY_PROJECTS: DivisionProject[] = [
  {
    name: 'Mountain View iCity Central Parks',
    location: 'New Cairo & 6th October, Egypt',
    type: 'Master-Planned Community Play Hubs',
    capacity: '1,200+ Children Daily',
    details:
      'Turnkey delivery of multiple signature playground zones spanning over 4,500 m². Included custom multi-tiered castle towers, contoured 3D EPDM rolling hills with embedded slides, and ADA-compliant inclusive play equipment.',
    image: un('photo-1575783970733-1aaedde1db74'),
    highlight: 'Flagship Residential Project',
  },
  {
    name: 'Smart Village & Metropolitan Schools',
    location: 'Giza & Cairo, Egypt',
    type: 'Academic Recreation & Motor Development Grounds',
    capacity: '800 Students',
    details:
      'State-of-the-art playground installations calibrated to early childhood motor skill progression. Full-coverage shock-absorbing wet-pour EPDM with integrated educational numbers, compasses, and spatial obstacle ropes.',
    image: un('photo-1588072432836-e10032774350'),
    highlight: 'Premier Academic Benchmark',
  },
  {
    name: 'Makadi Palace & Red Sea Coastal Resorts',
    location: 'Hurghada, Red Sea, Egypt',
    type: 'Coastal Resort Play & Adventure Park',
    capacity: 'Family Leisure Destination',
    details:
      'Heavy-duty seaside playground installation featuring maritime-grade 316 stainless steel hardware, UV-shielded polymers resistant to extreme desert sun, and dual-zone soft-play and splash pad fun.',
    image: un('photo-1507525428034-b723cf961d3e'),
    highlight: 'Resort & Hospitality Landmark',
  },
  {
    name: 'Al-Zohour & Heliopolis Sporting Clubs',
    location: 'Nasr City & Heliopolis, Cairo',
    type: 'Premier Private Sporting Club Play Hubs',
    capacity: 'High-Density Weekend Traffic',
    details:
      'Massive adventure playground redevelopment featuring 8-meter high geometric rope climbing pyramids, double zip-lines, toddler soft play, and heavy-duty shock-pad flooring certified to EN 1177 standards.',
    image: un('photo-1545558014-8692077e9b5c'),
    highlight: 'Heritage Private Club',
  },
];

export const PLAY_CERTIFICATIONS: DivisionCertification[] = [
  {
    key: 'en1176',
    code: 'EN 1176',
    sub: 'European Safety Code',
    title: 'Playground Equipment Safety',
    scope: 'Towers, Slides, Swings & Carousels',
    text: 'All play equipment is engineered according to European standard EN 1176 specifications, ensuring safe clearance dimensions, anti-pinch joints, and fall barrier protections.',
  },
  {
    key: 'en1177',
    code: 'EN 1177 HIC',
    sub: 'Shock Absorption Testing',
    title: 'Impact Attenuating Surfacing',
    scope: 'Seamless EPDM & Rubber Tiles',
    text: 'Laboratory drop-tested to European standard EN 1177 for Head Injury Criterion (HIC), calibrating rubber thickness to certified Critical Fall Heights (CFH) up to 3.0 meters.',
  },
  {
    key: 'iso9001',
    code: 'ISO 9001:2015',
    sub: 'Quality Management',
    title: 'Fabrication & Execution Quality',
    scope: 'Factory QA & Site Assembly',
    text: 'Systematic quality management auditing covering engineering blueprints, sub-base laser leveling, hardware anchoring, and final turnkey commissioning.',
  },
  {
    key: 'iso45001',
    code: 'ISO 45001:2018',
    sub: 'Occupational Safety',
    title: 'On-Site Health & Safety Management',
    scope: 'Field Installation Teams',
    text: 'Stringent on-site health, safety, and environmental protocols protecting field technicians, project sites, and surrounding community environments during erection.',
  },
  {
    key: 'inclusive',
    code: 'Universal Design',
    sub: 'Inclusive Access Guidelines',
    title: 'All-Abilities Universal Play',
    scope: 'Ramps, Transfer Points & Sensory Stations',
    text: 'Barrier-free architectural principles ensuring children of all physical and cognitive abilities access play zones with flush wheelchair transitions and tactile stations.',
  },
  {
    key: 'childSafe',
    code: 'Child-Safe Materials',
    sub: 'Non-Toxic & UV Stability',
    title: 'Heavy-Metal-Free Polymers',
    scope: 'HDPE Panels, EPDM Pigments & Coatings',
    text: '100% heavy-metal-free virgin EPDM granules, non-toxic food-contact HDPE panels, and solvent-free aliphatic binders resistant to intense ultraviolet degradation.',
  },
];

export const ARC_PLAY_ITEMS: ArcShowcaseItem[] = [
  { name: 'Multi-Towers', img: un('photo-1545558014-8692077e9b5c') },
  { name: 'EPDM Floors', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSEJzz3wh7UwVtV88j69MQ8PlWTg2KaxrWrqFvyoe_TUa-L7qEFgJgRbQ&s=10' },
  { name: 'Rope Pyramids', img: 'https://parksupplies.co.nz/wp-content/uploads/2021/04/K1-Rope-Pyramid-Dual-Climber_KC2-Stonefields.png' },
  { name: 'Inclusive Play', img: un('photo-1500964757637-c85e8a162699') },
  { name: 'Toddler Zones', img: un('photo-1566454544259-f4b94c3d758c') },
  { name: 'Robinia Wood', img: un('photo-1502086223501-7ea6ecd79368') },
  { name: 'Splash Pads', img: un('photo-1533227268428-f9ed0900fb3b') },
];
