import type { CSSProperties } from 'react';
import { Award, Flag, Globe2, Layers, TrendingUp } from 'lucide-react';
import OurJourneyAnimator from './OurJourneyAnimator';

const BLACK = '#000000';
const WHITE = '#FFFFFF';
const NEUTRAL_GREY = '#B3B3B3';
const CHARCOAL = '#5B5B5B';

const chapters = [
  {
    number: '01',
    title: 'Our Beginning',
    text: 'We began our journey by trading sporting goods, prioritizing customer satisfaction at every step.',
  },
  {
    number: '02',
    title: 'Rapid Growth',
    text: 'We quickly established ourselves as a leading sports construction company in Egypt, building some of the largest stadiums, sporting clubs, and other facilities across the nation.',
  },
  {
    number: '03',
    title: 'Unmatched Quality',
    text: 'Our dedication to using premium materials and partnering with world-renowned accredited firms has made us the supplier of choice for state-of-the-art sports facilities.',
  },
  {
    number: '04',
    title: 'Regional Expansion',
    text: 'With over 40 years of success in Egypt, we’ve expanded our expertise to become a trusted sports expert across Africa and the Middle East.',
  },
  {
    number: '05',
    title: 'Beyond Construction',
    text: 'We’ve broadened our scope to include sports consultations, development, and manufacturing. Our aim is to deliver customized solutions for all your sporting needs.',
  },
];

const ICONS = [Flag, TrendingUp, Award, Globe2, Layers];

const K_W = 772;
const K_H = 935;
const K_BODY = 'M4 4 H298 V415 L525 92 L765 255 L300 925 H4 Z';
const K_TRI = 'M390 925 L577 658 L765 925 Z';

const K_STROKE_OPACITY = 0.3;
const K_FILL_OPACITY = 0.04;

function KMark({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox={`0 0 ${K_W} ${K_H}`}
      className={className}
      fill={NEUTRAL_GREY}
      fillOpacity="0.6"
      aria-hidden="true"
    >
      <path d={K_BODY} />
      <path d={K_TRI} />
    </svg>
  );
}

const W = 1200;
const X0 = 70;
const X1 = 930;
const TOP_SPACE = 190;
const BOTTOM_SPACE = 175;
const R = 190;
const Y0 = TOP_SPACE;
const Y1 = Y0 + 2 * R;
const H = Y1 + BOTTOM_SPACE;

const LEN_ARM = X1 - X0;
const LEN_ARC = Math.PI * R;
const TOTAL = 2 * LEN_ARM + LEN_ARC;

const PATH = `M${X0} ${Y0} H${X1} A${R} ${R} 0 0 1 ${X1} ${Y1} H${X0}`;

const K_SCALE = 0.34;
const K_X = 400;
const K_Y = Y0 + R - (K_H * K_SCALE) / 2;

const pointAt = (len: number) => {
  if (len <= LEN_ARM) return { x: X0 + len, y: Y0 };
  if (len <= LEN_ARM + LEN_ARC) {
    const t = (len - LEN_ARM) / R;
    return { x: X1 + R * Math.sin(t), y: Y0 + R - R * Math.cos(t) };
  }
  return { x: X1 - (len - LEN_ARM - LEN_ARC), y: Y1 };
};

const EDGE = 140;
const STAGES = chapters.map((chapter, i) => {
  const len = EDGE + ((TOTAL - 2 * EDGE) / (chapters.length - 1)) * i;
  const p = pointAt(len);
  const side: 'top' | 'apex' | 'bottom' =
    len < LEN_ARM ? 'top' : len <= LEN_ARM + LEN_ARC ? 'apex' : 'bottom';
  return { ...chapter, len, side, left: (p.x / W) * 100, top: (p.y / H) * 100, Icon: ICONS[i] };
});

const DRAW_SECONDS = 9;
const START_DELAY = 0.4;
const K_BEFORE_END = 5;
const K_DRAW_SECONDS = 4;
const K_STAGGER = 0.6;

const NODE_SIZE = 'clamp(30px, 3cqw, 42px)';
const GAP = '2cqw';
const CARD_W = '28cqw';

const cardPlacement: Record<'top' | 'apex' | 'bottom', { transform: string; width: string }> = {
  top: { transform: `translate(0, calc(-100% - ${GAP}))`, width: CARD_W },
  bottom: { transform: `translate(0, ${GAP})`, width: CARD_W },
  apex: { transform: `translate(calc(-100% - 2.8cqw), -50%)`, width: CARD_W },
};

const ANIM_STAGES = STAGES.map(({ len, side }) => ({ len, side }));

