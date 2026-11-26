'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface GsapStaggerSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  ariaLabel?: string;
  selector: string;
  fromY?: number;
  duration?: number;
  stagger?: number;
  start?: string;
}

export function GsapStaggerSection({
  children,
  className = '',
  id,
  ariaLabel,
  selector,
  fromY = 20,
  duration = 0.6,
  stagger = 0.08,
  start = 'top 85%',
}: GsapStaggerSectionProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        selector,
        { opacity: 0, y: fromY },
        {
          opacity: 1,
          y: 0,
          duration,
          stagger,
          ease: 'power2.out',
          clearProps: 'opacity,transform',
          scrollTrigger: { trigger: ref.current, start },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [selector, fromY, duration, stagger, start]);

  return (
    <section ref={ref} id={id} aria-label={ariaLabel} className={className}>
      {children}
    </section>
  );
}

interface InViewRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  rootMargin?: string;
}

export function InViewReveal({
  children,
  className = '',
  delay = 0,
  rootMargin = '0px 0px -12% 0px',
}: InViewRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);
  const [reduced] = useState(
    () => typeof window !== 'undefined' && !!window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
  );

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    if (!('IntersectionObserver' in window)) {
      setShown(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { rootMargin, threshold: 0 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [rootMargin]);

  const visible = shown || reduced;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transition: reduced ? 'none' : `opacity 900ms ease ${delay}ms, transform 900ms ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
