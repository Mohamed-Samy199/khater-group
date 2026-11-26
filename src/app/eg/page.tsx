import type { Metadata } from 'next';
import JsonLd from '@/components/atoms/JsonLd';
import AboutSection from '@/components/organisms/home/AboutSection';
import ClientsSection from '@/components/organisms/home/ClientsSection';
import GlobalPresence from '@/components/organisms/home/GlobalPresence';
import Hero from '@/components/organisms/home/Hero';
import ServicesSection from '@/components/organisms/home/ServicesSection';
import { breadcrumbJsonLd, buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Khater Group Egypt | Sports, Aquatics, Tech, Scapes & Play',
  description:
    'Khater Group Egypt delivers turnkey solutions across five specialized sectors: Sports, Play, Scapes, Tech, and Aquatics, backed by 40+ years of experience since 1987.',
  path: '/eg',
  keywords: [
    'Khater Group Egypt',
    'Khater Sports',
    'Khater Aquatics',
    'Khater Tech',
    'Khater Scapes',
    'Khater Play',
    'sports courts Egypt',
    'Olympic swimming pools MENA',
  ],
});

export default function EgyptHomePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Gateway', path: '/' },
          { name: 'Khater Group Egypt (EG)', path: '/eg' },
        ])}
      />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <GlobalPresence />
      <ClientsSection />
    </>
  );
}
