import fifaLogo from '@/assets/businesses/sports/federations/fifa.svg';
import fihLogo from '@/assets/businesses/sports/federations/fih.svg';
import itfLogo from '@/assets/businesses/sports/federations/itf.svg';
import athleticsLogo from '@/assets/businesses/sports/federations/world_athletics.svg';
import fibaLogo from '@/assets/businesses/sports/federations/fiba.svg';
import squashLogo from '@/assets/businesses/sports/federations/world_squash.svg';
import aquaticsLogo from '@/assets/businesses/sports/federations/world_aquatics.svg';
import dinEnLogo from '@/assets/businesses/sports/federations/din_en.svg';
import HoverVideoCard from '@/components/atoms/HoverVideoCard';
import { resolveAssetSrc, type AssetSource } from '@/lib/assets';

interface FederationCert {
  id: string;
  logo: AssetSource;
  name: string;
  subtitle: string;
  scope: string;
  benchmark: string;
  text: string;
}

const CERTIFICATIONS: FederationCert[] = [
  {
    id: 'fifa',
    logo: fifaLogo,
    name: 'FIFA Quality & Quality Pro',
    subtitle: 'Football Turf Quality Programme',
    scope: 'Synthetic, Natural & Hybrid Turf',
    benchmark: 'FIFA Certified Stadiums',
    text: 'Certified venue contractor for AFCON stadiums meeting strict FIFA Quality & Quality Pro standards.',
  },
  {
    id: 'world-athletics',
    logo: athleticsLogo,
    name: 'World Athletics (IAAF)',
    subtitle: 'IAAF Certified Track Facilities',
    scope: 'Athletics Tracks & Field Systems',
    benchmark: 'Class 1 & Class 2 Facilities',
    text: 'IAAF-approved competition polyurethane track systems and certified stadium equipment.',
  },
  {
    id: 'fiba',
    logo: fibaLogo,
    name: 'FIBA Level 1 & Level 2',
    subtitle: 'Basketball Flooring & Venues',
    scope: 'Hardwood Maple & Parquet',
    benchmark: 'FIBA Tournament Standard',
    text: 'Accredited indoor maple and parquet flooring delivering area-elastic shock absorption.',
  },
  {
    id: 'itf',
    logo: itfLogo,
    name: 'ITF Classified Systems',
    subtitle: 'International Tennis Federation',
    scope: 'Cushioned Acrylic & Clay',
    benchmark: 'Court Pace Rating 1 - 5',
    text: 'Championship tennis surfaces calibrated strictly to ITF Court Pace Ratings (CPR 1–5).',
  },
  {
    id: 'fih',
    logo: fihLogo,
    name: 'FIH Quality Programme',
    subtitle: 'International Hockey Federation',
    scope: 'Field Hockey Turf & Sub-base',
    benchmark: 'FIH Category 4 Certified',
    text: 'Field hockey arenas certified under the FIH Quality Programme for Category 4 turf.',
  },
  {
    id: 'world-squash',
    logo: squashLogo,
    name: 'WSF Accredited Materials',
    subtitle: 'World Squash Federation',
    scope: 'Court Panels & Glass Walls',
    benchmark: 'WSF Accredited Component',
    text: 'Accredited squash courts constructed with WSF-certified Rebound plaster and glass walls.',
  },
  {
    id: 'world-aquatics',
    logo: aquaticsLogo,
    name: 'World Aquatics (FINA)',
    subtitle: 'Olympic Competition Facilities',
    scope: 'Olympic Swimming Pools',
    benchmark: '50m & 25m Competition Grade',
    text: 'Olympic swimming complexes built to World Aquatics (FINA) dimensional competition standards.',
  },
  {
    id: 'din-en',
    logo: dinEnLogo,
    name: 'EN & DIN European Standards',
    subtitle: 'European Surfacing Norms',
    scope: 'EN 14877 & EN 15330 Certification',
    benchmark: 'CEN / DIN Verified Compliance',
    text: 'European safety compliance governing slip resistance, shock absorption, and durability.',
  },
];

export default function SportsCertifications() {
  return (
    <section
      id="certifications"
      aria-label="International Sports Federations Certifications"
      className="relative border-t border-black/10 bg-[#FAFAFA] py-16 text-brand-black sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col justify-between gap-6 border-b border-black/10 pb-10 md:flex-row md:items-end">
          <div>
            <h2 className="text-3xl font-light tracking-tight text-brand-black sm:text-4xl lg:text-5xl">
              Certified by International{' '}
              <span className="font-medium text-black/50">Sports Federations</span>
            </h2>
          </div>

          <p className="max-w-md text-base font-light leading-relaxed text-black/70">
            Every sports surface, running track, and competition arena engineered by Khater Sports is
            designed and constructed strictly compliant with international federation standards.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CERTIFICATIONS.map((cert) => (
            <HoverVideoCard
              key={cert.id}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-black/10 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-black/30 hover:shadow-[0_15px_35px_-15px_rgba(0,0,0,0.12)]"
            >
              <div className="relative z-10">
                <div className="flex h-10 items-center justify-start border-b border-black/[0.06] pb-3">
                  <img
                    src={resolveAssetSrc(cert.logo)}
                    alt={cert.name}
                    className="max-h-8 max-w-[110px] object-contain transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                <div className="mt-3">
                  <h3 className="text-[15px] font-semibold leading-snug tracking-tight text-brand-black transition-colors group-hover:text-black sm:text-base">
                    {cert.name}
                  </h3>
                  <p className="mt-0.5 text-[11px] font-medium text-sports-light">
                    {cert.subtitle}
                  </p>
                </div>

                <div className="mt-2.5 inline-flex items-center gap-1.5 rounded-md border border-black/10 bg-black/[0.03] px-2.5 py-0.5 font-mono text-[10px] text-black/70 backdrop-blur-[2px]">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-sports-light" />
                  <span className="truncate">{cert.scope}</span>
                </div>

                <p className="mt-2.5 text-xs font-light leading-relaxed text-black/70">
                  {cert.text}
                </p>
              </div>

              <div className="relative z-10 mt-4 flex items-center justify-between border-t border-black/[0.06] pt-3 text-[11px] text-[#5B5B5B]">
                <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-black/60">
                  {cert.benchmark}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-black/20 transition-colors group-hover:bg-sports-light" />
              </div>
            </HoverVideoCard>
          ))}
        </div>
      </div>
    </section>
  );
}
