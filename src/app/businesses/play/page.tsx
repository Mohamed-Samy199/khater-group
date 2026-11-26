import type { Metadata } from 'next';
import JsonLd from '@/components/atoms/JsonLd';
import PlayArcShowcase from '@/components/organisms/businesses/play/PlayArcShowcase';
import PlayCertifications from '@/components/organisms/businesses/play/PlayCertifications';
import PlayEcosystem from '@/components/organisms/businesses/play/PlayEcosystem';
import PlayHero from '@/components/organisms/businesses/play/PlayHero';
import PlayProjects from '@/components/organisms/businesses/play/PlayProjects';
import PlaySolutions from '@/components/organisms/businesses/play/PlaySolutions';
import { breadcrumbJsonLd, buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Khater Play — Active Play & Recreation',
  description:
    'Turnkey playgrounds engineered to EN 1176 and EN 1177 safety standards: multi-level play towers, wet-pour EPDM rubber surfacing, climbing rope pyramids, and splash pads.',
  path: '/businesses/play',
  keywords: [
    'Khater Play',
    'EN 1176 playgrounds Egypt',
    'EPDM safety flooring',
    'splash pads',
    'inclusive playgrounds MENA',
  ],
});

export default function PlayPage() {
  return (
    <div className="min-h-screen selection:bg-play selection:text-white">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/eg' },
          { name: 'Khater Play', path: '/businesses/play' },
        ])}
      />
      <PlayHero />
      <PlayArcShowcase />
      <PlaySolutions />
      <PlayProjects />
      <PlayCertifications />
      <PlayEcosystem />
    </div>
  );
}
