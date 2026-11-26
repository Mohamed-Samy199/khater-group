import { GsapStaggerSection } from '@/components/atoms/GsapReveal';
import { CAREERS_METRICS } from '@/constants/careersData';

export default function CareersMetricsBar() {
  return (
    <GsapStaggerSection
      ariaLabel="Khater Group Career Metrics"
      selector=".career-metric-item"
      fromY={20}
      duration={0.6}
      stagger={0.08}
      start="top 85%"
      className="border-b border-[#B3B3B3]/40 bg-white py-8 text-black"
    >
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <dl className="grid grid-cols-2 gap-y-6 sm:grid-cols-4 sm:divide-x sm:divide-[#B3B3B3]/40">
          {CAREERS_METRICS.map((metric) => (
            <div key={metric.label} className="career-metric-item flex flex-col items-center px-4 text-center">
              <dd className="text-3xl font-light tracking-tight text-black sm:text-4xl lg:text-5xl">
                {metric.value}
              </dd>
              <dt className="mt-1.5 text-xs font-light uppercase tracking-wider text-[#5B5B5B]">
                {metric.label}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </GsapStaggerSection>
  );
}
