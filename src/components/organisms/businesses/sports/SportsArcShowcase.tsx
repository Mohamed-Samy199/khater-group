import ArcShowcaseAnimator from '@/components/molecules/ArcShowcaseAnimator';

const HEADING_LEAD = 'From football pitches to squash courts,';
const HEADING_ACCENT = 'built to international standards.';
const TEXT =
  'Khater Sports delivers football and hockey fields, athletics tracks, tennis, padel, padbol, pickleball and squash courts, multipurpose courts, indoor arenas, swimming pools and playgrounds, with the flooring systems and equipment each sport demands.';
const BUTTON = { label: 'Explore Our Sports', href: '#courts' };
const MORE = 'Squash · Padbol · Pickleball · Pools · Playgrounds';

const R = (x: number, y: number, w: number, h: number) => `M${x} ${y}h${w}v${h}h${-w}z`;
const C = (cx: number, cy: number, r: number) =>
  `M${cx - r} ${cy}a${r} ${r} 0 1 0 ${r * 2} 0a${r} ${r} 0 1 0 ${-r * 2} 0`;
const RR = (x: number, y: number, w: number, h: number, r: number) =>
  `M${x + r} ${y}h${w - 2 * r}a${r} ${r} 0 0 1 ${r} ${r}v${h - 2 * r}a${r} ${r} 0 0 1 ${-r} ${r}h${-(w - 2 * r)}a${r} ${r} 0 0 1 ${-r} ${-r}v${-(h - 2 * r)}a${r} ${r} 0 0 1 ${r} ${-r}z`;

const SPORTS = [
  { name: 'Football', plan: [R(8, 8, 184, 104), 'M100 8V112', C(100, 60, 14), R(8, 34, 28, 52), R(164, 34, 28, 52)] },
  { name: 'Hockey', plan: [RR(8, 8, 184, 104, 14), 'M100 8V112', 'M60 8V112', 'M140 8V112', 'M8 34A26 26 0 0 1 8 86', 'M192 34A26 26 0 0 0 192 86'] },
  { name: 'Tennis', plan: [R(8, 14, 184, 92), 'M8 28H192', 'M8 92H192', 'M100 14V106', 'M54 28V92', 'M146 28V92', 'M54 60H146'] },
  { name: 'Basketball', plan: [R(8, 12, 184, 96), 'M100 12V108', C(100, 60, 12), R(8, 42, 36, 36), R(156, 42, 36, 36), 'M8 22H26A40 40 0 0 1 26 98H8', 'M192 22H174A40 40 0 0 0 174 98H192'] },
  { name: 'Volleyball', plan: [R(24, 20, 152, 80), 'M100 14V106', 'M66 20V100', 'M134 20V100'] },
  { name: 'Padel', plan: [R(30, 10, 140, 100), 'M30 60H170', 'M30 32H170', 'M30 88H170', 'M100 32V88'] },
  { name: 'Athletics', plan: [RR(8, 14, 184, 92, 46), RR(22, 28, 156, 64, 32), RR(36, 42, 128, 36, 18), 'M100 14V28'] },
];

const ARC_CSS = `
  @keyframes sport-draw { from { stroke-dashoffset: 1; } to { stroke-dashoffset: 0; } }
  [data-tile]:hover .sport-line,
  [data-tile]:focus-visible .sport-line {
    stroke: #DE1F26;
    stroke-dasharray: 1;
    animation: sport-draw 0.9s ease-out forwards;
  }
  @media (prefers-reduced-motion: reduce) {
    [data-tile]:hover .sport-line,
    [data-tile]:focus-visible .sport-line { animation: none; stroke-dasharray: none; }
  }
`;

function CourtIcon({ plan }: { plan: string[] }) {
  return (
    <svg viewBox="0 0 200 120" aria-hidden="true" className="h-full w-full">
      <g fill="none" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        {plan.map((d, i) => (
          <path key={i} d={d} pathLength="1" className="sport-line stroke-black/30" />
        ))}
      </g>
    </svg>
  );
}

export default function SportsArcShowcase() {
  return (
    <ArcShowcaseAnimator ariaLabel="Our sports" css={ARC_CSS}>
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Copy */}
          <div data-copy className="lg:col-span-5">
            <h2 className="text-4xl font-light tracking-tight text-brand-black sm:text-5xl">
              {HEADING_LEAD} <span className="font-medium text-black/60">{HEADING_ACCENT}</span>
            </h2>

            <p className="mt-5 text-base font-light leading-relaxed text-black/70">{TEXT}</p>

            <a
              href={BUTTON.href}
              className="group mt-7 inline-flex items-center gap-3 rounded-full bg-[#141414] py-2 pl-6 pr-2 text-[15px] font-medium text-white shadow-md transition duration-300 hover:bg-sports-light hover:shadow-lg"
            >
              {BUTTON.label}
              <span className="grid h-9 w-9 place-items-center rounded-full bg-sports-light text-white transition duration-300 group-hover:bg-white group-hover:text-sports-light">
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

          {/* Sport tiles: a mini court drawing for each discipline */}
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:col-span-7">
            {SPORTS.map((s) => (
              <li key={s.name}>
                <a
                  data-tile
                  href={BUTTON.href}
                  className="group flex h-full flex-col items-center justify-between gap-3 rounded-2xl border border-black/10 bg-neutral-50 px-3 pb-3 pt-4 transition-all duration-300 hover:-translate-y-1 hover:border-sports-light/50 hover:bg-white hover:shadow-[0_16px_32px_-16px_rgba(0,0,0,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sports-light"
                >
                  <span className="block h-14 w-full max-w-[104px]">
                    <CourtIcon plan={s.plan} />
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-black/70 transition-colors group-hover:text-brand-black">
                    {s.name}
                  </span>
                </a>
              </li>
            ))}

            {/* "And more" tile */}
            <li>
              <a
                data-tile
                href={BUTTON.href}
                className="group flex h-full flex-col items-center justify-center gap-1 rounded-2xl border border-sports-light bg-sports-light px-3 py-4 text-center text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_-12px_rgba(222,31,38,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-black"
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
