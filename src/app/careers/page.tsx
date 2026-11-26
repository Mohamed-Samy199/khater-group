import type { Metadata } from 'next';
import careersBanner from '@/assets/banners/careers.jpg';
import JsonLd from '@/components/atoms/JsonLd';
import PageBanner from '@/components/molecules/PageBanner';
import CareerCulture from '@/components/organisms/careers/CareerCulture';
import CareerOpenings from '@/components/organisms/careers/CareerOpenings';
import CareersMetricsBar from '@/components/organisms/careers/CareersMetricsBar';
import { CareersModalProvider } from '@/components/organisms/careers/CareersModalProvider';
import CareerTalentPoolBanner from '@/components/organisms/careers/CareerTalentPoolBanner';
import { breadcrumbJsonLd, buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Careers',
  description:
    'Join Khater Group engineers, landscape architects, and MEP specialists delivering Egypt and MENA’s premier sports complexes, aquatic centers, and urban landscapes.',
  path: '/careers',
  keywords: [
    'Khater Group careers',
    'engineering jobs Egypt',
    'sports construction jobs',
    'landscape architect Cairo Jeddah',
  ],
});

export default function CareersPage() {
  return (
    <CareersModalProvider>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/eg' },
          { name: 'Careers', path: '/careers' },
        ])}
      />
      <div className="min-h-screen bg-white">
        <PageBanner
          image={careersBanner}
          eyebrow="Careers at Khater"
          title="Build Landmark Infrastructure With Us"
          description="Join the engineers, architects, and planners executing Egypt and the region’s most ambitious sports complexes, aquatic centers, and urban landscapes."
          breadcrumbs={[{ label: 'Home', to: '/eg' }, { label: 'Careers' }]}
          height="md"
          grayscale={false}
        />

        <CareersMetricsBar />
        <CareerCulture />
        <CareerOpenings />
        <CareerTalentPoolBanner />
      </div>
    </CareersModalProvider>
  );
}
