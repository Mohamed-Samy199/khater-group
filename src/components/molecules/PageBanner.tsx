import type { CSSProperties, ReactNode } from 'react';
import Container from '@/components/atoms/Container';
import { GroupMark } from '@/components/atoms/Logo';
import SafeImage from '@/components/atoms/SafeImage';
import type { AssetSource } from '@/lib/assets';
import type { BreadcrumbItem } from '@/types/site';

const HEIGHTS: Record<'sm' | 'md' | 'lg', string> = {
  sm: 'min-h-[360px] md:min-h-[44svh]',
  md: 'min-h-[440px] md:min-h-[64svh]',
  lg: 'min-h-[520px] md:min-h-[72svh]',
};

interface PageBannerProps {
  image?: AssetSource | null;
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbs?: BreadcrumbItem[];
  align?: 'left' | 'center';
  height?: 'sm' | 'md' | 'lg';
  grayscale?: boolean;
  zoom?: boolean;
  children?: ReactNode;
}

export default function PageBanner({
  image,
  title,
  description,
  align = 'left',
  height = 'md',
  grayscale = false,
  zoom = false,
  children,
}: PageBannerProps) {
  const center = align === 'center';

  const anim = (delay: number, cls = ''): { className: string; style: CSSProperties } => ({
    className: `${cls} animate-fade-up motion-reduce:animate-none`,
    style: { animationDelay: `${delay}ms` },
  });

  return (
    <header
      className={`relative isolate flex overflow-hidden bg-brand-black text-brand-white ${HEIGHTS[height] || HEIGHTS.md}`}
    >
      {/* Background */}
      {image ? (
        <SafeImage
          src={image}
          alt=""
          fetchPriority="high"
          decoding="async"
          className={`absolute inset-0 -z-20 h-full w-full object-cover object-center ${
            grayscale ? 'grayscale' : ''
          } ${zoom ? 'animate-slow-zoom motion-reduce:animate-none' : ''}`}
        />
      ) : (
        <GroupMark className="pointer-events-none absolute -right-[6vw] bottom-[-10%] -z-20 h-[110%] opacity-[0.04]" />
      )}

      {/* Scrims */}
      <div
        className={`absolute inset-0 -z-10 ${
          center
            ? 'bg-black/55'
            : 'bg-[linear-gradient(90deg,rgba(0,0,0,0.85)_0%,rgba(0,0,0,0.55)_50%,rgba(0,0,0,0.2)_100%)]'
        }`}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(0,0,0,0.6)_0%,transparent_30%,transparent_55%,rgba(0,0,0,0.75)_100%)]"
        aria-hidden="true"
      />

      {/* Content */}
      <Container
        className={`flex flex-col justify-end pb-12 pt-32 md:pb-16 md:pt-40 ${
          center ? 'items-center text-center' : 'items-start text-left'
        }`}
      >
        <h1 {...anim(150, 'max-w-5xl text-3xl font-bold uppercase')}>
          {title}
        </h1>

        {description && (
          <p
            {...anim(300, 'mt-5 max-w-2xl text-base font-light leading-relaxed text-brand-silver md:text-lg')}
          >
            {description}
          </p>
        )}

        {children && <div {...anim(450, 'mt-8 flex flex-wrap gap-3')}>{children}</div>}
      </Container>

      <span
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-brand-white/40 via-brand-white/10 to-transparent"
        aria-hidden="true"
      />
    </header>
  );
}
