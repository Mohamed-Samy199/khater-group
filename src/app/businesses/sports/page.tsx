import type { Metadata } from 'next';
import JsonLd from '@/components/atoms/JsonLd';
import SportsArcShowcase from '@/components/organisms/businesses/sports/SportsArcShowcase';
import SportsCertifications from '@/components/organisms/businesses/sports/SportsCertifications';
import SportsDisciplines from '@/components/organisms/businesses/sports/SportsDisciplines';
import SportsEcosystem from '@/components/organisms/businesses/sports/SportsEcosystem';
import SportsHero from '@/components/organisms/businesses/sports/SportsHero';
import SportsProjects from '@/components/organisms/businesses/sports/SportsProjects';
import { breadcrumbJsonLd, buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Khater Sports — Stadiums & Sports Infrastructure',
  description:
    'FIFA, FIBA, ITF, FIH, WSF, and World Athletics certified sports pitches, running tracks, indoor maple parquet courts, tennis, padel, and multi-sport stadiums across Egypt and MENA.',
  path: '/businesses/sports',
  keywords: [
    'Khater Sports',
    'FIFA synthetic turf Egypt',
    'World Athletics running track',
    'padel tennis squash courts',
    'sports stadium construction',
  ],
});

export default function SportsPage() {
  return (
    <div className="min-h-screen selection:bg-[#DE1F26] selection:text-white">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/eg' },
          { name: 'Khater Sports', path: '/businesses/sports' },
        ])}
      />
      <SportsHero />
      <SportsArcShowcase />
      <SportsDisciplines />
      <SportsProjects />
      <SportsCertifications />
      <SportsEcosystem />
    </div>
  );
}
