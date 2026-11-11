// export const SITE_NAME = 'Khater Group';

// export const NAV_LINKS = [
//   { to: '/', label: 'Home' },
//   { to: '/about', label: 'About' },
//   { to: '/projects', label: 'Projects' },
// ];

// // `color` = primary sub-brand color, `accent` = lighter supporting color.
// export const DIVISIONS = [
//   { slug: 'sports', name: 'Sports', color: '#A11D21', accent: '#DE1F26' },
//   { slug: 'play', name: 'Play', color: '#90268F', accent: '#DF72E8' },
//   { slug: 'scapes', name: 'Scapes', color: '#024A3F', accent: '#8DC85B' },
//   { slug: 'tech', name: 'Tech', color: '#352A75', accent: '#6481BD' },
//   { slug: 'aquatics', name: 'Aquatics', color: '#0083BD', accent: '#14C1E2' },
// ];

import groupLogo from '../assets/logos/khater-groups.png';
import sportsLogo from '../assets/logos/khater-sports.png';
import playLogo from '../assets/logos/khater-play.png';
import scapesLogo from '../assets/logos/khater-scapes.png';
import techLogo from '../assets/logos/khater-tech.png';
import aquaticsLogo from '../assets/logos/khater-aquatics.png';
import sportsMarkMain from '../assets/logos/khater-sports-main.png';
import sportsMarkTriangle from '../assets/logos/khater-sports-triangle.png';
import playMarkMain from '../assets/logos/khater-play-main.png';
import playMarkTriangle from '../assets/logos/khater-play-triangle.png';
import scapesMarkMain from '../assets/logos/khater-scapes-main.png';
import scapesMarkTriangle from '../assets/logos/khater-scapes-triangle.png';
import techMarkMain from '../assets/logos/khater-tech-main.png';
import techMarkTriangle from '../assets/logos/khater-tech-triangle.png';
import aquaticsMarkMain from '../assets/logos/khater-aquatics-main.png';
import aquaticsMarkTriangle from '../assets/logos/khater-aquatics-triangle.png';

export const SITE_NAME = 'Khater Group';

export const GROUP_LOGO = groupLogo;

// Main navigation (the "Our Businesses" dropdown is built from DIVISIONS)
export const NAV_LINKS = [
  { to: '/about', label: 'About Us' },
  { type: 'businesses', label: 'Our Businesses' },
  { to: '/projects', label: 'Projects' },
  { to: '/news', label: 'News & Insights' },
  { to: '/careers', label: 'Careers' },
  { to: '/contact', label: 'Contact' },
];

export const LANGUAGES = [
  { code: 'EN', label: 'English' },
  { code: 'AR', label: 'العربية' },
];

export const DIVISIONS = [
  { slug: 'sports', name: 'Sports', logo: sportsLogo, markMain: sportsMarkMain, markTriangle: sportsMarkTriangle },
  { slug: 'play', name: 'Play', logo: playLogo, markMain: playMarkMain, markTriangle: playMarkTriangle },
  { slug: 'scapes', name: 'Scapes', logo: scapesLogo, markMain: scapesMarkMain, markTriangle: scapesMarkTriangle },
  { slug: 'tech', name: 'Tech', logo: techLogo, markMain: techMarkMain, markTriangle: techMarkTriangle },
  { slug: 'aquatics', name: 'Aquatics', logo: aquaticsLogo, markMain: aquaticsMarkMain, markTriangle: aquaticsMarkTriangle },
];
