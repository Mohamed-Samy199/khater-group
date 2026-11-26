import type { CSSProperties } from 'react';
import Link from 'next/link';
import { ChevronRight, Trophy } from 'lucide-react';
import Container from '@/components/atoms/Container';
import { GroupMark } from '@/components/atoms/Logo';
import SafeImage from '@/components/atoms/SafeImage';
import type { AssetSource } from '@/lib/assets';
import type { BannerSpecItem, BreadcrumbItem } from '@/types/site';

function isZeroOrEmpty(val: string | number | boolean | null | undefined): boolean {
  if (val === null || val === undefined || val === false || val === '') return true;
  if (val === 0 || val === '0') return true;
  if (typeof val === 'string') {
    const trimmed = val.trim();
    if (/^0(\.0+)?(\s.*)?$/i.test(trimmed)) return true;
  }
  return false;
}

interface BusinessDetailBannerProps {
  image?: AssetSource | null;
  breadcrumbs?: BreadcrumbItem[];
  eyebrow?: string;
  title: string;
  description?: string;
  accentColor?: string;
  specsTitle?: string;
  specs?: BannerSpecItem[];
}

export default function BusinessDetailBanner({
  image,
  breadcrumbs = [],
  eyebrow,
  title,
  description,
  accentColor = '#DE1F26',
  specsTitle = 'Discipline Profile',
  specs = [],
}: BusinessDetailBannerProps) {
  const visibleSpecs = specs.filter((item) => item && !isZeroOrEmpty(item.value));

  const anim = (delay: number, cls = ''): { className: string; style: CSSProperties } => ({
    className: `${cls} animate-fade-up motion-reduce:animate-none`,
    style: { animationDelay: `${delay}ms` },
  });

  return (
    <header className="relative isolate flex min-h-[500px] overflow-hidden border-b border-white/10 bg-brand-black pt-32 pb-16 text-brand-white lg:min-h-[60svh] lg:pt-40 lg:pb-20">
      {image && (
        <SafeImage
          src={image}
          alt={title || ''}
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center transition-transform duration-1000 ease-out"
        />
      )}

      {/* Scrims */}
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(0,0,0,0.88)_0%,rgba(0,0,0,0.65)_50%,rgba(0,0,0,0.35)_100%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(0,0,0,0.7)_0%,transparent_30%,transparent_60%,rgba(0,0,0,0.85)_100%)]"
        aria-hidden="true"
      />

      <Container className="flex flex-col justify-end">
        {breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" {...anim(0, 'mb-6')}>
            <ol className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.2em] text-brand-silver">
              {breadcrumbs.map((b, i) => (
                <li key={`${b.label}-${i}`} className="flex items-center gap-2">
                  {b.to ? (
                    <Link href={b.to} className="transition-colors hover:text-brand-white">
                      {b.label}
                    </Link>
                  ) : (
                    <span
                      className="font-semibold"
                      style={{ color: accentColor }}
                      aria-current="page"
                    >
                      {b.label}
                    </span>
                  )}
                  {i < breadcrumbs.length - 1 && (
                    <ChevronRight size={13} className="text-white/30" aria-hidden="true" />
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            {eyebrow && (
              <div
                {...anim(
                  100,
                  'mb-5 inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-md'
                )}
              >
                <GroupMark className="h-3.5 w-auto" />
                <span>{eyebrow}</span>
              </div>
            )}

            <h1
              {...anim(
                200,
                'text-3xl font-extrabold uppercase tracking-tight text-white sm:text-5xl lg:text-6xl'
              )}
            >
              {title}
            </h1>

            {description && (
              <p
                {...anim(
                  350,
                  'mt-6 max-w-2xl text-base font-light leading-relaxed text-brand-silver sm:text-lg'
                )}
              >
                {description}
              </p>
            )}
          </div>

          {visibleSpecs.length > 0 && (
            <div
              {...anim(
                450,
                'lg:col-span-4 rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md shadow-xl'
              )}
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="font-mono text-xs uppercase tracking-widest text-brand-silver">
                  {specsTitle}
                </span>
                <Trophy size={16} style={{ color: accentColor }} aria-hidden="true" />
              </div>

              <dl className="mt-4 space-y-3.5 text-xs">
                {visibleSpecs.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <dt className="text-brand-silver">{item.label}</dt>
                    <dd
                      className={`font-semibold ${item.highlight ? '' : 'text-white'}`}
                      style={item.highlight ? { color: accentColor } : undefined}
                    >
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          )}
        </div>
      </Container>

      <span
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-white/40 via-white/10 to-transparent"
        aria-hidden="true"
      />
    </header>
  );
}
