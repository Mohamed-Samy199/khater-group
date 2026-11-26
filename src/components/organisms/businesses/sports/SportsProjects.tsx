import { Activity, Trophy } from 'lucide-react';
import DivisionProjectsShowcase from '@/components/molecules/DivisionProjectsShowcase';
import type { DivisionProject } from '@/types/divisions';

const ICONIC_PROJECTS: DivisionProject[] = [
  {
    name: 'Borg El Arab International Stadium',
    location: 'Alexandria, Egypt',
    type: 'Olympic Football Stadium & Athletics',
    capacity: '86,000 Spectators',
    details:
      'Full synthetic turf training fields, competition athletic track resurfacing, and high-load sub-base drainage systems.',
    image:
      'https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=1200&q=80',
    highlight: 'Flagship National Stadium',
  },
  {
    name: 'New Administrative Capital Sports City',
    location: 'New Capital, Egypt',
    type: 'Multi-Venue Olympic Hub',
    capacity: 'Multi-Arena Complex',
    details:
      'Olympic-standard multi-purpose arenas, FIFA quality training grounds, and international tennis & padel complex.',
    image:
      'https://images.unsplash.com/photo-1577223625816-7546f13df25d?auto=format&fit=crop&w=1200&q=80',
    highlight: 'Modern Megaproject',
  },
  {
    name: 'Alexandria University Olympic Stadium',
    location: 'Alexandria, Egypt',
    type: 'University Sports Complex',
    capacity: '20,000 Spectators',
    details:
      'Certified World Athletics synthetic running track, full regulation football pitch, and indoor sports parquet floors.',
    image:
      'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=80',
    highlight: 'Academic Athletic Benchmark',
  },
  {
    name: 'Gezira Sporting Club & Maadi Club',
    location: 'Cairo, Egypt',
    type: 'Historic Premier Clubs',
    capacity: 'Private Competition Venues',
    details:
      'Comprehensive tournament clay & hard tennis courts, panoramic padel arenas, and high-frequency training multi-courts.',
    image:
      'https://media.istockphoto.com/id/622991650/photo/tennis-ball-blue-court-black-net.jpg?b=1&s=612x612&w=0&k=20&c=lzNK7ACdiYfRUV3fAxIWUdx-krdeeYqGtcW9eDr7Wf4=',
    highlight: 'Heritage Private Clubs',
  },
];

export default function SportsProjects() {
  return (
    <DivisionProjectsShowcase
      theme="sports"
      headingLead="Arenas Of Glory"
      headingAccent="& Projects"
      description="Explore our iconic national stadiums and sports complexes where Khater Sports engineering comes alive."
      projects={ICONIC_PROJECTS}
      badgeIcon={<Activity className="h-3.5 w-3.5 text-sports-light" />}
      footerLeadingIcon={<Trophy className="h-4 w-4 text-sports-light" />}
      footerLabel="Championship Proven"
      ctaLabel="Project Details"
    />
  );
}
