import groupLogo from '@/assets/logos/khater-groups.png';
import sportsLogo from '@/assets/logos/khater-sports.png';
import playLogo from '@/assets/logos/khater-play.png';
import scapesLogo from '@/assets/logos/khater-scapes.png';
import techLogo from '@/assets/logos/khater-tech.png';
import aquaticsLogo from '@/assets/logos/khater-aquatics.png';
import sportsMarkMain from '@/assets/logos/khater-sports-main.png';
import sportsMarkTriangle from '@/assets/logos/khater-sports-triangle.png';
import playMarkMain from '@/assets/logos/khater-play-main.png';
import playMarkTriangle from '@/assets/logos/khater-play-triangle.png';
import scapesMarkMain from '@/assets/logos/khater-scapes-main.png';
import scapesMarkTriangle from '@/assets/logos/khater-scapes-triangle.png';
import techMarkMain from '@/assets/logos/khater-tech-main.png';
import techMarkTriangle from '@/assets/logos/khater-tech-triangle.png';
import aquaticsMarkMain from '@/assets/logos/khater-aquatics-main.png';
import aquaticsMarkTriangle from '@/assets/logos/khater-aquatics-triangle.png';
import type { DivisionInfo, LanguageOption, NavLinkItem } from '@/types/site';

export const SITE_NAME = 'Khater Group';

export const GROUP_LOGO = groupLogo;

// Main navigation (the "Our Businesses" dropdown is built from DIVISIONS)
export const NAV_LINKS: NavLinkItem[] = [
  { to: '/about', label: 'About Us' },
  { type: 'businesses', label: 'Our Businesses' },
  { to: '/projects', label: 'Projects' },
  { to: '/news-clients', label: 'News & Clients' },
  { to: '/careers', label: 'Careers' },
  { to: '/contact', label: 'Contact' },
];

export const LANGUAGES: LanguageOption[] = [
  { code: 'EN', label: 'English' },
  { code: 'AR', label: 'العربية' },
];

export const DIVISIONS: DivisionInfo[] = [
  { slug: 'sports', name: 'Sports', logo: sportsLogo, markMain: sportsMarkMain, markTriangle: sportsMarkTriangle },
  { slug: 'play', name: 'Play', logo: playLogo, markMain: playMarkMain, markTriangle: playMarkTriangle },
  { slug: 'scapes', name: 'Scapes', logo: scapesLogo, markMain: scapesMarkMain, markTriangle: scapesMarkTriangle },
  { slug: 'tech', name: 'Tech', logo: techLogo, markMain: techMarkMain, markTriangle: techMarkTriangle },
  { slug: 'aquatics', name: 'Aquatics', logo: aquaticsLogo, markMain: aquaticsMarkMain, markTriangle: aquaticsMarkTriangle },
];
