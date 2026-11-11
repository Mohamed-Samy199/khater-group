// import { useEffect, useState } from 'react';
// import { Link, NavLink, useLocation } from 'react-router-dom';
// import Container from '../ui/Container';
// import Logo from '../ui/Logo';
// import { NAV_LINKS, DIVISIONS } from '../../constants/site';

// const pill = ({ isActive }) =>
//   [
//     'rounded-full px-5 py-2 text-sm transition-colors duration-300',
//     isActive ? 'bg-white font-normal text-black' : 'text-white/70 hover:text-white',
//   ].join(' ');

// export default function Navbar() {
//   const { pathname } = useLocation();
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 40);
//     onScroll();
//     window.addEventListener('scroll', onScroll, { passive: true });
//     return () => window.removeEventListener('scroll', onScroll);
//   }, []);

//   // Close the mobile menu on navigation
//   useEffect(() => setMobileOpen(false), [pathname]);

//   return (
//     <header
//       className={`fixed inset-x-0 top-0 z-50 transition-[background,backdrop-filter] duration-500 ${
//         scrolled || mobileOpen ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
//       }`}
//     >
//       <Container className="flex h-20 items-center justify-between">
//         <Link to="/" aria-label="Khater Group" className="shrink-0 text-white">
//           <Logo />
//         </Link>

//         {/* Center pill nav (desktop) */}
//         <nav className="hidden items-center gap-1 rounded-full bg-white/10 p-1 ring-1 ring-white/15 backdrop-blur-md lg:flex">
//           {NAV_LINKS.slice(0, 2).map((l) => (
//             <NavLink key={l.to} to={l.to} end={l.to === '/'} className={pill}>
//               {l.label}
//             </NavLink>
//           ))}

//           {/* Divisions dropdown */}
//           <div className="group relative">
//             <NavLink to="/divisions" className={pill}>
//               Divisions
//             </NavLink>
//             <div className="invisible absolute left-1/2 top-full w-56 -translate-x-1/2 pt-4 opacity-0 transition-all duration-300 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
//               <ul className="rounded-2xl bg-black/90 p-2 ring-1 ring-white/15 backdrop-blur-md">
//                 {DIVISIONS.map((d) => (
//                   <li key={d.slug}>
//                     <Link
//                       to={`/divisions/${d.slug}`}
//                       className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-white/70 transition-colors hover:bg-white/10 hover:text-white"
//                     >
//                       <span
//                         className="h-2 w-2 rotate-45"
//                         style={{ backgroundColor: d.accent }}
//                         aria-hidden="true"
//                       />
//                       Khater {d.name}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>

//           {NAV_LINKS.slice(2).map((l) => (
//             <NavLink key={l.to} to={l.to} className={pill}>
//               {l.label}
//             </NavLink>
//           ))}
//         </nav>

//         {/* CTA (desktop) */}
//         <Link
//           to="/contact"
//           className="hidden rounded-full bg-white px-6 py-2.5 text-sm font-normal text-black transition-colors duration-300 hover:bg-brand-silver lg:inline-flex"
//         >
//           Contact
//         </Link>

//         {/* Burger (mobile) */}
//         <button
//           onClick={() => setMobileOpen((v) => !v)}
//           aria-label="Menu"
//           aria-expanded={mobileOpen}
//           className="flex h-10 w-10 items-center justify-center text-white lg:hidden"
//         >
//           {mobileOpen ? (
//             <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
//               <path d="M1 1L17 17M17 1L1 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
//             </svg>
//           ) : (
//             <svg width="20" height="12" viewBox="0 0 20 12" fill="none">
//               <path d="M0 1H20M0 11H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
//             </svg>
//           )}
//         </button>
//       </Container>

