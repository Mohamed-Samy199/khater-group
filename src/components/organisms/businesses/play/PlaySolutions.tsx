'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ArrowUpRight, CheckCircle2, ShieldCheck, Sparkles, X } from 'lucide-react';
import { PLAY_CATEGORIES, PLAY_SOLUTIONS } from '@/constants/playData';
import type { PlaySolution } from '@/types/divisions';

const reducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export default function PlaySolutions() {
  const [cat, setCat] = useState<string>('All');
  const [selectedSolution, setSelectedSolution] = useState<PlaySolution | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);

  const filtered =
    cat === 'All' ? PLAY_SOLUTIONS : PLAY_SOLUTIONS.filter((s) => s.category === cat);

  useEffect(() => {
    if (reducedMotion()) return undefined;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.solution-card',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.06, ease: 'power2.out' }
      );
    }, gridRef);
    return () => ctx.revert();
  }, [cat]);

  return (
    <section
      id="play-solutions"
      className="relative border-t border-black/10 bg-white py-20 text-brand-black lg:py-28"
    >
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col justify-between gap-6 border-b border-black/10 pb-12 md:flex-row md:items-end">
          <div>
            <h2 className="text-4xl font-light tracking-tight text-brand-black sm:text-5xl lg:text-6xl">
              Play Systems <span className="font-medium text-black/60">&amp; Surfacing</span>
            </h2>
          </div>
          <p className="max-w-md text-base font-light leading-relaxed text-black/70">
            From certified EN 1177 shock-absorbing EPDM flooring to multi-level architectural adventure towers: explore our turnkey playground systems.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-2 pb-8">
          {PLAY_CATEGORIES.map((name) => (
            <button
              key={name}
              type="button"
              onClick={() => setCat(name)}
              aria-pressed={cat === name}
              className={`rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-play ${
                cat === name
                  ? 'bg-play text-white shadow-[0_4px_16px_rgba(144,38,143,0.35)]'
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
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedSolution(sol);
                }
              }}
              role="button"
              tabIndex={0}
              className="solution-card group flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-black/10 bg-white text-left transition-all duration-300 hover:-translate-y-1 hover:border-play/60 hover:shadow-[0_16px_36px_-10px_rgba(144,38,143,0.14)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-play"
            >
              <div className="relative h-52 w-full overflow-hidden bg-neutral-100">
                <img
                  src={sol.image}
                  alt={sol.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full border border-black/10 bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-black/80 backdrop-blur-md">
                  {sol.badge}
                </span>
              </div>

              <div className="flex flex-1 flex-col justify-between p-5">
                <div>
                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-play">
                    {sol.category}
                  </span>
                  <h3 className="mt-1 text-lg font-semibold tracking-tight text-brand-black transition-colors group-hover:text-play">
                    {sol.name}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-xs font-light leading-relaxed text-black/60">
                    {sol.description}
                  </p>
                </div>

                <div className="mt-5 border-t border-black/5 pt-3">
                  <div className="flex items-center justify-between text-xs font-medium text-black/70 group-hover:text-play">
                    <span>View Specifications</span>
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
              <span className="absolute left-4 top-4 rounded-full bg-play px-3.5 py-1 text-xs font-semibold text-white shadow-md">
                {selectedSolution.badge}
              </span>
            </div>

            <div className="mt-6">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-play">
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
                  <ShieldCheck size={16} className="text-play" />
                  Technical Engineering Specifications
                </h4>
                <div className="mt-4 grid grid-cols-1 gap-3 text-xs sm:grid-cols-2">
                  {Object.entries(selectedSolution.specs).map(([key, val]) => (
                    <div key={key} className="rounded-xl border border-black/5 bg-white p-3">
                      <span className="block font-mono text-[10px] uppercase text-black/40">
                        {key.replace(/([A-Z])/g, ' $1')}
                      </span>
                      <span className="mt-0.5 block font-semibold text-brand-black">{val}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5">
                <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-black/60">
                  <Sparkles size={15} className="text-play" />
                  Key Highlights
                </h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {selectedSolution.features.map((feat) => (
                    <span
                      key={feat}
                      className="inline-flex items-center gap-1.5 rounded-full border border-play/20 bg-play/[0.05] px-3.5 py-1.5 text-xs font-medium text-play"
                    >
                      <CheckCircle2 size={13} />
                      {feat}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedSolution(null)}
                  className="rounded-full bg-play px-6 py-2.5 text-xs font-semibold text-white shadow-md transition hover:bg-[#781f77]"
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
