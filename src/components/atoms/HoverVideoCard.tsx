'use client';

import { useRef, type ReactNode } from 'react';

interface HoverVideoCardProps {
  children: ReactNode;
  videoSrc?: string;
  className?: string;
}

export default function HoverVideoCard({
  children,
  videoSrc = '/videos/commitment.mp4',
  className = '',
}: HoverVideoCardProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Ignore harmless play interruptions on fast mouse movements
        });
      }
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      <video
        ref={videoRef}
        src={videoSrc}
        muted
        loop
        playsInline
        preload="metadata"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-25"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/45 via-white/20 to-white/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        aria-hidden="true"
      />
      {children}
    </div>
  );
}
