'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import { gsap } from 'gsap';

interface EcosystemGridAnimatorProps {
  children: ReactNode;
  className?: string;
}

export default function EcosystemGridAnimator({
  children,
  className = '',
}: EcosystemGridAnimatorProps) {
  const gridRef = useRef<HTMLDivElement | null>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return undefined;

    const marks = Array.from(grid.querySelectorAll<HTMLElement>('[data-eco-mark]'));
    if (!marks.length) return undefined;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1 });
      marks.forEach((mark) => {
        tl.fromTo(
          mark,
          { rotation: 0 },
          {
            rotation: 360,
            duration: 1.1,
            ease: 'power2.inOut',
            immediateRender: false,
            onComplete: () => {
              gsap.set(mark, { rotation: 0 });
            },
          },
          '+=0.5'
        );
      });
      timelineRef.current = tl;
    }, grid);

    const onEnter = (e: Event) => {
      const card = (e.target as HTMLElement)?.closest?.('[data-eco-card]');
      const mark = card?.querySelector<HTMLElement>('[data-eco-mark]');
      if (!mark) return;
      timelineRef.current?.pause();
      gsap.killTweensOf(mark);
      gsap.fromTo(
        mark,
        { rotation: 0 },
        {
          rotation: 360,
          duration: 0.85,
          ease: 'power2.out',
          onComplete: () => {
            gsap.set(mark, { rotation: 0 });
          },
        }
      );
    };

    const onLeave = (e: Event) => {
      const card = (e.target as HTMLElement)?.closest?.('[data-eco-card]');
      if (!card) return;
      timelineRef.current?.resume();
    };

    const handleVisibility = () => {
      if (document.hidden) {
        timelineRef.current?.pause(0);
        gsap.killTweensOf(marks);
        gsap.set(marks, { rotation: 0 });
        return;
      }
      gsap.killTweensOf(marks);
      gsap.set(marks, { rotation: 0 });
      timelineRef.current?.restart();
    };

    grid.addEventListener('mouseover', onEnter);
    grid.addEventListener('mouseout', onLeave);
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      grid.removeEventListener('mouseover', onEnter);
      grid.removeEventListener('mouseout', onLeave);
      document.removeEventListener('visibilitychange', handleVisibility);
      ctx.revert();
    };
  }, []);

  return (
    <div ref={gridRef} className={className}>
      {children}
    </div>
  );
}
