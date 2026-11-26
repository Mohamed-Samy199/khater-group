'use client';

import { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Globe2, TrendingUp, Trophy, Users, type LucideIcon } from 'lucide-react';
import { CULTURE_PILLARS } from '@/constants/careersData';

gsap.registerPlugin(ScrollTrigger);

const PILLAR_ICONS: Record<string, LucideIcon> = {
  '01': Trophy,
  '02': Users,
  '03': Globe2,
  '04': TrendingUp,
};

const VB_W = 320;
const VB_H = 380;
const TRACKS = [
  { rx: 120, ry: 160, color: '#5B5B5B', width: 1.4 },
  { rx: 108, ry: 148, color: '#B3B3B3', width: 1 },
  { rx: 96, ry: 136, color: '#B3B3B3', width: 1 },
  { rx: 84, ry: 124, color: '#000000', width: 1.5 },
];

const NODES = [
  { x: 63.4, y: 95, side: 'left' },
  { x: 256.6, y: 95, side: 'right' },
  { x: 63.4, y: 285, side: 'left' },
  { x: 256.6, y: 285, side: 'right' },
];

const PLACE = [
  'lg:col-start-1 lg:row-start-1',
  'lg:col-start-3 lg:row-start-1',
  'lg:col-start-1 lg:row-start-2',
  'lg:col-start-3 lg:row-start-2',
];

const GRID_BG = {
  backgroundImage:
    'linear-gradient(to right, rgba(179,179,179,0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(179,179,179,0.2) 1px, transparent 1px)',
  backgroundSize: '28px 28px',
};

