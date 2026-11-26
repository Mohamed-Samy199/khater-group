'use client';

import { useState, type CSSProperties } from 'react';
import Link from 'next/link';
import { DIVISIONS } from '@/constants/site';
import darkLogo from '@/assets/logos/khater-dark.png';
import turnkeyImg from '@/assets/what-we-do/turnkey.webp';
import consultingImg from '@/assets/what-we-do/consulting.webp';
import developmentImg from '@/assets/what-we-do/development.webp';
import landscapeImg from '@/assets/what-we-do/landscape.webp';
import { resolveAssetSrc, type AssetSource } from '@/lib/assets';

const LOGO = Object.fromEntries(DIVISIONS.map((d) => [d.slug, d.logo])) as Record<string, AssetSource>;
const SECTORS: Record<string, { name: string; logo: AssetSource }> = {
  sports: { name: 'Sports', logo: LOGO.sports },
  aquatics: { name: 'Aquatics', logo: LOGO.aquatics },
  tech: { name: 'Tech', logo: LOGO.tech },
  scapes: { name: 'Scapes', logo: LOGO.scapes },
  play: { name: 'Play', logo: LOGO.play },
  maintenance: { name: 'Maintenance', logo: darkLogo },
};

const SERVICES = [
  {
    id: 'turnkey',
    label: 'Turn-key',
    title: 'Turn-key Sports Facility & Construction',
    image: turnkeyImg,
    description:
      'From concept to completion, we handle all aspects of building your dream sports facility, ensuring the highest quality and adherence to international standards.',
    sectors: ['sports', 'aquatics', 'tech'],
  },
  {
    id: 'consulting',
    label: 'Consulting',
    title: 'Consulting',
    image: consultingImg,
    description:
      'Our team of experts can guide you through every phase of your project, from feasibility studies and site selection to planning, design, and equipment procurement.',
    sectors: ['sports', 'aquatics', 'tech', 'scapes', 'play'],
  },
  {
    id: 'development',
    label: 'Development',
    title: 'Development',
    image: developmentImg,
    description:
      'We work with communities and organizations to develop comprehensive sports solutions and facilities that increase participation and foster a culture of physical activity.',
    sectors: ['sports', 'play'],
  },
  {
    id: 'landscape',
    label: 'Landscape',
    title: 'Transforming Outdoor Spaces',
    image: landscapeImg,
    description:
      'Our expert designers specialize in creating stunning landscapes that enhance the beauty and functionality of outdoor areas, from initial design concepts to final installation, ensuring a seamless and stress-free process.',
    sectors: ['scapes', 'play', 'maintenance'],
  },
];

export default function WhatWeDo() {
  const [active, setActive] = useState(0);

  return (
    <section
      aria-label="What we do"
      className="relative isolate overflow-hidden bg-black py-20 text-white lg:py-28"
    >
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <div>
          <h2 className="text-4xl font-light tracking-tight sm:text-5xl lg:text-6xl">
            From concept <span className="font-medium text-white/60">to completion.</span>
          </h2>

          <p className="mt-8 max-w-xl text-lg leading-8 text-white/80">
            Khater Group goes beyond simply constructing facilities. We offer a complete range of services across
            sports, aquatics, technology, landscapes, play and maintenance, including:
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-3 lg:mt-14 lg:h-[580px] lg:flex-row">
          {SERVICES.map((s, i) => {
            const on = i === active;
            return (
              <div
                key={s.id}
                role="button"
                tabIndex={0}
                aria-expanded={on}
                aria-label={s.title}
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActive(i);
                  }
                }}
                style={{ '--g': on ? 4 : 1 } as CSSProperties}
                className={`group relative cursor-pointer overflow-hidden rounded-[28px] border border-white/10 outline-none transition-[flex-grow,height] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none focus-visible:border-white lg:h-auto lg:min-w-0 lg:basis-0 lg:[flex-grow:var(--g)] ${
                  on ? 'h-[460px] border-white/25' : 'h-[84px]'
                }`}
              >
                <img
                  src={resolveAssetSrc(s.image)}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ease-out motion-reduce:transition-none ${
                    on ? 'scale-105 grayscale-0' : 'scale-100 grayscale'
                  }`}
                />
                <div
                  className={`absolute inset-0 bg-black transition-opacity duration-700 ${
                    on ? 'opacity-0' : 'opacity-45'
                  }`}
                  aria-hidden="true"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/30"
                  aria-hidden="true"
                />

                <span className="absolute left-6 top-1/2 -translate-y-1/2 font-mono text-xs tabular-nums text-white/80 lg:top-6 lg:translate-y-0">
                  0{i + 1}
                </span>

                <span
                  className={`absolute left-16 top-1/2 -translate-y-1/2 whitespace-nowrap text-sm font-medium uppercase tracking-[0.2em] text-white/90 transition-opacity duration-500 lg:bottom-6 lg:left-6 lg:top-auto lg:translate-y-0 lg:rotate-180 lg:[writing-mode:vertical-rl] ${
                    on ? 'opacity-0' : 'opacity-100'
                  }`}
                >
                  {s.label}
                </span>

                <div
                  className={`absolute inset-x-0 bottom-0 p-6 transition-opacity duration-500 md:p-8 ${
                    on ? 'opacity-100 delay-300' : 'pointer-events-none opacity-0'
                  }`}
                >
                  <h3 className="max-w-md text-2xl font-light tracking-tight sm:text-3xl">{s.title}</h3>
                  <p className="mt-4 max-w-md text-sm leading-7 text-white/70">{s.description}</p>
                  <ul className="mt-5 flex flex-wrap gap-2" aria-label="Delivered by">
                    {s.sectors.map((k) => (
                      <li
                        key={k}
                        className="flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.12em] text-black"
                      >
                        <img src={resolveAssetSrc(SECTORS[k].logo)} alt="" className="h-3.5 w-auto object-contain" />
                        {SECTORS[k].name}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/15 pt-6">
          <p className="text-sm text-white/55">Have a project in mind?</p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 border-b border-white/40 pb-1 text-[15px] text-white transition-colors hover:border-white"
          >
            Get in touch
            <svg
              width="11"
              height="11"
              viewBox="0 0 11 11"
              fill="none"
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            >
              <path d="M2 9L9 2M3.5 2H9v5.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