export default function OurJourney() {
  return (
    <OurJourneyAnimator
      total={TOTAL}
      x0={X0}
      x1={X1}
      y0={Y0}
      y1={Y1}
      r={R}
      lenArm={LEN_ARM}
      lenArc={LEN_ARC}
      stages={ANIM_STAGES}
      drawSeconds={DRAW_SECONDS}
      startDelay={START_DELAY}
      kBeforeEnd={K_BEFORE_END}
      kDrawSeconds={K_DRAW_SECONDS}
      kStagger={K_STAGGER}
      kFillOpacity={K_FILL_OPACITY}
    >
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
        {/* Desktop U-path */}
        <div
          data-journey-stage
          className="relative hidden w-full lg:block"
          style={{ aspectRatio: `${W} / ${H}`, containerType: 'inline-size' } as CSSProperties}
        >
          <svg
            viewBox={`0 0 ${W} ${H}`}
            className="absolute inset-0 h-full w-full"
            fill="none"
            aria-hidden="true"
          >
            <g transform={`translate(${K_X} ${K_Y}) scale(${K_SCALE})`}>
              {[K_BODY, K_TRI].map((d) => (
                <path
                  key={d}
                  className="j-k-line"
                  d={d}
                  pathLength="1"
                  stroke={NEUTRAL_GREY}
                  strokeOpacity={K_STROKE_OPACITY}
                  strokeWidth="3"
                  strokeLinejoin="round"
                  fill={WHITE}
                  fillOpacity={K_FILL_OPACITY}
                  style={{ strokeDasharray: 1, strokeDashoffset: 0 }}
                />
              ))}
            </g>

            <path d={PATH} stroke={CHARCOAL} strokeOpacity="0.6" strokeWidth="2" />
            <path
              data-journey-fill
              d={PATH}
              stroke={WHITE}
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            <g data-journey-head transform={`translate(${X0} ${Y0})`}>
              <circle r="16" fill={WHITE} opacity="0.18" />
              <circle r="6" fill={WHITE} />
            </g>
          </svg>

          <div
            className="absolute"
            style={{
              left: `${(X0 / W) * 100}%`,
              top: `${((Y0 + R) / H) * 100}%`,
              width: '30%',
              transform: 'translateY(-50%)',
            }}
          >
            <p className="j-head-copy flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/50">
              <span className="h-px w-10 bg-white/40" aria-hidden="true" />
              Since 1987
            </p>
            <h2 className="j-head-copy mt-4 text-4xl font-light tracking-tight xl:text-5xl">
              Our <span className="font-medium text-white/60">Journey</span>
            </h2>
          </div>

          {STAGES.map((stage, i) => (
            <div
              key={`node-${stage.number}`}
              data-node={i}
              className="absolute z-10"
              style={{
                left: `${stage.left}%`,
                top: `${stage.top}%`,
                width: NODE_SIZE,
                height: NODE_SIZE,
                transform: 'translate(-50%, -50%)',
              }}
            >
              <span
                className="j-node-inner grid h-full w-full place-items-center rounded-full bg-white"
                style={{ boxShadow: `0 0 0 6px ${BLACK}` }}
              >
                <stage.Icon className="j-icon text-black" style={{ width: '48%', height: '48%' }} />
              </span>
            </div>
          ))}

          {STAGES.map((stage, i) => {
            const isApex = stage.side === 'apex';
            const place = cardPlacement[stage.side];

            return (
              <article
                key={`card-${stage.number}`}
                data-card={i}
                className="absolute z-[5]"
                style={{
                  left: `${stage.left}%`,
                  top: `${stage.top}%`,
                  width: place.width,
                  transform: place.transform,
                }}
              >
                <div
                  className={`j-card-inner relative ${isApex ? 'text-right' : ''}`}
                  style={isApex ? { paddingRight: '1.4cqw' } : { paddingLeft: '1.4cqw' }}
                >
                  <span
                    aria-hidden="true"
                    className="absolute w-px"
                    style={{
                      ...(isApex
                        ? { right: 0, top: 0, bottom: 0 }
                        : {
                            left: 0,
                            top: stage.side === 'bottom' ? `-${GAP}` : 0,
                            bottom: stage.side === 'top' ? `-${GAP}` : 0,
                          }),
                      background: `linear-gradient(to ${
                        stage.side === 'bottom' ? 'bottom' : 'top'
                      }, ${WHITE}, transparent)`,
                    }}
                  />

                  <p
                    className="font-light leading-none text-white"
                    style={{ fontSize: 'clamp(1.5rem, 3cqw, 2.75rem)' }}
                  >
                    {stage.number}
                  </p>
                  <h3
                    className="mt-[0.7cqw] font-medium uppercase tracking-wide text-white"
                    style={{ fontSize: 'clamp(0.68rem, 1.05cqw, 0.9rem)' }}
                  >
                    {stage.title}
                  </h3>
                  <p
                    className="mt-[0.6cqw]"
                    style={{
                      color: NEUTRAL_GREY,
                      fontSize: 'clamp(0.72rem, 1.05cqw, 0.9rem)',
                      lineHeight: 1.6,
                    }}
                  >
                    {stage.text}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        {/* Mobile / Tablet vertical timeline */}
        <div className="lg:hidden">
          <KMark className="mb-5 h-8 w-auto" />
          <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/50">
            <span className="h-px w-10 bg-white/40" aria-hidden="true" />
            Since 1987
          </p>
          <h2 className="mt-5 text-4xl font-light tracking-tight sm:text-5xl">
            Our <span className="font-medium text-white/60">Journey</span>
          </h2>

          <ol className="relative mt-12">
            <span
              aria-hidden="true"
              className="absolute bottom-0 left-[19px] top-0 w-px"
              style={{ backgroundColor: `${CHARCOAL}99` }}
            />
            {STAGES.map((stage) => (
              <li
                key={`m-${stage.number}`}
                className="j-m-item relative pb-12 pl-16 last:pb-0 sm:pl-20"
              >
                <span className="absolute left-0 top-0 grid h-10 w-10 place-items-center rounded-full bg-white">
                  <stage.Icon className="h-[18px] w-[18px] text-black" />
                </span>
                <p className="text-5xl font-light leading-none text-white">{stage.number}</p>
                <h3 className="mt-3 text-sm font-medium uppercase tracking-wide text-white">
                  {stage.title}
                </h3>
                <p
                  className="mt-3 text-base font-light leading-7"
                  style={{ color: NEUTRAL_GREY }}
                >
                  {stage.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </OurJourneyAnimator>
  );
}
