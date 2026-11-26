import ArcShowcaseAnimator from '@/components/molecules/ArcShowcaseAnimator';
import { ARC_SCAPES_ITEMS } from '@/constants/scapesData';

const HEADING_LEAD = 'From living softscapes to architectural hardscapes,';
const HEADING_ACCENT = 'crafted with ecological precision.';
const TEXT =
  'Khater Scapes designs, builds, and maintains natural environments and civic spaces: sustainable softscapes, stone plazas, computerized smart irrigation networks, shaded timber structures, reflection water features, and mature palm transplantation across Egypt and the Middle East.';
const BUTTON = { label: 'Explore Landscape Systems', href: '#scapes-solutions' };
const MORE = 'Softscapes · Hardscapes · Irrigation · Water · Palms';

const R = (x: number, y: number, w: number, h: number) => `M${x} ${y}h${w}v${h}h${-w}z`;
const C = (cx: number, cy: number, r: number) =>
  `M${cx - r} ${cy}a${r} ${r} 0 1 0 ${r * 2} 0a${r} ${r} 0 1 0 ${-r * 2} 0`;

const ICONS = {
  palm: ['M60 74V30', 'M60 30Q40 14 22 24', 'M60 30Q80 14 98 24', 'M60 30Q44 30 30 44', 'M60 30Q76 30 90 44', 'M60 30V12', 'M48 74H72'],
  water: ['M10 30Q25 18 40 30T70 30T100 30', 'M10 48Q25 36 40 48T70 48T100 48', 'M10 66Q25 54 40 66T70 66T100 66'],
  stone: [R(14, 14, 92, 52), 'M14 40H106', 'M45 14V40', 'M75 14V40', 'M30 40V66', 'M60 40V66', 'M90 40V66'],
  irrigation: ['M10 22H110', 'M30 22V34', 'M60 22V34', 'M90 22V34', C(30, 42, 4), C(60, 42, 4), C(90, 42, 4), 'M10 70H110'],
  timber: ['M24 74V24', 'M96 74V24', 'M14 24H106', 'M14 36H106', 'M40 24V36', 'M60 24V36', 'M80 24V36'],
  lawn: ['M10 72H110', 'M22 72Q24 56 20 44', 'M36 72Q36 52 40 40', 'M52 72Q50 54 54 36', 'M68 72Q70 56 66 44', 'M84 72Q84 52 88 40', 'M98 72Q98 58 102 48'],
  bench: ['M22 40H98', 'M22 50H98', 'M30 50V70', 'M90 50V70', 'M22 40V32', 'M98 40V32'],
  light: ['M60 72V20', 'M48 72H72', C(60, 14, 6), 'M44 26L36 32', 'M76 26L84 32'],
  planter: ['M30 46H90L82 72H38Z', 'M60 46V22', 'M60 34Q42 34 42 18Q60 18 60 34', 'M60 38Q78 38 78 22Q60 22 60 38'],
  path: ['M20 72Q60 56 100 72', 'M32 62Q60 50 88 62', 'M44 54Q60 46 76 54'],
  tree: [C(60, 30, 22), 'M60 52V74', 'M44 74H76'],
  leaf: ['M60 72V40', 'M60 40Q30 40 30 14Q60 14 60 40', 'M60 54Q90 54 90 30Q60 30 60 54'],
};

const iconFor = (name = ''): string[] => {
  const k = name.toLowerCase();
  if (/palm/.test(k)) return ICONS.palm;
  if (/water|fountain|pond|reflect|pool/.test(k)) return ICONS.water;
  if (/stone|hard|paving|plaza|pave/.test(k)) return ICONS.stone;
  if (/irrig|smart/.test(k)) return ICONS.irrigation;
  if (/timber|pergola|shade|wood|structure/.test(k)) return ICONS.timber;
  if (/lawn|grass|turf/.test(k)) return ICONS.lawn;
  if (/bench|seat|furniture/.test(k)) return ICONS.bench;
  if (/light/.test(k)) return ICONS.light;
  if (/planter|pot|bed/.test(k)) return ICONS.planter;
  if (/path|walk|bridge|track|road/.test(k)) return ICONS.path;
  if (/tree|plant|garden|soft/.test(k)) return ICONS.tree;
  return ICONS.leaf;
};

const ARC_CSS = `
  @keyframes scape-draw { from { stroke-dashoffset: 1; } to { stroke-dashoffset: 0; } }
  [data-tile]:hover .scape-line,
  [data-tile]:focus-visible .scape-line {
    stroke-dasharray: 1;
    animation: scape-draw 0.9s ease-out forwards;
  }
  @media (prefers-reduced-motion: reduce) {
    [data-tile]:hover .scape-line,
    [data-tile]:focus-visible .scape-line { animation: none; stroke-dasharray: none; }
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
            className="scape-line stroke-black/30 transition-colors duration-300 group-hover:stroke-scapes-light"
          />
        ))}
      </g>
    </svg>
  );
}

export default function ScapesArcShowcase() {
  return (
    <ArcShowcaseAnimator ariaLabel="Khater Scapes Landscape Solutions" css={ARC_CSS}>
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <div data-copy className="lg:col-span-5">
            <h2 className="mt-4 text-4xl font-light tracking-tight text-brand-black sm:text-5xl">
              {HEADING_LEAD} <span className="font-medium text-black/60">{HEADING_ACCENT}</span>
            </h2>

            <p className="mt-5 text-base font-light leading-relaxed text-black/70">{TEXT}</p>

            <a
              href={BUTTON.href}
              className="group mt-7 inline-flex items-center gap-3 rounded-full bg-[#141414] py-2 pl-6 pr-2 text-[15px] font-medium text-white shadow-md transition duration-300 hover:bg-scapes hover:shadow-lg"
            >
              {BUTTON.label}
              <span className="grid h-9 w-9 place-items-center rounded-full bg-scapes-light text-white transition duration-300 group-hover:bg-white group-hover:text-scapes">
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
            {ARC_SCAPES_ITEMS.map((item) => (
              <li key={item.name}>
                <a
                  data-tile
                  href={BUTTON.href}
                  className="group flex h-full flex-col items-center justify-between gap-3 rounded-2xl border border-black/10 bg-neutral-50 px-3 pb-3 pt-4 transition-all duration-300 hover:-translate-y-1 hover:border-scapes-light/50 hover:bg-white hover:shadow-[0_16px_32px_-16px_rgba(0,0,0,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-scapes-light"
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
                className="group flex h-full min-h-[116px] flex-col items-center justify-center gap-1 rounded-2xl border border-scapes-light bg-scapes-light px-3 py-4 text-center text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_-12px_rgba(2,74,63,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-black"
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
