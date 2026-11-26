'use client';

import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';

const Globe = dynamic(() => import('./Globe'), { ssr: false });

export default function LazyGlobeSlot() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [nearView, setNearView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    if (!('IntersectionObserver' in window)) {
      setNearView(true);
      return undefined;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setNearView(true);
          io.disconnect();
        }
      },
      { threshold: 0, rootMargin: '300px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="relative h-[420px] w-full sm:h-[540px] lg:col-span-6 lg:h-[660px]"
    >
      {nearView && <Globe />}
    </div>
  );
}
