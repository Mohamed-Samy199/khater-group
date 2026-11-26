import type {
  ArcShowcaseItem,
  DivisionCertification,
  DivisionProject,
  StandardSolution,
} from '@/types/divisions';

export const SCAPES_CATEGORIES: string[] = [
  'All',
  'Hardscape Services',
  'Softscape Services',
];

const un = (id: string) => `https://images.unsplash.com/${id}?q=80&w=900&auto=format&fit=crop`;

export const SCAPES_SOLUTIONS: StandardSolution[] = [
  {
    id: 'earthwork-grading',
    name: 'Earthwork & Site Preparation',
    category: 'Hardscape Services',
    scopeBadge: 'Site Preparation & Leveling',
    description:
      'Site preparation, excavation, grading, and leveling that establish the durable structural foundation of all outdoor developments.',
    image: un('photo-1541888946425-d0fbb186f5f8'),
    scopeItems: ['Site preparation', 'Excavation & sub-base works', 'Grading & laser leveling'],
  },
  {
    id: 'sidewalks-curbs',
    name: 'Sidewalks, Curbs & Gutters',
    category: 'Hardscape Services',
    scopeBadge: 'Pedestrian Pathways',
    description:
      'Durable concrete sidewalks, pedestrian pathways, curbs, and storm gutters designed for safe pedestrian circulation and effective drainage.',
    image: un('photo-1513694203232-719a280e022f'),
    scopeItems: ['Pedestrian sidewalks', 'Precast curbs', 'Surface drainage gutters'],
  },
  {
    id: 'pavers-stonework',
    name: 'Stonework, Patios & Pavers',
    category: 'Hardscape Services',
    scopeBadge: 'Patios & Pool Decks',
    description:
      'Stonework, patios, pool decks, perimeter fencing, and interlocking pavers built for high architectural resilience and aesthetic living.',
    image: un('photo-1508873696983-2df5293cb395'),
    scopeItems: ['Interlocking pavers', 'Architectural stonework', 'Patios & pool decks', 'Perimeter fencing'],
  },
  {
    id: 'water-features',
    name: 'Water Features & Fountains',
    category: 'Hardscape Services',
    scopeBadge: 'Fountains & Waterfalls',
    description:
      'Decorative water features including custom architectural fountains, biological stream beds, cascading waterfalls, and dry riverbeds.',
    image: 'https://waterpumps.co.za/cdn/shop/files/Largefloatingfountain_waterhouse.1.6.png?v=1788184365&width=1080',
    scopeItems: ['Custom fountains', 'Waterfalls & reflection pools', 'Dry riverbeds'],
  },
  {
    id: 'pergolas-furniture',
    name: 'Pergolas, Tents & Site Furniture',
    category: 'Hardscape Services',
    scopeBadge: 'Shade & Site Amenities',
    description:
      'Outdoor site furniture, architectural signage, shaded fabric tensile tents, and custom timber pergolas for climatic comfort and community gathering.',
    image: un('photo-1598928506311-c55ded91a20c'),
    scopeItems: ['Timber pergolas', 'Fabric tents & canopies', 'Site furniture & benches', 'Signage'],
  },
  {
    id: 'irrigation-lighting',
    name: 'Irrigation & Lighting Networks',
    category: 'Hardscape Services',
    scopeBadge: 'Integrated Infrastructure',
    description:
      'Integrated outdoor infrastructure comprising automated irrigation systems, exterior electrical networks, and decorative lighting fixtures.',
    image: un('photo-1563514227147-6d2ff665a6a0'),
    scopeItems: ['Irrigation systems', 'Electricity networks', 'Lighting fixtures & wiring'],
  },
  {
    id: 'trees-planting',
    name: 'Trees & Specimen Installations',
    category: 'Softscape Services',
    scopeBadge: 'Mature Trees & Palms',
    description:
      'Selection, supply, and professional installation of mature trees, shade canopies, and ornamental trees that give instant height and scale.',
    image: un('photo-1509316975850-ff9c5deb0cd9'),
    scopeItems: ['Mature tree installations', 'Ornamental shade trees', 'Specimen palm planting'],
  },
  {
    id: 'shrubs-flowers',
    name: 'Shrubs, Flowers & Plant Beds',
    category: 'Softscape Services',
    scopeBadge: 'Botanical Flora',
    description:
      'Vibrant planting compositions combining evergreen shrubs, annual and perennial flowering beds, and decorative groundcovers.',
    image: un('photo-1585320806297-9794b3e4eeae'),
    scopeItems: ['Evergreen shrubs', 'Annuals & perennials', 'Ornamental flower beds'],
  },
  {
    id: 'natural-turf',
    name: 'Natural Turfgrass & Lawns',
    category: 'Softscape Services',
    scopeBadge: 'Natural Turfgrass',
    description:
      'Supply, soil preparation, and installation of premium natural grass lawns and sodding suited for parks, sports recreation, and residential communities.',
    image: un('photo-1540555700478-4be289fbecef'),
    scopeItems: ['Natural turfgrass sodding', 'Lawn soil preparation', 'Open park greenery'],
  },
  {
    id: 'landscape-architecture',
    name: 'Landscape Architecture & Design',
    category: 'Softscape Services',
    scopeBadge: 'Concept & Master Planning',
    description:
      'Complete landscape architecture and spatial planning that harmonizes living plant elements with civil structures and surrounding architecture.',
    image: un('photo-1600585154340-be6161a56a0c'),
    scopeItems: ['Landscape architecture', 'Master spatial design', 'Planting palette selection'],
  },
  {
    id: 'landscape-renovations',
    name: 'Landscape Renovations & Maintenance',
    category: 'Softscape Services',
    scopeBadge: 'Renovation & Renewal',
    description:
      'Comprehensive landscape renovations, replanting, soil revitalization, and environmental enhancements that breathe new life into established spaces.',
    image: un('photo-1517457373958-b7bdd4587205'),
    scopeItems: ['Landscape renovations', 'Rejuvenation & replanting', 'Upgrading existing grounds'],
  },
];

