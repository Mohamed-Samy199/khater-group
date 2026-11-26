import type { Metadata } from 'next';
import newsClientsBanner from '@/assets/banners/news-clients.png';
import JsonLd from '@/components/atoms/JsonLd';
import PageBanner from '@/components/molecules/PageBanner';
import ClientsSection from '@/components/organisms/home/ClientsSection';
import AmaalaSpotlightSection from '@/components/organisms/news-clients/AmaalaSpotlightSection';
import ClientSectorsSection from '@/components/organisms/news-clients/ClientSectorsSection';
import GlobalPartnersSection from '@/components/organisms/news-clients/GlobalPartnersSection';
import NewsMilestonesSection from '@/components/organisms/news-clients/NewsMilestonesSection';
import RegionalPresenceSection from '@/components/organisms/news-clients/RegionalPresenceSection';
import { breadcrumbJsonLd, buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'News & Clients',
  description:
    'Discover Khater Group global manufacturing alliances, Vision 2030 Red Sea Global Amaala Triple Bay spotlight, regional presence across Egypt & Saudi Arabia, and 36+ institutional clients.',
  path: '/news-clients',
  keywords: [
    'Khater Group clients',
    'Amaala Triple Bay Khater',
    'Red Sea Global',
    'Khater Group partners',
    'Jeddah Egypt offices',
  ],
});

export default function NewsClientsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/eg' },
          { name: 'News & Clients', path: '/news-clients' },
        ])}
      />

      <PageBanner
        image={newsClientsBanner}
        eyebrow="News & Clients"
        title="Global Alliances. Landmark Milestones."
        description="From Saudi Vision 2030 destinations with Red Sea Global to 40+ years of accredited European and American engineering partnerships across Egypt and MENA."
        breadcrumbs={[{ label: 'Home', to: '/eg' }, { label: 'News & Clients' }]}
        zoom
      />

      <AmaalaSpotlightSection />
      <RegionalPresenceSection />
      <ClientSectorsSection />
      <GlobalPartnersSection />
      <NewsMilestonesSection />
      <ClientsSection />
    </>
  );
}
