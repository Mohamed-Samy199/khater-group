'use client';

import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
  type PointerEvent,
} from 'react';
import Link from 'next/link';
import servicesBg from '@/assets/services/services-bg.png';
import darkLogo from '@/assets/logos/khater-dark.png';
import { DIVISIONS } from '@/constants/site';
import { resolveAssetSrc, type AssetSource } from '@/lib/assets';

const LOGO = Object.fromEntries(DIVISIONS.map((d) => [d.slug, d.logo])) as Record<
  string,
  AssetSource
>;

const MAX_ITEMS = 6;

const sectorPath = (id: string) =>
  id === 'maintenance' ? '/contact' : `/businesses/${id}`;

interface ServiceCategory {
  id: string;
  name: string;
  logo?: AssetSource;
  items: string[];
}

const serviceCategories: ServiceCategory[] = [
  {
    id: 'sports',
    name: 'Sports',
    logo: LOGO.sports,
    items: [
      'Football', 'Basketball', 'Tennis Tables', 'Hockey', 'Padbol', 'Volleyball', 'Playgrounds', 'Handball',
      'Tracks', 'Tennis', 'Squash', 'MultiPurpose', 'Padel', 'Landscape', 'Climbing walls',
    ],
  },
  {
    id: 'aquatics',
    name: 'Aquatics',
    logo: LOGO.aquatics,
    items: ['Swimming Pools', 'Olympic Pool', 'Semi Olympic Pool', 'Leisure pools'],
  },
  {
    id: 'tech',
    name: 'Tech',
    logo: LOGO.tech,
    items: ['Sports Electronics', 'Scoreboards', 'Swimming Pool Touchpad Starting System', 'Court Lighting Poles'],
  },
  {
    id: 'scapes',
    name: 'Scapes',
    logo: LOGO.scapes,
    items: ['Landscape', 'Hardscape Services', 'Softscape'],
  },
  {
    id: 'play',
    name: 'Play',
    logo: LOGO.play,
    items: ['Kids Playgrounds', 'Kids Areas'],
  },
  {
    id: 'maintenance',
    name: 'Maintenance',
    items: ['Maintenance'],
  },
];

const IMG: Record<string, string> = {
  Football: 'https://images.unsplash.com/photo-1675684512606-a6333b7531fb?auto=format&fit=crop&w=600&q=80',
  Basketball: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=600&auto=format&fit=crop',
  Hockey: 'https://images.unsplash.com/photo-1515703407324-5f753afd8be8?q=80&w=600&auto=format&fit=crop',
  Padbol: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=600&auto=format&fit=crop',
  Volleyball: 'https://images.unsplash.com/photo-1592656094267-764a45160876?q=80&w=600&auto=format&fit=crop',
  Handball: 'https://images.unsplash.com/photo-1519861531473-9200262188bf?q=80&w=600&auto=format&fit=crop',
  Tracks: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=600&auto=format&fit=crop',
  Playgrounds: 'https://images.unsplash.com/photo-1771169204750-3b1b20d98053?auto=format&fit=crop&w=600&q=80',
  Tennis: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=600&auto=format&fit=crop',
  Squash: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=600&auto=format&fit=crop',
  MultiPurpose: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=600&auto=format&fit=crop',
  Padel: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=600&auto=format&fit=crop',
  'Climbing walls': 'https://images.unsplash.com/photo-1522163182402-834f871fd851?q=80&w=600&auto=format&fit=crop',
  'Swimming Pools': 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=600&auto=format&fit=crop',
  'Olympic Pool': 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=600&auto=format&fit=crop',
  'Semi Olympic Pool': 'https://images.unsplash.com/photo-1530549387789-4c1017266635?q=80&w=600&auto=format&fit=crop',
  'Leisure pools': 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=600&auto=format&fit=crop',
  Scoreboards: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=600&auto=format&fit=crop',
  'Sports Electronics': 'https://images.unsplash.com/photo-1765445139654-cd48b90c20ea?auto=format&fit=crop&w=600&q=80',
  'Swimming Pool Touchpad Starting System': 'https://images.unsplash.com/photo-1530549387789-4c1017266635?q=80&w=600&auto=format&fit=crop',
  'Court Lighting Poles': 'https://images.unsplash.com/photo-1487466365202-1afdb86c764e?q=80&w=600&auto=format&fit=crop',
  'Tennis Tables': 'https://images.unsplash.com/photo-1534158914592-062992fbe900?q=80&w=600&auto=format&fit=crop',
  'Ping Pong Tables': 'https://images.unsplash.com/photo-1534158914592-062992fbe900?q=80&w=600&auto=format&fit=crop',
  Landscape: 'https://images.unsplash.com/photo-1589487391730-58f20eb2c308?q=80&w=600&auto=format&fit=crop',
  'Hardscape Services': 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=600&auto=format&fit=crop',
  Softscape: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=600&auto=format&fit=crop',
  'Kids Playgrounds': 'https://images.unsplash.com/photo-1564429238817-393bd4286b2d?q=80&w=600&auto=format&fit=crop',
  'Kids Areas': 'https://images.unsplash.com/photo-1503919005314-30d93d07d823?q=80&w=600&auto=format&fit=crop',
  Maintenance: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=600&auto=format&fit=crop',
};

