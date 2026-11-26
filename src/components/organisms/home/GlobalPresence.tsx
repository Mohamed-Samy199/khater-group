import Container from '@/components/atoms/Container';
import CountUpNumber from '@/components/atoms/CountUpNumber';
import { InViewReveal } from '@/components/atoms/GsapReveal';
import LazyGlobeSlot from './LazyGlobeSlot';

const STATS = [
  { value: 5, suffix: '', label: 'Sectors', icon: 'layers' as const },
  { value: 40, suffix: '+', label: 'Years', icon: 'calendar' as const },
  { value: 27, suffix: '', label: 'Governorates', icon: 'pin' as const },
  { value: 3000, suffix: '+', label: 'Projects', icon: 'folder' as const },
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

export default function GlobalPresence() {
  return (
    <section
      aria-label="Global presence"
      className="relative overflow-hidden bg-brand-black py-14 text-brand-white md:py-16"
    >
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-6">
          {/* Left: copy (Server Component) */}
          <div className="lg:col-span-6">
            <InViewReveal>
              <h2 className="text-[clamp(38px,5vw,76px)] font-medium leading-[1.02] tracking-[-0.04em]">
                A Global Footprint.
                <br />
                <span className="bg-gradient-to-r from-brand-charcoal to-brand-silver bg-clip-text text-transparent">
                  A Unified
                </span>{' '}
                <span className="font-bold">Vision.</span>
              </h2>
            </InViewReveal>

            <InViewReveal delay={300}>
              <p className="mt-8 max-w-xl text-base font-light leading-relaxed text-brand-silver md:text-lg">
                With over 40 years of proven success in every governorate in Egypt and across the region, Khater
                Group stands at the intersection of innovation and development.
              </p>
              <span
                className="mt-8 block h-px w-56 bg-gradient-to-r from-brand-silver/60 to-transparent"
                aria-hidden="true"
              />
            </InViewReveal>

            <InViewReveal delay={450} className="mt-12">
              <h3 className="mb-6 text-lg font-semibold tracking-[-0.01em]">Khater in Numbers</h3>
              <div className="grid max-w-xl grid-cols-2 gap-y-8 sm:grid-cols-4 sm:divide-x sm:divide-brand-white/20">
                {STATS.map((s) => (
                  <div key={s.label} className="flex flex-col items-center px-3 text-center">
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
                      {ICONS[s.icon]}
                    </svg>
                    <p className="mt-3 text-[clamp(26px,2.6vw,40px)] font-semibold leading-none tracking-[-0.03em] tabular-nums">
                      <CountUpNumber to={s.value} suffix={s.suffix} duration={3000} threshold={0.5} />
                    </p>
                    <p className="mt-2 text-sm text-brand-silver">{s.label}</p>
                  </div>
                ))}
              </div>
            </InViewReveal>
          </div>

          {/* Right: 3D globe (lazy loaded client island) */}
          <LazyGlobeSlot />
        </div>
      </Container>
    </section>
  );
}
