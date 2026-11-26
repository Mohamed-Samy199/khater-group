'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ArrowUpRight, CheckCircle2, Sparkles, X } from 'lucide-react';
import type { StandardSolution } from '@/types/divisions';

export type SolutionThemeKey = 'scapes' | 'tech' | 'aquatics';

const THEME_STYLES: Record<
  SolutionThemeKey,
  {
    ringFocus: string;
    pillActive: string;
    cardHover: string;
    accentText: string;
    groupHoverAccentText: string;
    dotBg: string;
    chipBorder: string;
    badgeBg: string;
    doneButton: string;
  }
> = {
  scapes: {
    ringFocus: 'focus-visible:ring-scapes',
    pillActive: 'bg-scapes text-white shadow-[0_4px_16px_rgba(2,74,63,0.35)]',
    cardHover: 'hover:border-scapes/60 hover:shadow-[0_16px_36px_-10px_rgba(2,74,63,0.14)]',
    accentText: 'text-scapes',
    groupHoverAccentText: 'group-hover:text-scapes',
    dotBg: 'bg-scapes-light',
    chipBorder: 'border-scapes/20 bg-scapes/[0.05] text-scapes',
    badgeBg: 'bg-scapes',
    doneButton: 'bg-scapes hover:bg-[#01352d]',
  },
  tech: {
    ringFocus: 'focus-visible:ring-tech',
    pillActive: 'bg-tech text-white shadow-[0_4px_16px_rgba(53,42,117,0.35)]',
    cardHover: 'hover:border-tech/60 hover:shadow-[0_16px_36px_-10px_rgba(53,42,117,0.14)]',
    accentText: 'text-tech-light',
    groupHoverAccentText: 'group-hover:text-tech',
    dotBg: 'bg-tech-light',
    chipBorder: 'border-tech/20 bg-tech/[0.05] text-tech',
    badgeBg: 'bg-tech',
    doneButton: 'bg-tech hover:bg-[#231b52]',
  },
  aquatics: {
    ringFocus: 'focus-visible:ring-aquatics',
    pillActive: 'bg-aquatics text-white shadow-[0_4px_16px_rgba(0,131,189,0.35)]',
    cardHover: 'hover:border-aquatics/60 hover:shadow-[0_16px_36px_-10px_rgba(0,131,189,0.14)]',
    accentText: 'text-aquatics',
    groupHoverAccentText: 'group-hover:text-aquatics',
    dotBg: 'bg-aquatics-light',
    chipBorder: 'border-aquatics/20 bg-aquatics/[0.05] text-aquatics',
    badgeBg: 'bg-aquatics',
    doneButton: 'bg-aquatics hover:bg-[#006999]',
  },
};

const reducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

interface StandardSolutionsGridProps {
  id: string;
  theme: SolutionThemeKey;
  headingLead: string;
  headingAccent: string;
  description: string;
  categories: string[];
  solutions: StandardSolution[];
  cardActionLabel?: string;
  modalScopeHeading?: string;
  modalClassificationHeading?: string;
}

