import {
  ArrowUp,
  ArrowUpRight,
  Clock3,
  Mail,
  MapPin,
  Phone,
  Printer,
  Smartphone,
} from 'lucide-react';

import brandMark from '../../assets/logos/khater-groups.png';
import sportsLogo from '../../assets/logos/khater-sports.png';
import aquaticsLogo from '../../assets/logos/khater-aquatics.png';
import techLogo from '../../assets/logos/khater-tech.png';
import scapesLogo from '../../assets/logos/khater-scapes.png';
import playLogo from '../../assets/logos/khater-play.png';

const services = [
  { name: 'Sports', logo: sportsLogo },
  { name: 'Aquatics', logo: aquaticsLogo },
  { name: 'Tech', logo: techLogo },
  { name: 'Scapes', logo: scapesLogo },
  { name: 'Play', logo: playLogo },
];

/* ✏️ حط اللينكات بتاعتك هنا */
const socialLinks = [
  {
    name: 'Facebook',
    href: '#', // ← لينك الفيسبوك
    icon: (
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    ),
  },
  {
    name: 'Instagram',
    href: '#', // ← لينك انستجرام
    icon: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </>
    ),
  },
  {
    name: 'LinkedIn',
    href: '#', // ← لينك لينكدإن
    icon: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
  },
];

function FooterLabel({ children }) {
  return (
    <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/45">
      {children}
    </p>
  );
}

function SocialLinks() {
  return (
    <div className="mt-7 flex flex-wrap gap-2" aria-label="Khater Group social media">
      {socialLinks.map(({ name, href, icon }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          title={name}
          aria-label={name}
          className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.035] text-white/75 transition duration-200 hover:border-white/30 hover:bg-white/10 hover:text-white"
        >
          <svg
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            {icon}
          </svg>
        </a>
      ))}
    </div>
  );
}

function ContactRow({ icon: Icon, children, href }) {
  const content = (
    <>
      <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/65 transition group-hover:border-white/25 group-hover:text-white">
        <Icon size={16} strokeWidth={1.6} aria-hidden="true" />
      </span>
      <span className="min-w-0 text-sm leading-6 text-white/75 transition group-hover:text-white">
        {children}
      </span>
      {href && (
        <ArrowUpRight
          className="ml-auto shrink-0 text-white/30 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white/80"
          size={15}
          aria-hidden="true"
        />
      )}
    </>
  );

  if (!href) {
    return <div className="flex items-start gap-3">{content}</div>;
  }

  return (
    <a className="group flex items-start gap-3" href={href}>
      {content}
    </a>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative isolate overflow-hidden border-t border-white/10 bg-[#101010] text-white">
      <div className="pointer-events-none absolute -right-28 -top-36 -z-10 h-80 w-80 rounded-full bg-sports/10 blur-[110px]" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-0 left-0 -z-10 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" aria-hidden="true" />

      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-x-10 gap-y-12 py-14 sm:grid-cols-2 lg:grid-cols-[1.25fr_0.72fr_1.28fr_1fr] lg:gap-x-12 lg:py-[4.5rem]">
          <div className="max-w-sm">
            <a href="/" aria-label="Khater Group home" className="group inline-flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-white/[0.04]">
                <img src={brandMark} alt="" className="h-7 w-7 object-contain" />
              </span>
              <span className="text-[22px] font-medium tracking-[-0.045em] text-white">
                Khater <span className="text-white/60 transition group-hover:text-white">Group</span>
              </span>
            </a>

            <p className="mt-6 max-w-[19rem] text-sm leading-7 text-white/60">
              We aim to make people fitter by providing specialized sports solutions that improve community well-being.
            </p>

            <div className="mt-7">
              <FooterLabel>Follow Khater Group</FooterLabel>
              <SocialLinks />
            </div>
          </div>

          <div>
            <FooterLabel>Explore</FooterLabel>
            <h2 className="mb-5 text-lg font-medium tracking-tight">Our Services</h2>
            <ul className="space-y-3">
              {services.map(({ name, logo }) => (
                <li key={name}>
                  <a
                    href="#services"
                    className="group flex items-center gap-3 text-sm text-white/65 transition hover:text-white"
                  >
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white/90">
                      <img src={logo} alt="" className="h-4 w-4 object-contain" />
                    </span>
                    <span className="uppercase tracking-[0.08em]">{name}</span>
                    <ArrowUpRight
                      size={13}
                      className="ml-auto text-white/0 transition group-hover:text-white/70"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <FooterLabel>Visit &amp; working hours</FooterLabel>
            <h2 className="mb-5 text-lg font-medium tracking-tight">We’re here to help</h2>
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/65">
                  <Clock3 size={16} strokeWidth={1.6} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/45">Working hours</p>
                  <p className="mt-1.5 text-sm leading-6 text-white/75">Sunday–Thursday: 8:30 to 4:30</p>
                </div>
              </div>

              <ContactRow icon={MapPin}>
                Namaa Building Ramsis Ext. St. Nasr City, Cairo - Egypt
              </ContactRow>
              <ContactRow icon={MapPin}>
                3729 Khalid Ibn Luai 7480, Jeddah - Saudi Arabia
              </ContactRow>
            </div>
          </div>

          <div>
            <FooterLabel>Get in touch</FooterLabel>
            <h2 className="mb-5 text-lg font-medium tracking-tight">Contact us</h2>
            <div className="space-y-4">
              <ContactRow icon={Smartphone} href="tel:+201001204191">+201001204191</ContactRow>
              <ContactRow icon={Phone} href="tel:022346120">02-2346120/1/2/3</ContactRow>
              <ContactRow icon={Printer}>02-2346126</ContactRow>
              <ContactRow icon={Mail} href="mailto:info@khatersports.com">info@khatersports.com</ContactRow>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-5 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Khater Group. All rights reserved.</p>
          <a href="#top" className="group inline-flex items-center gap-2 self-start uppercase tracking-[0.16em] transition hover:text-white sm:self-auto">
            Back to top
            <span className="grid h-7 w-7 place-items-center rounded-full border border-white/15 transition group-hover:border-white/40">
              <ArrowUp size={13} aria-hidden="true" />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}