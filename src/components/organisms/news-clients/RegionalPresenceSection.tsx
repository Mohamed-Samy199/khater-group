import { Handshake, MapPin } from 'lucide-react';
import { GsapStaggerSection } from '@/components/atoms/GsapReveal';
import { REGIONAL_PRESENCE } from '@/constants/newsClientsData';

export default function RegionalPresenceSection() {
  const { exclusiveAgent } = REGIONAL_PRESENCE;

  return (
    <GsapStaggerSection
      id="regional-presence"
      ariaLabel="Regional Footprint, Direct Offices and Exclusive KSA Local Agent"
      selector=".regional-reveal"
      fromY={24}
      duration={0.7}
      stagger={0.1}
      start="top 80%"
      className="relative bg-white py-14 text-black lg:py-16"
    >
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <div className="regional-reveal grid items-end gap-5 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <h2 className="text-3xl font-light tracking-tight text-black sm:text-4xl lg:text-5xl">
              Egypt, Saudi Arabia{' '}
              <span className="font-medium text-[#5B5B5B]">&amp; Beyond</span>
            </h2>
          </div>
          <p className="text-sm font-light leading-relaxed text-[#5B5B5B] sm:text-base lg:col-span-5">
            {REGIONAL_PRESENCE.summary}
          </p>
        </div>

        <dl className="regional-reveal mt-10 grid grid-cols-2 gap-y-8 border-y border-[#B3B3B3] py-8 lg:grid-cols-4">
          {REGIONAL_PRESENCE.stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`px-0 lg:px-6 ${
                i > 0 ? 'lg:border-l lg:border-[#B3B3B3]' : 'lg:pl-0'
              } ${i % 2 === 1 ? 'pl-5' : ''}`}
            >
              <dd className="text-4xl font-light tracking-tight text-black sm:text-5xl">
                {stat.value}
              </dd>
              <dt className="mt-2 text-xs font-light leading-snug text-[#5B5B5B]">
                {stat.label}
              </dt>
            </div>
          ))}
        </dl>

        <ul className="mt-2">
          {REGIONAL_PRESENCE.offices.map((office) => (
            <li
              key={office.entity}
              className="regional-reveal grid grid-cols-1 gap-2 border-b border-[#B3B3B3] py-5 md:grid-cols-12 md:items-center md:gap-6"
            >
              <div className="md:col-span-3">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black">
                  {office.role}
                </span>
                <p className="mt-1 text-[11px] uppercase tracking-wider text-[#5B5B5B]">
                  {office.country}
                </p>
              </div>
              <h3 className="text-lg font-medium text-black md:col-span-4">
                {office.entity}
              </h3>
              <p className="flex items-start gap-1.5 text-xs font-light leading-relaxed text-[#5B5B5B] md:col-span-5 md:text-sm">
                <MapPin size={14} className="mt-0.5 shrink-0 text-[#5B5B5B]" />
                <span>{office.address}</span>
              </p>
            </li>
          ))}

          <li className="regional-reveal mt-5 grid grid-cols-1 gap-3 rounded-2xl bg-black p-5 text-white md:grid-cols-12 md:items-center md:gap-6 md:p-6">
            <div className="md:col-span-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-black">
                <Handshake size={13} />
                {exclusiveAgent.badge}
              </span>
            </div>
            <div className="md:col-span-4">
              <h3 className="text-lg font-semibold text-white">{exclusiveAgent.name}</h3>
              <p className="mt-1 text-xs font-medium text-[#B3B3B3]">
                {exclusiveAgent.legalEntity || 'Advanced Sports Technologies for Projects Co.'}
              </p>
            </div>
            <p className="text-xs font-light leading-relaxed text-[#B3B3B3] md:col-span-5 md:text-sm">
              {exclusiveAgent.description}
            </p>
          </li>
        </ul>
      </div>
    </GsapStaggerSection>
  );
}
