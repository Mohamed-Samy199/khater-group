'use client';

import { useState } from 'react';
import { Award, Globe, HardHat, Plus } from 'lucide-react';

const PILLARS = [
  {
    id: 'quality',
    icon: Award,
    title: 'Unmatched Quality',
    text: 'Strong partnerships with world-renowned accredited firms have made us the supplier of choice for anyone looking to build a state-of-the-art sports facility.',
    tag: '21 international partners',
  },
  {
    id: 'engineers',
    icon: HardHat,
    title: 'Expert Engineers',
    text: 'We are proud to have the best sports construction engineers and technicians in the region, ensuring that every project is delivered with superior quality and international standards.',
    tag: 'International standards',
  },
  {
    id: 'reach',
    icon: Globe,
    title: 'Regional Reach',
    text: 'With over 40 years of proven success in every governorate in Egypt, we have started to expand our market regionally to become the trusted sports expert in Africa and the Middle East.',
    tag: 'Egypt · Saudi Arabia · Sudan · Libya · Palestine · Somaliland',
  },
];

export default function WhoWeArePillars() {
  const [active, setActive] = useState(0);

  return (
    <div className="mt-12 border-t border-white/15">
      {PILLARS.map(({ id, icon: Icon, title, text, tag }, i) => {
        const open = active === i;

        return (
          <div key={id} className="border-b border-white/15">
            <button
              type="button"
              onClick={() => setActive(open ? -1 : i)}
              aria-expanded={open}
              className="group flex w-full items-center gap-5 py-5 text-left"
            >
              <span
                className={`w-7 font-mono text-xs tabular-nums transition duration-300 ${
                  open ? 'text-white' : 'text-white/30 group-hover:text-white/60'
                }`}
              >
                0{i + 1}
              </span>

              <span
                className={`flex-1 text-xl font-light tracking-tight transition duration-300 sm:text-2xl ${
                  open ? 'text-white' : 'text-white/50 group-hover:text-white/80'
                }`}
              >
                {title}
              </span>

              <span
                className={`grid h-10 w-10 shrink-0 place-items-center rounded-full border transition duration-300 ${
                  open
                    ? 'border-white bg-white text-black'
                    : 'border-white/20 text-white/60 group-hover:border-white/50 group-hover:text-white'
                }`}
              >
                <Icon size={18} strokeWidth={1.6} aria-hidden="true" />
              </span>

              <Plus
                size={16}
                aria-hidden="true"
                className={`shrink-0 text-white/40 transition duration-300 ${open ? 'rotate-45 text-white' : ''}`}
              />
            </button>

            <div
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
              }`}
            >
              <div className="overflow-hidden">
                <div className="pb-7 pl-12 pr-4 sm:pr-16">
                  <p className="max-w-lg text-sm leading-7 text-white/60">{text}</p>
                  <p className="mt-4 inline-flex rounded-full border border-white/20 px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.12em] text-white/70">
                    {tag}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
