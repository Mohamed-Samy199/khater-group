import type {
  CareerFormState,
  CareerMetric,
  CulturePillar,
  FilterOption,
  JobOpening,
} from '@/types/careers';

export const CAREERS_METRICS: CareerMetric[] = [
  { value: '40+', label: 'Years of Engineering Legacy' },
  { value: '3,000+', label: 'Landmark Projects Executed' },
  { value: '5', label: 'Specialized Business Divisions' },
  { value: 'Regional', label: 'Expansion Across Egypt & KSA' },
];

export const CULTURE_PILLARS: CulturePillar[] = [
  {
    number: '01',
    title: 'Landmark Impact at Scale',
    description:
      'From national Olympic stadiums and New Capital sports cities to FIFA-certified pitches and premier urban landscapes, your daily work shapes the infrastructure of nations.',
    highlight: 'Mega Projects',
  },
  {
    number: '02',
    title: 'Multidisciplinary Mastery',
    description:
      'Work side-by-side with industry-leading civil, architectural, MEP, acoustic, and technology engineers in a cross-functional environment where every detail matters.',
    highlight: 'Synergistic Teams',
  },
  {
    number: '03',
    title: 'Direct Global Alliances',
    description:
      'Direct partnerships with 12+ tier-one European and American manufacturers across Switzerland, France, the UK, Austria, Spain, and the USA—giving you access to certified international standards.',
    highlight: 'World Standards',
  },
  {
    number: '04',
    title: 'A Merit-Driven Environment',
    description:
      'Khater is a place that brings out your best every day. We reward engineering precision, ownership, and initiative with structured career ladders and continuous professional advancement.',
    highlight: 'Career Longevity',
  },
];

export const DIVISIONS_FILTER: FilterOption[] = [
  { id: 'all', label: 'All Divisions' },
  { id: 'sports', label: 'Khater Sports' },
  { id: 'play', label: 'Khater Play' },
  { id: 'scapes', label: 'Khater Scapes' },
  { id: 'tech', label: 'Khater Tech' },
  { id: 'aquatics', label: 'Khater Aquatics' },
  { id: 'corporate', label: 'Corporate & Regional' },
];

export const DEPARTMENTS_FILTER: FilterOption[] = [
  { id: 'all', label: 'All Departments' },
  { id: 'technical-office', label: 'Technical Office' },
  { id: 'site-construction', label: 'Site & Execution' },
  { id: 'tendering-procurement', label: 'Tendering & Procurement' },
  { id: 'architecture-design', label: 'Architecture & Design' },
  { id: 'tech-mep', label: 'Technology & MEP' },
  { id: 'commercial-business', label: 'Commercial & Sales' },
];

