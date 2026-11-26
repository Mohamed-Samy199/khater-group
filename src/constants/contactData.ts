import groupLogo from '@/assets/logos/khater-groups.png';
import sportsLogo from '@/assets/logos/khater-sports.png';
import aquaticsLogo from '@/assets/logos/khater-aquatics.png';
import playLogo from '@/assets/logos/khater-play.png';
import scapesLogo from '@/assets/logos/khater-scapes.png';
import techLogo from '@/assets/logos/khater-tech.png';
import type { ContactDivision, ContactFaqItem, ContactOffice } from '@/types/contact';

export const CONTACT_OFFICES: ContactOffice[] = [
  {
    id: 'cairo-hq',
    country: 'Egypt',
    city: 'Cairo',
    title: 'Headquarters & Engineering Hub',
    address: 'Namaa Building, Ramsis Extension St., Nasr City, Cairo, Egypt',
    fullAddress: 'Namaa Building, Ramsis Extension Street, Nasr City, Cairo 11765, Egypt',
    phonePrimary: '+20 100 120 4191',
    phoneLandlines: ['02-2346120', '02-2346121', '02-2346122', '02-2346123'],
    fax: '02-2346126',
    email: 'info@khatersports.com',
    secondaryEmail: 'contact@khater-group.com',
    workingHours: 'Sunday – Thursday: 8:30 AM – 4:30 PM (GMT+2)',
    weekend: 'Friday & Saturday: Closed',
    mapsUrl: 'https://maps.google.com/?q=Namaa+Building+Ramsis+Extension+Nasr+City+Cairo',
    embedQuery: 'Namaa Building, Ramsis Extension St, Nasr City, Cairo Governorate, Egypt',
    status: 'Main Operations Hub',
    badges: ['Headquarters', 'Turnkey MEP & Civil', 'Central Warehouse & Labs'],
  },
  {
    id: 'jeddah-branch',
    country: 'Saudi Arabia',
    city: 'Jeddah',
    title: 'Regional Office – Western Province',
    address: '3729 Khalid Ibn Luai 7480, Jeddah, Kingdom of Saudi Arabia',
    fullAddress: '3729 Khalid Ibn Luai, Al-Ruwais District, Jeddah 23213, Kingdom of Saudi Arabia',
    phonePrimary: '+20 100 120 4191',
    email: 'info@khatersports.com',
    secondaryEmail: 'info@khatersports.com',
    workingHours: 'Sunday – Thursday: 8:30 AM – 4:30 PM',
    weekend: 'Friday & Saturday: Closed',
    mapsUrl: 'https://maps.google.com/?q=3729+Khalid+Ibn+Luai+Jeddah+Saudi+Arabia',
    embedQuery: 'Khalid Ibn Luai, Jeddah, Saudi Arabia',
    status: 'GCC & Regional Operations',
    badges: ['GCC Expansion Hub', 'Arena Consulting', 'Regional Project Delivery'],
  },
];

export const CONTACT_DIVISIONS: ContactDivision[] = [
  {
    id: 'general',
    name: 'Khater Group',
    label: 'Turnkey Multi-Disciplinary Projects',
    logo: groupLogo,
    email: 'info@khatersports.com',
    color: '#000000',
    description: 'Integrated mega-projects combining sports, aquatic, landscaping and technology.',
  },
  {
    id: 'sports',
    name: 'Khater Sports',
    label: 'Sports Infrastructure & Stadiums',
    logo: sportsLogo,
    email: 'info@khatersports.com',
    color: '#DE1F26',
    description: 'FIFA stadiums, IAAF athletic tracks, FIBA indoor arenas, paddle & tennis clubs.',
  },
  {
    id: 'aquatics',
    name: 'Khater Aquatics',
    label: 'Olympic & Commercial Swimming Pools',
    logo: aquaticsLogo,
    email: 'info@khatersports.com',
    color: '#14C1E2',
    description: 'World Aquatics 50m/25m competition pools, MEP filtration, water parks & wellness.',
  },
  {
    id: 'play',
    name: 'Khater Play',
    label: 'Playgrounds & High-Impact Surfacing',
    logo: playLogo,
    email: 'info@khatersports.com',
    color: '#DF72E8',
    description: 'EN 1176/1177 certified children play environments, theme parks, rubber flooring.',
  },
  {
    id: 'scapes',
    name: 'Khater Scapes',
    label: 'Urban Hardscape & Softscape',
    logo: scapesLogo,
    email: 'info@khatersports.com',
    color: '#8DC85B',
    description: 'Masterplanned public parks, smart irrigation, water features & civil hardscapes.',
  },
  {
    id: 'tech',
    name: 'Khater Tech',
    label: 'Sports Electronics & Illumination',
    logo: techLogo,
    email: 'info@khatersports.com',
    color: '#6481BD',
    description: 'FIBA LED video cubes, timing touchpads, EN 12193 arena broadcast illumination.',
  },
];

export const CONTACT_FAQS: ContactFaqItem[] = [
  {
    question: 'How do I submit an RFP or BoQ for a turnkey sports or aquatic complex?',
    answer:
      'You can submit your documents directly through the inquiry form on this page by attaching your specifications, or email our engineering estimators directly at info@khatersports.com. Our technical team typically provides an initial feasibility review within 2 business days.',
  },
  {
    question: 'Does Khater Group handle projects outside of Egypt?',
    answer:
      'Yes. Through our regional office in Jeddah, Saudi Arabia, and our international engineering logistics network, Khater Group delivers turnkey sports, aquatic, and landscape infrastructure across the GCC and North Africa.',
  },
  {
    question: 'Can Khater Group act as a specialized sub-contractor for general EPC contractors?',
    answer:
      'Absolutely. We frequently collaborate with tier-one regional contractors (including Orascom, Hassan Allam, Rowad Modern Engineering, and Petrojet) as the specialized partner for international federation-certified sports surfaces, Olympic MEP pools, and precision electronics.',
  },
  {
    question: 'Can we schedule an on-site technical inspection or architectural consultation?',
    answer:
      'Yes. Our civil and MEP engineers conduct rigorous on-site inspections for grading, sub-base laser leveling, soil drainage, and structural suitability before any turf or rubber installation begins. Reach out via phone or the contact form to arrange a site visit.',
  },
  {
    question: 'How do international manufacturers register as certified suppliers?',
    answer:
      'We partner with accredited global material and equipment suppliers (FIFA, World Athletics, FIBA, World Aquatics). Manufacturers may submit their technical data sheets, ISO audits, and federation test certificates to procurement@khater-group.com.',
  },
];
