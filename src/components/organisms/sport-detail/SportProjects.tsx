'use client';

import { useEffect, useState } from 'react';
import { ArrowRight, ArrowUpRight, MapPin, Pause, Play, Trophy } from 'lucide-react';
import Container from '@/components/atoms/Container';
import { resolveAssetSrc, type AssetSource } from '@/lib/assets';
import type { SportDiscipline } from '@/types/sports';

const SLIDE_MS = 4000;
const VISIBLE = 6;
const ROW_H = 96;

const pad = (n: number) => String(n).padStart(2, '0');

const initialsOf = (text = '') =>
  text
    .replace(/[^A-Za-z0-9\s]/g, '')
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();

function CourtPlan({ drawKey }: { drawKey: string }) {
  const line = 'bp-draw fill-none stroke-sports-light';
  return (
    <svg
      key={drawKey}
      viewBox="0 0 400 250"
      role="img"
      aria-label="Court plan drawing"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid meet"
    >
      <g strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="20" y="20" width="360" height="210" rx="4" pathLength="1" className={line} />
        <path d="M200 20 V230" pathLength="1" className={line} />
        <circle cx="200" cy="125" r="30" pathLength="1" className={line} />
        <rect x="20" y="70" width="55" height="110" pathLength="1" className={line} />
        <rect x="20" y="95" width="20" height="60" pathLength="1" className={line} />
        <rect x="325" y="70" width="55" height="110" pathLength="1" className={line} />
        <rect x="360" y="95" width="20" height="60" pathLength="1" className={line} />
        <path d="M75 105 A30 30 0 0 1 75 145" pathLength="1" className={line} />
        <path d="M325 105 A30 30 0 0 0 325 145" pathLength="1" className={line} />
      </g>
      <g className="stroke-black/25" strokeWidth="1" fill="none" strokeDasharray="3 4">
        <path d="M20 8 H380" />
        <path d="M392 20 V230" />
      </g>
      <g className="stroke-black/40" strokeWidth="1.5" fill="none">
        <path d="M20 4 V12 M380 4 V12" />
        <path d="M388 20 H396 M388 230 H396" />
      </g>
    </svg>
  );
}

interface SheetVisualProps {
  src?: AssetSource | null;
  alt: string;
  drawKey: string;
  initials: string;
}

function SheetVisual({ src, alt, drawKey, initials }: SheetVisualProps) {
  const [failedSrc, setFailedSrc] = useState<string | null>(null);
  const resolved = src ? resolveAssetSrc(src) : '';
  const showPhoto = Boolean(resolved && failedSrc !== resolved);

  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-t-3xl bg-neutral-50">
      {showPhoto ? (
        <img
          key={resolved}
          src={resolved}
          alt={alt}
          loading="lazy"
          decoding="async"
          onError={() => setFailedSrc(resolved)}
          className="h-full w-full object-cover"
        />
      ) : (
        <>
          <div
            aria-hidden="true"
            className="absolute inset-0 [background-image:linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] [background-size:28px_28px]"
          />
          <div className="absolute inset-0 p-8 sm:p-12">
            <CourtPlan drawKey={drawKey} />
          </div>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-6 right-4 select-none text-[9rem] font-extralight leading-none text-black/[0.05] sm:text-[12rem]"
          >
            {initials}
          </span>
        </>
      )}
      <span aria-hidden="true" className="absolute left-4 top-4 h-4 w-4 border-l-2 border-t-2 border-sports-light" />
      <span aria-hidden="true" className="absolute right-4 top-4 h-4 w-4 border-r-2 border-t-2 border-sports-light" />
    </div>
  );
}

