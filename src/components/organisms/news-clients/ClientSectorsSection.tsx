'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CLIENT_SECTORS } from '@/constants/newsClientsData';

gsap.registerPlugin(ScrollTrigger);

export default function ClientSectorsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [active, setActive] = useState(0);
  const total = CLIENT_SECTORS.length;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.sector-head',
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power2.out',
          clearProps: 'opacity,transform',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        }
      );

      const cards = gsap.utils.toArray('.sector-card') as HTMLElement[];

      cards.forEach((card, i) => {
        ScrollTrigger.create({
          trigger: card,
          start: 'top 55%',
          onEnter: () => setActive(i),
          onLeaveBack: () => setActive(Math.max(i - 1, 0)),
        });

        const next = cards[i + 1];
        if (next) {
          gsap.to(card, {
            scale: 0.94,
            transformOrigin: 'center top',
            ease: 'none',
            scrollTrigger: {
              trigger: next,
              start: 'top 85%',
              end: 'top 20%',
              scrub: true,
            },
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="client-sectors"
      aria-label="Key Client Sectors"
      className="relative bg-white py-14 text-black lg:py-20"
    >
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:sticky lg:top-24 lg:col-span-4 lg:self-start">
            <h2 className="sector-head text-3xl font-light leading-[1.1] tracking-tight text-black sm:text-4xl lg:text-5xl">
              Trusted by{' '}
              <span className="font-medium text-[#B3B3B3]">Regional Leaders</span>
            </h2>

            <p className="sector-head mt-5 max-w-sm text-sm font-light leading-relaxed text-[#5B5B5B]">
              Major stadiums, Olympic villages, international universities,
              hospitality destinations, and heritage clubs partnering with Khater
              across four core sectors.
            </p>

            <div className="sector-head mt-8 hidden lg:block">
              <div className="flex items-end gap-2 leading-none">
                <span className="text-7xl font-extralight tabular-nums tracking-tighter text-black">
                  {String(active + 1).padStart(2, '0')}
                </span>
                <span className="pb-2 font-mono text-xs font-semibold text-[#B3B3B3]">
                  / {String(total).padStart(2, '0')}
                </span>
              </div>

              <ul className="mt-6 space-y-2.5">
                {CLIENT_SECTORS.map((sector, i) => (
                  <li
                    key={sector.id}
                    className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] transition-colors duration-500"
                    style={{ color: i === active ? '#000000' : '#B3B3B3' }}
                  >
                    <span
                      className="h-px bg-current transition-all duration-500"
                      style={{ width: i === active ? 40 : 16 }}
                    />
                    {sector.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-8">
            {CLIENT_SECTORS.map((sector, i) => {
              const dark = i % 2 === 1;
              return (
                <article
                  key={sector.id}
                  className={`sector-card sticky mb-6 overflow-hidden rounded-3xl border p-7 last:mb-0 sm:p-10 ${
                    dark
                      ? 'border-black bg-black text-white'
                      : 'border-[#B3B3B3] bg-white text-black'
                  }`}
                  style={{ top: `${96 + i * 18}px` }}
                >
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-3 -top-8 select-none text-[9rem] font-black leading-none tracking-tighter text-transparent sm:text-[12rem]"
                    style={{
                      WebkitTextStroke: dark
                        ? '1.5px rgba(179,179,179,0.2)'
                        : '1.5px rgba(179,179,179,0.5)',
                    }}
                  >
                    {sector.number}
                  </span>

                  <div className="relative">
                    <p
                      className={`text-[11px] font-semibold uppercase tracking-[0.24em] ${
                        dark ? 'text-[#B3B3B3]' : 'text-[#5B5B5B]'
                      }`}
                    >
                      {sector.number} — {sector.subtitle}
                    </p>

                    <h3 className="mt-3 max-w-[80%] text-3xl font-light leading-[1.08] tracking-tight sm:text-4xl lg:text-[2.7rem]">
                      {sector.title}
                    </h3>

                    <p
                      className={`mt-4 max-w-xl text-sm font-light leading-relaxed ${
                        dark ? 'text-[#B3B3B3]' : 'text-[#5B5B5B]'
                      }`}
                    >
                      {sector.description}
                    </p>

                    <ul
                      className={`mt-7 grid grid-cols-2 gap-px overflow-hidden rounded-xl border sm:grid-cols-3 ${
                        dark
                          ? 'border-[#5B5B5B] bg-[#5B5B5B]'
                          : 'border-[#B3B3B3] bg-[#B3B3B3]'
                      }`}
                    >
                      {sector.clients.map((client) => (
                        <li
                          key={client}
                          className={`flex min-h-[64px] items-center px-4 py-3 text-sm font-medium leading-snug transition-colors duration-300 ${
                            dark
                              ? 'bg-black text-white hover:bg-white hover:text-black'
                              : 'bg-white text-black hover:bg-black hover:text-white'
                          }`}
                        >
                          {client}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
