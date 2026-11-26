import type { Metadata } from 'next';
import JsonLd from '@/components/atoms/JsonLd';
import TechArcShowcase from '@/components/organisms/businesses/tech/TechArcShowcase';
import TechCertifications from '@/components/organisms/businesses/tech/TechCertifications';
import TechEcosystem from '@/components/organisms/businesses/tech/TechEcosystem';
import TechHero from '@/components/organisms/businesses/tech/TechHero';
import TechProjects from '@/components/organisms/businesses/tech/TechProjects';
import TechSolutions from '@/components/organisms/businesses/tech/TechSolutions';
import { breadcrumbJsonLd, buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Khater Tech — Sports Electronics & Systems',
  description:
    'FIBA-approved Stramatel LED scoreboards, center-hung video cubes, Scorepad consoles, World Aquatics pool timing touchpads, and EN 12193 broadcast arena lighting.',
  path: '/businesses/tech',
  keywords: [
    'Khater Tech',
    'Stramatel LED scoreboards',
    'FIBA video cube Egypt',
    'swimming pool touchpad timing',
    'EN 12193 stadium floodlights',
  ],
});

export default function TechPage() {
  return (
    <div className="min-h-screen selection:bg-tech selection:text-white">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/eg' },
          { name: 'Khater Tech', path: '/businesses/tech' },
        ])}
      />
      <TechHero />
      <TechArcShowcase />
      <TechSolutions />
      <TechProjects />
      <TechCertifications />
      <TechEcosystem />
    </div>
  );
}