//       {/* Mobile panel */}
//       {mobileOpen && (
//         <div className="max-h-[calc(100svh-5rem)] overflow-y-auto border-t border-white/10 bg-black lg:hidden">
//           <Container className="flex flex-col py-6">
//             {[...NAV_LINKS, { to: '/contact', label: 'Contact' }].map((l) => (
//               <NavLink
//                 key={l.to}
//                 to={l.to}
//                 end={l.to === '/'}
//                 className={({ isActive }) =>
//                   `border-b border-white/10 py-4 text-2xl tracking-[-0.03em] ${
//                     isActive ? 'font-bold text-white' : 'font-light text-white/60'
//                   }`
//                 }
//               >
//                 {l.label}
//               </NavLink>
//             ))}
//             <p className="mb-2 mt-8 text-xs uppercase tracking-[0.28em] text-brand-charcoal">Divisions</p>
//             {DIVISIONS.map((d) => (
//               <Link
//                 key={d.slug}
//                 to={`/divisions/${d.slug}`}
//                 className="flex items-center gap-3 py-3 text-base text-white/70"
//               >
//                 <span className="h-2 w-2 rotate-45" style={{ backgroundColor: d.accent }} aria-hidden="true" />
//                 Khater {d.name}
//               </Link>
//             ))}
//           </Container>
//         </div>
//       )}
//     </header>
//   );
// }


import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Container from '../ui/Container';
import Logo from '../ui/Logo';
import { NAV_LINKS, DIVISIONS, LANGUAGES } from '../../constants/site';

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

const linkCls = ({ isActive }) =>
  `relative py-1 text-[15px] text-white transition-opacity duration-300 after:absolute after:-bottom-0.5 after:left-0 after:h-px after:bg-white after:transition-all after:duration-300 ${
    isActive ? 'after:w-full' : 'opacity-90 after:w-0 hover:opacity-100 hover:after:w-full'
  }`;

// Hover / keyboard-focus dropdown wrapper
function Dropdown({ trigger, children, align = 'left', width = 'w-60' }) {
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
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState('EN'); // UI only for now; i18n comes later

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background,backdrop-filter] duration-500 ${
        scrolled || mobileOpen ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <Container className="flex h-[88px] items-center justify-between">
        <Link to="/" aria-label="Khater Group" className="shrink-0 text-white">
          <Logo />
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-9 xl:flex">
          <nav className="flex items-center gap-9">
            {NAV_LINKS.map((l) =>
              l.type === 'businesses' ? (
                <Dropdown
                  key="businesses"
                  trigger={
                    <button className="flex items-center gap-2 py-1 text-[15px] text-white opacity-90 transition-opacity hover:opacity-100">
                      {l.label}
                      <Chevron />
                    </button>
                  }
                >
                  <ul>
                    {DIVISIONS.map((d) => (
                      <li key={d.slug}>
                        <Link
                          to={`/businesses/${d.slug}`}
                          className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                        >
                          <img src={d.logo} alt="" className="h-5 w-auto object-contain" />
                          Khater {d.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Dropdown>
              ) : (
                <NavLink key={l.to} to={l.to} className={linkCls}>
                  {l.label}
                </NavLink>
              ),
            )}
          </nav>

          <span className="h-10 w-px bg-white/40" aria-hidden="true" />

          <Link
            to="/contact"
            className="flex items-center gap-2 border border-white px-6 py-3 text-[15px] font-normal text-white transition-colors duration-300 hover:bg-white hover:text-black"
          >
            Get in Touch
            <ArrowUpRight />
          </Link>

          <Dropdown
            align="right"
            width="w-40"
            trigger={
              <button className="flex items-center gap-2 py-1 text-[15px] font-medium text-white" aria-label="Language">
                {lang}
                <Chevron />
              </button>
            }
          >
            <ul>
              {LANGUAGES.map((l) => (
                <li key={l.code}>
                  <button
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
        </div>

        {/* Burger */}
        <button
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
            {NAV_LINKS.filter((l) => l.to).map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `border-b border-white/10 py-4 text-xl tracking-[-0.02em] ${
                    isActive ? 'font-semibold text-white' : 'font-light text-white/70'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}

            <p className="mb-2 mt-8 text-xs uppercase tracking-[0.28em] text-brand-charcoal">Our Businesses</p>
            {DIVISIONS.map((d) => (
              <Link key={d.slug} to={`/businesses/${d.slug}`} className="flex items-center gap-3 py-3 text-base text-white/80">
                <img src={d.logo} alt="" className="h-5 w-auto object-contain" />
                Khater {d.name}
              </Link>
            ))}

            <Link
              to="/contact"
              className="mt-8 flex items-center justify-center gap-2 border border-white py-4 text-[15px] text-white"
            >
              Get in Touch
              <ArrowUpRight />
            </Link>

            <div className="mt-6 flex gap-3">
              {LANGUAGES.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  className={`rounded-full border px-4 py-2 text-sm ${
                    lang === l.code ? 'border-white text-white' : 'border-white/25 text-white/60'
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}