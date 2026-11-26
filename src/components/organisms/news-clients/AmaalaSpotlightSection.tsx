'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Globe2, MapPin } from 'lucide-react';
import { FLAGSHIP_AMAALA } from '@/constants/newsClientsData';

gsap.registerPlugin(ScrollTrigger);

const AUTOPLAY_SECONDS = 5;

export default function AmaalaSpotlightSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const barRef = useRef<HTMLSpanElement | null>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  const [active, setActive] = useState(0);

  const highlights = FLAGSHIP_AMAALA.highlights.slice(0, 4);
  const count = highlights.length;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.amaala-reveal',
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.08,
          ease: 'power2.out',
          clearProps: 'opacity,transform',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        }
      );
      gsap.fromTo(
        '.amaala-watermark',
        { opacity: 0, x: -60 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: 'power3.out',
          clearProps: 'opacity,transform',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!count || !barRef.current) return undefined;

    const tween = gsap.fromTo(
      barRef.current,
      { scaleX: 0 },
      {
        scaleX: 1,
        transformOrigin: 'left center',
        duration: AUTOPLAY_SECONDS,
        ease: 'none',
        onComplete: () => setActive((a) => (a + 1) % count),
      }
    );
    tweenRef.current = tween;

    return () => {
      tween.kill();
    };
  }, [active, count]);

  return (
    <section
      ref={sectionRef}
      id="amaala-spotlight"
      aria-label="Red Sea Global Amaala Triple Bay Spotlight"
      className="relative overflow-hidden bg-white py-14 text-black lg:py-20"
    >
      <span
        aria-hidden="true"
        className="amaala-watermark pointer-events-none absolute -bottom-6 -left-4 select-none whitespace-nowrap text-[7rem] font-black uppercase leading-none tracking-tighter text-transparent sm:text-[11rem] lg:text-[15rem]"
        style={{ WebkitTextStroke: '1.5px rgba(179,179,179,0.35)' }}
      >
        Khater
      </span>

      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-6">
            <h2 className="amaala-reveal text-3xl font-light leading-[1.08] tracking-tight text-black sm:text-4xl lg:text-[2.8rem]">
              {FLAGSHIP_AMAALA.client}
            </h2>

            <p className="amaala-reveal mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium text-[#5B5B5B]">
              <span className="inline-flex items-center gap-1.5">
                <MapPin size={14} className="text-black" />
                {FLAGSHIP_AMAALA.country}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Globe2 size={14} className="text-black" />
                MENA &amp; Vision 2030
              </span>
            </p>

            <p className="amaala-reveal mt-5 max-w-xl text-sm font-light leading-relaxed text-[#5B5B5B] sm:text-base">
              {FLAGSHIP_AMAALA.summary}
            </p>
          </div>

          <ul
            className="amaala-reveal lg:col-span-6"
            onMouseEnter={() => tweenRef.current?.pause()}
            onMouseLeave={() => tweenRef.current?.play()}
          >
            {highlights.map((item, i) => {
              const isActive = i === active;
              return (
                <li key={item} className="mb-2.5 last:mb-0">
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    aria-current={isActive}
                    className={`group relative flex w-full items-center gap-4 overflow-hidden rounded-xl border px-4 py-4 text-left transition-all duration-300 sm:gap-5 sm:px-5 ${
                      isActive
                        ? 'border-black bg-black text-white shadow-[0_16px_36px_-16px_rgba(0,0,0,0.45)]'
                        : 'border-[#B3B3B3] bg-white text-[#5B5B5B] hover:border-black hover:text-black'
                    }`}
                  >
                    <span
                      className={`font-mono text-xs font-semibold tabular-nums transition-colors duration-300 ${
                        isActive ? 'text-[#B3B3B3]' : 'text-[#B3B3B3] group-hover:text-black'
                      }`}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>

                    <span
                      className={`flex-1 text-xs leading-snug sm:text-sm ${
                        isActive ? 'line-clamp-2' : 'line-clamp-1'
                      }`}
                    >
                      {item}
                    </span>

                    <ArrowUpRight
                      size={15}
                      className={`shrink-0 transition-all duration-300 ${
                        isActive
                          ? 'translate-x-0 text-white opacity-100'
                          : '-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'
                      }`}
                    />

                    {isActive && (
                      <span
                        ref={barRef}
                        aria-hidden="true"
                        className="absolute bottom-0 left-0 h-[3px] w-full bg-[#B3B3B3]"
                        style={{ transform: 'scaleX(0)' }}
                      />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
