'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ArrowUpRight } from 'lucide-react';
import SafeImage from '@/components/atoms/SafeImage';
import {
  COURTS,
  CATEGORIES,
  countLabel,
  summary,
} from '@/constants/sportsDisciplines';
import type { SportDiscipline } from '@/types/sports';

const reducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export default function SportsDisciplines() {
  const [cat, setCat] = useState<string>('All');
  const gridRef = useRef<HTMLDivElement | null>(null);

  const filtered: SportDiscipline[] =
    cat === 'All' ? COURTS : COURTS.filter((c) => c.category === cat);

  useEffect(() => {
    if (reducedMotion()) return undefined;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.court-card',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.06, ease: 'power2.out' }
      );
    }, gridRef);
    return () => ctx.revert();
  }, [cat]);

  return (
    <section
      id="courts"
      className="relative border-t border-black/10 bg-white py-20 text-brand-black lg:py-28"
    >
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
        {/* Section header */}
        <div className="flex flex-col justify-between gap-6 border-b border-black/10 pb-12 md:flex-row md:items-end">
          <div>
            <h2 className="text-4xl font-light tracking-tight text-brand-black sm:text-5xl lg:text-6xl">
              Courts <span className="font-medium text-black/60">&amp; Disciplines</span>
            </h2>
          </div>
          <p className="max-w-md text-base font-light leading-relaxed text-black/70">
            From football pitches to climbing walls: select any court to view dedicated technical specifications, approved surface systems, and delivered projects.
          </p>
        </div>

        {/* Filter pills */}
        <div className="mt-8 flex flex-wrap items-center gap-2 pb-8">
          {CATEGORIES.map((name) => (
            <button
              key={name}
              type="button"
              onClick={() => setCat(name)}
              aria-pressed={cat === name}
              className={`rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sports-light ${
                cat === name
                  ? 'bg-sports-light text-white shadow-[0_4px_16px_rgba(222,31,38,0.35)]'
                  : 'border border-black/10 bg-black/[0.03] text-black/70 hover:bg-black/[0.08] hover:text-black'
              }`}
            >
              {name}
            </button>
          ))}
        </div>

        {/* Courts grid */}
        <div ref={gridRef} className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((c) => (
            <Link
              key={c.id}
              href={`/businesses/sports/${c.id}`}
              className="court-card group flex flex-col overflow-hidden rounded-2xl border border-black/10 bg-white text-left transition-all duration-300 hover:-translate-y-1 hover:border-sports-light/60 hover:shadow-[0_16px_36px_-10px_rgba(0,0,0,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sports-light"
            >
              <div className="relative h-48 w-full overflow-hidden bg-neutral-100">
                <SafeImage
                  src={c.cover}
                  alt={c.name}
                  fallback={
                    <div className="grid h-full w-full place-items-center bg-black/5 p-4 text-center font-mono text-xs text-black/40">
                      {c.name || 'Khater Sports'}
                    </div>
                  }
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full border border-black/10 bg-white/90 px-3 py-1 text-[11px] font-semibold text-black/80 shadow-sm backdrop-blur-md">
                  {countLabel(c)}
                </span>
              </div>

              <div className="flex flex-1 flex-col justify-between p-5">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-sports-light">
                    {c.category}
                  </span>
                  <h3 className="mt-1 text-lg font-semibold tracking-tight text-brand-black transition-colors group-hover:text-sports-light">
                    {c.name}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-xs font-light leading-relaxed text-black/60">
                    {c.description}
                  </p>
                </div>

                <div className="mt-5 flex items-center justify-between gap-3 border-t border-black/10 pt-4 text-xs">
                  <span className="truncate text-[11px] font-medium text-black/50">{summary(c)}</span>
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-black/5 text-black transition-all duration-300 group-hover:bg-sports-light group-hover:text-white">
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
