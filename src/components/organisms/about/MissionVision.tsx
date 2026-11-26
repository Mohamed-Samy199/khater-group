'use client';

import { useEffect, useRef, useState } from 'react';
import { Dumbbell, Flame, Handshake, Scale, Telescope, Trophy, type LucideIcon } from 'lucide-react';

const AUTOPLAY_MS = 5000;

interface ValueItem {
  icon: LucideIcon;
  name: string;
  text: string;
}

interface StatementTab {
  id: string;
  number: string;
  title: string;
  icon: LucideIcon;
  kind: 'statement';
  content: string;
  highlight?: string;
}

interface ValuesTab {
  id: string;
  number: string;
  title: string;
  icon: LucideIcon;
  kind: 'values';
  items: ValueItem[];
}

type MissionTab = StatementTab | ValuesTab;

const tabsData: MissionTab[] = [
  {
    id: 'mission',
    number: '01',
    title: 'Our Mission',
    icon: Dumbbell,
    kind: 'statement',
    content:
      'Fueled by our unwavering passion for fitness, integrity, and social responsibility, we are dedicated to enhancing the community’s well-being by offering specialized sports solutions.',
    highlight: 'Our mission is to make people fitter and healthier.',
  },
  {
    id: 'vision',
    number: '02',
    title: 'Our Vision',
    icon: Telescope,
    kind: 'statement',
    content:
      'To be the premier provider, shaping the future of sports infrastructure by combining sustainability, innovation, and performance.',
  },
  {
    id: 'values',
    number: '03',
    title: 'Core Values',
    icon: Handshake,
    kind: 'values',
    items: [
      {
        icon: Flame,
        name: 'Passion',
        text: 'Our relentless passion fuels our continuous improvement.',
      },
      {
        icon: Scale,
        name: 'Integrity',
        text: 'Trust is earned through our unwavering commitment to respect, honesty, and ethical conduct.',
      },
      {
        icon: Trophy,
        name: 'Excellence',
        text: 'We are consistently refining our systems to optimize performance and align our business strategies with our people’s capabilities.',
      },
    ],
  },
];

function ProgressBorder({ progress, radius = 16 }: { progress: number; radius?: number }) {
  const ref = useRef<SVGSVGElement | null>(null);
  const [size, setSize] = useState({ w: 0, h: 0 });

  useEffect(() => {
    const parent = ref.current?.parentElement;
    if (!parent) return undefined;

    const measure = () => setSize({ w: parent.offsetWidth, h: parent.offsetHeight });
    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(parent);
    return () => observer.disconnect();
  }, []);

  const stroke = 2;

  return (
    <svg
      ref={ref}
      width={size.w}
      height={size.h}
      className="pointer-events-none absolute -inset-px"
      aria-hidden="true"
    >
      {size.w > 0 && (
        <rect
          x={stroke / 2}
          y={stroke / 2}
          width={size.w - stroke}
          height={size.h - stroke}
          rx={radius - stroke / 2}
          fill="none"
          stroke="#000"
          strokeWidth={stroke}
          pathLength="1"
          strokeDasharray="1"
          strokeDashoffset={1 - progress}
        />
      )}
    </svg>
  );
}