export default function StandardSolutionsGrid({
  id,
  theme,
  headingLead,
  headingAccent,
  description,
  categories,
  solutions,
  cardActionLabel = 'View Full Scope',
  modalScopeHeading = 'Official Scope of Works',
  modalClassificationHeading = 'Service Classification',
}: StandardSolutionsGridProps) {
  const [cat, setCat] = useState('All');
  const [selectedSolution, setSelectedSolution] = useState<StandardSolution | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);
  const t = THEME_STYLES[theme];

  const filtered = cat === 'All' ? solutions : solutions.filter((s) => s.category === cat);

  useEffect(() => {
    if (reducedMotion()) return undefined;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.solution-card',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.05, ease: 'power2.out' }
      );
    }, gridRef);
    return () => ctx.revert();
  }, [cat]);

  return (
    <section
      id={id}
      className="relative border-t border-black/10 bg-white py-20 text-brand-black lg:py-28"
    >
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col justify-between gap-6 border-b border-black/10 pb-12 md:flex-row md:items-end">
          <div>
            <h2 className="text-4xl font-light tracking-tight text-brand-black sm:text-5xl lg:text-6xl">
              {headingLead} <span className="font-medium text-black/60">{headingAccent}</span>
            </h2>
          </div>
          <p className="max-w-md text-base font-light leading-relaxed text-black/70">
            {description}
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-2 pb-8">
          {categories.map((name) => (
            <button
              key={name}
              type="button"
              onClick={() => setCat(name)}
              aria-pressed={cat === name}
              className={`rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 ${t.ringFocus} ${
                cat === name
                  ? t.pillActive
                  : 'border border-black/10 bg-black/[0.03] text-black/70 hover:bg-black/[0.08] hover:text-black'
              }`}
            >
              {name}
            </button>
          ))}
        </div>

        <div ref={gridRef} className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((sol) => (
            <div
              key={sol.id}
              onClick={() => setSelectedSolution(sol)}
              className={`solution-card group flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-black/10 bg-white text-left transition-all duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 ${t.cardHover} ${t.ringFocus}`}
            >
              <div className="relative h-52 w-full overflow-hidden bg-neutral-100">
                <img
                  src={sol.image}
                  alt={sol.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full border border-black/10 bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-black/80 backdrop-blur-md">
                  {sol.scopeBadge}
                </span>
              </div>

              <div className="flex flex-1 flex-col justify-between p-5">
                <div>
                  <span className={`font-mono text-[10px] font-bold uppercase tracking-widest ${t.accentText}`}>
                    {sol.category}
                  </span>
                  <h3 className={`mt-1 text-lg font-semibold tracking-tight text-brand-black transition-colors ${t.groupHoverAccentText}`}>
                    {sol.name}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-xs font-light leading-relaxed text-black/60">
                    {sol.description}
                  </p>
                </div>

                <div className="mt-5 border-t border-black/5 pt-3">
                  <div className={`flex items-center justify-between text-xs font-medium text-black/70 ${t.groupHoverAccentText}`}>
                    <span>{cardActionLabel}</span>
                    <ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedSolution && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm transition-opacity"
          onClick={() => setSelectedSolution(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-black/10 bg-white p-6 shadow-2xl sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedSolution(null)}
              aria-label="Close dialog"
              className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full border border-black/10 bg-neutral-100 text-black/70 transition hover:bg-black hover:text-white"
            >
              <X size={18} />
            </button>

            <div className="relative h-64 w-full overflow-hidden rounded-2xl bg-neutral-100 sm:h-72">
              <img
                src={selectedSolution.image}
                alt={selectedSolution.name}
                className="h-full w-full object-cover"
              />
              <span className={`absolute left-4 top-4 rounded-full px-3.5 py-1 text-xs font-semibold text-white shadow-md ${t.badgeBg}`}>
                {selectedSolution.scopeBadge}
              </span>
            </div>

            <div className="mt-6">
              <span className={`font-mono text-xs font-bold uppercase tracking-widest ${t.accentText}`}>
                {selectedSolution.category}
              </span>
              <h3 className="mt-1 text-2xl font-bold tracking-tight text-brand-black sm:text-3xl">
                {selectedSolution.name}
              </h3>
              <p className="mt-3 text-sm font-light leading-relaxed text-black/70 sm:text-base">
                {selectedSolution.description}
              </p>

              <div className="mt-6 rounded-2xl border border-black/10 bg-[#FAFAFA] p-5">
                <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-black/60">
                  <CheckCircle2 size={16} className={t.accentText} />
                  {modalScopeHeading}
                </h4>
                <div className="mt-4 grid grid-cols-1 gap-2.5 text-xs sm:grid-cols-2">
                  {selectedSolution.scopeItems.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2.5 rounded-xl border border-black/5 bg-white p-3 font-medium text-black/80"
                    >
                      <span className={`h-2 w-2 shrink-0 rounded-full ${t.dotBg}`} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5">
                <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-black/60">
                  <Sparkles size={15} className={t.accentText} />
                  {modalClassificationHeading}
                </h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-medium ${t.chipBorder}`}>
                    <CheckCircle2 size={13} />
                    {selectedSolution.category}
                  </span>
                  <span className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-medium ${t.chipBorder}`}>
                    <CheckCircle2 size={13} />
                    {selectedSolution.scopeBadge}
                  </span>
                </div>
              </div>

              <div className="mt-8 flex justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedSolution(null)}
                  className={`rounded-full px-6 py-2.5 text-xs font-semibold text-white shadow-md transition ${t.doneButton}`}
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