export const JOB_OPENINGS: JobOpening[] = [
  {
    id: 'tech-office-engineer-civil-arch',
    title: 'Technical Office Engineer (Civil & Architectural)',
    division: 'sports',
    divisionName: 'Khater Sports',
    department: 'technical-office',
    departmentName: 'Technical Office',
    location: 'Cairo HQ, Nasr City',
    type: 'Full-Time',
    experience: '1 - 3 Years',
    shortDescription:
      'Prepare technical reports, construction shop drawings, quantity surveying, pricing support, and site coordination for high-profile sports complexes.',
    overview:
      'We are seeking a talented and proactive Technical Office Engineer (Civil / Architectural) to join our central technical office at Nasr City HQ. You will prepare accurate shop drawings, review design specifications, coordinate with site engineers, and ensure seamless project execution adhering to international sports federation standards.',
    responsibilities: [
      'Perform detailed site inspections and progress reviews across active construction sites.',
      'Prepare construction shop drawings, specifications, structural layouts, and comprehensive as-built plans.',
      'Conduct rigorous quantity surveying (QS) for all executed work and verify contractor invoices.',
      'Prepare and maintain official maps, technical documentation, architectural drawings, and master plans.',
      'Assist senior project managers and tendering teams with bill of quantities (BOQ) review and pricing analysis.',
      'Issue accurate actual material usage reports to reconcile site delivery with procurement orders.',
      'Coordinate timely schedule updates and resolve technical shop drawing clashes.',
    ],
    qualifications: [
      'Bachelor’s degree in Civil Engineering or Architectural Engineering from an accredited university.',
      '1 to 3 years of demonstrated technical office experience in civil construction or sports infrastructure.',
      'Proficiency in AutoCAD, Civil 3D, or Revit, with strong technical drafting terminology.',
      'Working knowledge of modern construction techniques, soil analysis, survey principles, and building codes.',
      'Excellent organizational ability to manage documentation archives and project drawing packages.',
      'Fluency in Arabic and professional proficiency in English.',
    ],
  },
  {
    id: 'procurement-engineer-construction',
    title: 'Procurement Engineer – Construction',
    division: 'sports',
    divisionName: 'Khater Sports',
    department: 'tendering-procurement',
    departmentName: 'Tendering & Procurement',
    location: 'Cairo HQ, Nasr City',
    type: 'Full-Time',
    experience: '2 - 5 Years',
    shortDescription:
      'Oversee the procurement of specialized construction materials, turf systems, equipment, and international vendor contracts.',
    overview:
      'Khater Sports is looking for a detail-oriented Procurement Engineer with solid construction industry experience to manage the sourcing of materials, machinery, and specialized services. You will collaborate directly with our European manufacturing partners and local suppliers to ensure optimal cost-effectiveness, premier quality, and on-time site deliveries.',
    responsibilities: [
      'Manage end-to-end procurement cycles for construction materials, specialized synthetic surfaces, and MEP equipment.',
      'Evaluate supplier proposals, negotiate commercial terms, and finalize purchase agreements within budget targets.',
      'Coordinate with our European and international partners (synthetic turf, track systems, athletic hardware) for timely importation and customs clearance.',
      'Perform rigorous vendor assessments, quality evaluations, and establish long-term vendor partnerships.',
      'Work closely with site project managers and the technical office to forecast material requirements and avoid delivery bottlenecks.',
      'Monitor price fluctuations of raw building materials and maintain an updated supplier database.',
    ],
    qualifications: [
      'Bachelor’s degree in Civil, Mechanical, or Industrial Engineering.',
      '2 to 5 years of proven experience in construction procurement, specialized finishes, or infrastructure works.',
      'Solid understanding of commercial contracts, import logistics, and supply chain management.',
      'Strong negotiation, analytical, and supplier relationship management skills.',
      'Proficiency in ERP procurement systems and Microsoft Excel.',
    ],
  },
  {
    id: 'tendering-pricing-engineer',
    title: 'Tendering & Pricing Engineer',
    division: 'sports',
    divisionName: 'Khater Sports',
    department: 'tendering-procurement',
    departmentName: 'Tendering & Procurement',
    location: 'Cairo HQ, Nasr City',
    type: 'Full-Time',
    experience: '2 - 5 Years',
    shortDescription:
      'Prepare comprehensive technical and financial bids, detailed cost estimates, and competitive proposals for sports and civil construction tenders.',
    overview:
      'The Tendering & Pricing Engineer is responsible for analyzing complex public and private tenders, studying specifications, and crafting winning technical and commercial proposals for landmark sports stadium and municipal facility projects across Egypt and the Gulf.',
    responsibilities: [
      'Review tender documentation, scopes of work, drawings, and contract conditions to identify risks and technical requirements.',
      'Prepare detailed quantity take-offs, cost estimates, and pricing models for labor, materials, equipment, and subcontractors.',
      'Request and evaluate quotations from suppliers and specialized subcontractors to secure competitive unit rates.',
      'Collaborate with technical engineering and project execution teams to formulate the methodology and execution schedules.',
      'Prepare complete tender submission files (technical proposal, commercial package, compliance sheets).',
      'Attend pre-bid clarification meetings, post-tender negotiations, and handover awarded projects to execution teams.',
    ],
    qualifications: [
      'Bachelor’s degree in Civil Engineering, Architectural Engineering, or Construction Management.',
      '2 to 5 years of solid experience in tendering, pricing, and cost estimation in construction or infrastructure.',
      'In-depth knowledge of Egyptian and regional contracting standards (FIDIC, government bidding regulations).',
      'High numerical acumen, mastery of MS Excel, and familiarity with cost estimation software.',
      'Ability to meet strict deadlines with exceptional precision.',
    ],
  },
  {
    id: 'autocad-bim-draftsman',
    title: 'AutoCAD / BIM Draftsman',
    division: 'sports',
    divisionName: 'Khater Sports',
    department: 'architecture-design',
    departmentName: 'Architecture & Design',
    location: 'Cairo HQ, Nasr City',
    type: 'Full-Time',
    experience: '1 - 3 Years',
    shortDescription:
      'Produce accurate architectural and structural shop drawings, detail drafting, and as-built plans for sports facilities and multi-sport layouts.',
    overview:
      'We are seeking a motivated and detail-oriented AutoCAD / BIM Draftsman with 1 to 3 years of experience to join our core engineering design department. You will be responsible for creating precise technical layouts, cross-sections, and detail drawings adhering to international federation specifications (FIFA, FIBA, IAAF).',
    responsibilities: [
      'Draft detailed architectural and civil shop drawings, stadium seating layouts, and athletic field markings.',
      'Convert concept sketches, architectural drawings, and engineer markups into coordinated CAD and BIM models.',
      'Generate clear cross-sections, foundation details, sub-base build-ups, and drainage schematics.',
      'Review and incorporate revisions from consultants, project managers, and client representatives.',
      'Ensure all drawings comply with company standard templates, layer systems, and scale guidelines.',
      'Prepare final as-built drawing packages upon completion of site execution.',
    ],
    qualifications: [
      'Diploma or Bachelor’s degree in Architecture, Civil Technology, or equivalent drafting certification.',
      '1 to 3 years of experience preparing technical shop drawings for architectural or construction firms.',
      'Mastery of AutoCAD (2D/3D); working familiarity with Autodesk Revit or BIM workflows is an advantage.',
      'Strong eye for detail, accurate dimensioning, and understanding of civil/architectural construction details.',
      'Ability to coordinate with multidisciplinary engineering teams.',
    ],
  },
  {
    id: 'senior-site-engineer-civil',
    title: 'Senior Site Construction Engineer',
    division: 'sports',
    divisionName: 'Khater Sports',
    department: 'site-construction',
    departmentName: 'Site & Execution',
    location: 'New Administrative Capital / Cairo Sites',
    type: 'Full-Time',
    experience: '4 - 7 Years',
    shortDescription:
      'Manage on-site civil works, sub-base grading, drainage, synthetic turf installation, and contractor coordination on mega sports facilities.',
    overview:
      'Khater Sports is looking for an experienced Senior Site Engineer to lead field execution for major sports complexes, Olympic tracks, and stadium installations. You will supervise site activities, maintain rigorous quality control, and enforce strict safety standards on-site.',
    responsibilities: [
      'Supervise daily civil construction activities including excavation, sub-base preparation, asphalt paving, and drainage installation.',
      'Coordinate specialized turf, athletic track, and seating installation teams to ensure strict compliance with project drawings.',
      'Conduct site inspections with consultant engineers and client representatives for formal work approvals.',
      'Enforce occupational health, safety, and environmental (HSE) standards across all job site operations.',
      'Monitor daily work progress against master construction schedules and submit detailed daily/weekly site logs.',
      'Manage site material deliveries, inventory storage, and coordinate equipment deployment.',
    ],
    qualifications: [
      'Bachelor’s degree in Civil Engineering.',
      '4 to 7 years of on-site execution experience with recognized contracting or infrastructure companies.',
      'Proven background in grading, earthworks, drainage infrastructure, and asphalt works.',
      'Strong leadership skills with the ability to manage site foremen, subcontractors, and labor crews.',
      'Valid driving license and flexibility to oversee site projects.',
    ],
  },
  {
    id: 'senior-landscape-architect',
    title: 'Senior Landscape Architect',
    division: 'scapes',
    divisionName: 'Khater Scapes',
    department: 'architecture-design',
    departmentName: 'Architecture & Design',
    location: 'Cairo HQ / Design Studio',
    type: 'Full-Time',
    experience: '4 - 8 Years',
    shortDescription:
      'Lead design development, hardscape/softscape master planning, and technical detailing for luxury compounds, promenades, and resort waterfronts.',
    overview:
      'Khater Scapes is seeking a Senior Landscape Architect to drive aesthetic and technical innovation across large-scale urban, civic, and coastal landscape developments. You will lead concept development through to construction detailing, integrating smart irrigation and lighting systems.',
    responsibilities: [
      'Develop compelling conceptual designs, presentation decks, and 3D visualizations for high-end landscape master plans.',
      'Produce comprehensive construction documentation including hardscape layouts, planting palettes, grading, and water feature details.',
      'Coordinate with MEP and structural engineers to integrate irrigation networks, pumping rooms, and architectural illumination.',
      'Conduct material research, inspect nursery specimens, and select natural stone, timber, and decorative finishes.',
      'Liaise with master developer clients and consultants during design reviews and client workshops.',
    ],
    qualifications: [
      'Bachelor’s degree in Architectural Engineering or Landscape Architecture.',
      '4 to 8 years of solid landscape architecture experience in reputable design consultancies or landscape contractors.',
      'Mastery of AutoCAD, Rhino/SketchUp, Lumion/V-Ray, and Adobe Creative Suite.',
      'Extensive knowledge of MENA region plant palettes, arid climate irrigation, and high-spec hardscaping materials.',
      'Outstanding visual presentation and client communication skills.',
    ],
  },
  {
    id: 'aquatics-mep-engineer',
    title: 'Aquatic Systems & MEP Site Engineer',
    division: 'aquatics',
    divisionName: 'Khater Aquatics',
    department: 'tech-mep',
    departmentName: 'Technology & MEP',
    location: 'Cairo / Regional Sites',
    type: 'Full-Time',
    experience: '3 - 6 Years',
    shortDescription:
      'Supervise electro-mechanical installation, filtration piping, pump plants, and chemical dosing for Olympic and commercial pool complexes.',
    overview:
      'Khater Aquatics seeks an MEP Engineer specialized in aquatic facilities, commercial swimming pools, and architectural water features. You will oversee the installation and commissioning of hydraulic networks, commercial pump stations, filtration plants, and disinfection systems.',
    responsibilities: [
      'Supervise mechanical piping installation (PVC-U, HDPE), balancing tanks, filtration batteries, and pool shell fittings.',
      'Oversee installation and testing of pool electrical panels, variable speed pumps, underwater LED lighting, and automated dosing systems.',
      'Conduct hydraulic pressure testing, pipe flushing, and system commissioning in line with international FINA/World Aquatics guidelines.',
      'Review MEP shop drawings and coordinate pipe penetration sleeves with civil and structural teams before concrete pours.',
      'Prepare operation and maintenance manuals (O&M) and conduct handover testing for facility management teams.',
    ],
    qualifications: [
      'Bachelor’s degree in Mechanical or Electrical Engineering.',
      '3 to 6 years of focused experience in swimming pool MEP, water treatment, or large-scale pumping systems.',
      'Familiarity with European commercial pool standards (DIN, FINA regulations).',
      'Strong diagnostic skills for pumps, heat exchangers, chemical controllers, and sand filtration units.',
      'Strong team leadership and site coordination skills.',
    ],
  },
  {
    id: 'sports-tech-led-engineer',
    title: 'Stadium Technology & Display Systems Engineer',
    division: 'tech',
    divisionName: 'Khater Tech',
    department: 'tech-mep',
    departmentName: 'Technology & MEP',
    location: 'Cairo HQ & Regional Arenas',
    type: 'Full-Time',
    experience: '2 - 5 Years',
    shortDescription:
      'Deploy and configure mega arena LED scoreboards, perimeter video displays, Swiss timing systems, and stadium sound infrastructure.',
    overview:
      'Khater Tech delivers cutting-edge technology for world-class sports arenas. We are looking for an Electronics / Systems Engineer to lead the installation, network integration, and calibration of arena video displays, Swiss Timing systems, broadcast feeds, and acoustic sound reinforcement.',
    responsibilities: [
      'Install, configure, and calibrate large-format indoor/outdoor LED screens, fascia perimeter boards, and video controllers (NovaStar, Brompton).',
      'Integrate electronic scoring, shot clocks, and precision timing systems for athletics, swimming, and multi-sport gymnasiums.',
      'Configure TCP/IP control networks, fiber optic signal distribution, and video processing scalers for live arena feeds.',
      'Perform pre-commissioning testing, color calibration, and pixel integrity verification before championship events.',
      'Deliver technical support during major sporting tournaments and train venue operators on content management software.',
    ],
    qualifications: [
      'Bachelor’s degree in Electronics, Communications, Computer Engineering, or Mechatronics.',
      '2 to 5 years of practical experience with commercial LED display systems, professional AV, or industrial network systems.',
      'Solid understanding of low-voltage cabling, HDMI/SDI protocols, and network switching.',
      'Strong problem-solving mindset and willingness to support live stadium events.',
    ],
  },
  {
    id: 'recreational-play-project-coordinator',
    title: 'Playgrounds & Recreation Project Coordinator',
    division: 'play',
    divisionName: 'Khater Play',
    department: 'site-construction',
    departmentName: 'Site & Execution',
    location: 'Cairo HQ / Multi-Site',
    type: 'Full-Time',
    experience: '2 - 4 Years',
    shortDescription:
      'Coordinate certified playground equipment installation, shock-absorbent EPDM surfaces, and safety compliance audits for kids recreation zones.',
    overview:
      'Khater Play designs and installs world-class certified play environments for residential compounds, schools, and civic parks. We need a dynamic Project Coordinator to supervise equipment erection, safety flooring casting, and ensure full compliance with international EN 1176 safety standards.',
    responsibilities: [
      'Coordinate site preparations, foundation footing casting, and erection of timber and steel play structures.',
      'Supervise in-situ EPDM rubber wet-pour flooring installation and verify critical fall height (CFH) impact attenuation.',
      'Inspect imported play equipment shipments, verify hardware kits, and report site readiness.',
      'Conduct final safety inspections and coordinate third-party safety certification audits.',
      'Maintain close client liaison throughout delivery and sign-off phases.',
    ],
    qualifications: [
      'Bachelor’s degree in Civil Engineering, Architecture, or Mechanical Technology.',
      '2 to 4 years of project execution experience in landscape, playground, or light steel installations.',
      'Familiarity with safety standards for playground equipment (EN 1176 / ASTM).',
      'Strong interpersonal and contractor coordination skills.',
    ],
  },
  {
    id: 'commercial-business-development-manager',
    title: 'Business Development & Commercial Manager',
    division: 'corporate',
    divisionName: 'Corporate & Regional',
    department: 'commercial-business',
    departmentName: 'Commercial & Sales',
    location: 'Cairo HQ / Riyadh Office',
    type: 'Full-Time',
    experience: '5 - 10 Years',
    shortDescription:
      'Drive institutional partnerships, government sports infrastructure contracts, and private developer relationships across Egypt and Saudi Arabia.',
    overview:
      'Khater Group is seeking a high-caliber Commercial & Business Development Manager to expand our footprint across major sports cities, private master developments, and hospitality projects throughout Egypt and the GCC.',
    responsibilities: [
      'Identify and cultivate strategic relationships with real estate master developers, ministries of youth & sports, and engineering consultants.',
      'Position Khater Group’s integrated capabilities across all five divisions for mega turnkey infrastructure opportunities.',
      'Lead high-level commercial negotiations, joint venture structuring, and framework agreements.',
      'Monitor market trends, regional sports infrastructure announcements, and competitor activities.',
      'Collaborate closely with tendering and engineering leadership to ensure commercially viable and winning bids.',
    ],
    qualifications: [
      'Bachelor’s degree in Engineering, Business Administration, or related discipline; MBA is an advantage.',
      '5 to 10 years of proven track record in commercial sales or business development within construction, building materials, or sports infrastructure.',
      'Strong network with top-tier consultants, developers, and sports federations in Egypt or the GCC.',
      'Exceptional presentation, negotiation, and executive communication skills.',
    ],
  },
];

