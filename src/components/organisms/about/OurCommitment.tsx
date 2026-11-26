import { ArrowUpRight, Leaf, Lightbulb, Smile } from 'lucide-react';
import CountUpNumber from '@/components/atoms/CountUpNumber';
import { InViewReveal } from '@/components/atoms/GsapReveal';
import SectionBackgroundVideo from '@/components/atoms/SectionBackgroundVideo';

const CONTACT_HREF = 'https://www.khatersports.com/contact.aspx';
const VIDEO_SRC = '/videos/commitment.mp4';
const VIDEO_OPACITY = 0.18;

const COMMITMENT = 'We are committed to delivering exceptional solutions that exceed our clients’ expectations.';
const PRIORITIES_INTRO = 'We prioritize sustainability, innovation, and customer satisfaction in everything we do.';
const CTA_HEADING = 'Join us in building the future of sports and landscapes!';
const CTA_TEXT =
  'Contact us today to discuss your project and see how Khater Group can help you bring your vision to life.';

const priorities = [
  { icon: Leaf, title: 'Sustainability' },
  { icon: Lightbulb, title: 'Innovation' },
  { icon: Smile, title: 'Customer satisfaction' },
];

const proofStats = [
  { value: 40, suffix: '+', label: 'Years in the industry' },
  { value: 100, suffix: '+', label: 'Clients trust us' },
  { value: 21, suffix: '', label: 'International partners' },
];

export default function OurCommitment() {
  return (
    <section className="relative isolate overflow-hidden bg-white py-20 text-black lg:py-28">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <InViewReveal>
            <h2 className="text-4xl font-light tracking-tight sm:text-5xl lg:text-6xl">
              Our <span className="font-medium text-black/50">Commitment</span>
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-black/80">{COMMITMENT}</p>
            <p className="mt-4 max-w-xl text-lg leading-8 text-black/80">{PRIORITIES_INTRO}</p>
            <p className="mt-4 max-w-xl text-lg leading-8 text-black/80">
              By partnering with <strong className="font-semibold text-black">Khater Group</strong>, you’re choosing a
              trusted partner with a proven track record of delivering world-class sports facilities.
            </p>

            <ul className="mt-12 border-t border-black/15">
              {priorities.map(({ icon: Icon, title }, i) => (
                <li
                  key={title}
                  className="group flex items-center gap-5 border-b border-black/15 py-5 transition duration-300 hover:bg-black/[0.03]"
                >
                  <span className="w-7 font-mono text-xs tabular-nums text-black/30 transition duration-300 group-hover:text-black/60">
                    0{i + 1}
                  </span>
                  <span className="flex-1 text-xl font-light tracking-tight text-black/50 transition duration-300 group-hover:text-black sm:text-2xl">
                    {title}
                  </span>
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-black/20 text-black/60 transition duration-300 group-hover:border-black group-hover:bg-black group-hover:text-white">
                    <Icon size={18} strokeWidth={1.6} aria-hidden="true" />
                  </span>
                </li>
              ))}
            </ul>
          </InViewReveal>

          <InViewReveal delay={150}>
            <div className="relative isolate overflow-hidden rounded-3xl border border-black/10 bg-neutral-50 p-8 sm:p-10">
              <SectionBackgroundVideo src={VIDEO_SRC} opacity={VIDEO_OPACITY} />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-50/70 via-neutral-50/30 to-neutral-50/80"
                aria-hidden="true"
              />

              <div className="relative">
                <div className="grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-black/10 bg-black/10">
                  {proofStats.map(({ value, suffix, label }) => (
                    <div key={label} className="bg-white/75 px-3 py-6 text-center sm:px-5">
                      <p className="text-3xl font-light tracking-tight tabular-nums sm:text-4xl">
                        <CountUpNumber to={value} suffix={suffix} duration={1800} />
                      </p>
                      <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-black/45 sm:text-[11px] sm:tracking-[0.18em]">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>

                <h3 className="mt-10 text-2xl font-light tracking-tight sm:text-3xl">{CTA_HEADING}</h3>
                <p className="mt-4 max-w-md text-base leading-8 text-black/60">{CTA_TEXT}</p>

                <a
                  href={CONTACT_HREF}
                  className="group mt-8 inline-flex items-center gap-3 rounded-full bg-black py-3 pl-7 pr-3 text-xs font-semibold uppercase tracking-[0.16em] text-white transition duration-300 hover:bg-black/85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
                >
                  Contact us
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-black">
                    <ArrowUpRight
                      size={16}
                      aria-hidden="true"
                      className="transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </span>
                </a>
              </div>
            </div>
          </InViewReveal>
        </div>
      </div>
    </section>
  );
}
