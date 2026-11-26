'use client';

import { useState } from 'react';
import { ArrowUpRight, Clock, Mail, MapPin, Navigation, Phone } from 'lucide-react';
import { CONTACT_OFFICES } from '@/constants/contactData';

export default function ContactLocations() {
  const [activeOfficeId, setActiveOfficeId] = useState('cairo-hq');

  const currentOffice = CONTACT_OFFICES.find((o) => o.id === activeOfficeId) || CONTACT_OFFICES[0];

  return (
    <section id="locations" className="relative border-t border-black/10 bg-[#FAFAFA] py-16 text-brand-black sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col justify-between gap-6 border-b border-black/10 pb-10 md:flex-row md:items-end">
          <div>
            <h2 className="text-3xl font-light tracking-tight text-brand-black sm:text-4xl lg:text-5xl">
              Engineering Hubs &amp;{' '}
              <span className="font-medium text-black/50">Offices</span>
            </h2>
          </div>

          <div className="grid w-full grid-cols-2 rounded-xl border border-black/10 bg-white p-1.5 shadow-sm sm:w-[380px]">
            {CONTACT_OFFICES.map((office) => {
              const isActive = office.id === activeOfficeId;
              return (
                <button
                  key={office.id}
                  type="button"
                  onClick={() => setActiveOfficeId(office.id)}
                  className={`flex items-center justify-center rounded-lg px-4 py-2 text-xs font-semibold uppercase tracking-wider transition ${
                    isActive
                      ? 'bg-black text-white shadow-sm'
                      : 'text-black/60 hover:text-black'
                  }`}
                >
                  {office.city} ({office.country})
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="flex flex-col justify-between rounded-2xl border border-black/10 bg-white p-6 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.06)] sm:p-8 lg:col-span-5">
            <div>
              <div className="flex items-center justify-between border-b border-black/[0.06] pb-4">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-black/[0.03] px-3 py-1 font-mono text-[11px] uppercase text-black/70">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                  <span>{currentOffice.status}</span>
                </span>
                <span className="font-mono text-xs font-semibold text-black/50">
                  {currentOffice.city.toUpperCase()}
                </span>
              </div>

              <h3 className="mt-5 text-2xl font-light tracking-tight text-brand-black">
                {currentOffice.title}
              </h3>

              <div className="mt-3 flex flex-wrap gap-2">
                {currentOffice.badges.map((badge, idx) => (
                  <span
                    key={idx}
                    className="rounded-md border border-black/10 bg-black/[0.02] px-2.5 py-0.5 font-mono text-[10px] text-black/65"
                  >
                    {badge}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-start gap-3 border-t border-black/[0.04] pt-5 text-sm">
                <MapPin size={18} className="mt-0.5 shrink-0 text-black/50" />
                <div>
                  <p className="font-medium text-brand-black">Office Address</p>
                  <p className="mt-0.5 text-xs font-light leading-relaxed text-black/65">
                    {currentOffice.fullAddress}
                  </p>
                </div>
              </div>

              <div className="mt-4 flex items-start gap-3 text-sm">
                <Phone size={18} className="mt-0.5 shrink-0 text-black/50" />
                <div>
                  <p className="font-medium text-brand-black">Telephone &amp; Direct Lines</p>
                  <a
                    href={`tel:${currentOffice.phonePrimary.replace(/\s+/g, '')}`}
                    className="mt-0.5 block text-xs font-semibold text-brand-black hover:underline"
                  >
                    {currentOffice.phonePrimary}
                  </a>
                  {currentOffice.phoneLandlines && (
                    <p className="mt-0.5 font-mono text-[11px] text-black/55">
                      Landlines: {currentOffice.phoneLandlines.join(' / ')}
                    </p>
                  )}
                  {currentOffice.fax && (
                    <p className="font-mono text-[11px] text-black/55">
                      Fax: {currentOffice.fax}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-4 flex items-start gap-3 text-sm">
                <Mail size={18} className="mt-0.5 shrink-0 text-black/50" />
                <div>
                  <p className="font-medium text-brand-black">Electronic Mail</p>
                  <a
                    href={`mailto:${currentOffice.email}`}
                    className="mt-0.5 block font-mono text-xs text-brand-black hover:underline"
                  >
                    {currentOffice.email}
                  </a>
                  {currentOffice.secondaryEmail && (
                    <a
                      href={`mailto:${currentOffice.secondaryEmail}`}
                      className="block font-mono text-[11px] text-black/55 hover:underline"
                    >
                      {currentOffice.secondaryEmail}
                    </a>
                  )}
                </div>
              </div>

              <div className="mt-4 flex items-start gap-3 text-sm">
                <Clock size={18} className="mt-0.5 shrink-0 text-black/50" />
                <div>
                  <p className="font-medium text-brand-black">Working Hours</p>
                  <p className="mt-0.5 text-xs font-light text-black/65">
                    {currentOffice.workingHours}
                  </p>
                  <p className="text-[10px] text-black/45">{currentOffice.weekend}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-black/[0.06] pt-5">
              <a
                href={currentOffice.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-black px-5 py-3 text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-black/85"
              >
                <Navigation size={14} />
                <span>Open in Google Maps</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          <div className="relative flex min-h-[420px] flex-col overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_10px_30px_-15px_rgba(0,0,0,0.06)] lg:col-span-7">
            <div className="flex items-center justify-between border-b border-black/[0.06] bg-[#FAFAFA] px-6 py-3.5 text-xs">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-black/60" />
                <span className="font-semibold text-brand-black">{currentOffice.title}</span>
              </div>
              <span className="font-mono text-[11px] text-black/50">{currentOffice.city}, {currentOffice.country}</span>
            </div>

            <div className="relative w-full flex-1 bg-[#E5E3DF]">
              <iframe
                title={`Map of ${currentOffice.title}`}
                width="100%"
                height="100%"
                className="min-h-[380px] w-full border-0 contrast-[1.02]"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(
                  currentOffice.embedQuery
                )}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
              />

              <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-black/10 bg-white/95 p-4 text-xs shadow-lg backdrop-blur-md sm:right-auto sm:max-w-xs">
                <p className="font-bold text-brand-black">{currentOffice.title}</p>
                <p className="mt-1 text-[11px] font-light leading-relaxed text-black/65">
                  {currentOffice.address}
                </p>
                <div className="mt-2.5 flex items-center justify-between border-t border-black/[0.06] pt-2 text-[10px]">
                  <span className="flex items-center gap-1 font-semibold text-emerald-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Open for Appointments
                  </span>
                  <a
                    href={currentOffice.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-brand-black hover:underline"
                  >
                    Navigate &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
