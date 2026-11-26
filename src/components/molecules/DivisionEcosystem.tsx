import Link from 'next/link';
import { DIVISIONS } from '@/constants/site';
import { resolveAssetSrc } from '@/lib/assets';
import type { DivisionSlug } from '@/types/site';
import EcosystemGridAnimator from './EcosystemGridAnimator';

interface SisterDivisionMeta {
  slug: DivisionSlug;
  name: string;
  shortName: string;
  subtitle: string;
  color: string;
  accent: string;
}

const ALL_SISTERS: SisterDivisionMeta[] = [
  {
    slug: 'sports',
    name: 'KHATER SPORTS',
    shortName: 'SPORTS',
    subtitle: 'Stadiums & Sports Infrastructure',
    color: '#A11D21',
    accent: '#DE1F26',
  },
  {
    slug: 'play',
    name: 'KHATER PLAY',
    shortName: 'PLAY',
    subtitle: 'Active Play & Recreation',
    color: '#90268F',
    accent: '#90268F',
  },
  {
    slug: 'scapes',
    name: 'KHATER SCAPES',
    shortName: 'SCAPES',
    subtitle: 'Landscapes & Urban Spaces',
    color: '#024A3F',
    accent: '#10B981',
  },
  {
    slug: 'tech',
    name: 'KHATER TECH',
    shortName: 'TECH',
    subtitle: 'Sports Electronics & Systems',
    color: '#352A75',
    accent: '#2563EB',
  },
  {
    slug: 'aquatics',
    name: 'KHATER AQUATICS',
    shortName: 'AQUATICS',
    subtitle: 'Olympic & Leisure Water Facilities',
    color: '#0083BD',
    accent: '#0284C7',
  },
];

interface DivisionEcosystemProps {
  currentSlug: DivisionSlug;
  description: string;
}

export default function DivisionEcosystem({
  currentSlug,
  description,
}: DivisionEcosystemProps) {
  const sisters = ALL_SISTERS.filter((s) => s.slug !== currentSlug).map((s) => {
    const divisionInfo = DIVISIONS.find((d) => d.slug === s.slug)!;
    return {
      ...s,
      markMain: divisionInfo.markMain,
      markTriangle: divisionInfo.markTriangle,
    };
  });

  return (
    <section
      aria-label="The Khater Group Network"
      className="relative border-t border-black/10 bg-white py-20 text-brand-black lg:py-28"
    >
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6 border-b border-black/10 pb-10 md:flex-row md:items-end">
          <div>
            <h2 className="text-4xl font-light tracking-tight text-brand-black sm:text-5xl lg:text-6xl">
              One Vision. <span className="font-medium text-black/60">Five Specialized Sectors.</span>
            </h2>
          </div>
          <p className="max-w-md text-base font-light leading-relaxed text-black/70">
            {description}
          </p>
        </div>

        {/* 4 Cards Grid */}
        <EcosystemGridAnimator className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {sisters.map((div) => (
            <Link
              key={div.slug}
              href={`/businesses/${div.slug}`}
              data-eco-card
              className="group relative flex flex-col items-center justify-center p-6 text-center transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-none sm:p-7"
            >
              <div className="relative flex w-full flex-col items-center pb-2 pt-1">
                <div className="relative z-10 flex h-24 w-24 flex-col items-center justify-center rounded-full border border-black/15 bg-white transition-all duration-300 group-hover:border-black/35">
                  <div className="relative h-10 w-10">
                    <img
                      data-eco-mark
                      src={resolveAssetSrc(div.markMain)}
                      alt=""
                      className="absolute inset-0 h-full w-full object-contain"
                      style={{ transformOrigin: '50% 50%', willChange: 'transform' }}
                    />
                    <img
                      src={resolveAssetSrc(div.markTriangle)}
                      alt=""
                      className="absolute inset-0 h-full w-full object-contain"
                    />
                  </div>

                  <span
                    className="mt-1 font-mono text-[9px] font-bold uppercase tracking-[0.2em]"
                    style={{ color: div.accent || div.color }}
                  >
                    {div.shortName}
                  </span>
                </div>
              </div>

              <div className="mt-5 flex flex-col items-center justify-start">
                <h3 className="text-lg font-bold uppercase tracking-wider text-brand-black sm:text-xl">
                  {div.name}
                </h3>

                <p
                  className="mt-1.5 text-xs font-semibold tracking-wide sm:text-[13px]"
                  style={{ color: div.accent || div.color }}
                >
                  {div.subtitle}
                </p>

                <span
                  className="mt-4 block h-[2px] w-8 rounded-full transition-all duration-300 group-hover:w-12"
                  style={{ backgroundColor: div.accent || div.color }}
                  aria-hidden="true"
                />
              </div>
            </Link>
          ))}
        </EcosystemGridAnimator>
      </div>
    </section>
  );
}