function TabContent({ tab }: { tab: MissionTab }) {
  if (tab.kind === 'values') {
    return (
      <ul className="divide-y divide-black/10 border-y border-black/10">
        {tab.items.map(({ icon: Icon, name, text }) => (
          <li key={name} className="flex gap-4 py-4">
            <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full border border-black/15 text-black/70">
              <Icon size={15} strokeWidth={1.6} aria-hidden="true" />
            </span>
            <p className="text-base leading-7 text-black/60">
              <strong className="font-semibold text-black">{name}:</strong> {text}
            </p>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div>
      <p className="max-w-2xl text-lg font-light leading-8 text-black/70 md:text-xl md:leading-9">{tab.content}</p>
      {tab.highlight && (
        <p className="mt-6 max-w-2xl border-l-2 border-black pl-4 text-lg font-medium leading-8 text-black md:text-xl">
          {tab.highlight}
        </p>
      )}
    </div>
  );
}

export default function MissionVision() {
  const [activeTab, setActiveTab] = useState(0);
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);
  const progressRef = useRef(0);
  const [reducedMotion] = useState(
    () => typeof window !== 'undefined' && !!window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
  );

  useEffect(() => {
    if (paused || reducedMotion) return undefined;

    let frame = 0;
    let last = performance.now();

    const tick = (now: number) => {
      const delta = Math.min(now - last, 100);
      last = now;

      progressRef.current += delta / AUTOPLAY_MS;
      if (progressRef.current >= 1) {
        progressRef.current = 0;
        setActiveTab((current) => (current + 1) % tabsData.length);
      }
      setProgress(progressRef.current);
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [paused, reducedMotion]);

  const selectTab = (index: number) => {
    progressRef.current = 0;
    setProgress(0);
    setActiveTab(index);
  };

  return (
    <section className="relative isolate overflow-hidden bg-white py-20 text-black lg:py-28">
      <div
        className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div role="tablist" aria-label="Mission, vision and values" className="grid gap-3 sm:grid-cols-3">
          {tabsData.map((tab, index) => {
            const isActive = activeTab === index;
            const TabIcon = tab.icon;

            return (
              <button
                key={tab.id}
                id={`tab-${tab.id}`}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`panel-${tab.id}`}
                onClick={() => selectTab(index)}
                className={`group relative flex items-center gap-4 rounded-2xl border bg-white px-6 py-5 text-left transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black ${
                  isActive
                    ? 'border-black/10 text-black'
                    : 'border-black/10 text-black/50 hover:border-black/30 hover:text-black'
                }`}
              >
                <span
                  className={`font-mono text-xs tabular-nums transition ${
                    isActive ? 'text-black/60' : 'text-black/30 group-hover:text-black/50'
                  }`}
                >
                  {tab.number}
                </span>
                <span className="flex-1 text-lg font-light tracking-tight sm:text-xl">{tab.title}</span>
                <span
                  className={`grid h-10 w-10 shrink-0 place-items-center rounded-full border transition duration-300 ${
                    isActive ? 'border-black bg-black text-white' : 'border-black/15 text-black/60'
                  }`}
                >
                  <TabIcon size={18} strokeWidth={1.5} aria-hidden="true" />
                </span>

                {isActive && !reducedMotion && <ProgressBorder progress={progress} />}
              </button>
            );
          })}
        </div>

        <div className="relative mt-4 grid overflow-hidden rounded-3xl border border-black/10 bg-neutral-50 p-8 md:p-12">
          {tabsData.map((tab, index) => {
            const isActive = activeTab === index;
            const Icon = tab.icon;

            return (
              <div
                key={tab.id}
                id={`panel-${tab.id}`}
                role="tabpanel"
                aria-labelledby={`tab-${tab.id}`}
                aria-hidden={!isActive}
                className={`col-start-1 row-start-1 grid items-center gap-8 transition duration-500 ease-out lg:grid-cols-[0.8fr_1.2fr] lg:gap-14 ${
                  isActive ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
                }`}
              >
                <span
                  className="pointer-events-none absolute -bottom-10 right-4 select-none text-[12rem] font-bold leading-none text-transparent"
                  style={{ WebkitTextStroke: '1px rgba(0,0,0,0.07)' }}
                  aria-hidden="true"
                >
                  {tab.number}
                </span>

                <div className="relative border-b border-black/10 pb-8 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-10">
                  <span className="mb-6 grid h-14 w-14 place-items-center rounded-full bg-black text-white">
                    <Icon size={24} strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <p className="mb-2 font-mono text-xs tabular-nums text-black/40">
                    {tab.number} / 0{tabsData.length}
                  </p>
                  <h3 className="text-3xl font-light tracking-tight sm:text-4xl">{tab.title}</h3>
                </div>

                <div className="relative">
                  <TabContent tab={tab} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
