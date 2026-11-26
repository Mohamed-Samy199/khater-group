'use client';

import { useEffect, useRef, useState, type CSSProperties } from 'react';

const SHOW_ARABIC = false;
const TWO = Math.PI * 2;
const LOOP = 8;

type LayoutKey = 'wide' | 'tall';

interface LayoutConfig {
  vb: string;
  aspect: string;
  c: [number, number];
  k: number;
  r0: number;
  tw: number;
  th: number;
  s: number;
  en: number;
  ar: number;
  rings: number[];
  pos: Record<string, [number, number]>;
}

const LAYOUTS: Record<LayoutKey, LayoutConfig> = {
  wide: {
    vb: '225 100 1150 790',
    aspect: '1150/790',
    c: [800, 450],
    k: 1.35,
    r0: 108,
    tw: 158,
    th: 166,
    s: 1,
    en: 16,
    ar: 17,
    rings: [300, 410],
    pos: { tech: [540, 215], sports: [1060, 215], play: [330, 450], scapes: [1270, 450], aquatics: [800, 785] },
  },
  tall: {
    vb: '0 0 520 780',
    aspect: '520/780',
    c: [260, 385],
    k: 0.8,
    r0: 66,
    tw: 134,
    th: 144,
    s: 0.8,
    en: 14,
    ar: 15,
    rings: [180, 250],
    pos: { tech: [112, 135], sports: [408, 135], play: [76, 385], scapes: [444, 385], aquatics: [260, 650] },
  },
};

const R = (x: number, y: number, w: number, h: number) => `M${x} ${y}h${w}v${h}h${-w}z`;
const C = (cx: number, cy: number, r: number) =>
  `M${cx - r} ${cy}a${r} ${r} 0 1 0 ${r * 2} 0a${r} ${r} 0 1 0 ${-r * 2} 0`;
const WAVE = (y: number) => `M10 ${y}Q25 ${y - 7} 40 ${y}T70 ${y}T100 ${y}`;

const DIVISIONS = [
  {
    id: 'tech',
    en: 'TECH',
    ar: 'تيك',
    c1: '#352A75',
    c2: '#6481BD',
    d: [R(14, 8, 92, 46), 'M60 54V68', 'M38 68H82', 'M28 20H46V31H28V42H46', 'M66 20V42', 'M76 24H92', 'M76 38H92'],
  },
  {
    id: 'sports',
    en: 'SPORTS',
    ar: 'سبورتس',
    c1: '#A11D21',
    c2: '#DE1F26',
    d: [R(8, 10, 104, 60), 'M60 10V70', C(60, 40, 12), R(8, 27, 18, 26), R(94, 27, 18, 26)],
  },
  {
    id: 'play',
    en: 'PLAY',
    ar: 'بلاي',
    c1: '#90268F',
    c2: '#DF72E8',
    d: ['M60 8L112 70H8Z', 'M60 8L34 70', 'M60 8V70', 'M60 8L86 70', 'M41.5 30H78.5', 'M25 50H95'],
  },
  {
    id: 'scapes',
    en: 'SCAPES',
    ar: 'سكابس',
    c1: '#024A3F',
    c2: '#8DC85B',
    d: ['M6 68H114', 'M6 68Q30 40 54 54T100 46Q108 46 114 54', 'M114 54V68', C(30, 26, 12), 'M30 38V50', C(88, 38, 8), 'M88 46V55'],
  },
  {
    id: 'aquatics',
    en: 'AQUATICS',
    ar: 'أكواتكس',
    c1: '#0083BD',
    c2: '#14C1E2',
    d: [R(8, 12, 104, 50), 'M8 25H112', 'M8 37H112', 'M8 49H112', 'M20 12V62', WAVE(72)],
  },
];

const K1 =
  'M 232.914062 117.765625 L 158.523438 224.984375 L 158.523438 225 L 112.164062 225 L 112.164062 78.09375 L 158.523438 78.09375 L 158.523438 143.683594 L 194.832031 91.339844 Z M 232.914062 117.765625 ';
