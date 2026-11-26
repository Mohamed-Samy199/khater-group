'use client';

import { useEffect, useRef, useState } from 'react';

interface CountUpNumberProps {
  to: number;
  suffix?: string;
  duration?: number;
  threshold?: number;
  rootMargin?: string;
}

export default function CountUpNumber({
  to,
  suffix = '',
  duration = 1800,
  threshold = 0.2,
  rootMargin = '0px 0px -10% 0px',
}: CountUpNumberProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const startAnimation = () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        setValue(to);
        return undefined;
      }

      let raf = 0;
      let start: number | undefined;
      const tick = (now: number) => {
        if (start === undefined) start = now;
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(Math.round(to * eased));
        if (progress < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(raf);
    };

    if (!('IntersectionObserver' in window)) {
      return startAnimation();
    }

    let stopAnim: (() => void) | undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          stopAnim = startAnimation();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      stopAnim?.();
    };
  }, [to, duration, threshold, rootMargin]);

  return (
    <span ref={ref}>
      <span className="sr-only">
        {to}
        {suffix}
      </span>
      <span aria-hidden="true">
        {value}
        {suffix}
      </span>
    </span>
  );
}
