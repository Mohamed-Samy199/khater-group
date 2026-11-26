'use client';

import { useEffect, useRef, useState } from 'react';

interface SectionBackgroundVideoProps {
  src: string;
  poster?: string;
  opacity?: number;
}

export default function SectionBackgroundVideo({
  src,
  poster,
  opacity = 0.18,
}: SectionBackgroundVideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const [reduced] = useState(
    () => typeof window !== 'undefined' && !!window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
  );

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;

    video.muted = true;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  if (reduced || failed) return null;

  return (
    <video
      ref={videoRef}
      src={src}
      poster={poster || undefined}
      muted
      loop
      playsInline
      preload="none"
      aria-hidden="true"
      tabIndex={-1}
      onPlaying={() => setReady(true)}
      onError={() => setFailed(true)}
      className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      style={{
        opacity: ready ? opacity : 0,
        filter: 'grayscale(1)',
        transition: 'opacity 1200ms ease',
      }}
    />
  );
}
