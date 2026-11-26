'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { CONTACT_FAQS } from '@/constants/contactData';

export default function ContactFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (idx: number) => {
    setOpenIndex((current) => (current === idx ? null : idx));
  };

  return (
    <section className="relative border-t border-black/10 bg-[#FAFAFA] py-16 text-brand-black sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <h2 className="text-3xl font-light tracking-tight text-brand-black sm:text-4xl">
              Common Questions <br />
              <span className="font-medium text-black/50">Before Inquiring</span>
            </h2>
            <p className="mt-4 text-sm font-light leading-relaxed text-black/70">
              Find immediate answers regarding our bidding procedures, international certifications, regional operations, and on-site engineering surveys.
            </p>
          </div>

          <div className="space-y-3.5 lg:col-span-8">
            {CONTACT_FAQS.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="overflow-hidden rounded-2xl border border-black/10 bg-white transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => toggleIndex(idx)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between p-5 text-left transition hover:bg-black/[0.01] sm:p-6"
                  >
                    <span className="pr-4 text-sm font-medium text-brand-black sm:text-base">
                      {faq.question}
                    </span>
                    <span
                      className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border border-black/10 bg-[#FAFAFA] transition-transform duration-300 ${
                        isOpen ? 'rotate-180 bg-black text-white' : 'text-black/60'
                      }`}
                    >
                      <ChevronDown size={16} />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="border-t border-black/[0.06] px-5 pb-6 pt-4 sm:px-6">
                      <p className="text-xs font-light leading-relaxed text-black/70 sm:text-sm">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
