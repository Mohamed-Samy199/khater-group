'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const reducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export default function DivisionSectionAnimator({
  id,
  ariaLabel,
  bgLight,
  children,
}: {
  id: string;
  ariaLabel: string;
  bgLight?: boolean;
  children: ReactNode;
}) {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (reducedMotion()) return undefined;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.div-head-anim',
        { opacity: 0, y: 22 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: 'power2.out',
          clearProps: 'opacity,transform',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 82%' },
        }
      );
      gsap.fromTo(
        '.div-proj-card',
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.05,
          ease: 'power3.out',
          clearProps: 'opacity,transform',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id={id}
      aria-label={ariaLabel}
      className={`relative border-t border-[#B3B3B3]/40 py-16 text-black lg:py-24 ${
        bgLight ? 'bg-[#FAFAFA]' : 'bg-white'
      }`}
    >
      {children}
    </section>
  );
}
