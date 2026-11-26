'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ChevronLeft, ChevronRight, MapPin, Pause, Play } from 'lucide-react';
import { resolveAssetSrc, type AssetSource } from '@/lib/assets';
import type { DivisionProject } from '@/types/divisions';

gsap.registerPlugin(ScrollTrigger);

const SLIDE_DURATION = 4000;

export type DivisionThemeKey = 'sports' | 'play' | 'scapes' | 'tech' | 'aquatics';

const THEME_MAP: Record<
  DivisionThemeKey,
  {
    boxShadow: string;
    accentText: string;
    buttonHoverBg: string;
    tabActiveBorder: string;
    progressBg: string;
  }
> = {
  sports: {
    boxShadow: 'shadow-[0_15px_40px_-20px_rgba(0,0,0,0.08)]',
    accentText: 'text-sports-light',
    buttonHoverBg: 'hover:bg-sports-light',
    tabActiveBorder: 'border-sports-light/40 bg-sports-light/[0.04]',
    progressBg: 'bg-sports-light',
  },
  play: {
    boxShadow: 'shadow-[0_15px_40px_-20px_rgba(144,38,143,0.08)]',
    accentText: 'text-play',
    buttonHoverBg: 'hover:bg-play',
    tabActiveBorder: 'border-play/40 bg-play/[0.04]',
    progressBg: 'bg-play',
  },
  scapes: {
    boxShadow: 'shadow-[0_15px_40px_-20px_rgba(2,74,63,0.08)]',
    accentText: 'text-scapes',
    buttonHoverBg: 'hover:bg-scapes',
    tabActiveBorder: 'border-scapes/40 bg-scapes/[0.04]',
    progressBg: 'bg-scapes',
  },
  tech: {
    boxShadow: 'shadow-[0_15px_40px_-20px_rgba(53,42,117,0.08)]',
    accentText: 'text-tech-light',
    buttonHoverBg: 'hover:bg-tech',
    tabActiveBorder: 'border-tech/40 bg-tech/[0.04]',
    progressBg: 'bg-tech-light',
  },
  aquatics: {
    boxShadow: 'shadow-[0_15px_40px_-20px_rgba(0,131,189,0.08)]',
    accentText: 'text-aquatics',
    buttonHoverBg: 'hover:bg-aquatics',
    tabActiveBorder: 'border-aquatics/40 bg-aquatics/[0.04]',
    progressBg: 'bg-aquatics',
  },
};

interface DivisionProjectsShowcaseProps {
  theme: DivisionThemeKey;
  headingLead: string;
  headingAccent: string;
  description: string;
  projects: DivisionProject[];
  badgeIcon: ReactNode;
  logo?: AssetSource;
  logoAlt?: string;
  footerLabel: string;
  footerLeadingIcon?: ReactNode;
  ctaLabel?: string;
}

