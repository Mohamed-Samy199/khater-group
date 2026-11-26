import ArcShowcaseAnimator from '@/components/molecules/ArcShowcaseAnimator';
import { ARC_AQUATICS_ITEMS } from '@/constants/aquaticsData';

const HEADING_LEAD = 'From 50m Olympic arenas to resort leisure pools,';
const HEADING_ACCENT = 'built to World Aquatics precision.';
const TEXT =
  'Khater Aquatics engineers turnkey concrete and prefabricated swimming pools: FINA-compliant Olympic pools, 25m semi-Olympic training facilities, architectural leisure pools, low-maintenance mechanical filtration rooms, and competition touchpad timing setups.';
const BUTTON = { label: 'Explore Aquatic Systems', href: '#aquatics-solutions' };
const MORE = 'Olympic Pools · Training · Leisure · Filtration · Timing';

const R = (x: number, y: number, w: number, h: number) => `M${x} ${y}h${w}v${h}h${-w}z`;
const WAVE = (y: number) => `M10 ${y}Q25 ${y - 8} 40 ${y}T70 ${y}T100 ${y}`;

const ICONS = {
  olympic: [R(8, 14, 104, 52), 'M8 27H112', 'M8 40H112', 'M8 53H112', 'M20 14V66', 'M100 14V66'],
  semi: [R(24, 20, 72, 40), 'M24 33H96', 'M24 47H96', 'M34 20V60'],
  leisure: ['M18 40Q18 16 52 18Q76 20 84 30Q106 30 104 48Q100 68 70 64Q50 62 36 66Q18 66 18 40Z', 'M40 42Q50 34 60 42T80 42'],
  filtration: [R(16, 20, 30, 46), 'M16 34H46', R(74, 38, 28, 28), 'M46 30H88V38', 'M46 56H74', 'M10 70H110'],
  touchpad: [R(34, 10, 52, 32), 'M46 20H74', 'M46 30H74', 'M60 42V50', WAVE(60), WAVE(72)],
  diving: ['M12 34H70', 'M24 34V54', 'M70 34L96 28', WAVE(62), WAVE(74)],
  prefab: [R(14, 20, 92, 40), 'M37 20V60', 'M60 20V60', 'M83 20V60', 'M14 40H106', 'M10 66H110'],
  waves: [WAVE(26), WAVE(42), WAVE(58), WAVE(74)],
};

const iconFor = (name = ''): string[] => {
  const k = name.toLowerCase();
  if (/touchpad|timing|touch|start/.test(k)) return ICONS.touchpad;
  if (/filtrat|mechanic|plant|pump|room|treat|filter/.test(k)) return ICONS.filtration;
  if (/semi|25|training/.test(k)) return ICONS.semi;
  if (/olympic|50|fina|competition|aquatics/.test(k)) return ICONS.olympic;
  if (/leisure|resort|architect|recreation|spa/.test(k)) return ICONS.leisure;
  if (/div|board/.test(k)) return ICONS.diving;
  if (/prefab|panel|modular|concrete/.test(k)) return ICONS.prefab;
  return ICONS.waves;
};

const ARC_CSS = `
  @keyframes aqua-draw { from { stroke-dashoffset: 1; } to { stroke-dashoffset: 0; } }
  [data-tile]:hover .aqua-line,
  [data-tile]:focus-visible .aqua-line {
    stroke-dasharray: 1;
    animation: aqua-draw 0.9s ease-out forwards;
  }
  @media (prefers-reduced-motion: reduce) {
    [data-tile]:hover .aqua-line,
    [data-tile]:focus-visible .aqua-line { animation: none; stroke-dasharray: none; }
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
            className="aqua-line stroke-black/30 transition-colors duration-300 group-hover:stroke-aquatics-light"
          />
        ))}
      </g>
    </svg>
  );
}

export default function AquaticsArcShowcase() {
  return (
    <ArcShowcaseAnimator ariaLabel="Khater Aquatics Swimming Pools Overview" css={ARC_CSS}>
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <div data-copy className="lg:col-span-5">
            <h2 className="text-4xl font-light tracking-tight text-brand-black sm:text-5xl">
              {HEADING_LEAD} <span className="font-medium text-black/60">{HEADING_ACCENT}</span>
            </h2>

            <p className="mt-5 text-base font-light leading-relaxed text-black/70">{TEXT}</p>

            <a
              href={BUTTON.href}
              className="group mt-7 inline-flex items-center gap-3 rounded-full bg-[#141414] py-2 pl-6 pr-2 text-[15px] font-medium text-white shadow-md transition duration-300 hover:bg-aquatics hover:shadow-lg"
            >
              {BUTTON.label}
              <span className="grid h-9 w-9 place-items-center rounded-full bg-aquatics-light text-white transition duration-300 group-hover:bg-white group-hover:text-aquatics">
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
            {ARC_AQUATICS_ITEMS.map((item) => (
              <li key={item.name}>
                <a
                  data-tile
                  href={BUTTON.href}
                  className="group flex h-full flex-col items-center justify-between gap-3 rounded-2xl border border-black/10 bg-neutral-50 px-3 pb-3 pt-4 transition-all duration-300 hover:-translate-y-1 hover:border-aquatics-light/50 hover:bg-white hover:shadow-[0_16px_32px_-16px_rgba(0,0,0,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aquatics-light"
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
                className="group flex h-full min-h-[116px] flex-col items-center justify-center gap-1 rounded-2xl border border-aquatics bg-aquatics px-3 py-4 text-center text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_-12px_rgba(0,131,189,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-black"
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