export const FORM_DEFAULTS: CareerFormState = {
  fullName: '',
  email: '',
  phone: '',
  location: 'Cairo, Egypt',
  division: 'sports',
  position: '',
  experience: '1-3 years',
  education: 'Bachelor Degree',
  currentRole: '',
  currentEmployer: '',
  noticePeriod: '1 Month',
  portfolioUrl: '',
  coverLetter: '',
};

export const EXPERIENCE_LEVELS: string[] = [
  'Fresh Graduate (< 1 year)',
  '1 - 3 Years',
  '3 - 5 Years',
  '5 - 8 Years',
  '8 - 12 Years',
  '12+ Years (Executive / Director)',
];

export const EDUCATION_LEVELS: string[] = [
  'Bachelor of Civil Engineering',
  'Bachelor of Architectural Engineering',
  'Bachelor of Mechanical / Electrical Engineering',
  'Bachelor of Business / Commerce',
  'Diploma / Technical Institute Certificate',
  'Master’s Degree / Postgraduate',
  'Other Degree',
];

export const NOTICE_PERIODS: string[] = [
  'Immediately Available',
  '2 Weeks',
  '1 Month',
  '2 Months',
  '3 Months',
];

export const LOCATIONS_LIST: string[] = [
  'Cairo (HQ - Nasr City / Sites)',
  'New Administrative Capital',
  'Giza / 6th of October',
  'Alexandria',
  'Red Sea / Coastal Sites',
  'Riyadh, Saudi Arabia',
  'Jeddah, Saudi Arabia',
  'Other / Willing to Relocate',
];
