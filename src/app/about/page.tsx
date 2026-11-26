import type { Metadata } from 'next';
import aboutBanner from '@/assets/banners/about.webp';
import JsonLd from '@/components/atoms/JsonLd';
import PageBanner from '@/components/molecules/PageBanner';
import MissionVision from '@/components/organisms/about/MissionVision';
import OurCommitment from '@/components/organisms/about/OurCommitment';
import OurJourney from '@/components/organisms/about/OurJourney';
import WhoWeAre from '@/components/organisms/about/WhoWeAre';
import WhyChoose from '@/components/organisms/about/WhyChoose';
import WhatWeDo from '@/components/organisms/about/WhatWeDo';
import { breadcrumbJsonLd, buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'About Us',
  description:
    'Learn about Khater Group — an integrated engineering holding built since 1987 uniting sports infrastructure, active play, architectural landscapes, arena electronics, and Olympic aquatics.',
  path: '/about',
  keywords: [
    'About Khater Group',
    'Khater Group heritage',
    'since 1987',
    'turnkey sports infrastructure contractor',
  ],
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/eg' },
          { name: 'About Us', path: '/about' },
        ])}
      />
      <PageBanner
        image={aboutBanner}
        eyebrow="About Us"
        title="Built Across Every Environment"
        description="An integrated group bringing specialized expertise together across sports, landscapes, play, aquatics, and technology."
        breadcrumbs={[{ label: 'Home', to: '/eg' }, { label: 'About Us' }]}
        grayscale={false}
      />
      <WhoWeAre />
      <MissionVision />
      <OurJourney />
      <WhatWeDo />
      <WhyChoose />
      <OurCommitment />
    </>
  );
}
