import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import Container from '../ui/Container';

// three.js is only downloaded when the section is about to appear
const Globe = lazy(() => import('./Globe'));

// TODO: confirm these numbers with the client (Projects is a placeholder)
const STATS = [
  { value: 5, suffix: '', label: 'Sectors', icon: 'layers' },
  { value: 37, suffix: '+', label: 'Years', icon: 'calendar' },
  { value: 27, suffix: '', label: 'Governorates', icon: 'pin' },
  { value: 3000, suffix: '+', label: 'Projects', icon: 'folder' },
];

const ICONS = {
  layers: (
    <>
      <path d="M12 3l9 5-9 5-9-5 9-5z" />
      <path d="M3 13l9 5 9-5" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  folder: <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" />,
};

/* ---------- helpers ---------- */

function useInView(threshold = 0.2, rootMargin = '0px') {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    if (!('IntersectionObserver' in window)) {
      setInView(true);
      return undefined;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold, rootMargin },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold, rootMargin]);

  return [ref, inView];
}

function useCountUp(to, start, duration = 2000) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setValue(to);
      return undefined;
    }
    let raf;
    let t0;
    const tick = (t) => {
      if (t0 === undefined) t0 = t;
      const p = Math.min((t - t0) / duration, 1);
      setValue(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to, start, duration]);

  return value;
}

function Reveal({ show, delay = 0, className = '', children }) {
  return (
    <div
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-[opacity,transform] duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
        show ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      } ${className}`}
    >
      {children}
    </div>
  );
}

// Counts from 0 to the target over 3 seconds once the numbers are scrolled into view
const COUNT_DURATION = 3000;

function Stat({ stat, start }) {
  const n = useCountUp(stat.value, start, COUNT_DURATION);
  return (
    <div className="flex flex-col items-center px-3 text-center">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-7 w-7 text-brand-silver"
        aria-hidden="true"
      >
        {ICONS[stat.icon]}
      </svg>
      <p className="mt-3 text-[clamp(26px,2.6vw,40px)] font-semibold leading-none tracking-[-0.03em] tabular-nums">
        {n}
        {stat.suffix}
      </p>
      <p className="mt-2 text-sm text-brand-silver">{stat.label}</p>
    </div>
  );
}

/* ---------- section ---------- */

export default function GlobalPresence() {
  const [ref, show] = useInView(0.2);
  const [globeRef, nearView] = useInView(0, '300px'); // start loading three.js a bit early
  const [statsRef, statsInView] = useInView(0.5); // the count starts when the numbers are reached

  return (
    <section
      ref={ref}
      aria-label="Global presence"
      className="relative overflow-hidden bg-brand-black py-14 text-brand-white md:py-16"
    >
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-6">
          {/* Left: copy */}
          <div className="lg:col-span-6">
            <Reveal show={show}>
              <div className="flex items-center gap-6">
                <span className="h-px w-16 bg-brand-white/60" aria-hidden="true" />
                <span className="bg-gradient-to-r from-brand-white to-brand-charcoal bg-clip-text text-sm font-medium uppercase tracking-[0.4em] text-transparent">
                  Global Presence
                </span>
              </div>
            </Reveal>

            <Reveal show={show} delay={150}>
              <h2 className="mt-8 text-[clamp(38px,5vw,76px)] font-medium leading-[1.02] tracking-[-0.04em]">
                A Global Footprint.
                <br />
                <span className="bg-gradient-to-r from-brand-charcoal to-brand-silver bg-clip-text text-transparent">
                  A Unified
                </span>{' '}
                <span className="font-bold">Vision.</span>
              </h2>
            </Reveal>

            <Reveal show={show} delay={300}>
              <p className="mt-8 max-w-xl text-base font-light leading-relaxed text-brand-silver md:text-lg">
                With over 37 years of proven success in every governorate in Egypt and across the region, Khater
                Group stands at the intersection of innovation and development.
              </p>
              <span
                className="mt-8 block h-px w-56 bg-gradient-to-r from-brand-silver/60 to-transparent"
                aria-hidden="true"
              />
            </Reveal>

            <Reveal show={show} delay={450} className="mt-12">
              <h3 className="mb-6 text-lg font-semibold tracking-[-0.01em]">Khater in Numbers</h3>
              <div
                ref={statsRef}
                className="grid max-w-xl grid-cols-2 gap-y-8 sm:grid-cols-4 sm:divide-x sm:divide-brand-white/20"
              >
                {STATS.map((s) => (
                  <Stat key={s.label} stat={s} start={statsInView} />
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right: 3D globe */}
          <div
            ref={globeRef}
            className="relative h-[420px] w-full sm:h-[540px] lg:col-span-6 lg:h-[660px]"
          >
            {nearView && (
              <Suspense fallback={null}>
                <Globe />
              </Suspense>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}