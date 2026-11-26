import type { Metadata } from 'next';
import projectsBanner from '@/assets/banners/projects.webp';
import khaterAquaticsLogo from '@/assets/logos/khater-aquatics.png';
import khaterPlayLogo from '@/assets/logos/khater-play.png';
import khaterScapesLogo from '@/assets/logos/khater-scapes.png';
import khaterSportsLogo from '@/assets/logos/khater-sports.png';
import khaterTechLogo from '@/assets/logos/khater-tech.png';
import JsonLd from '@/components/atoms/JsonLd';
import PageBanner from '@/components/molecules/PageBanner';
import DivisionProjectsSection, {
  type DivisionDisplayConfig,
} from '@/components/organisms/projects/DivisionProjectsSection';
import ProjectsFloatingNav from '@/components/organisms/projects/ProjectsFloatingNav';
import ProjectsMetricsBar from '@/components/organisms/projects/ProjectsMetricsBar';
import { ProjectsModalProvider } from '@/components/organisms/projects/ProjectsModalProvider';
import { ALL_PROJECTS } from '@/constants/projectsData';
import { breadcrumbJsonLd, buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Projects Portfolio',
  description:
    'Explore 40+ years of landmark stadiums, playgrounds, architectural landscapes, arena electronics, and Olympic swimming pools delivered by Khater Group across MENA.',
  path: '/projects',
  keywords: [
    'Khater Group projects',
    'Borg El Arab Stadium',
    'New Administrative Capital Sports City',
    'Amaala Triple Bay',
    'Olympic swimming pool Egypt',
  ],
});

const DIVISIONS: DivisionDisplayConfig[] = [
  {
    id: 'sports',
    slug: 'sports',
    name: 'Khater Sports',
    title: 'Stadiums & Sports Infrastructure',
    logo: khaterSportsLogo,
    color: '#DE1F26',
  },
  {
    id: 'play',
    slug: 'play',
    name: 'Khater Play',
    title: 'Playgrounds & Recreation Areas',
    logo: khaterPlayLogo,
    color: '#DF72E8',
  },
  {
    id: 'scapes',
    slug: 'scapes',
    name: 'Khater Scapes',
    title: 'Architectural Landscaping & Waterfronts',
    logo: khaterScapesLogo,
    color: '#8DC85B',
  },
  {
    id: 'tech',
    slug: 'tech',
    name: 'Khater Tech',
    title: 'Arena Electronics & Timing',
    logo: khaterTechLogo,
    color: '#6481BD',
  },
  {
    id: 'aquatics',
    slug: 'aquatics',
    name: 'Khater Aquatics',
    title: 'Olympic Pools & Aquatic Complexes',
    logo: khaterAquaticsLogo,
    color: '#14C1E2',
  },
];

export default function ProjectsPage() {
  return (
    <ProjectsModalProvider>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/eg' },
          { name: 'Projects', path: '/projects' },
        ])}
      />

      <PageBanner
        image={projectsBanner}
        eyebrow="Projects Portfolio"
        title="40+ Years of Landmark Projects Across MENA"
        description="Explore Khater Group’s specialized business sectors delivering turnkey sports infrastructure, active play hubs, living landscapes, arena electronics, and competition aquatic centers."
        breadcrumbs={[{ label: 'Home', to: '/eg' }, { label: 'Projects' }]}
        zoom
        grayscale={false}
      />

      <ProjectsMetricsBar />

      <div className="divide-y divide-[#B3B3B3]/30">
        {DIVISIONS.map((division, idx) => (
          <DivisionProjectsSection
            key={division.id}
            division={division}
            projects={ALL_PROJECTS.filter((p) => p.divisionId === division.id)}
            bgLight={idx % 2 === 1}
          />
        ))}
      </div>

      <ProjectsFloatingNav divisions={DIVISIONS} />
    </ProjectsModalProvider>
  );
}
