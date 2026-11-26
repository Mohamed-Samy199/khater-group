import type { Metadata } from 'next';
import JsonLd from '@/components/atoms/JsonLd';
import AquaticsArcShowcase from '@/components/organisms/businesses/aquatics/AquaticsArcShowcase';
import AquaticsCertifications from '@/components/organisms/businesses/aquatics/AquaticsCertifications';
import AquaticsEcosystem from '@/components/organisms/businesses/aquatics/AquaticsEcosystem';
import AquaticsHero from '@/components/organisms/businesses/aquatics/AquaticsHero';
import AquaticsProjects from '@/components/organisms/businesses/aquatics/AquaticsProjects';
import AquaticsSolutions from '@/components/organisms/businesses/aquatics/AquaticsSolutions';
import { breadcrumbJsonLd, buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Khater Aquatics — Olympic & Leisure Water Facilities',
  description:
    'Turnkey 50m Olympic swimming pools, 25m training pools, architectural resort leisure pools, MEP filtration rooms, and FINA-certified competition equipment across Egypt and MENA.',
  path: '/businesses/aquatics',
  keywords: [
    'Khater Aquatics',
    'Olympic swimming pool Egypt',
    'FINA swimming pools',
    'prefabricated competition pools',
    'pool MEP filtration',
  ],
});

export default function AquaticsPage() {
  return (
    <div className="min-h-screen selection:bg-aquatics selection:text-white">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/eg' },
          { name: 'Khater Aquatics', path: '/businesses/aquatics' },
        ])}
      />
      <AquaticsHero />
      <AquaticsArcShowcase />
      <AquaticsSolutions />
      <AquaticsProjects />
      <AquaticsCertifications />
      <AquaticsEcosystem />
    </div>
  );
}
