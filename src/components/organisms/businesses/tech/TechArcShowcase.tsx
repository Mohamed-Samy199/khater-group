import ArcShowcaseAnimator from '@/components/molecules/ArcShowcaseAnimator';
import { ARC_TECH_ITEMS } from '@/constants/techData';

const HEADING_LEAD = 'From FIBA scoreboards to millisecond timing,';
const HEADING_ACCENT = 'engineered for championship precision.';
const TEXT =
  'Khater Tech delivers turnkey sports electronics and stadium lighting: Stramatel multisport LED scoreboards, center-hung video cubes, Scorepad touchscreen consoles, World Aquatics swimming touchpad starting systems, and weatherproof court lighting poles.';
const BUTTON = { label: 'Explore Tech Solutions', href: '#tech-solutions' };
const MORE = 'Scoreboards · Video Cubes · Timing · Touchpads · Lighting';

const R = (x: number, y: number, w: number, h: number) => `M${x} ${y}h${w}v${h}h${-w}z`;
const C = (cx: number, cy: number, r: number) =>
  `M${cx - r} ${cy}a${r} ${r} 0 1 0 ${r * 2} 0a${r} ${r} 0 1 0 ${-r * 2} 0`;

const ICONS = {
  scoreboard: [R(14, 14, 92, 42), R(24, 24, 18, 22), R(78, 24, 18, 22), 'M54 30H66', 'M54 40H66', 'M40 56V70', 'M80 56V70', 'M30 70H90'],
  cube: ['M60 6V20', 'M60 20L90 34V58L60 72L30 58V34Z', 'M60 46V72', 'M30 34L60 46L90 34'],
  console: [R(24, 12, 72, 56), R(30, 18, 60, 36), C(60, 61, 2.5), 'M38 44L50 34L58 40L74 28L82 34'],
  touchpad: [R(34, 12, 52, 34), 'M46 24H74', 'M46 34H74', 'M60 46V54', 'M10 62Q25 52 40 62T70 62T100 62', 'M10 74Q25 64 40 74T70 74T100 74'],
  lighting: ['M60 74V26', 'M48 74H72', R(42, 10, 36, 16), 'M44 30L30 44', 'M60 30V46', 'M76 30L90 44'],
  stopwatch: [C(60, 46, 22), 'M60 46V32', 'M60 46L72 52', 'M52 16H68', 'M60 16V24', 'M82 28L88 22'],
  led: [R(10, 20, 100, 38), C(28, 39, 3), C(46, 39, 3), C(64, 39, 3), C(82, 39, 3), C(98, 39, 3), 'M10 68H110'],
  chip: [R(36, 22, 48, 36), R(48, 32, 24, 16), 'M46 14V22', 'M60 14V22', 'M74 14V22', 'M46 58V66', 'M60 58V66', 'M74 58V66', 'M28 34H36', 'M28 46H36', 'M84 34H92', 'M84 46H92'],
};

const iconFor = (name = ''): string[] => {
  const k = name.toLowerCase();
  if (/touchpad|swim|aquatic|start|block/.test(k)) return ICONS.touchpad;
  if (/video|cube|hung|jumbo|screen/.test(k)) return ICONS.cube;
  if (/scorepad|console|touch|tablet|control/.test(k)) return ICONS.console;
  if (/light|pole|flood|lamp/.test(k)) return ICONS.lighting;
  if (/timing|timer|clock|watch|photo|finish/.test(k)) return ICONS.stopwatch;
  if (/scoreboard|stramatel|multisport|fiba|basket/.test(k)) return ICONS.scoreboard;
  if (/led|display|panel|matrix/.test(k)) return ICONS.led;
  return ICONS.chip;
};

const ARC_CSS = `
  @keyframes tech-draw { from { stroke-dashoffset: 1; } to { stroke-dashoffset: 0; } }
  [data-tile]:hover .tech-line,
  [data-tile]:focus-visible .tech-line {
    stroke-dasharray: 1;
    animation: tech-draw 0.9s ease-out forwards;
  }
  @media (prefers-reduced-motion: reduce) {
    [data-tile]:hover .tech-line,
    [data-tile]:focus-visible .tech-line { animation: none; stroke-dasharray: none; }
  }
`;

function LineIcon({ name }: { name: string }) {
  return (
    <svg viewBox="0 0 120 80" aria-hidden="true" className="h-full w-full">
      <g fill="none" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        {iconFor(name).map((d, i) => (
          <path
            key={i}
            d={d}
            pathLength="1"
            className="tech-line stroke-black/30 transition-colors duration-300 group-hover:stroke-tech-light"
          />
        ))}
      </g>
    </svg>
  );
}

export default function TechArcShowcase() {
  return (
    <ArcShowcaseAnimator ariaLabel="Khater Tech Sports Electronics Overview" css={ARC_CSS}>
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <div data-copy className="lg:col-span-5">
            <h2 className="text-4xl font-light tracking-tight text-brand-black sm:text-5xl">
              {HEADING_LEAD} <span className="font-medium text-black/60">{HEADING_ACCENT}</span>
            </h2>

            <p className="mt-5 text-base font-light leading-relaxed text-black/70">{TEXT}</p>

            <a
              href={BUTTON.href}
              className="group mt-7 inline-flex items-center gap-3 rounded-full bg-[#141414] py-2 pl-6 pr-2 text-[15px] font-medium text-white shadow-md transition duration-300 hover:bg-tech hover:shadow-lg"
            >
              {BUTTON.label}
              <span className="grid h-9 w-9 place-items-center rounded-full bg-tech-light text-white transition duration-300 group-hover:bg-white group-hover:text-tech">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                >
                  <path
                    d="M2 7h10m0 0L8 3m4 4L8 11"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
          </div>

          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:col-span-7">
            {ARC_TECH_ITEMS.map((item) => (
              <li key={item.name}>
                <a
                  data-tile
                  href={BUTTON.href}
                  className="group flex h-full flex-col items-center justify-between gap-3 rounded-2xl border border-black/10 bg-neutral-50 px-3 pb-3 pt-4 transition-all duration-300 hover:-translate-y-1 hover:border-tech-light/50 hover:bg-white hover:shadow-[0_16px_32px_-16px_rgba(0,0,0,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tech-light"
                >
                  <span className="block h-14 w-full max-w-[104px]">
                    <LineIcon name={item.name} />
                  </span>
                  <span className="text-center text-[11px] font-semibold uppercase tracking-[0.14em] text-black/70 transition-colors group-hover:text-brand-black">
                    {item.name}
                  </span>
                </a>
              </li>
            ))}

            <li>
              <a
                data-tile
                href={BUTTON.href}
                className="group flex h-full min-h-[116px] flex-col items-center justify-center gap-1 rounded-2xl border border-tech bg-tech px-3 py-4 text-center text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_-12px_rgba(53,42,117,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-black"
              >
                <span className="text-2xl font-light leading-none">+ More</span>
                <span className="text-[10px] font-medium leading-snug text-white/85">{MORE}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </ArcShowcaseAnimator>
  );
}
