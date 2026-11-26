'use client';

import { useLayoutEffect, useRef, type ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ArcShowcaseAnimatorProps {
  children: ReactNode;
  ariaLabel: string;
  css: string;
}

export default function ArcShowcaseAnimator({
  children,
  ariaLabel,
  css,
}: ArcShowcaseAnimatorProps) {
  const rootRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;
    const q = gsap.utils.selector(root);
    const mm = gsap.matchMedia();

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const trigger = { trigger: root, start: 'top 80%' };

      gsap.fromTo(
        q('[data-copy] > *'),
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.1, scrollTrigger: trigger }
      );
      gsap.fromTo(
        q('[data-tile]'),
        { opacity: 0, y: 28, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: 'power3.out', stagger: 0.06, delay: 0.15, scrollTrigger: trigger }
      );
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      aria-label={ariaLabel}
      className="relative overflow-hidden bg-white py-14 text-brand-black lg:py-16"
    >
      <style>{css}</style>
      {children}
    </section>
  );
}
