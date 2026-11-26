'use client';

import { useEffect, useState } from 'react';
import { resolveAssetSrc, type AssetSource } from '@/lib/assets';

interface FloatingNavDivision {
  id: string;
  slug: string;
  name: string;
  logo: AssetSource;
  color: string;
}

export default function ProjectsFloatingNav({
  divisions = [],
}: {
  divisions: FloatingNavDivision[];
}) {
  const [activeSlug, setActiveSlug] = useState(divisions[0]?.slug || 'sports');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setVisible(currentScrollY > 320);

      const offset = 160;
      for (let i = divisions.length - 1; i >= 0; i--) {
        const div = divisions[i];
        const el = document.getElementById(`projects-${div.slug}`);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= offset) {
            setActiveSlug(div.slug);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [divisions]);

  const scrollToDivision = (slug: string) => {
    const el = document.getElementById(`projects-${slug}`);
    if (!el) return;

    const navbarOffset = 96;
    const targetY = el.getBoundingClientRect().top + window.scrollY - navbarOffset;

    window.scrollTo({
      top: targetY,
      behavior: 'smooth',
    });
  };

  return (
    <aside
      aria-label="Projects Sector Navigation"
      className={`fixed left-3.5 top-1/2 z-40 -translate-y-1/2 transition-all duration-500 ease-out sm:left-6 ${
        visible
          ? 'pointer-events-auto translate-x-0 opacity-100'
          : 'pointer-events-none -translate-x-10 opacity-0'
      }`}
    >
      <nav
        className="flex flex-col items-center gap-2 rounded-full border border-black/10 bg-white/95 px-2 py-3.5 shadow-[0_20px_45px_-10px_rgba(0,0,0,0.18),0_4px_16px_rgba(0,0,0,0.06)] backdrop-blur-2xl transition-all duration-300 sm:px-2.5 sm:py-4"
      >
        {divisions.map((div) => {
          const isActive = activeSlug === div.slug;

          return (
            <button
              key={div.id}
              type="button"
              onClick={() => scrollToDivision(div.slug)}
              aria-label={`Jump to ${div.name} projects`}
              className={`group relative flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 sm:h-11 sm:w-11 ${
                isActive
                  ? 'scale-105 bg-black/[0.06] opacity-100 shadow-sm'
                  : 'opacity-40 hover:scale-105 hover:bg-black/[0.03] hover:opacity-100'
              }`}
            >
              <img
                src={resolveAssetSrc(div.logo)}
                alt={div.name}
                className="h-6 w-6 object-contain transition-transform duration-300 sm:h-7 sm:w-7"
              />

              {isActive && (
                <span
                  className="absolute -left-1 h-1.5 w-1.5 rounded-full shadow-sm"
                  style={{ backgroundColor: div.color }}
                  aria-hidden="true"
                />
              )}

              <span
                role="tooltip"
                className="pointer-events-none absolute left-full ml-3.5 flex -translate-x-1 items-center gap-2 whitespace-nowrap rounded-full border border-white/20 bg-brand-black/95 px-3 py-1.5 text-xs font-medium tracking-wide text-white opacity-0 shadow-xl backdrop-blur-xl transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
              >
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: div.color }}
                  aria-hidden="true"
                />
                {div.name}
              </span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
