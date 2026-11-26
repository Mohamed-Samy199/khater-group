import Link from 'next/link';
import NetworkHeroClient from './NetworkHeroClient';

export default function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="overflow-hidden bg-[#050505] px-6 py-16 text-white md:px-12 md:py-20 lg:px-20"
    >
      <div className="mx-auto grid max-w-[1440px] items-center gap-14 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:gap-10">
        {/* About text (Server Component for SEO) */}
        <div className="max-w-[560px]">
          <h2
            id="about-heading"
            className="text-4xl font-medium leading-none tracking-[-0.04em] md:text-5xl"
          >
            With over
          </h2>

          <div className="mt-5 flex items-end gap-5 border-b border-white/20 pb-8">
            <span className="text-[clamp(112px,16vw,190px)] font-medium leading-[0.76] tracking-[-0.09em]">
              40
            </span>

            <p className="max-w-[240px] pb-2 text-base leading-6 text-white/70 md:pb-3 md:text-lg md:leading-7">
              years of proven success in every governorate in Egypt.
            </p>
          </div>

          <div className="mt-8 space-y-5 text-base leading-7 text-white/70 md:text-lg md:leading-8">
            <p>
              Khater Sports is a leading provider of comprehensive sports facility
              solutions in Egypt and the region. Established in 1987, we are driven by
              a passion for sport and a commitment to building a healthier and more
              active future.
            </p>

            <p>
              From sports environments to play spaces, landscapes, technology and
              aquatics, our businesses work across different needs with a shared
              commitment to quality and performance.
            </p>
          </div>

          <Link
            href="/about"
            className="group mt-9 inline-flex items-center gap-5 border-b border-white/70 pb-3 text-sm font-semibold uppercase tracking-[0.14em] transition-colors hover:text-white/65"
          >
            Discover Khater Group
            <span
              aria-hidden="true"
              className="text-xl transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>

        {/* Network hero interactive diagram */}
        <NetworkHeroClient />
      </div>
    </section>
  );
}
