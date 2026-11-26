import type { Metadata } from 'next';
import JsonLd from '@/components/atoms/JsonLd';
import ScapesArcShowcase from '@/components/organisms/businesses/scapes/ScapesArcShowcase';
import ScapesCertifications from '@/components/organisms/businesses/scapes/ScapesCertifications';
import ScapesEcosystem from '@/components/organisms/businesses/scapes/ScapesEcosystem';
import ScapesHero from '@/components/organisms/businesses/scapes/ScapesHero';
import ScapesProjects from '@/components/organisms/businesses/scapes/ScapesProjects';
import ScapesSolutions from '@/components/organisms/businesses/scapes/ScapesSolutions';
import { breadcrumbJsonLd, buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Khater Scapes — Landscapes & Urban Spaces',
  description:
    'Architectural hardscapes, living softscapes, smart irrigation networks, shaded timber pergolas, reflection water features, and specimen palm transplantation to British & ISO 14001 standards.',
  path: '/businesses/scapes',
  keywords: [
    'Khater Scapes',
    'landscape contractors Egypt',
    'hardscape softscape MENA',
    'smart irrigation systems',
    'urban civic plazas',
  ],
});

export default function ScapesPage() {
  return (
    <div className="min-h-screen selection:bg-scapes selection:text-white">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/eg' },
          { name: 'Khater Scapes', path: '/businesses/scapes' },
        ])}
      />
      <ScapesHero />
      <ScapesArcShowcase />
      <ScapesSolutions />
      <ScapesProjects />
      <ScapesCertifications />
      <ScapesEcosystem />
    </div>
  );
}