export const SCAPES_PROJECTS: DivisionProject[] = [
  {
    name: 'Luxury Coastal Resorts & Waterfront Promenades',
    location: 'Coastal & Red Sea Destinations',
    type: 'Waterfront & Hospitality Landscape',
    capacity: 'Turnkey Coastal Greenery',
    details:
      'Execution of coastal pedestrian promenades, marine-tolerant date palms, computerized drip irrigation networks, and architectural water features calibrated to saline environments.',
    image: un('photo-1540555700478-4be289fbecef'),
    highlight: 'Coastal & Hospitality Typology',
  },
  {
    name: 'Master-Planned Residential Communities & Parks',
    location: 'Urban & Suburban Developments',
    type: 'Private Residential Green Spaces',
    capacity: 'Community Living Landscapes',
    details:
      'Sculpted turf lawns, natural stone walkways, automated sub-surface irrigation, shaded timber pergolas, and mature shade tree transplantation across gated residential districts.',
    image: un('photo-1600585154340-be6161a56a0c'),
    highlight: 'Residential Community Typology',
  },
  {
    name: 'Commercial & Mixed-Use Urban Plazas',
    location: 'Civic & Business Districts',
    type: 'Pedestrian Plazas & Retail Hubs',
    capacity: 'High-Traffic Public Spaces',
    details:
      'Heavy-duty interlocking and granite paving, cascading decorative fountains, pedestrian boulevards, architectural nightscape illumination, and durable civil works.',
    image: un('photo-1513694203232-719a280e022f'),
    highlight: 'Commercial & Urban Typology',
  },
  {
    name: 'Sporting Clubs & Educational Campuses',
    location: 'Premier Clubs & Academic Venues',
    type: 'Multi-Discipline Sports Landscapes',
    capacity: 'Extensive Outdoor Campuses',
    details:
      'Harmonizing outdoor leisure grounds with athletic infrastructure: laser-graded natural lawns, protective perimeter tree belts, shaded spectator pavilions, and durable civil walkways.',
    image: un('photo-1585320806297-9794b3e4eeae'),
    highlight: 'Institutional & Club Typology',
  },
];

