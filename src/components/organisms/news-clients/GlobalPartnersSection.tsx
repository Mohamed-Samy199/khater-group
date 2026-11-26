'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';
import { GLOBAL_PARTNERS, PARTNER_CATEGORIES } from '@/constants/newsClientsData';
import { resolveAssetSrc } from '@/lib/assets';

import sportsLogo from '@/assets/logos/khater-sports.png';
import playLogo from '@/assets/logos/khater-play.png';
import scapesLogo from '@/assets/logos/khater-scapes.png';
import techLogo from '@/assets/logos/khater-tech.png';
import aquaticsLogo from '@/assets/logos/khater-aquatics.png';

gsap.registerPlugin(ScrollTrigger);

const reducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const norm = (s: string) => String(s ?? '').trim().toLowerCase();
const isAll = (name: string) => norm(name) === 'all';

const getDivisionLogo = (division: string) => {
  if (division.includes('Tech')) return techLogo;
  if (division.includes('Aquatics')) return aquaticsLogo;
  if (division.includes('Play') && !division.includes('Sports')) return playLogo;
  if (division.includes('Scapes')) return scapesLogo;
  return sportsLogo;
};

function DivisionPill({ division, dark = false }: { division: string; dark?: boolean }) {
  const isMulti = division === 'Khater Sports & Play';
  return (
    <span
      className={`inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest ${
        dark ? 'text-white' : 'text-[#5B5B5B]'
      }`}
    >
      <span
        className={`flex items-center gap-1 rounded-full px-1.5 py-0.5 ${
          dark ? 'bg-white/95' : 'border border-black/10 bg-black/5'
        }`}
      >
        {isMulti ? (
          <>
            <img src={resolveAssetSrc(sportsLogo)} alt="" className="h-3.5 w-auto object-contain" />
            <span className="font-mono text-[9px] text-black/40">+</span>
            <img src={resolveAssetSrc(playLogo)} alt="" className="h-3.5 w-auto object-contain" />
          </>
        ) : (
          <img
            src={resolveAssetSrc(getDivisionLogo(division))}
            alt=""
            className="h-3.5 w-auto max-w-[20px] object-contain"
          />
        )}
      </span>
      <span>{division}</span>
    </span>
  );
}

export default function GlobalPartnersSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const firstRender = useRef(true);
  const [cat, setCat] = useState('All');
  const [open, setOpen] = useState<string | null>(null);

  const filtered = isAll(cat)
    ? GLOBAL_PARTNERS
    : GLOBAL_PARTNERS.filter((p) => norm(p.category) === norm(cat));

  const countFor = (name: string) =>
    isAll(name)
      ? GLOBAL_PARTNERS.length
      : GLOBAL_PARTNERS.filter((p) => norm(p.category) === norm(name)).length;

  useEffect(() => {
    if (reducedMotion()) return undefined;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.partners-head',
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power2.out',
          clearProps: 'opacity,transform',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        }
      );
      gsap.fromTo(
        '.partner-tile',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: { each: 0.05, from: 'start' },
          ease: 'power2.out',
          clearProps: 'opacity,transform',
          scrollTrigger: { trigger: '.partner-wall', start: 'top 85%' },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return undefined;
    }
    if (reducedMotion()) return undefined;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.partner-tile',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.45,
          stagger: 0.04,
          ease: 'power2.out',
          clearProps: 'opacity,transform',
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, [cat]);

  return (
    <section
      ref={sectionRef}
      id="global-partners"
      aria-label="Accredited International Manufacturing Partners"
      className="relative bg-white py-14 text-black lg:py-20"
    >
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <div className="partners-head">
          <h2 className="text-3xl font-light tracking-tight text-black sm:text-4xl lg:text-5xl">
            International{' '}
            <span className="font-medium text-[#B3B3B3]">Partners &amp; Brands</span>
          </h2>
        </div>

        <div
          className="partners-head mt-8 flex flex-wrap items-center gap-2"
          role="group"
          aria-label="Partner categories"
        >
          {PARTNER_CATEGORIES.map((name) => {
            const on = norm(cat) === norm(name);
            return (
              <button
                key={name}
                type="button"
                aria-pressed={on}
                onClick={() => {
                  setCat(name);
                  setOpen(null);
                }}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black ${
                  on
                    ? 'border-black bg-black text-white'
                    : 'border-[#B3B3B3] bg-white text-[#5B5B5B] hover:border-black hover:text-black'
                }`}
              >
                {name}
                <span className="font-mono text-[10px] text-[#B3B3B3]">
                  {String(countFor(name)).padStart(2, '0')}
                </span>
              </button>
            );
          })}
        </div>

        <div className="partner-wall mt-8 overflow-hidden pl-px pt-px">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((partner, i) => {
              const touchOpen = open === partner.name;

              return (
                <article
                  key={partner.name}
                  tabIndex={0}
                  onClick={() => setOpen(touchOpen ? null : partner.name)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setOpen(touchOpen ? null : partner.name);
                    }
                  }}
                  className="partner-tile group relative -ml-px -mt-px h-[290px] cursor-pointer overflow-hidden border border-[#B3B3B3] bg-white outline-none focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-black"
                >
                  <div className="absolute inset-0 flex flex-col justify-between p-6">
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-2 top-6 select-none text-[6.5rem] font-black uppercase leading-none tracking-tighter text-transparent"
                      style={{ WebkitTextStroke: '1.5px rgba(179,179,179,0.55)' }}
                    >
                      {partner.code}
                    </span>

                    <div className="relative flex items-center justify-between">
                      <span className="font-mono text-xs font-bold tabular-nums tracking-[0.2em] text-[#B3B3B3]">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#5B5B5B]">
                        {partner.country}
                      </span>
                    </div>

                    <div className="relative">
                      <h3 className="text-2xl font-medium leading-tight tracking-tight text-black">
                        {partner.name}
                      </h3>
                      <p className="mt-2 line-clamp-2 text-xs font-light leading-snug text-[#5B5B5B]">
                        {partner.specialty}
                      </p>
                    </div>

                    <div className="relative flex items-center justify-between border-t border-[#B3B3B3]/40 pt-3">
                      <DivisionPill division={partner.division} dark={false} />
                      <span className="text-[10px] uppercase tracking-wider text-[#B3B3B3]">
                        {partner.country}
                      </span>
                    </div>
                  </div>

                  <div
                    className={`absolute inset-0 flex flex-col justify-between bg-black p-6 text-white transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      touchOpen
                        ? 'translate-y-0'
                        : 'translate-y-full lg:group-hover:translate-y-0 lg:group-focus-visible:translate-y-0'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[11px] font-bold tracking-[0.2em] text-[#B3B3B3]">
                        {partner.code}
                      </span>
                      <ArrowUpRight size={18} className="text-white" />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold leading-tight">{partner.name}</h3>
                      <p className="mt-1.5 text-xs font-semibold text-white">
                        {partner.specialty}
                      </p>
                      <p className="mt-3 line-clamp-4 text-xs font-light leading-relaxed text-[#B3B3B3]">
                        {partner.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between border-t border-white/15 pt-3">
                      <DivisionPill division={partner.division} dark={true} />
                      <span className="text-[10px] uppercase tracking-wider text-[#B3B3B3]">
                        {partner.country}
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
