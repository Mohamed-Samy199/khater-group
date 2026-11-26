'use client';

import { useLayoutEffect, useRef, type ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface StagePoint {
  len: number;
  side: 'top' | 'apex' | 'bottom';
}

interface OurJourneyAnimatorProps {
  children: ReactNode;
  total: number;
  x0: number;
  x1: number;
  y0: number;
  y1: number;
  r: number;
  lenArm: number;
  lenArc: number;
  stages: StagePoint[];
  drawSeconds: number;
  startDelay: number;
  kBeforeEnd: number;
  kDrawSeconds: number;
  kStagger: number;
  kFillOpacity: number;
}

export default function OurJourneyAnimator({
  children,
  total,
  x0,
  x1,
  y0,
  y1,
  r,
  lenArm,
  lenArc,
  stages,
  drawSeconds,
  startDelay,
  kBeforeEnd,
  kDrawSeconds,
  kStagger,
  kFillOpacity,
}: OurJourneyAnimatorProps) {
  const rootRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;

    const pointAt = (len: number) => {
      if (len <= lenArm) return { x: x0 + len, y: y0 };
      if (len <= lenArm + lenArc) {
        const t = (len - lenArm) / r;
        return { x: x1 + r * Math.sin(t), y: y0 + r - r * Math.cos(t) };
      }
      return { x: x1 - (len - lenArm - lenArc), y: y1 };
    };

    const mm = gsap.matchMedia();

    const ctx = gsap.context(() => {
      mm.add('(min-width: 1024px) and (prefers-reduced-motion: no-preference)', () => {
        const stage = root.querySelector<HTMLElement>('[data-journey-stage]');
        const fill = root.querySelector<SVGPathElement>('[data-journey-fill]');
        const head = root.querySelector<SVGGElement>('[data-journey-head]');
        if (!stage || !fill || !head) return;

        gsap.set(fill, { strokeDasharray: total, strokeDashoffset: total });
        gsap.set(head, { opacity: 0 });
        gsap.set('.j-head-copy', { opacity: 0, y: 24 });
        gsap.set('.j-node-inner', { opacity: 0, scale: 0.4 });
        gsap.set('.j-card-inner', { opacity: 0 });
        gsap.set('.j-k-line', { strokeDashoffset: 1, fillOpacity: 0 });

        const state = { len: 0 };
        const tl = gsap.timeline({
          scrollTrigger: { trigger: stage, start: 'top 70%', once: true },
        });

        tl.to(
          '.j-head-copy',
          { opacity: 1, y: 0, duration: 0.9, stagger: 0.12, ease: 'power3.out' },
          0
        );

        tl.set(head, { opacity: 1 }, startDelay);
        tl.to(
          state,
          {
            len: total,
            duration: drawSeconds,
            ease: 'none',
            onUpdate: () => {
              const p = pointAt(state.len);
              fill.style.strokeDashoffset = String(total - state.len);
              head.setAttribute('transform', `translate(${p.x} ${p.y})`);
            },
          },
          startDelay
        );
        tl.to(head, { opacity: 0, duration: 0.6 }, startDelay + drawSeconds);

        stages.forEach((st, i) => {
          const at = startDelay + (drawSeconds * st.len) / total;
          const slide =
            st.side === 'top' ? { y: 24 } : st.side === 'bottom' ? { y: -24 } : { x: 24 };

          tl.to(
            `[data-node="${i}"] .j-node-inner`,
            { opacity: 1, scale: 1, duration: 0.55, ease: 'back.out(2)' },
            at - 0.1
          );
          tl.fromTo(
            `[data-node="${i}"] .j-icon`,
            { rotate: 0 },
            {
              rotate: 360,
              duration: 0.9,
              ease: 'power2.inOut',
              transformOrigin: '50% 50%',
              clearProps: 'transform',
            },
            at - 0.1
          );
          tl.fromTo(
            `[data-card="${i}"] .j-card-inner`,
            { opacity: 0, ...slide },
            { opacity: 1, x: 0, y: 0, duration: 0.9, ease: 'power3.out', clearProps: 'transform' },
            at + 0.1
          );
        });

        const kAt = Math.max(0.5, startDelay + drawSeconds - kBeforeEnd);
        tl.to(
          '.j-k-line',
          {
            strokeDashoffset: 0,
            duration: kDrawSeconds,
            stagger: kStagger,
            ease: 'power1.inOut',
          },
          kAt
        );
        tl.to(
          '.j-k-line',
          { fillOpacity: kFillOpacity, duration: 2, ease: 'power1.out' },
          kAt + kDrawSeconds * 0.7
        );
      });

      mm.add('(max-width: 1023px) and (prefers-reduced-motion: no-preference)', () => {
        (gsap.utils.toArray('.j-m-item') as HTMLElement[]).forEach((item) => {
          gsap.fromTo(
            item,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: 'power3.out',
              clearProps: 'opacity,transform',
              scrollTrigger: { trigger: item, start: 'top 85%' },
            }
          );
        });
      });
    }, rootRef);

    return () => {
      mm.revert();
      ctx.revert();
    };
  }, [
    total,
    x0,
    x1,
    y0,
    y1,
    r,
    lenArm,
    lenArc,
    stages,
    drawSeconds,
    startDelay,
    kBeforeEnd,
    kDrawSeconds,
    kStagger,
    kFillOpacity,
  ]);

  return (
    <section ref={rootRef} id="journey" className="relative isolate bg-black py-8 text-white lg:py-10">
      {children}
    </section>
  );
}