export const SCAPES_CERTIFICATIONS: DivisionCertification[] = [
  {
    key: 'iso14001',
    code: 'ISO 14001:2015',
    sub: 'Environmental Systems',
    title: 'Environmental Management Standards',
    scope: 'Sustainable Construction & Site Practices',
    text: 'Audited environmental management workflows ensuring sustainable site grading, minimal soil erosion, responsible water conservation, and zero chemical contamination across all project phases.',
    image: un('photo-1585320806297-9794b3e4eeae'),
  },
  {
    key: 'smartWater',
    code: 'Smart Water Code',
    sub: 'Water Conservation',
    title: 'Precision Water-Efficiency Engineering',
    scope: 'Sub-Surface Drip & Sensor Automation',
    text: 'Engineered irrigation systems delivering 40%+ water reduction through evapotranspiration sensors, computerized zone scheduling, and zero-runoff hydraulic layout calibration.',
    image: un('photo-1563514227147-6d2ff665a6a0'),
  },
  {
    key: 'bsHardscape',
    code: 'BS EN 1338 / 1340',
    sub: 'Civil Engineering Standards',
    title: 'Hardscape Load & Paving Integrity',
    scope: 'Pavers, Curbs & Sub-Base Compaction',
    text: 'Rigorous compliance with British and European standards for compressive strength, slip resistance, freeze-thaw durability, and heavy vehicular load-bearing stability on all paved surfaces.',
    image: un('photo-1513694203232-719a280e022f'),
  },
  {
    key: 'bsSoftscape',
    code: 'BS 3936 / BS 4428',
    sub: 'Horticultural Codes',
    title: 'Nursery Stock & Planting Architecture',
    scope: 'Tree Root Protection & Soil Conditioning',
    text: 'Standardized specifications for mature tree root-ball preservation, organic soil conditioning, biological aeration trenches, and high-percentage transplantation survival rates.',
    image: un('photo-1509316975850-ff9c5deb0cd9'),
  },
  {
    key: 'iso9001',
    code: 'ISO 9001:2015',
    sub: 'Quality Assurance',
    title: 'Integrated Project Quality Control',
    scope: 'Site Surveying, Laser Leveling & Delivery',
    text: 'Turnkey quality assurance protocols covering laser-guided site grading, underground pipe pressure testing, material testing laboratory certificates, and final landscape commissioning.',
    image: un('photo-1540555700478-4be289fbecef'),
  },
  {
    key: 'leedSustainable',
    code: 'LEED Alignment',
    sub: 'Green Building Guidelines',
    title: 'Sustainable Sites & Microclimate Design',
    scope: 'Heat-Island Mitigation & Native Species',
    text: 'Alignment with LEED sustainable sites principles: utilizing high-albedo paving to lower urban heat island effects, paired with drought-tolerant native vegetation requiring minimal supplemental hydration.',
    image: un('photo-1600585154340-be6161a56a0c'),
  },
];

export const ARC_SCAPES_ITEMS: ArcShowcaseItem[] = [
  { name: 'Hardscape Plazas', img: un('photo-1513694203232-719a280e022f') },
  { name: 'Softscapes', img: un('photo-1585320806297-9794b3e4eeae') },
  { name: 'Smart Irrigation', img: un('photo-1563514227147-6d2ff665a6a0') },
  { name: 'Water Features', img: 'https://waterpumps.co.za/cdn/shop/files/Largefloatingfountain_waterhouse.1.6.png?v=1788184365&width=1080' },
  { name: 'Timber Pergolas', img: un('photo-1598928506311-c55ded91a20c') },
  { name: 'Mature Palms', img: un('photo-1509316975850-ff9c5deb0cd9') },
  { name: 'Nightscapes', img: 'https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_430,q_75,w_640/v1/clients/nmmagazine/Anthony_Crowley_The_Windmill_Sentinel_At_Capulin_Nightscapes_0bc7c115-a6f3-4e4d-893d-232c781267f9.jpg' },
];