function CatIcon({ cat, className = '' }: { cat: ServiceCategory; className?: string }) {
  return (
    <img
      src={resolveAssetSrc(cat.logo || darkLogo)}
      alt=""
      className={`object-contain ${className}`}
    />
  );
}

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia(query);
    const onChange = () => setMatches(mq.matches);
    onChange();
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, [query]);
  return matches;
}

const PAD = 20;
const HEAD = 40;
const HEAD_GAP = 16;
const GAP = 8;
const MORE_H = 60;
const TOP = 8;

const BG_W = 1536;
const BG_H = 1024;
const LIGHT_X = 752;
const LIGHT_FROM_BOTTOM = BG_H - 957;
const TRI_H = 14;
const LIGHT_GAP = 36;

function layoutFor(count: number, twoCol: boolean) {
  const shown = Math.min(count, MAX_ITEMS);
  const cols = twoCol ? 2 : 1;
  const rows = Math.ceil(shown / cols);
  const rowH = twoCol ? (shown <= 2 ? 88 : 76) : 54;
  const h = PAD * 2 + HEAD + HEAD_GAP + rows * rowH + (rows - 1) * GAP + GAP + MORE_H;
  return { shown, cols, rowH, h };
}

const POS: Record<number, { x: string; z: number; ry: number; s: number; op: number; zi: number }> = {
  0: { x: '0px', z: 0, ry: 0, s: 1, op: 1, zi: 30 },
  1: { x: 'calc(var(--cw) / 2 + var(--sw) * 0.45 + 14px)', z: -70, ry: 30, s: 0.92, op: 1, zi: 20 },
  2: { x: 'calc(var(--cw) / 2 + var(--sw) * 1 + 24px)', z: -170, ry: 42, s: 0.8, op: 0.55, zi: 10 },
};

const EASE = 'cubic-bezier(0.22, 1, 0.36, 1)';

const CSS = `
@media (prefers-reduced-motion: reduce) {
  .svc-card, .svc-card * { transition: none !important; }
}
`;