export default function CareerCulture() {
  const rootRef = useRef<HTMLElement | null>(null);
  const [active, setActive] = useState<number | null>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const tl = gsap.timeline({
          scrollTrigger: { trigger: root, start: 'top 75%' },
        });

        tl.fromTo(
          '[data-head] > *',
          { opacity: 0, y: 22 },
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out' }
        )
          .fromTo('[data-stage]', { opacity: 0 }, { opacity: 1, duration: 0.6 }, '-=0.4')
          .fromTo(
            '[data-track]',
            { strokeDashoffset: 1 },
            { strokeDashoffset: 0, duration: 1.3, stagger: 0.15, ease: 'power2.inOut' },
            '-=0.4'
          )
          .fromTo(
            '[data-field]',
            { opacity: 0, scale: 0.9, transformOrigin: '50% 50%' },
            { opacity: 1, scale: 1, duration: 0.8, ease: 'power2.out' },
            '-=0.9'
          )
          .fromTo(
            '[data-link]',
            { strokeDashoffset: 1 },
            { strokeDashoffset: 0, duration: 0.6, stagger: 0.12, ease: 'power2.out' },
            '-=0.5'
          )
          .fromTo(
            '[data-node]',
            { scale: 0, transformOrigin: '50% 50%' },
            { scale: 1, duration: 0.45, stagger: 0.12, ease: 'back.out(2.2)' },
            '<0.2'
          )
          .fromTo(
            '[data-pillar]',
            { opacity: 0, x: (i) => (i % 2 === 0 ? -28 : 28) },
            { opacity: 1, x: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out' },
            '-=0.9'
          );
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      aria-label="Why Build Your Career At Khater"
      className="border-b border-[#B3B3B3] bg-white py-12 text-black sm:py-14 lg:py-16"
    >
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <div
          data-head
          className="flex flex-col justify-between gap-4 border-b border-[#B3B3B3]/40 pb-8 lg:flex-row lg:items-end lg:gap-14"
        >
          <div className="lg:max-w-2xl">
            <h2 className="text-3xl font-normal tracking-tight text-black sm:text-4xl">
              We Create an Attractive Environment{' '}
              <span className="font-medium text-[#5B5B5B]">for People to Grow</span>
            </h2>
          </div>

          <p className="text-sm font-light leading-relaxed text-[#5B5B5B] lg:max-w-md">
            Khater Group is a place that brings out your best every day because it empowers you to build what endures.
            From the Olympic stadiums of Egypt’s New Capital to cutting-edge urban spaces across the MENA region, your
            skills contribute directly to monumental infrastructure.
          </p>
        </div>

        <div
          data-stage
          className="relative mt-8 grid grid-cols-1 gap-4 border border-[#B3B3B3] bg-white p-4 sm:p-6 lg:grid-cols-[1fr_320px_1fr] lg:grid-rows-[190px_190px] lg:gap-0 lg:p-0"
          style={GRID_BG}
        >
          {['left-0 top-0', 'right-0 top-0', 'bottom-0 left-0', 'bottom-0 right-0'].map((pos) => (
            <span
              key={pos}
              className={`pointer-events-none absolute h-3 w-3 border-black ${pos} ${
                pos.includes('left') ? 'border-l' : 'border-r'
              } ${pos.includes('top') ? 'border-t' : 'border-b'}`}
              aria-hidden="true"
            />
          ))}

          <div className="hidden lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:block" aria-hidden="true">
            <svg viewBox={`0 0 ${VB_W} ${VB_H}`} className="h-full w-full" fill="none">
              <line x1="160" y1="8" x2="160" y2={VB_H - 8} stroke="#B3B3B3" strokeDasharray="3 5" />
              <line x1="8" y1="190" x2={VB_W - 8} y2="190" stroke="#B3B3B3" strokeDasharray="3 5" />

              {TRACKS.map((t, i) => (
                <ellipse
                  key={i}
                  data-track
                  cx="160"
                  cy="190"
                  rx={t.rx}
                  ry={t.ry}
                  pathLength="1"
                  strokeDasharray="1"
                  stroke={t.color}
                  strokeWidth={t.width}
                />
              ))}

              <g data-field stroke="#5B5B5B" strokeWidth="1">
                <rect x="124" y="130" width="72" height="120" rx="3" />
                <line x1="124" y1="190" x2="196" y2="190" />
                <circle cx="160" cy="190" r="12" />
                <rect x="144" y="130" width="32" height="14" />
                <rect x="144" y="236" width="32" height="14" />
              </g>

              {NODES.map((n, i) => {
                const on = active === i;
                const x1 = n.side === 'left' ? 0 : VB_W;
                return (
                  <g key={i}>
                    <line
                      data-link
                      x1={x1}
                      y1={n.y}
                      x2={n.x}
                      y2={n.y}
                      pathLength="1"
                      strokeDasharray="1"
                      strokeWidth="1.2"
                      className="transition-[stroke] duration-300"
                      stroke={on ? '#000000' : '#B3B3B3'}
                    />
                    <g data-node>
                      <circle
                        cx={n.x}
                        cy={n.y}
                        r={on ? 12 : 7}
                        fill="#000000"
                        fillOpacity={on ? 0.12 : 0}
                        className="transition-all duration-300"
                      />
                      <circle
                        cx={n.x}
                        cy={n.y}
                        r="4"
                        className="transition-[fill,stroke] duration-300"
                        fill={on ? '#000000' : '#FFFFFF'}
                        stroke={on ? '#000000' : '#5B5B5B'}
                        strokeWidth="1.5"
                      />
                    </g>
                  </g>
                );
              })}
            </svg>
          </div>

          {CULTURE_PILLARS.map((pillar, i) => {
            const Icon = PILLAR_ICONS[pillar.number] || Trophy;
            const right = NODES[i]?.side === 'right';
            const on = active === i;

            return (
              <article
                key={pillar.number}
                data-pillar
                tabIndex={0}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(i)}
                onBlur={() => setActive(null)}
                className={`group relative flex flex-col justify-center border-l-2 bg-white/90 p-5 outline-none transition-all duration-300 focus-visible:ring-2 focus-visible:ring-black lg:h-[190px] lg:overflow-hidden lg:border-l-0 lg:bg-transparent lg:py-0 ${
                  on ? 'border-black' : 'border-[#B3B3B3]'
                } ${PLACE[i] ?? ''} ${right ? 'lg:pl-6 lg:pr-8' : 'lg:items-end lg:pl-8 lg:pr-6 lg:text-right'}`}
              >
                <div className={`flex items-center gap-3 ${right ? '' : 'lg:flex-row-reverse'}`}>
                  <span
                    className={`flex h-8 w-8 items-center justify-center rounded-none border transition-colors duration-300 ${
                      on
                        ? 'border-black bg-black text-white'
                        : 'border-[#B3B3B3] bg-white text-black'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                  <span
                    className={`font-mono text-xs font-semibold uppercase tracking-wider transition-colors duration-300 ${
                      on ? 'text-black' : 'text-[#5B5B5B]'
                    }`}
                  >
                    Pillar {pillar.number}
                  </span>
                </div>

                <h3 className="mt-3 text-lg font-medium leading-snug tracking-tight text-black sm:text-xl">
                  {pillar.title}
                </h3>

                <p className="mt-1.5 line-clamp-3 text-sm font-light leading-relaxed text-[#5B5B5B]">
                  {pillar.description}
                </p>

                <span
                  className={`mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-black ${
                    right ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 shrink-0 rounded-full transition-colors duration-300 ${
                      on ? 'bg-black' : 'bg-[#B3B3B3]'
                    }`}
                  />
                  {pillar.highlight}
                </span>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