const K2 =
  'M 233.085938 224.992188 L 172.988281 224.992188 C 183.007812 210.582031 193.027344 196.171875 203.035156 181.761719 C 213.046875 196.171875 223.066406 210.582031 233.085938 224.992188 ';

const GRID_X = Array.from({ length: 31 }, (_, i) => i * 64 - 192);
const GRID_Y = Array.from({ length: 20 }, (_, i) => i * 64 - 192);

const bez = (p: number[], q: number): [number, number] => {
  const u = 1 - q;
  const a = u * u * u;
  const b = 3 * u * u * q;
  const c = 3 * u * q * q;
  const d = q * q * q;
  return [
    a * p[0] + b * p[2] + c * p[4] + d * p[6],
    a * p[1] + b * p[3] + c * p[5] + d * p[7],
  ];
};

function NetworkHero({
  active,
  reduced,
  layout,
}: {
  active: boolean;
  reduced: boolean;
  layout: LayoutKey;
}) {
  const L = LAYOUTS[layout];
  const [CX, CY] = L.c;
  const TW = L.tw;
  const TH = L.th;
  const R0 = L.r0;
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return undefined;
    const links = svg.querySelectorAll('[data-link]');
    const dots = svg.querySelectorAll('[data-dot]');
    const tiles = svg.querySelectorAll('[data-tile]');
    const sheen = svg.querySelector('[data-sheen]');
    const glow = svg.querySelector('[data-glow]');

    const draw = (t: number) => {
      DIVISIONS.forEach((o, i) => {
        const fy = reduced ? 0 : 4 * Math.sin((TWO * t) / LOOP + i * 1.3);
        const [px0, py0] = L.pos[o.id];
        const tx = px0;
        const ty = py0 + fy;
        tiles[i]?.setAttribute('transform', `translate(${tx.toFixed(1)} ${ty.toFixed(1)})`);

        const dx = CX - tx;
        const dy = CY - ty;
        const len = Math.hypot(dx, dy);
        const ux = dx / len;
        const uy = dy / len;
        const hit =
          Math.min(
            Math.abs(ux) > 1e-3 ? TW / 2 / Math.abs(ux) : 1e9,
            Math.abs(uy) > 1e-3 ? TH / 2 / Math.abs(uy) : 1e9
          ) + 4;
        const ex = tx + ux * hit;
        const ey = ty + uy * hit;
        const sx = CX - ux * R0;
        const sy = CY - uy * R0;
        const px = -uy;
        const py = ux;
        const off = (i % 2 ? 1 : -1) * Math.min(46, len * 0.12);
        const seg = Math.hypot(ex - sx, ey - sy);
        const c1x = sx - ux * seg * 0.3 + px * off;
        const c1y = sy - uy * seg * 0.3 + py * off;
        const c2x = ex + ux * seg * 0.3 - px * off;
        const c2y = ey + uy * seg * 0.3 - py * off;
        links[i]?.setAttribute(
          'd',
          `M${sx.toFixed(1)} ${sy.toFixed(1)}C${c1x.toFixed(1)} ${c1y.toFixed(1)} ${c2x.toFixed(1)} ${c2y.toFixed(1)} ${ex.toFixed(1)} ${ey.toFixed(1)}`
        );
        const pts = [sx, sy, c1x, c1y, c2x, c2y, ex, ey];
        [0, 1].forEach((k) => {
          const g = dots[i * 2 + k];
          if (!g) return;
          if (reduced) {
            g.setAttribute('opacity', '0');
            return;
          }
          const q = (((t / (LOOP / 2) + i * 0.2 + k * 0.5) % 1) + 1) % 1;
          const [x, y] = bez(pts, q);
          g.setAttribute('transform', `translate(${x.toFixed(1)} ${y.toFixed(1)})`);
          g.setAttribute('opacity', Math.sin(Math.PI * q).toFixed(2));
        });
      });
      sheen?.setAttribute('x', (-90 + ((t % LOOP) / LOOP) * 340).toFixed(1));
      glow?.setAttribute('r', (L.k * 170 + 6 * Math.sin((TWO * t) / LOOP)).toFixed(1));
    };

    if (reduced || !active) {
      draw(0);
      return undefined;
    }

    let raf = 0;
    const t0 = performance.now();
    const frame = () => {
      draw((performance.now() - t0) / 1000);
      raf = requestAnimationFrame(frame);
    };
    frame();
    return () => cancelAnimationFrame(raf);
  }, [active, reduced, L, CX, CY, TW, TH, R0]);

  const setOn = (i: number, v: boolean) => {
    const svg = svgRef.current;
    if (!svg) return;
    const tile = svg.querySelectorAll('[data-tile]')[i];
    tile?.classList.toggle('kn-on', v);
    if (v && !reduced && tile?.querySelectorAll) {
      tile.querySelectorAll('.kn-ln').forEach((p) => {
        p.getAnimations?.().forEach((a) => {
          if (!(a instanceof window.CSSAnimation)) a.cancel();
        });
        p.animate?.([{ strokeDashoffset: 1 }, { strokeDashoffset: 0 }], {
          duration: 900,
          easing: 'ease-out',
        });
      });
    }
    svg.querySelectorAll('[data-link]')[i]?.classList.toggle('kn-on', v);
  };

  return (
    <svg
      ref={svgRef}
      viewBox={L.vb}
      preserveAspectRatio="xMidYMid meet"
      className="absolute inset-0 h-full w-full overflow-visible"
      role="img"
      aria-label="Khater Group sectors connected through a shared vision"
    >
      <style>{`
        .kn-ln{stroke-dasharray:1;stroke-dashoffset:1;animation:kn-draw 1.5s ease-out forwards;animation-delay:var(--d)}
        .kn-card{transition:stroke-opacity .3s}
        .kn-on .kn-card{stroke-opacity:.95}
        .kn-link{transition:stroke-opacity .3s,stroke-width .3s}
        .kn-link.kn-on{stroke-opacity:1;stroke-width:3}
        @keyframes kn-draw{from{stroke-dashoffset:1}to{stroke-dashoffset:0}}
        @media (prefers-reduced-motion:reduce){.kn-ln{animation:none;stroke-dashoffset:0}}
      `}</style>
      <defs>
        <radialGradient id="kn-hl">
          <stop offset="0" stopColor="#fff" stopOpacity=".2" />
          <stop offset=".55" stopColor="#fff" stopOpacity=".05" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id="kn-gm"
          gradientUnits="userSpaceOnUse"
          cx={CX}
          cy={CY}
          r={layout === 'wide' ? 600 : 420}
          gradientTransform={`translate(${CX} ${CY}) scale(1 ${layout === 'wide' ? 0.6 : 0.9}) translate(${-CX} ${-CY})`}
        >
          <stop offset="0" stopColor="#fff" />
          <stop offset="1" stopColor="#000" />
        </radialGradient>
        <mask id="kn-gmask">
          <rect x="-200" y="-200" width="1900" height="1300" fill="url(#kn-gm)" />
        </mask>
        <linearGradient id="kn-sheen" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#000" stopOpacity="0" />
          <stop offset=".5" stopColor="#000" stopOpacity=".16" />
          <stop offset="1" stopColor="#000" stopOpacity="0" />
        </linearGradient>
        <clipPath id="kn-kc">
          <path d={K1} />
          <path d={K2} />
        </clipPath>
        {DIVISIONS.map((o) => (
          <radialGradient key={o.id} id={`kn-g-${o.id}`}>
            <stop offset="0" stopColor={o.c2} stopOpacity=".38" />
            <stop offset="1" stopColor={o.c2} stopOpacity="0" />
          </radialGradient>
        ))}
      </defs>

      <g mask="url(#kn-gmask)" stroke="#fff" strokeOpacity=".07" strokeWidth="1">
        {GRID_X.map((x) => (
          <line key={`x${x}`} x1={x} x2={x} y1="-200" y2="1100" />
        ))}
        {GRID_Y.map((y) => (
          <line key={`y${y}`} y1={y} y2={y} x1="-200" x2="1700" />
        ))}
      </g>
      <g fill="none" stroke="#fff" strokeOpacity=".08">
        {L.rings.map((r) => (
          <circle key={r} cx={CX} cy={CY} r={r} />
        ))}
      </g>
      <circle data-glow cx={CX} cy={CY} r={L.k * 170} fill="url(#kn-hl)" />

      <g>
        {DIVISIONS.map((o) => (
          <g key={o.id}>
            <path data-link className="kn-link" fill="none" stroke={o.c2} strokeOpacity=".6" strokeWidth="1.8" strokeLinecap="round" />
            {[0, 1].map((k) => (
              <g key={k} data-dot opacity="0">
                <circle r="12" fill={`url(#kn-g-${o.id})`} />
                <circle r="3.6" fill={o.c2} />
                <circle r="1.5" fill="#fff" />
              </g>
            ))}
          </g>
        ))}
      </g>

      <g>
        {DIVISIONS.map((o, i) => (
          <g
            key={o.id}
            data-tile
            tabIndex={0}
            style={{ cursor: 'pointer', outline: 'none' }}
            onMouseEnter={() => setOn(i, true)}
            onMouseLeave={() => setOn(i, false)}
            onFocus={() => setOn(i, true)}
            onBlur={() => setOn(i, false)}
          >
            <rect x={-TW / 2 - 12} y={-TH / 2 - 12} width={TW + 24} height={TH + 24} fill="transparent" />
            <circle r={TW * 0.6} fill={`url(#kn-g-${o.id})`} />
            <rect className="kn-card" x={-TW / 2} y={-TH / 2} width={TW} height={TH} rx="26" fill="#0c0c0c" fillOpacity=".78" stroke={o.c2} strokeOpacity=".4" strokeWidth="1.4" />
            <g transform={`translate(${-60 * L.s} ${-TH / 2 + 26}) scale(${L.s})`} fill="none" stroke={o.c2} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
              {o.d.map((d, k) => (
                <path
                  key={k}
                  className="kn-ln"
                  pathLength="1"
                  d={d}
                  style={{ '--d': `${(0.3 + i * 0.18).toFixed(2)}s` } as CSSProperties}
                />
              ))}
            </g>
            <text
              y={SHOW_ARABIC ? TH / 2 - L.en * 2.1 : TH / 2 - 22}
              textAnchor="middle"
              fill="#fff"
              fontSize={L.en}
              fontWeight="600"
              letterSpacing="2.4"
              style={{ fontFamily: 'inherit' }}
            >
              {o.en}
            </text>
            {SHOW_ARABIC && (
              <text
                y={TH / 2 - 13}
                textAnchor="middle"
                fill="#fff"
                fillOpacity=".65"
                fontSize={L.ar}
                style={{ fontFamily: 'inherit' }}
              >
                {o.ar}
              </text>
            )}
          </g>
        ))}
      </g>

      <g transform={`translate(${CX} ${CY}) scale(${L.k}) translate(-172.5 -151.5)`} pointerEvents="none">
        <path d={K1} fill="#fff" />
        <path d={K2} fill="#fff" />
        <g clipPath="url(#kn-kc)">
          <rect data-sheen x="0" y="60" width="70" height="180" fill="url(#kn-sheen)" transform="skewX(-22)" />
        </g>
      </g>
    </svg>
  );
}

export default function NetworkHeroClient() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(
    () => typeof window !== 'undefined' && !('IntersectionObserver' in window)
  );
  const [tall, setTall] = useState(false);
  const [prefersReducedMotion] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 639px)');
    const on = () => setTall(mq.matches);
    on();
    mq.addEventListener('change', on);
    return () => mq.removeEventListener('change', on);
  }, []);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.15 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const layout: LayoutKey = tall ? 'tall' : 'wide';

  return (
    <div
      ref={containerRef}
      className="relative mx-auto w-full max-w-[560px] sm:max-w-[760px]"
      style={{ aspectRatio: LAYOUTS[layout].aspect }}
    >
      <NetworkHero active={inView} reduced={prefersReducedMotion} layout={layout} />
    </div>
  );
}