export default function ServicesSection() {
  const [active, setActive] = useState(0);
  const n = serviceCategories.length;
  const twoCol = useMediaQuery('(min-width: 640px)');

  const startX = useRef<number | null>(null);
  const dragged = useRef(false);

  const go = (i: number) => setActive(((i % n) + n) % n);

  const onPointerUp = (e: PointerEvent<HTMLDivElement>) => {
    if (startX.current === null) return;
    const dx = e.clientX - startX.current;
    startX.current = null;
    if (Math.abs(dx) > 60) {
      dragged.current = true;
      window.setTimeout(() => {
        dragged.current = false;
      }, 80);
      go(active + (dx < 0 ? 1 : -1));
    }
  };

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowRight') go(active + 1);
    if (e.key === 'ArrowLeft') go(active - 1);
  };

  const maxH = Math.max(...serviceCategories.map((c) => layoutFor(c.items.length, twoCol).h));
  const bottomY = TOP + maxH;
  const sideH = Math.max(150, Math.round(maxH * 0.72));

  const sectionRef = useRef<HTMLElement | null>(null);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [geo, setGeo] = useState({ spacer: 80, dx: 0 });

  useLayoutEffect(() => {
    const sec = sectionRef.current;
    const car = carouselRef.current;
    if (!sec || !car) return undefined;

    const calc = () => {
      const W = sec.clientWidth;
      const pb = parseFloat(getComputedStyle(sec).paddingBottom) || 0;
      const top = car.offsetTop + bottomY;
      const s = Math.max(
        W / BG_W,
        (top + LIGHT_GAP + TRI_H) / (BG_H - LIGHT_FROM_BOTTOM)
      );
      const spacer = Math.max(0, Math.round(LIGHT_FROM_BOTTOM * s + LIGHT_GAP + TRI_H - pb));
      const dx = Math.round((LIGHT_X - BG_W / 2) * s);
      setGeo((g) => (g.spacer === spacer && g.dx === dx ? g : { spacer, dx }));
    };

    calc();
    const ro = new ResizeObserver(calc);
    ro.observe(sec);
    return () => ro.disconnect();
  }, [bottomY]);

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden px-6 pb-3 pt-8 text-black md:px-12 md:pb-4 md:pt-10 lg:px-20"
    >
      <style>{CSS}</style>

      <img
        src={resolveAssetSrc(servicesBg)}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-bottom"
      />
      <div
        className="via-12% absolute inset-0 -z-10 bg-gradient-to-b from-white via-white/60 to-transparent"
        aria-hidden="true"
      />

      <div className="mx-auto mb-8 text-center md:mb-10">
        <h2 className="text-3xl font-light tracking-tight text-black md:text-5xl">Our Services</h2>
      </div>

      <div
        role="tablist"
        className="mx-auto flex w-fit max-w-full gap-1.5 overflow-x-auto rounded-2xl border border-white/70 bg-white/50 p-1.5 shadow-[0_10px_40px_rgba(0,0,0,0.12)] backdrop-blur-xl [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {serviceCategories.map((c, i) => {
          const on = i === active;
          return (
            <button
              key={c.id}
              type="button"
              role="tab"
              aria-selected={on}
              onClick={() => go(i)}
              className={`flex shrink-0 items-center gap-2.5 rounded-xl border px-4 py-2.5 text-xs font-medium uppercase tracking-wider transition-all duration-300 lg:px-5 lg:text-[13px] ${
                on
                  ? 'border-black/25 bg-white text-black shadow-md'
                  : 'border-transparent text-black/60 hover:bg-white/60 hover:text-black'
              }`}
            >
              <CatIcon cat={c} className="h-5 w-5 shrink-0" />
              {c.name}
            </button>
          );
        })}
      </div>

      <div
        ref={carouselRef}
        tabIndex={0}
        onKeyDown={onKeyDown}
        onPointerDown={(e) => {
          startX.current = e.clientX;
        }}
        onPointerUp={onPointerUp}
        onPointerCancel={() => {
          startX.current = null;
        }}
        aria-label="Services carousel"
        className="relative mx-auto mt-4 w-full max-w-[1440px] touch-pan-y outline-none [--cw:min(86vw,500px)] [--sw:96px] [perspective:1500px] md:[--cw:clamp(440px,40vw,600px)] md:[--sw:clamp(130px,12vw,180px)]"
        style={{ height: `${bottomY + geo.spacer}px`, left: `${geo.dx}px` }}
      >
        {serviceCategories.map((cat, i) => {
          let o = i - active;
          if (o > n / 2) o -= n;
          if (o < -n / 2) o += n;

          const isActive = o === 0;
          const a = Math.abs(o);
          const hidden = a > 2;
          const p = POS[Math.min(a, 2)];
          const sign = o < 0 ? -1 : 1;

          const total = cat.items.length;
          const { shown, cols, rowH, h } = layoutFor(total, twoCol);
          const items = cat.items.slice(0, shown);
          const remaining = total - shown;
          const cardH = isActive ? h : sideH;

          return (
            <div
              key={cat.id}
              role={isActive ? undefined : 'button'}
              tabIndex={isActive || hidden ? -1 : 0}
              aria-label={isActive ? undefined : `Show ${cat.name}`}
              onClick={() => !isActive && !dragged.current && go(i)}
              onKeyDown={(e) => {
                if (!isActive && (e.key === 'Enter' || e.key === ' ')) {
                  e.preventDefault();
                  go(i);
                }
              }}
              className={`svc-card group/card absolute left-1/2 will-change-transform ${
                isActive ? '' : 'cursor-pointer'
              } ${a === 2 ? 'max-md:pointer-events-none max-md:!opacity-0' : ''}`}
              style={{
                top: `${bottomY - cardH / 2}px`,
                width: isActive ? 'var(--cw)' : 'var(--sw)',
                height: `${cardH}px`,
                transform: `translate(-50%, -50%) translateX(calc(${sign} * (${p.x}))) translateZ(${p.z}px) rotateY(${sign * p.ry}deg) scale(${p.s})`,
                opacity: hidden ? 0 : p.op,
                zIndex: p.zi,
                pointerEvents: hidden ? 'none' : 'auto',
                transition: `transform 900ms ${EASE}, top 900ms ${EASE}, width 900ms ${EASE}, height 900ms ${EASE}, opacity 700ms ease`,
              }}
            >
              <div
                className={`absolute inset-0 overflow-hidden rounded-3xl border border-white/70 bg-gradient-to-b from-white/75 to-white/35 backdrop-blur-xl ${
                  isActive
                    ? 'shadow-[0_30px_80px_rgba(0,0,0,0.28)]'
                    : 'shadow-[0_18px_50px_rgba(0,0,0,0.18)] group-hover/card:border-black/40'
                }`}
              >
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-2 text-center transition-opacity duration-500"
                  style={{ opacity: isActive ? 0 : 1, pointerEvents: 'none' }}
                >
                  <CatIcon cat={cat} className="h-[clamp(34px,4vw,52px)] w-[clamp(34px,4vw,52px)]" />
                  <span className="text-sm font-medium tracking-wide text-black/80 md:text-base">{cat.name}</span>
                </div>

                <div
                  className="absolute inset-0 flex flex-col transition-opacity duration-500"
                  style={{
                    padding: `${PAD}px`,
                    opacity: isActive ? 1 : 0,
                    transitionDelay: isActive ? '450ms' : '0ms',
                    pointerEvents: isActive ? 'auto' : 'none',
                  }}
                >
                  <div className="flex shrink-0 items-center gap-3" style={{ height: `${HEAD}px` }}>
                    <CatIcon cat={cat} className="h-7 w-7" />
                    <h3 className="text-2xl font-light tracking-tight text-black md:text-3xl">{cat.name}</h3>
                  </div>

                  <div className="flex flex-col" style={{ marginTop: `${HEAD_GAP}px`, gap: `${GAP}px` }}>
                    <ul
                      className="grid"
                      style={{
                        gap: `${GAP}px`,
                        gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
                        gridAutoRows: `${rowH}px`,
                      }}
                    >
                      {items.map((name, idx) => {
                        const image = IMG[name];
                        const spanFull = cols === 2 && items.length % 2 === 1 && idx === items.length - 1;
                        return (
                          <li
                            key={name}
                            style={(spanFull ? { gridColumn: 'span 2' } : undefined) as CSSProperties | undefined}
                            className="group relative overflow-hidden rounded-lg border border-white/70 bg-white/55 shadow-sm"
                          >
                            {image && (
                              <>
                                <img
                                  src={image}
                                  alt=""
                                  loading="lazy"
                                  className="absolute inset-0 h-full w-full object-cover saturate-[0.6] transition-all duration-700 group-hover:scale-110 group-hover:saturate-100"
                                />
                                <div
                                  className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-white/5 transition-opacity duration-500 group-hover:opacity-80"
                                  aria-hidden="true"
                                />
                              </>
                            )}
                            <div className="relative flex h-full items-center gap-2.5 px-3.5 text-[13px] font-medium text-black/85">
                              <svg
                                width="13"
                                height="13"
                                viewBox="0 0 14 14"
                                fill="none"
                                className="shrink-0 text-black"
                                aria-hidden="true"
                              >
                                <path d="M2 7.5l3 3 7-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                              <span className="line-clamp-2 leading-tight">{name}</span>
                              <span className="ml-auto grid h-6 w-6 shrink-0 place-items-center rounded-full border border-black/15 bg-white/50 text-[10px] opacity-0 transition-all duration-300 group-hover:border-black group-hover:bg-black group-hover:text-white group-hover:opacity-100">
                                ↗
                              </span>
                            </div>
                          </li>
                        );
                      })}
                    </ul>

                    <Link
                      href={sectorPath(cat.id)}
                      tabIndex={isActive ? 0 : -1}
                      onClick={(e) => {
                        if (dragged.current) e.preventDefault();
                      }}
                      aria-label={`View more ${cat.name} services`}
                      style={{ height: `${MORE_H}px` }}
                      className="group/more relative flex shrink-0 items-center justify-between gap-3 overflow-hidden rounded-xl border border-black bg-black px-4 text-white shadow-[0_10px_26px_rgba(0,0,0,0.28)] transition-all duration-500 hover:bg-white hover:text-black md:px-5"
                    >
                      <span className="min-w-0">
                        <span className="block text-[10px] font-medium uppercase tracking-[0.2em] text-white/60 transition-colors duration-500 group-hover/more:text-black/60">
                          {remaining > 0 ? `+${remaining} more` : `${total} ${total === 1 ? 'service' : 'services'}`}
                        </span>
                        <span className="mt-0.5 block truncate text-base font-light tracking-tight">View More</span>
                      </span>

                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white text-white transition-all duration-500 group-hover/more:border-black group-hover/more:bg-black group-hover/more:text-white">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 20 20"
                          fill="none"
                          className="transition-transform duration-500 group-hover/more:translate-x-0.5"
                          aria-hidden="true"
                        >
                          <path d="M4 10h12m0 0l-5-5m5 5l-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>

              <span
                aria-hidden="true"
                className="absolute left-1/2 top-full h-3.5 w-7 -translate-x-1/2 bg-white/60 backdrop-blur-xl transition-opacity duration-500"
                style={{
                  clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                  marginTop: '-1px',
                  opacity: isActive ? 1 : 0,
                }}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
