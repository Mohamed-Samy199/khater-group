import ArcShowcaseAnimator from '@/components/molecules/ArcShowcaseAnimator';
import { ARC_PLAY_ITEMS } from '@/constants/playData';

const HEADING_LEAD = 'From adventure towers to certified safety flooring,';
const HEADING_ACCENT = 'built for safety and wonder.';
const TEXT =
  'Khater Play delivers turn-key recreational environments: themed multi-level play structures, seamless wet-pour EPDM rubber surfaces, high-tensile climbing rope pyramids, inclusive and sensory play gardens, toddler wonderlands, and zero-depth aquatic splash pads compliant with international EN 1176 and EN 1177 standards.';
const BUTTON = { label: 'Explore Play Systems', href: '#play-solutions' };
const MORE = 'Towers · Climbing · Flooring · Splash Pads · Sensory Gardens';

const R = (x: number, y: number, w: number, h: number) => `M${x} ${y}h${w}v${h}h${-w}z`;
const C = (cx: number, cy: number, r: number) =>
  `M${cx - r} ${cy}a${r} ${r} 0 1 0 ${r * 2} 0a${r} ${r} 0 1 0 ${-r * 2} 0`;

const ICONS = {
  tower: ['M36 74V36', 'M76 74V36', 'M36 36H76', 'M30 36L56 14L82 36Z', 'M36 54H76', 'M76 40Q96 50 106 74', 'M10 74H110'],
  slide: ['M20 74V28', 'M34 74V28', 'M20 40H34', 'M20 52H34', 'M20 64H34', 'M20 28H44', 'M44 28Q84 32 104 70', 'M10 74H110'],
  swing: ['M20 74L40 14', 'M100 74L80 14', 'M40 14H80', 'M52 14V50', 'M68 14V50', 'M46 50H74', 'M10 74H110'],
  pyramid: ['M60 12L24 70', 'M60 12L96 70', 'M60 12V70', 'M24 70H96', 'M52 28H68', 'M44 41H76', 'M34 56H86'],
  splash: ['M60 70V36', 'M60 36Q44 30 36 44', 'M60 36Q76 30 84 44', 'M60 36Q50 20 44 18', 'M60 36Q70 20 76 18', C(34, 54, 3), C(86, 54, 3), 'M24 72Q60 82 96 72', 'M10 72H110'],
  flooring: [R(14, 18, 92, 48), 'M14 34H106', 'M14 50H106', 'M37 18V66', 'M60 18V66', 'M83 18V66', C(60, 42, 9)],
  blocks: [R(22, 48, 28, 26), R(54, 48, 28, 26), R(38, 22, 28, 26), R(86, 58, 16, 16), 'M10 74H110'],
  flower: ['M60 74V40', 'M60 62Q44 62 42 50', 'M60 56Q76 56 78 44', C(60, 32, 6), C(60, 18, 6), C(47, 26, 6), C(73, 26, 6), C(52, 40, 6), C(68, 40, 6)],
  seesaw: ['M16 56L104 36', 'M60 46L50 74', 'M60 46L70 74', 'M10 74H110'],
  sandbox: [R(20, 46, 80, 26), 'M20 46L32 34H108L100 46', 'M34 58Q60 52 86 58'],
  ball: [C(60, 40, 24), 'M36 40Q60 22 84 40', 'M36 40Q60 58 84 40', 'M60 16V64'],
};

const iconFor = (name = ''): string[] => {
  const k = name.toLowerCase();
  if (/swing/.test(k)) return ICONS.swing;
  if (/slide/.test(k)) return ICONS.slide;
  if (/climb|rope|pyramid|net/.test(k)) return ICONS.pyramid;
  if (/splash|aquatic|water|zero|spray/.test(k)) return ICONS.splash;
  if (/floor|epdm|rubber|surface|safety|mat/.test(k)) return ICONS.flooring;
  if (/toddler|wonder|baby|block|early/.test(k)) return ICONS.blocks;
  if (/sensory|inclusive|garden|nature/.test(k)) return ICONS.flower;
  if (/seesaw|spring|rocker|balance/.test(k)) return ICONS.seesaw;
  if (/sand/.test(k)) return ICONS.sandbox;
  if (/tower|adventure|multi|struct|theme|castle|fort/.test(k)) return ICONS.tower;
  return ICONS.ball;
};

const ARC_CSS = `
  @keyframes play-draw { from { stroke-dashoffset: 1; } to { stroke-dashoffset: 0; } }
  [data-tile]:hover .play-line,
  [data-tile]:focus-visible .play-line {
    stroke-dasharray: 1;
    animation: play-draw 0.9s ease-out forwards;
  }
  @media (prefers-reduced-motion: reduce) {
    [data-tile]:hover .play-line,
    [data-tile]:focus-visible .play-line { animation: none; stroke-dasharray: none; }
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
            className="play-line stroke-black/30 transition-colors duration-300 group-hover:stroke-play"
          />
        ))}
      </g>
    </svg>
  );
}

export default function PlayArcShowcase() {
  return (
    <ArcShowcaseAnimator ariaLabel="Khater Play Playground Solutions" css={ARC_CSS}>
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <div data-copy className="lg:col-span-5">
            <h2 className="text-4xl font-light tracking-tight text-brand-black sm:text-5xl">
              {HEADING_LEAD} <span className="font-medium text-black/60">{HEADING_ACCENT}</span>
            </h2>

            <p className="mt-5 text-base font-light leading-relaxed text-black/70">{TEXT}</p>

            <a
              href={BUTTON.href}
              className="group mt-7 inline-flex items-center gap-3 rounded-full bg-[#141414] py-2 pl-6 pr-2 text-[15px] font-medium text-white shadow-md transition duration-300 hover:bg-play hover:shadow-lg"
            >
              {BUTTON.label}
              <span className="grid h-9 w-9 place-items-center rounded-full bg-play text-white transition duration-300 group-hover:bg-white group-hover:text-play">
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
            {ARC_PLAY_ITEMS.map((item) => (
              <li key={item.name}>
                <a
                  data-tile
                  href={BUTTON.href}
                  className="group flex h-full flex-col items-center justify-between gap-3 rounded-2xl border border-black/10 bg-neutral-50 px-3 pb-3 pt-4 transition-all duration-300 hover:-translate-y-1 hover:border-play/50 hover:bg-white hover:shadow-[0_16px_32px_-16px_rgba(0,0,0,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-play"
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
                className="group flex h-full min-h-[116px] flex-col items-center justify-center gap-1 rounded-2xl border border-play bg-play px-3 py-4 text-center text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_-12px_rgba(144,38,143,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-black"
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
