'use client';

import { useEffect, useState, type ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Container from '@/components/atoms/Container';
import Logo from '@/components/atoms/Logo';
import { DIVISIONS, LANGUAGES, NAV_LINKS } from '@/constants/site';
import { resolveAssetSrc } from '@/lib/assets';

const Chevron = () => (
  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
    <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArrowUpRight = () => (
  <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
    <path d="M2 9L9 2M3.5 2H9v5.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const linkCls = (isActive: boolean) =>
  `relative py-1 text-[15px] text-white transition-opacity duration-300 after:absolute after:-bottom-0.5 after:left-0 after:h-px after:bg-white after:transition-all after:duration-300 ${
    isActive ? 'after:w-full' : 'opacity-90 after:w-0 hover:opacity-100 hover:after:w-full'
  }`;

function Dropdown({
  trigger,
  children,
  align = 'left',
  width = 'w-60',
}: {
  trigger: ReactNode;
  children: ReactNode;
  align?: 'left' | 'right';
  width?: string;
}) {
  return (
    <div className="group relative">
      {trigger}
      <div
        className={`invisible absolute top-full ${width} pt-5 opacity-0 transition-all duration-300 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100 ${
          align === 'right' ? 'right-0' : 'left-0'
        }`}
      >
        <div className="rounded-xl bg-black/90 p-2 ring-1 ring-white/15 backdrop-blur-md">{children}</div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const pathname = usePathname() || '/';
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState('EN');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isRouteActive = (to: string) => pathname === to || pathname.startsWith(`${to}/`);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background,backdrop-filter] duration-500 ${
        scrolled || mobileOpen ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <Container className="flex h-[88px] items-center justify-between">
        <Link href="/eg" aria-label="Khater Group Egypt" className="shrink-0 text-white">
          <Logo />
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-9 xl:flex">
          <nav className="flex items-center gap-9" aria-label="Primary navigation">
            {NAV_LINKS.map((l) =>
              l.type === 'businesses' ? (
                <Dropdown
                  key="businesses"
                  trigger={
                    <button
                      type="button"
                      className="flex items-center gap-2 py-1 text-[15px] text-white opacity-90 transition-opacity hover:opacity-100"
                    >
                      {l.label}
                      <Chevron />
                    </button>
                  }
                >
                  <ul>
                    {DIVISIONS.map((d) => (
                      <li key={d.slug}>
                        <Link
                          href={`/businesses/${d.slug}`}
                          className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                        >
                          <img src={resolveAssetSrc(d.logo)} alt="" className="h-5 w-auto object-contain" />
                          Khater {d.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Dropdown>
              ) : (
                <Link key={l.to} href={l.to!} className={linkCls(isRouteActive(l.to!))}>
                  {l.label}
                </Link>
              )
            )}
          </nav>

          <span className="h-10 w-px bg-white/40" aria-hidden="true" />

          <Link
            href="/contact"
            className="flex items-center gap-2 border border-white px-6 py-3 text-[15px] font-normal text-white transition-colors duration-300 hover:bg-white hover:text-black"
          >
            Get in Touch
            <ArrowUpRight />
          </Link>

          <Dropdown
            align="right"
            width="w-40"
            trigger={
              <button
                type="button"
                className="flex items-center gap-2 py-1 text-[15px] font-medium text-white"
                aria-label="Language"
              >
                {lang}
                <Chevron />
              </button>
            }
          >
            <ul>
              {LANGUAGES.map((l) => (
                <li key={l.code}>
                  <button
                    type="button"
                    onClick={() => setLang(l.code)}
                    className={`w-full rounded-lg px-4 py-3 text-start text-sm transition-colors hover:bg-white/10 ${
                      lang === l.code ? 'text-white' : 'text-white/60'
                    }`}
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </Dropdown>

          <Link
            href="/"
            title="Switch Region: Egypt (EG) / Saudi Arabia (KSA)"
            className="rounded-full border border-white/25 px-3 py-1 font-mono text-[11px] font-semibold tracking-wider text-white/85 transition hover:border-white hover:bg-white hover:text-black"
          >
            EG · KSA
          </Link>
        </div>

        {/* Burger */}
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Menu"
          aria-expanded={mobileOpen}
          className="flex h-10 w-10 items-center justify-center text-white xl:hidden"
        >
          {mobileOpen ? (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M1 1L17 17M17 1L1 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="22" height="12" viewBox="0 0 22 12" fill="none">
              <path d="M0 1H22M0 11H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </Container>

      {/* Mobile panel */}
      {mobileOpen && (
        <div className="max-h-[calc(100svh-88px)] overflow-y-auto border-t border-white/10 bg-black xl:hidden">
          <Container className="flex flex-col py-6">
            {NAV_LINKS.filter((l) => l.to).map((l) => {
              const active = isRouteActive(l.to!);
              return (
                <Link
                  key={l.to}
                  href={l.to!}
                  className={`border-b border-white/10 py-4 text-xl tracking-[-0.02em] ${
                    active ? 'font-semibold text-white' : 'font-light text-white/70'
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}

            <p className="mb-2 mt-8 text-xs uppercase tracking-[0.28em] text-brand-charcoal">Our Businesses</p>
            {DIVISIONS.map((d) => (
              <Link
                key={d.slug}
                href={`/businesses/${d.slug}`}
                className="flex items-center gap-3 py-3 text-base text-white/80"
              >
                <img src={resolveAssetSrc(d.logo)} alt="" className="h-5 w-auto object-contain" />
                Khater {d.name}
              </Link>
            ))}

            <Link
              href="/contact"
              className="mt-8 flex items-center justify-center gap-2 border border-white py-4 text-[15px] text-white"
            >
              Get in Touch
              <ArrowUpRight />
            </Link>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              {LANGUAGES.map((l) => (
                <button
                  type="button"
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  className={`rounded-full border px-4 py-2 text-sm ${
                    lang === l.code ? 'border-white text-white' : 'border-white/25 text-white/60'
                  }`}
                >
                  {l.label}
                </button>
              ))}
              <Link
                href="/"
                className="rounded-full border border-white/25 px-4 py-2 font-mono text-xs font-semibold uppercase tracking-wider text-white/85"
              >
                Switch Region (EG · KSA)
              </Link>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
