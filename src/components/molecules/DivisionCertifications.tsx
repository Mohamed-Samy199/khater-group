import type { ReactNode } from 'react';
import HoverVideoCard from '@/components/atoms/HoverVideoCard';
import type { DivisionCertification } from '@/types/divisions';

export type CertificationThemeKey = 'play' | 'scapes' | 'tech' | 'aquatics';

const THEME_MAP: Record<
  CertificationThemeKey,
  {
    iconBox: string;
    subtitleText: string;
    dotBg: string;
    footerDotHover: string;
  }
> = {
  play: {
    iconBox: 'text-play group-hover:border-play/30 group-hover:bg-play/[0.08]',
    subtitleText: 'text-play',
    dotBg: 'bg-play',
    footerDotHover: 'group-hover:bg-play',
  },
  scapes: {
    iconBox: 'text-scapes group-hover:border-scapes/30 group-hover:bg-scapes/[0.08]',
    subtitleText: 'text-scapes',
    dotBg: 'bg-scapes',
    footerDotHover: 'group-hover:bg-scapes',
  },
  tech: {
    iconBox: 'text-tech group-hover:border-tech/30 group-hover:bg-tech/[0.08]',
    subtitleText: 'text-tech-light',
    dotBg: 'bg-tech-light',
    footerDotHover: 'group-hover:bg-tech-light',
  },
  aquatics: {
    iconBox: 'text-aquatics group-hover:border-aquatics/30 group-hover:bg-aquatics/[0.08]',
    subtitleText: 'text-aquatics',
    dotBg: 'bg-aquatics',
    footerDotHover: 'group-hover:bg-aquatics',
  },
};

interface DivisionCertificationsProps {
  ariaLabel: string;
  theme: CertificationThemeKey;
  headingLead: string;
  headingAccent: string;
  description: string;
  items: DivisionCertification[];
  renderIcon: (key: string) => ReactNode;
}

export default function DivisionCertifications({
  ariaLabel,
  theme,
  headingLead,
  headingAccent,
  description,
  items,
  renderIcon,
}: DivisionCertificationsProps) {
  const t = THEME_MAP[theme];

  return (
    <section
      id="certifications"
      aria-label={ariaLabel}
      className="relative border-t border-black/10 bg-[#FAFAFA] py-16 text-brand-black sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col justify-between gap-6 border-b border-black/10 pb-10 md:flex-row md:items-end">
          <div>
            <h2 className="text-3xl font-light tracking-tight text-brand-black sm:text-4xl lg:text-5xl">
              {headingLead}{' '}
              <span className="font-medium text-black/50">{headingAccent}</span>
            </h2>
          </div>

          <p className="max-w-md text-base font-light leading-relaxed text-black/70">
            {description}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((cert) => (
            <HoverVideoCard
              key={cert.key}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-black/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-black/30 hover:shadow-[0_15px_35px_-15px_rgba(0,0,0,0.12)]"
            >
              <div className="relative z-10">
                <div className="flex h-12 items-center justify-between border-b border-black/[0.06] pb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-black/[0.03] transition-all duration-300 group-hover:scale-105 ${t.iconBox}`}
                    >
                      {renderIcon(cert.key)}
                    </div>
                    <div>
                      <span className="font-mono text-xs font-bold uppercase tracking-wider text-brand-black">
                        {cert.code}
                      </span>
                      {cert.sub && (
                        <span className="block text-[10px] font-medium text-black/50">
                          {cert.sub}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <h3 className="text-base font-semibold leading-snug tracking-tight text-brand-black transition-colors group-hover:text-black sm:text-[17px]">
                    {cert.title}
                  </h3>
                  <p className={`mt-1 text-xs font-medium ${t.subtitleText}`}>
                    {cert.sub}
                  </p>
                </div>

                <div className="mt-3 inline-flex items-center gap-1.5 rounded-md border border-black/10 bg-black/[0.03] px-2.5 py-1 font-mono text-[10px] text-black/70 backdrop-blur-[2px]">
                  <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${t.dotBg}`} />
                  <span className="truncate">{cert.scope}</span>
                </div>

                <p className="mt-3.5 text-xs font-light leading-relaxed text-black/70 sm:text-[13px]">
                  {cert.text}
                </p>
              </div>

              <div className="relative z-10 mt-5 flex items-center justify-between border-t border-black/[0.06] pt-3.5 text-[11px] text-[#5B5B5B]">
                <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-black/60">
                  {cert.code}
                </span>
                <span
                  className={`h-1.5 w-1.5 rounded-full bg-black/20 transition-colors ${t.footerDotHover}`}
                />
              </div>
            </HoverVideoCard>
          ))}
        </div>
      </div>
    </section>
  );
}