export default function SportProjects({ sport }: { sport: SportDiscipline }) {
  const [activeEntryIdx, setActiveEntryIdx] = useState(0);
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);

  const entry = sport.entries ? sport.entries[activeEntryIdx] : null;
  const activePhoto = entry ? entry.images?.[activePhotoIdx] : sport.cover;
  const projects = sport.projects || [];
  const n = projects.length;
  const hasProjects = n > 0;

  const selectedIdx = Math.max(
    0,
    projects.findIndex((p) => p.entry >= 0 && p.entry === activeEntryIdx)
  );
  const selected = projects[selectedIdx];
  const title = entry ? entry.title : selected?.name || sport.name;
  const kind = entry ? entry.kind : 'Featured Venue';

  const selectable = projects.map((p, i) => (p.entry >= 0 ? i : -1)).filter((i) => i >= 0);

  const [reduced, setReduced] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [tick, setTick] = useState(0);
  const [start, setStart] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setReduced(true);
    }
  }, []);

  const autoPlay = selectable.length > 1 && !reduced;
  const paused = isPaused || isHovered;
  const windowed = n > VISIBLE;

  useEffect(() => {
    if (!windowed) return;
    setStart((s) => {
      let next = s;
      if (selectedIdx < s) next = selectedIdx;
      else if (selectedIdx >= s + VISIBLE) next = selectedIdx - VISIBLE + 1;
      return Math.min(Math.max(next, 0), n - VISIBLE);
    });
  }, [selectedIdx, windowed, n]);

  const openProject = (i: number) => {
    const p = projects[i];
    if (!p || p.entry < 0) return;
    setActiveEntryIdx(p.entry);
    setActivePhotoIdx(0);
    setTick((t) => t + 1);
  };

  const advance = () => {
    if (selectable.length === 0) return;
    const k = selectable.indexOf(selectedIdx);
    openProject(selectable[(k + 1) % selectable.length]);
  };

  return (
    <section id="projects" className="border-b border-black/10 bg-white py-20 text-brand-black lg:py-28">
      <style>{`
        @keyframes bp-draw { from { stroke-dashoffset: 1; } to { stroke-dashoffset: 0; } }
        .bp-draw { stroke-dasharray: 1; animation: bp-draw 1.4s ease-out forwards; }
        @keyframes projects-progress-fill { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        @media (prefers-reduced-motion: reduce) {
          .bp-draw { animation: none; stroke-dasharray: none; }
        }
      `}</style>

      <Container>
        <div className="flex flex-col justify-between gap-6 border-b border-black/10 pb-8 md:flex-row md:items-end">
          <div>
            <h2 className="text-3xl font-light tracking-tight text-brand-black sm:text-4xl lg:text-5xl">
              Delivered {sport.name} <span className="font-semibold text-sports-light">Projects</span>
            </h2>
          </div>
          <p className="max-w-md text-base font-light leading-relaxed text-black/70">
            Explore notable stadium installations, university venues, and private sports clubs built by
            Khater Sports across Egypt.
          </p>
        </div>

        {hasProjects ? (
          <div
            className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-12"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="lg:col-span-5">
              <div
                className="overflow-hidden border-b border-black/10"
                style={windowed ? { height: VISIBLE * ROW_H } : undefined}
              >
                <ol
                  className="transition-transform duration-[800ms] ease-[cubic-bezier(0.65,0,0.35,1)]"
                  style={windowed ? { transform: `translateY(-${start * ROW_H}px)` } : undefined}
                >
                  {projects.map((p, i) => {
                    const isSelected = i === selectedIdx && p.entry >= 0;
                    const canOpen = p.entry >= 0;
                    return (
                      <li key={p.name} className="border-t border-black/10" style={{ height: ROW_H }}>
                        <button
                          type="button"
                          disabled={!canOpen}
                          aria-pressed={isSelected}
                          onClick={() => openProject(i)}
                          className={`group relative flex h-full w-full items-center gap-5 overflow-hidden px-3 text-left transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sports-light disabled:cursor-default ${
                            isSelected ? 'bg-neutral-50' : 'hover:bg-neutral-50/70'
                          }`}
                        >
                          <span
                            aria-hidden="true"
                            className={`absolute left-0 top-0 h-full w-0.5 origin-top bg-sports-light transition-transform duration-500 ${
                              isSelected ? 'scale-y-100' : 'scale-y-0'
                            }`}
                          />
                          <span
                            className={`w-10 shrink-0 text-3xl font-extralight leading-none transition-colors duration-300 ${
                              isSelected ? 'text-sports-light' : 'text-black/20 group-hover:text-black/40'
                            }`}
                          >
                            {pad(i + 1)}
                          </span>

                          <div className="min-w-0 flex-1">
                            <span
                              className={`block truncate text-base font-semibold transition-colors ${
                                isSelected ? 'text-brand-black' : 'text-black/70 group-hover:text-brand-black'
                              }`}
                            >
                              {p.name}
                            </span>
                            {p.type && (
                              <span className="mt-0.5 block truncate text-xs font-light text-black/50">{p.type}</span>
                            )}
                            <span className="mt-1.5 inline-flex items-center gap-1 text-[11px] font-medium text-sports-light">
                              <MapPin size={11} aria-hidden="true" /> Egypt Venue
                              {p.images && p.images.length > 1 && (
                                <span className="ml-2 font-mono text-[10px] text-black/40">
                                  · {p.images.length} photos
                                </span>
                              )}
                            </span>
                          </div>

                          <ArrowRight
                            size={16}
                            aria-hidden="true"
                            className={`shrink-0 transition-all duration-300 ${
                              isSelected
                                ? 'translate-x-0 text-sports-light opacity-100'
                                : '-translate-x-2 text-black/40 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'
                            }`}
                          />

                          {isSelected && autoPlay && (
                            <span
                              aria-hidden="true"
                              className="absolute inset-x-0 bottom-0 h-[3px] bg-black/[0.07]"
                            >
                              <span
                                key={`${selectedIdx}-${tick}`}
                                onAnimationEnd={advance}
                                className="block h-full w-full origin-left bg-sports-light"
                                style={{
                                  animation: `projects-progress-fill ${SLIDE_MS}ms linear forwards`,
                                  animationPlayState: paused ? 'paused' : 'running',
                                }}
                              />
                            </span>
                          )}
                        </button>
                      </li>
                    );
                  })}
                </ol>
              </div>

              {autoPlay && (
                <div className="mt-5 flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold tracking-widest text-black/50">
                    {pad(selectedIdx + 1)} / {pad(n)}
                  </span>
                  <button
                    type="button"
                    onClick={() => setIsPaused((p) => !p)}
                    aria-label={isPaused ? 'Resume auto-rotation' : 'Pause auto-rotation'}
                    className="grid h-9 w-9 place-items-center rounded-full border border-black/15 bg-white text-black/70 transition-colors hover:border-black/40 hover:text-black"
                  >
                    {isPaused ? <Play className="ml-0.5 h-3.5 w-3.5" /> : <Pause className="h-3.5 w-3.5" />}
                  </button>
                </div>
              )}
            </div>

            <div className="lg:col-span-7">
              <div className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-[0_24px_50px_-28px_rgba(0,0,0,0.25)]">
                <SheetVisual
                  src={activePhoto}
                  alt={title}
                  drawKey={`${activeEntryIdx}-${selectedIdx}`}
                  initials={initialsOf(title)}
                />

                {entry?.images && entry.images.length > 1 && (
                  <div className="flex flex-wrap gap-2 border-t border-black/10 bg-neutral-50 px-5 py-3">
                    {entry.images.map((img, i) => (
                      <button
                        key={img}
                        type="button"
                        onClick={() => setActivePhotoIdx(i)}
                        aria-label={`Photo ${i + 1}`}
                        aria-current={i === activePhotoIdx ? 'true' : undefined}
                        className={`h-11 w-16 overflow-hidden rounded-lg border-2 bg-neutral-200 transition ${
                          i === activePhotoIdx
                            ? 'border-sports-light shadow-md'
                            : 'border-transparent opacity-70 hover:opacity-100'
                        }`}
                      >
                        <img
                          src={resolveAssetSrc(img)}
                          alt=""
                          loading="lazy"
                          decoding="async"
                          className="h-full w-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}

                <div className="grid grid-cols-2 divide-x divide-y divide-black/10 border-t border-black/10 sm:grid-cols-4 sm:divide-y-0">
                  <div className="col-span-2 p-5 sm:col-span-2">
                    <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-black/40">
                      {kind}
                    </span>
                    <h3 className="mt-1 text-lg font-semibold leading-tight tracking-tight sm:text-xl">{title}</h3>
                    {entry?.sub && <p className="mt-1 text-xs font-light text-black/60">{entry.sub}</p>}
                  </div>
                  <div className="p-5">
                    <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-black/40">
                      Sheet
                    </span>
                    <div className="mt-1 text-lg font-semibold">
                      {pad(selectedIdx + 1)}
                      <span className="text-black/30"> / {pad(n)}</span>
                    </div>
                  </div>
                  <div className="flex items-center p-5">
                    <a
                      href={sport.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-brand-black px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-sports-light"
                    >
                      Official Archive
                      <ArrowUpRight size={13} aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-12 grid items-center gap-10 overflow-hidden rounded-3xl border border-black/10 bg-neutral-50 p-8 sm:p-12 lg:grid-cols-2">
            <div>
              <Trophy size={32} className="text-sports-light" aria-hidden="true" />
              <p className="mt-4 text-xl font-semibold tracking-tight text-brand-black sm:text-2xl">
                Project Case Studies in Final Preparation
              </p>
              <p className="mt-2 max-w-md text-sm font-light leading-relaxed text-black/60">
                Khater Sports has built numerous {sport.name} installations across Egypt. Blueprints and
                photography are currently being archived.
              </p>
            </div>
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-black/10 bg-white">
              <div
                aria-hidden="true"
                className="absolute inset-0 [background-image:linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] [background-size:28px_28px]"
              />
              <div className="absolute inset-0 p-8">
                <CourtPlan drawKey="empty" />
              </div>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
