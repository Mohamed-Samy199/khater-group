'use client';

import { useEffect, useState } from 'react';
import { Pause, Play } from 'lucide-react';
import khaterSportsLogo from '@/assets/logos/khater-sports.png';
import Container from '@/components/atoms/Container';
import { resolveAssetSrc } from '@/lib/assets';
import type { SportDiscipline, SportSystem } from '@/types/sports';

const SLIDE_MS = 4000;
const VISIBLE = 2;

function LayerStack({ className = '' }: { className?: string }) {
  const slab = (y: number, topClass: string, sideClass: string, hoverClass: string) => (
    <g transform={`translate(0 ${y})`}>
      <g className={`transition-transform duration-500 ease-out ${hoverClass}`}>
        <polygon points="10,50 100,90 100,104 10,64" className={sideClass} />
        <polygon points="10,50 100,90 100,104 10,64" className="fill-black/20" />
        <polygon points="100,90 190,50 190,64 100,104" className={sideClass} />
        <polygon points="100,90 190,50 190,64 100,104" className="fill-black/35" />
        <polygon points="100,10 190,50 100,90 10,50" className={topClass} />
      </g>
    </g>
  );

  return (
    <svg viewBox="0 0 200 170" role="img" aria-label="Layered surface build-up" className={className}>
      {slab(52, 'fill-neutral-300', 'fill-neutral-300', 'group-hover/row:translate-y-3')}
      {slab(26, 'fill-brand-black', 'fill-brand-black', '')}
      {slab(0, 'fill-sports-light', 'fill-sports-light', 'group-hover/row:-translate-y-3')}
      <g className="transition-transform duration-500 ease-out group-hover/row:-translate-y-3">
        <line
          x1="55"
          y1="30"
          x2="145"
          y2="70"
          stroke="white"
          strokeOpacity="0.55"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}

const PROCESS = ['Sub-base preparation', 'Laser leveling', 'Federation-compliant application'];

interface SystemRowProps {
  s: SportSystem;
  number: number;
  className?: string;
  hidden?: boolean;
  ariaHidden?: boolean;
}

function SystemRow({ s, number, className = '', hidden = false, ariaHidden = false }: SystemRowProps) {
  return (
    <li
      aria-hidden={ariaHidden || undefined}
      className={`group/row relative border-t border-black/10 ${className}`}
    >
      <span
        aria-hidden="true"
        className="absolute left-0 top-0 h-full w-0.5 origin-top scale-y-0 bg-sports-light transition-transform duration-500 group-hover/row:scale-y-100"
      />
      <div
        className={`flex h-full items-center gap-5 px-1 transition-colors duration-300 group-hover/row:bg-neutral-50 sm:gap-8 sm:px-6 ${
          hidden ? 'pointer-events-none' : ''
        }`}
      >
        <div className="w-28 shrink-0 sm:w-48">
          {s.image ? (
            <div className="h-24 w-full overflow-hidden rounded-xl bg-neutral-100 sm:h-32">
              <img
                src={resolveAssetSrc(s.image)}
                alt={s.name}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover/row:scale-105"
              />
            </div>
          ) : (
            <LayerStack className="mx-auto h-24 w-auto sm:h-32 sm:w-full" />
          )}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-xs font-bold tracking-widest text-sports-light">
              {String(number).padStart(2, '0')}
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-widest text-black/40">
              System
            </span>
          </div>
          <h3 className="mt-1 text-lg font-semibold tracking-tight text-brand-black transition-colors group-hover/row:text-sports-light sm:text-2xl">
            {s.name}
          </h3>
          <p className="mt-1.5 line-clamp-2 max-w-xl text-sm font-light leading-relaxed text-black/60">
            {s.description ||
              'Customized sub-base preparation, laser leveling, and federation-compliant application.'}
          </p>
          <ul className="mt-3 hidden flex-wrap gap-2 sm:flex">
            {PROCESS.map((step) => (
              <li
                key={step}
                className="rounded-full border border-black/10 bg-white px-3 py-1 text-[11px] font-medium text-black/60"
              >
                {step}
              </li>
            ))}
          </ul>
        </div>

        <span
          aria-hidden="true"
          className="hidden select-none text-7xl font-extralight leading-none text-black/[0.06] transition-colors duration-300 group-hover/row:text-sports-light/20 lg:block"
        >
          {String(number).padStart(2, '0')}
        </span>
      </div>
    </li>
  );
}

export default function SportSystems({ sport }: { sport: SportDiscipline }) {
  const systems = sport.systems || [];
  const n = systems.length;

  const [reduced, setReduced] = useState(false);
  const [pos, setPos] = useState(0);
  const [tick, setTick] = useState(0);
  const [snap, setSnap] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setReduced(true);
    }
  }, []);

  const rotating = n > VISIBLE && !reduced;
  const paused = isPaused || isHovered;

  useEffect(() => {
    if (!snap) return undefined;
    const id = requestAnimationFrame(() => requestAnimationFrame(() => setSnap(false)));
    return () => cancelAnimationFrame(id);
  }, [snap]);

  if (n === 0) return null;

  const advance = () => {
    setPos((p) => (p >= n ? p : p + 1));
    setTick((t) => t + 1);
  };

  const goTo = (i: number) => {
    setSnap(false);
    setPos(i);
    setTick((t) => t + 1);
  };

  const onTrackEnd = (e: React.TransitionEvent<HTMLOListElement>) => {
    if (e.target !== e.currentTarget || e.propertyName !== 'transform') return;
    if (pos >= n) {
      setSnap(true);
      setPos(0);
    }
  };

  const rows = rotating ? [...systems, ...systems.slice(0, VISIBLE)] : systems;
  const activeDot = pos % n;
  const lastShown = ((pos + VISIBLE - 1) % n) + 1;

  return (
    <section className="border-b border-black/10 bg-white py-20 text-brand-black lg:py-28">
      <style>{`
        @keyframes systems-progress-fill {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
      `}</style>

      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <h2 className="text-3xl font-light tracking-tight text-brand-black sm:text-4xl lg:text-5xl">
                {sport.systemsLabel || 'Approved Surface Systems'}
              </h2>
              <p className="mt-4 text-base font-light leading-relaxed text-black/70">
                Every playing environment is calibrated for optimal ball roll, force reduction, player
                traction, and all-weather durability.
              </p>

              <div className="mt-8 inline-flex items-center gap-4 rounded-2xl border border-black/10 bg-neutral-50 px-5 py-4">
                <img
                  src={resolveAssetSrc(khaterSportsLogo)}
                  alt="Khater Sports"
                  className="h-7 w-auto max-w-[110px] object-contain"
                />
                <div>
                  <div className="text-3xl font-light leading-none">{String(n).padStart(2, '0')}</div>
                  <div className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-black/50">
                    Approved systems
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div
              className={`overflow-hidden border-b border-black/10 ${
                rotating ? 'h-[380px] sm:h-[420px]' : ''
              }`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <ol
                onTransitionEnd={rotating ? onTrackEnd : undefined}
                className={`${snap ? '' : 'transition-transform duration-[900ms] ease-[cubic-bezier(0.65,0,0.35,1)]'}`}
                style={
                  rotating
                    ? { transform: `translateY(-${(pos * 100) / rows.length}%)` }
                    : undefined
                }
              >
                {rows.map((s, i) => {
                  const isClone = rotating && i >= n;
                  const inWindow = !rotating || (i >= pos && i < pos + VISIBLE);
                  return (
                    <SystemRow
                      key={`${s.name}-${isClone ? 'clone' : 'row'}-${i}`}
                      s={s}
                      number={(i % n) + 1}
                      ariaHidden={isClone}
                      hidden={!inWindow}
                      className={
                        rotating
                          ? `h-[190px] sm:h-[210px] ${snap ? '' : 'transition-opacity duration-700'} ${
                              inWindow ? 'opacity-100' : 'opacity-0'
                            }`
                          : 'py-8'
                      }
                    />
                  );
                })}
              </ol>
            </div>

            {rotating && (
              <div className="mt-6 flex items-center gap-5">
                <span className="shrink-0 font-mono text-xs font-semibold tracking-widest text-black/50">
                  {String((activeDot % n) + 1).padStart(2, '0')}–{String(lastShown).padStart(2, '0')} /{' '}
                  {String(n).padStart(2, '0')}
                </span>

                <div className="relative h-[3px] flex-1 overflow-hidden rounded-full bg-black/[0.07]" aria-hidden="true">
                  <span
                    key={tick}
                    onAnimationEnd={advance}
                    className="block h-full w-full origin-left bg-sports-light"
                    style={{
                      animation: `systems-progress-fill ${SLIDE_MS}ms linear forwards`,
                      animationPlayState: paused ? 'paused' : 'running',
                    }}
                  />
                </div>

                <div className="flex shrink-0 items-center gap-1.5">
                  {systems.map((s, i) => (
                    <button
                      key={s.name}
                      type="button"
                      onClick={() => goTo(i)}
                      aria-label={`Show ${s.name}`}
                      aria-current={i === activeDot ? 'true' : undefined}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        i === activeDot ? 'w-6 bg-sports-light' : 'w-2 bg-black/15 hover:bg-black/30'
                      }`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setIsPaused((p) => !p)}
                  aria-label={isPaused ? 'Resume auto-rotation' : 'Pause auto-rotation'}
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-black/15 bg-white text-black/70 transition-colors hover:border-black/40 hover:text-black"
                >
                  {isPaused ? <Play className="ml-0.5 h-3.5 w-3.5" /> : <Pause className="h-3.5 w-3.5" />}
                </button>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
