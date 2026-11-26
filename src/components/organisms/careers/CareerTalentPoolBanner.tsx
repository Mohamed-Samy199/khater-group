import { ArrowRight } from 'lucide-react';
import { CareerApplyTrigger } from './CareersModalProvider';

export default function CareerTalentPoolBanner() {
  return (
    <section className="relative overflow-hidden bg-black py-16 text-white sm:py-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col justify-between gap-8 border border-white/20 bg-white/[0.02] p-8 sm:p-12 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <h3 className="text-3xl font-light tracking-tight text-white sm:text-4xl lg:text-5xl">
              Don’t See Your Exact Role <span className="font-medium text-[#B3B3B3]">Listed?</span>
            </h3>

            <p className="mt-3 text-base font-light leading-relaxed text-[#B3B3B3]">
              We frequently mobilize new engineering squads for landmark sports complexes, Olympic
              swimming stadiums, and master-planned urban developments. Submit your CV directly to
              our executive talent pool, and our talent acquisition committee will contact you when a
              fitting role opens.
            </p>
          </div>

          <div className="shrink-0">
            <CareerApplyTrigger className="inline-flex items-center gap-3 bg-white px-7 py-3.5 text-xs font-medium uppercase tracking-wider text-black transition-colors hover:bg-[#B3B3B3]">
              <span>Join Khater Talent Pool</span>
              <ArrowRight className="h-4 w-4" />
            </CareerApplyTrigger>
          </div>
        </div>
      </div>
    </section>
  );
}