export default function DivisionProjectsShowcase({
  theme,
  headingLead,
  headingAccent,
  description,
  projects,
  badgeIcon,
  logo,
  logoAlt = '',
  footerLabel,
  footerLeadingIcon,
  ctaLabel = 'Project Details',
}: DivisionProjectsShowcaseProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const t = THEME_MAP[theme];
  const paused = isPaused || isHovered;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.showcase-box',
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const goNext = () => setCurrentIndex((prev) => (prev + 1) % projects.length);
  const goPrev = () => setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);

  const activeProject = projects[currentIndex];

  return (
    <section
      ref={sectionRef}
      className="relative border-t border-black/10 bg-white py-20 text-brand-black lg:py-28"
    >
      <style>{`
        @keyframes division-proj-progress-fill {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
      `}</style>

      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col justify-between gap-6 border-b border-black/10 pb-10 md:flex-row md:items-end">
          <div>
            <h2 className="text-4xl font-light tracking-tight text-brand-black sm:text-5xl lg:text-6xl">
              {headingLead} <span className="font-medium text-black/60">{headingAccent}</span>
            </h2>
          </div>
          <p className="max-w-md text-base font-light leading-relaxed text-black/70">
            {description}
          </p>
        </div>

        <div
          className={`showcase-box mt-8 overflow-hidden rounded-2xl border border-black/10 bg-[#FAFAFA] transition-all duration-500 ${t.boxShadow}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="grid grid-cols-1 items-stretch lg:grid-cols-12">
            <div className="relative h-56 overflow-hidden bg-neutral-100 sm:h-72 lg:col-span-7 lg:h-[350px]">
              <img
                key={activeProject.image}
                src={activeProject.image}
                alt={activeProject.name}
                className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-105"
              />
              <span className="absolute left-4 top-4 rounded-full border border-black/10 bg-white/90 px-3 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-black/80 shadow-sm backdrop-blur-md">
                {activeProject.highlight}
              </span>
            </div>

            <div className="flex flex-col justify-between border-t border-black/10 bg-white p-5 sm:p-7 lg:col-span-5 lg:border-l lg:border-t-0">
              <div>
                <div className={`mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider ${t.accentText}`}>
                  <MapPin className={`h-3.5 w-3.5 ${t.accentText}`} />
                  {activeProject.location}
                </div>

                <h3
                  key={activeProject.name}
                  className="text-xl font-semibold leading-tight tracking-tight text-brand-black sm:text-2xl"
                >
                  {activeProject.name}
                </h3>

                <div className="mt-2.5 inline-flex items-center gap-2 rounded-lg border border-black/10 bg-black/[0.03] px-3 py-1 font-mono text-xs text-black/70">
                  {badgeIcon}
                  <span>
                    {activeProject.type} •{' '}
                    <strong className="font-semibold text-black">{activeProject.capacity}</strong>
                  </span>
                </div>

                <p
                  key={activeProject.details}
                  className="mt-3 line-clamp-3 text-xs font-light leading-relaxed text-black/70 sm:text-sm"
                >
                  {activeProject.details}
                </p>
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-black/10 pt-3.5">
                <span className="flex items-center gap-2 text-xs font-medium text-black/60">
                  {logo && (
                    <img
                      src={resolveAssetSrc(logo)}
                      alt={logoAlt}
                      className="h-4 w-auto object-contain"
                    />
                  )}
                  {footerLeadingIcon}
                  {footerLabel}
                </span>
                <a
                  href="#contact"
                  className={`group inline-flex items-center gap-2 rounded-full bg-[#141414] px-4 py-2 text-xs font-semibold text-white shadow-sm transition-all duration-300 hover:shadow-md ${t.buttonHoverBg}`}
                >
                  {ctaLabel}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="grid flex-1 grid-cols-2 gap-3 sm:grid-cols-4">
            {projects.map((proj, idx) => {
              const isActive = currentIndex === idx;
              return (
                <button
                  key={proj.name}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  aria-current={isActive ? 'true' : undefined}
                  className={`group relative flex flex-col overflow-hidden rounded-xl border p-3 text-left transition-all duration-300 ${
                    isActive
                      ? `${t.tabActiveBorder} shadow-sm`
                      : 'border-black/10 bg-white hover:border-black/25 hover:bg-neutral-50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`font-mono text-[10px] font-bold tracking-widest ${
                        isActive ? t.accentText : 'text-black/40'
                      }`}
                    >
                      0{idx + 1}
                    </span>
                    <span className="truncate pl-2 text-[9px] font-medium uppercase tracking-wider text-black/40">
                      {proj.location.split(',')[0]}
                    </span>
                  </div>

                  <span
                    className={`mt-1.5 line-clamp-1 text-xs font-semibold transition-colors ${
                      isActive ? 'text-brand-black' : 'text-black/60 group-hover:text-black'
                    }`}
                  >
                    {proj.name}
                  </span>

                  <div className="mt-2.5 h-[2px] w-full overflow-hidden rounded-full bg-black/10">
                    {isActive && (
                      <div
                        key={`progress-${currentIndex}`}
                        onAnimationEnd={goNext}
                        className={`h-full origin-left ${t.progressBg}`}
                        style={{
                          animation: `division-proj-progress-fill ${SLIDE_DURATION}ms linear forwards`,
                          animationPlayState: paused ? 'paused' : 'running',
                        }}
                      />
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          <div className="flex shrink-0 items-center justify-end gap-2">
            <button
              type="button"
              onClick={() => setIsPaused((prev) => !prev)}
              aria-label={isPaused ? 'Resume slideshow' : 'Pause slideshow'}
              className="grid h-10 w-10 place-items-center rounded-full border border-black/15 bg-white text-black/70 transition hover:border-black hover:text-black"
            >
              {isPaused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
            </button>
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous project"
              className="grid h-10 w-10 place-items-center rounded-full border border-black/15 bg-white text-black/70 transition hover:border-black hover:text-black"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Next project"
              className="grid h-10 w-10 place-items-center rounded-full border border-black/15 bg-white text-black/70 transition hover:border-black hover:text-black"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
