import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Globe2, Handshake, Mail, MapPin, Phone, Trophy } from 'lucide-react';
import ksaHeroBg from '@/assets/hero/khater-sport.jpg';
import khaterSportsLogo from '@/assets/logos/khater-sports.png';
import Container from '@/components/atoms/Container';
import JsonLd from '@/components/atoms/JsonLd';
import { resolveAssetSrc } from '@/lib/assets';
import { breadcrumbJsonLd, buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Khater Sports Saudi Arabia (KSA) — Sports Infrastructure & Arenas',
  description:
    'Khater Sports Saudi Arabia — Approved Red Sea Global Vendor (Amaala Triple Bay), delivering turnkey FIFA stadiums, athletic tracks, courts, and Vision 2030 sports infrastructure from Jeddah.',
  path: '/ksa',
  keywords: [
    'Khater Sports Saudi Arabia',
    'Khater Sports KSA',
    'Red Sea Global Amaala Triple Bay sports contractor',
    'Jeddah sports infrastructure',
    'Vision 2030 stadiums Saudi Arabia',
  ],
});

export default function KsaHomePage() {
  return (
    <div className="min-h-screen bg-brand-black text-brand-white selection:bg-sports-light selection:text-white">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Gateway', path: '/' },
          { name: 'Khater Sports KSA', path: '/ksa' },
        ])}
      />

      {/* Minimal KSA Top Bar */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/75 backdrop-blur-md">
        <Container className="flex h-20 items-center justify-between gap-4">
          <Link href="/ksa" className="flex items-center gap-3">
            <img
              src={resolveAssetSrc(khaterSportsLogo)}
              alt="Khater Sports Saudi Arabia"
              className="h-9 w-auto object-contain brightness-0 invert"
            />
            <span className="hidden rounded-full border border-sports-light/40 bg-sports-light/15 px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-widest text-sports-light sm:inline-block">
              KSA
            </span>
          </Link>

          <div className="flex items-center gap-3">
            <Link
              href="/eg"
              className="rounded-full border border-white/20 px-4 py-2 text-xs font-medium text-white/80 transition hover:border-white hover:text-white"
            >
              Khater Group EG
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-semibold text-black transition hover:bg-white/90"
            >
              <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
              Switch Region
            </Link>
          </div>
        </Container>
      </header>

      {/* Starter KSA Hero Showcase */}
      <section className="relative isolate flex min-h-svh items-center overflow-hidden pb-20 pt-32">
        <img
          src={resolveAssetSrc(ksaHeroBg)}
          alt="Khater Sports Saudi Arabia stadium infrastructure"
          fetchPriority="high"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.72)_55%,rgba(0,0,0,0.45)_100%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_80%,rgba(222,31,38,0.25),transparent_55%)]"
        />

        <Container>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-sports-light/40 bg-sports-light/15 px-4 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-sports-light" />
              Kingdom of Saudi Arabia · Khater Sports KSA
            </div>

            <h1 className="mt-6 text-4xl font-light leading-[1.06] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Championship Sports{' '}
              <span className="font-semibold text-white/75">Infrastructure for Saudi Vision 2030.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base font-light leading-relaxed text-white/80 sm:text-lg">
              Khater Sports operates across the Kingdom of Saudi Arabia—delivering FIFA, World Athletics, FIBA, ITF, and WSF-certified stadiums, courts, and athletic venues, backed by 40+ years of specialized engineering heritage.
            </p>

            {/* Key KSA Credentials */}
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/15 bg-black/50 p-5 backdrop-blur-md">
                <Trophy className="h-5 w-5 text-sports-light" aria-hidden="true" />
                <p className="mt-3 text-xs font-mono uppercase tracking-wider text-white/50">
                  Flagship Milestone
                </p>
                <p className="mt-1 text-sm font-semibold text-white">
                  Red Sea Global — Amaala Triple Bay Approved Vendor
                </p>
              </div>

              <div className="rounded-2xl border border-white/15 bg-black/50 p-5 backdrop-blur-md">
                <MapPin className="h-5 w-5 text-sports-light" aria-hidden="true" />
                <p className="mt-3 text-xs font-mono uppercase tracking-wider text-white/50">
                  Jeddah Branch
                </p>
                <p className="mt-1 text-sm font-semibold text-white">
                  3729 Khalid Ibn Luai 7480, Jeddah, KSA
                </p>
              </div>

              <div className="rounded-2xl border border-white/15 bg-black/50 p-5 backdrop-blur-md">
                <Handshake className="h-5 w-5 text-sports-light" aria-hidden="true" />
                <p className="mt-3 text-xs font-mono uppercase tracking-wider text-white/50">
                  Exclusive KSA Agency
                </p>
                <p className="mt-1 text-sm font-semibold text-white">
                  Advanced Sports Technologies for Projects Co.
                </p>
              </div>
            </div>

            {/* Direct Contact Actions */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="mailto:info@khatersports.com"
                className="inline-flex items-center gap-2 rounded-full bg-sports-light px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white shadow-[0_10px_28px_rgba(222,31,38,0.4)] transition hover:bg-white hover:text-black"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                Contact KSA Desk
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>

              <a
                href="tel:+201001204191"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white transition hover:border-white hover:bg-white/15"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                +20 100 120 4191
              </a>

              <Link
                href="/eg"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-xs font-medium text-white/75 transition hover:border-white/40 hover:text-white"
              >
                <Globe2 className="h-4 w-4" aria-hidden="true" />
                Explore Khater Group Egypt (5 Sectors)
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
