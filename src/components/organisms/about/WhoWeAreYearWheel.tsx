'use client';

import { useEffect, useState } from 'react';
import { Pause, Play } from 'lucide-react';
import logoMark from '@/assets/logos/khater-groups.png';
import { resolveAssetSrc } from '@/lib/assets';

const START_YEAR = 1987;
const END_YEAR = Math.max(2027, new Date().getFullYear());
const YEARS = Array.from({ length: END_YEAR - START_YEAR + 1 }, (_, i) => START_YEAR + i);

const CENTER_X = '80%';
const STEP_DEG = 23;
const STEP_MS = 300;
const BASE_MS = 380;
const END_HOLD_MS = 2500;
const VISIBLE = 3;
const FADE = [0, 0.85, 0.5, 0.22];

const img = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=700&h=700&q=70`;

const milestones = [
  {
    year: 1987,
    image: img('photo-1542291026-7eec264c27ff'),
    title: 'Where it began',
    text: 'Khater Sports is established, starting with trading sporting goods with a focus on customer satisfaction.',
  },
  {
    year: 1990,
    image: 'https://images.pexels.com/photos/27151849/pexels-photo-27151849.jpeg?auto=compress&cs=tinysrgb&w=700&h=700&fit=crop',
    title: 'Squash Courts',
    text: 'Khater Sports is established, starting with trading sporting goods with a focus on customer satisfaction.',
  },
  {
    year: 1998,
    image: img('photo-1504307651254-35680f356dfd'),
    title: 'First stadiums',
    text: 'Fayoum Stadium and the Military College Stadium athletics track mark the move into sports construction.',
  },
  {
    year: 2002,
    image: 'https://images.pexels.com/photos/4536850/pexels-photo-4536850.jpeg?auto=compress&cs=tinysrgb&w=700&h=700&fit=crop',
    title: 'Padel Courts',
    text: 'Fayoum Stadium and the Military College Stadium athletics track mark the move into sports construction.',
  },
  {
    year: 2005,
    image: img('photo-1431324155629-1a6deb1dec8d'),
    title: 'African Nations stadiums',
    text: 'Development of the African Nations Championship stadiums in Alexandria, Ismailia, Port Said and the Military College.',
  },
  {
    year: 2010,
    image: 'https://images.pexels.com/photos/28808436/pexels-photo-28808436.jpeg?auto=compress&cs=tinysrgb&w=700&h=700&fit=crop',
    title: 'Where it football',
    text: 'Khater Sports is established, starting with trading sporting goods with a focus on customer satisfaction.',
  },
  {
    year: 2015,
    image: 'https://images.pexels.com/photos/11149460/pexels-photo-11149460.jpeg?auto=compress&cs=tinysrgb&w=700&h=700&fit=crop',
    title: 'Where it Tennis',
    text: 'Khater Sports is established, starting with trading sporting goods with a focus on customer satisfaction.',
  },
  {
    year: 2019,
    image: img('photo-1574629810360-7efbbe195018'),
    title: 'Hosting major tournaments',
    text: 'The African Cup of Nations is played on Khater Sports grounds, followed by international handball and shooting championships in 2020.',
  },
  {
    year: 2021,
    image: img('photo-1530549387789-4c1017266635'),
    title: 'Beyond Egypt',
    text: 'Courts for the Gamal Abdel Nasser Library in Somaliland, and the World Military Cup played on our grounds.',
  },
  {
    year: 2025,
    image: img('photo-1554068865-24cecd4e34b8'),
    title: 'Amaala, Saudi Arabia',
    text: 'First three contracts with Red Sea Global within the Amaala Triple Bay project, as an approved vendor.',
  },
];

function RollingDigit({ digit }: { digit: number }) {
  return (
    <span className="relative inline-block h-[1em] w-[0.64em] overflow-hidden align-top leading-none">
      <span
        className="absolute left-0 top-0 flex w-full flex-col transition-transform duration-300 ease-out"
        style={{ transform: `translateY(-${9 - digit}em)` }}
      >
        {Array.from({ length: 10 }, (_, n) => 9 - n).map((n) => (
          <span key={n} className="block h-[1em] w-full text-center leading-none">
            {n}
          </span>
        ))}
      </span>
    </span>
  );
}

function Slide({ src, alt, active }: { src: string; alt: string; active: boolean }) {
  const [ok, setOk] = useState(true);

  return (
    <div
      className={`absolute inset-0 transition duration-500 ease-out ${
        active ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
      }`}
    >
      {ok ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setOk(false)}
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="grid h-full w-full place-items-center bg-gradient-to-br from-[#2a2a2a] to-[#111]">
          <img src={resolveAssetSrc(logoMark)} alt="" className="h-12 w-12 object-contain opacity-30" />
        </div>
      )}
    </div>
  );
}

export default function WhoWeAreYearWheel() {
  const last = YEARS.length - 1;
  const [index, setIndex] = useState(0);
  const [duration, setDuration] = useState(BASE_MS);
  const [hovered, setHovered] = useState(false);
  const [playing, setPlaying] = useState(
    () => !(typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches)
  );

  const year = YEARS[index];
  const digits = String(year).split('').map(Number);
  const activeMilestone = milestones.reduce((acc, m) => (m.year <= year ? m : acc), milestones[0]);

  const durationFor = (from: number, to: number) => Math.min(900, BASE_MS + Math.abs(to - from) * 20);

  useEffect(() => {
    if (!playing || hovered) return undefined;
    const atEnd = index === last;
    const timer = setTimeout(
      () => {
        const next = atEnd ? 0 : index + 1;
        setDuration(durationFor(index, next));
        setIndex(next);
      },
      atEnd ? END_HOLD_MS : STEP_MS
    );
    return () => clearTimeout(timer);
  }, [index, playing, hovered, last]);

  const jumpTo = (next: number) => {
    setDuration(durationFor(index, next));
    setIndex(next);
  };

  return (
    <div className="lg:-mr-10">
      <div
        className="relative mx-auto h-[460px] w-full max-w-[460px] [--box:104px] [--r:185px] sm:h-[560px] sm:max-w-[560px] sm:[--box:150px] sm:[--r:265px] lg:max-w-none"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        role="group"
        aria-label={`Khater timeline, year ${year}`}
      >
        <div
          className="absolute inset-0 overflow-hidden"
          style={{
            maskImage: 'linear-gradient(to bottom, transparent, #000 20%, #000 80%, transparent)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent, #000 20%, #000 80%, transparent)',
          }}
        >
          <div className="absolute top-1/2" style={{ left: `calc(${CENTER_X} - var(--r))` }}>
            <span
              className="absolute rounded-full border border-white/50"
              style={{
                width: 'calc(var(--r) * 2 + 72px)',
                height: 'calc(var(--r) * 2 + 72px)',
                left: 'calc(var(--r) * -1 - 36px)',
                top: 'calc(var(--r) * -1 - 36px)',
              }}
              aria-hidden="true"
            />
            <span
              className="absolute rounded-full border border-white/20"
              style={{
                width: 'calc(var(--r) * 2 - 72px)',
                height: 'calc(var(--r) * 2 - 72px)',
                left: 'calc(var(--r) * -1 + 36px)',
                top: 'calc(var(--r) * -1 + 36px)',
              }}
              aria-hidden="true"
            />

            {YEARS.map((y, i) => {
              const d = i - index;
              const visible = Math.abs(d) <= VISIBLE && d !== 0;
              const angle = -d * STEP_DEG;

              return (
                <div
                  key={y}
                  className="absolute left-0 top-0"
                  style={{
                    transform: `rotate(${angle}deg) translateX(var(--r)) rotate(${-angle}deg)`,
                    opacity: visible ? FADE[Math.abs(d)] : 0,
                    transition: `transform ${duration}ms cubic-bezier(0.22, 0.8, 0.2, 1), opacity ${duration}ms ease`,
                    pointerEvents: visible ? 'auto' : 'none',
                  }}
                >
                  <button
                    type="button"
                    tabIndex={visible ? 0 : -1}
                    aria-label={`Go to ${y}`}
                    onClick={() => jumpTo(i)}
                    className="block -translate-x-1/2 -translate-y-1/2 text-2xl font-semibold tabular-nums tracking-tight text-white transition hover:text-white/70 sm:text-3xl"
                  >
                    {y}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        <div
          className="absolute left-0 top-1/2 flex h-[var(--box)] -translate-y-1/2 items-center justify-end rounded-[28px] border border-white/10 bg-gradient-to-r from-white/[0.02] to-white/[0.10] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.9)]"
          style={{ width: CENTER_X, paddingRight: 'calc(var(--box) / 2 + 14px)' }}
        >
          <p className="flex text-[3.2rem] font-semibold tracking-tight text-white sm:text-[4.8rem]" aria-live="off">
            {digits.map((digit, i) => (
              <RollingDigit key={i} digit={digit} />
            ))}
          </p>
        </div>

        <div className="absolute top-1/2 z-10 -translate-x-1/2 -translate-y-1/2" style={{ left: CENTER_X }}>
          <div className="relative h-[var(--box)] w-[var(--box)]">
            <span
              className="absolute inset-0 rounded-[28px] border border-white/10 bg-white/[0.04]"
              style={{ transform: 'translate(10px, -8px) rotate(4deg)' }}
              aria-hidden="true"
            />
            <span
              className="absolute inset-0 rounded-[28px] border border-white/10 bg-white/[0.04]"
              style={{ transform: 'translate(-6px, 10px) rotate(-3deg)' }}
              aria-hidden="true"
            />
            <div className="relative h-full w-full overflow-hidden rounded-[28px] border border-white/25 bg-[#141414] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)]">
              {milestones.map((m) => (
                <Slide key={m.year} src={m.image} alt={m.title} active={m.year === activeMilestone.year} />
              ))}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 grid">
        {milestones.map((m) => (
          <div
            key={m.year}
            className={`col-start-1 row-start-1 transition duration-300 ${
              m.year === activeMilestone.year ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-2 opacity-0'
            }`}
            aria-hidden={m.year !== activeMilestone.year}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/45">{m.year}</p>
            <h3 className="mt-2 text-lg font-medium tracking-tight">{m.title}</h3>
            <p className="mt-1 max-w-sm text-sm leading-6 text-white/55">{m.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-4">
        <button
          type="button"
          onClick={() => setPlaying((v) => !v)}
          aria-label={playing ? 'Pause timeline' : 'Play timeline'}
          className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/15 text-white/70 transition hover:border-white/40 hover:text-white"
        >
          {playing ? <Pause size={14} aria-hidden="true" /> : <Play size={14} aria-hidden="true" />}
        </button>
        <span className="text-xs tabular-nums text-white/45">{START_YEAR}</span>
        <div className="h-[2px] flex-1 bg-white/15">
          <div
            className="h-full bg-white transition-[width] ease-out"
            style={{ width: `${(index / last) * 100}%`, transitionDuration: `${duration}ms` }}
          />
        </div>
        <span className="text-xs tabular-nums text-white/45">{END_YEAR}</span>
      </div>
    </div>
  );
}
