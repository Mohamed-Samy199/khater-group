import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import JsonLd from '@/components/atoms/JsonLd';
import BusinessDetailBanner from '@/components/molecules/BusinessDetailBanner';
import SportNavigator from '@/components/organisms/sport-detail/SportNavigator';
import SportProjects from '@/components/organisms/sport-detail/SportProjects';
import SportSystems from '@/components/organisms/sport-detail/SportSystems';
import { COURTS } from '@/constants/sportsDisciplines';
import { resolveAssetSrc } from '@/lib/assets';
import { breadcrumbJsonLd, buildMetadata } from '@/lib/seo';

interface SportDetailPageProps {
  params: Promise<{ sportId: string }>;
}

export function generateStaticParams() {
  return COURTS.map((court) => ({
    sportId: court.id,
  }));
}

export async function generateMetadata({ params }: SportDetailPageProps): Promise<Metadata> {
  const { sportId } = await params;
  const sport = COURTS.find((c) => c.id === sportId);

  if (!sport) {
    return buildMetadata({
      title: 'Sport Discipline Not Found',
      description: 'The requested sport facility discipline could not be found.',
      path: `/businesses/sports/${sportId}`,
    });
  }

  return buildMetadata({
    title: `${sport.name} Courts & Fields — Khater Sports`,
    description: sport.description,
    path: `/businesses/sports/${sport.id}`,
    keywords: [
      `${sport.name} courts Egypt`,
      `${sport.name} surface systems`,
      'Khater Sports',
      sport.category,
      sport.badge || '',
    ].filter(Boolean),
    image: sport.cover ? resolveAssetSrc(sport.cover) : undefined,
  });
}

export default async function SportDetailPage({ params }: SportDetailPageProps) {
  const { sportId } = await params;
  const curIdx = COURTS.findIndex((c) => c.id === sportId);

  if (curIdx === -1) {
    notFound();
  }

  const sport = COURTS[curIdx];
  const prevSport = COURTS[(curIdx - 1 + COURTS.length) % COURTS.length];
  const nextSport = COURTS[(curIdx + 1) % COURTS.length];

  return (
    <div className="min-h-screen bg-white text-brand-black selection:bg-sports-light selection:text-white">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/eg' },
          { name: 'Khater Sports', path: '/businesses/sports' },
          { name: sport.name, path: `/businesses/sports/${sport.id}` },
        ])}
      />

      <BusinessDetailBanner
        image={sport.cover}
        breadcrumbs={[
          { label: 'Home', to: '/eg' },
          { label: 'Khater Sports', to: '/businesses/sports' },
          { label: sport.name },
        ]}
        eyebrow={sport.badge || sport.category}
        title={`${sport.name} Courts & Fields`}
        description={sport.description}
        accentColor="#DE1F26"
        specsTitle="Discipline Profile"
        specs={[
          { label: 'Category', value: sport.category },
          {
            label: 'Delivered Projects',
            value: sport.projects?.length > 0 ? `${sport.projects.length} Venues` : null,
            highlight: true,
          },
          {
            label: 'Approved Systems',
            value: sport.systems?.length > 0 ? `${sport.systems.length} Surfaces` : null,
          },
          { label: 'Standard', value: sport.badge },
        ]}
      />

      <SportSystems key={`systems-${sport.id}`} sport={sport} />
      <SportProjects key={`projects-${sport.id}`} sport={sport} />
      <SportNavigator prevSport={prevSport} nextSport={nextSport} />
    </div>
  );
}
