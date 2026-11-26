'use client';

import { useEffect, useRef, useState } from 'react';
import { Award, Layers, Leaf, Plus, ShieldCheck, Trophy } from 'lucide-react';
import experienceImg from '@/assets/why-choose/experience.webp';
import qualityImg from '@/assets/why-choose/quality.webp';
import solutionsImg from '@/assets/why-choose/solutions.webp';
import sustainabilityImg from '@/assets/why-choose/sustainability.webp';
import passionImg from '@/assets/why-choose/passion.webp';
import { resolveAssetSrc } from '@/lib/assets';

const INTERVAL = 6000;

const REASONS = [
  {
    id: 'experience',
    title: 'Unmatched Experience',
    icon: Award,
    image: experienceImg,
    description:
      'With over 40 years in the industry, we have the expertise to deliver any sports facility project, big or small.',
  },
  {
    id: 'quality',
    title: 'Commitment to Quality',
    icon: ShieldCheck,
    image: qualityImg,
    description:
      'We use only the finest materials and employ the most skilled professionals to ensure your facility is built to last.',
  },
  {
    id: 'solutions',
    title: 'Comprehensive Solutions',
    icon: Layers,
    image: solutionsImg,
    description: 'We offer a wide range of services under one roof, saving you time and money.',
  },
  {
    id: 'sustainability',
    title: 'Sustainable Approach',
    icon: Leaf,
    image: sustainabilityImg,
    description:
      'We are committed to building environmentally friendly facilities that minimize our impact on the planet.',
  },
  {
    id: 'passion',
    title: 'Passion for Sports',
    icon: Trophy,
    image: passionImg,
    description:
      'We share your passion for sports and are dedicated to creating spaces that inspire athletes of all levels.',
  },
];

const pad = (n: number) => String(n).padStart(2, '0');

function useInView(threshold = 0.35) {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold });
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView] as const;
}

export default function WhyChoose() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [ref, inView] = useInView();
  const [reduced] = useState(
    () => typeof window !== 'undefined' && !!window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
  );
  const n = REASONS.length;
  const running = inView && !paused && !reduced;

  return (
    <section
      ref={ref}
      aria-label="Why choose Khater Group"
      className="relative isolate overflow-hidden bg-white py-20 text-black lg:flex lg:min-h-screen lg:items-center lg:py-28"
    >
      <style>{'@keyframes why-progress { from { width: 0 } to { width: 100% } }'}</style>

      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <h2 className="text-4xl font-light tracking-tight sm:text-5xl lg:text-6xl">
          Why Choose <span className="font-medium text-black/50">Khater Group?</span>
        </h2>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="group relative h-72 overflow-hidden rounded-[28px] border border-black/10 bg-neutral-100 shadow-[0_25px_60px_-20px_rgba(0,0,0,0.35)] sm:h-96 lg:h-[30rem]">
            {REASONS.map((r, i) => (
              <img
                key={r.id}
                src={resolveAssetSrc(r.image)}
                alt=""
                aria-hidden="true"
                loading={i === 0 ? 'eager' : 'lazy'}
                decoding="async"
                className={`absolute inset-0 h-full w-full object-cover grayscale transition duration-700 ease-out group-hover:grayscale-0 motion-reduce:transition-none ${
                  i === active ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
                }`}
              />
            ))}
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
              aria-hidden="true"
            />
            <p className="absolute bottom-6 left-7 font-mono text-xs tabular-nums tracking-[0.2em] text-white">
              {pad(active + 1)} <span className="text-white/60">/ {pad(n)}</span>
            </p>
          </div>

          <ol
            className="border-t border-black/15 lg:min-h-[30rem]"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {REASONS.map((r, i) => {
              const on = i === active;
              const Icon = r.icon;

              return (
                <li key={r.id} className="relative border-b border-black/15">
                  <button
                    type="button"
                    aria-expanded={on}
                    aria-controls={`why-${r.id}`}
                    onClick={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    className="group flex w-full items-center gap-5 py-4 text-left outline-none"
                  >
                    <span
                      className={`w-7 font-mono text-xs tabular-nums transition duration-300 ${
                        on ? 'text-black' : 'text-black/30 group-hover:text-black/60'
                      }`}
                    >
                      {pad(i + 1)}
                    </span>

                    <span
                      className={`flex-1 text-xl font-light tracking-tight transition duration-300 sm:text-2xl lg:text-[1.75rem] ${
                        on ? 'text-black' : 'text-black/50 group-hover:text-black/80'
                      }`}
                    >
                      {r.title}
                    </span>

                    <span
                      className={`grid h-10 w-10 shrink-0 place-items-center rounded-full border transition duration-300 ${
                        on
                          ? 'border-black bg-black text-white'
                          : 'border-black/20 text-black/60 group-hover:border-black/50 group-hover:text-black'
                      }`}
                    >
                      <Icon size={18} strokeWidth={1.6} aria-hidden="true" />
                    </span>

                    <Plus
                      size={16}
                      aria-hidden="true"
                      className={`shrink-0 transition duration-300 ${on ? 'rotate-45 text-black' : 'text-black/40'}`}
                    />
                  </button>

                  <div
                    id={`why-${r.id}`}
                    role="region"
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none ${
                      on ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-xl pb-6 pl-12 pr-4 text-base leading-7 text-black/60 sm:pr-16">
                        {r.description}
                      </p>
                    </div>
                  </div>

                  {on && (
                    <span
                      key={i}
                      aria-hidden="true"
                      className="absolute bottom-[-1px] left-0 block h-px bg-black"
                      style={
                        reduced
                          ? { width: '100%' }
                          : {
                              animation: `why-progress ${INTERVAL}ms linear forwards`,
                              animationPlayState: running ? 'running' : 'paused',
                            }
                      }
                      onAnimationEnd={() => setActive((a) => (a + 1) % n)}
                    />
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
