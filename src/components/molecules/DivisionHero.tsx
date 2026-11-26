import { resolveAssetSrc, type AssetSource } from '@/lib/assets';

interface DivisionHeroProps {
  title: string;
  backgroundImage: AssetSource;
  logo: AssetSource;
  items: string[];
  stripAriaLabel: string;
  stripCenterBreakpoint?: 'lg' | 'xl';
}

export default function DivisionHero({
  title,
  backgroundImage,
  logo,
  items,
  stripAriaLabel,
  stripCenterBreakpoint = 'lg',
}: DivisionHeroProps) {
  const justifyClass =
    stripCenterBreakpoint === 'xl' ? 'xl:justify-center' : 'lg:justify-center';

  return (
    <>
      <section
        aria-label={`${title} Hero`}
        className="relative isolate flex min-h-[440px] w-full items-center justify-center overflow-hidden bg-brand-black pt-24 pb-12 text-white md:min-h-[64svh] md:pt-32 md:pb-16"
      >
        <img
          src={resolveAssetSrc(backgroundImage)}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 -z-10 bg-black/45" aria-hidden="true" />
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-b from-black/60 via-transparent to-black/60"
          aria-hidden="true"
        />

        <div className="flex flex-col items-center px-6 text-center">
          <div
            className="relative h-[clamp(68px,7vw,110px)] w-[clamp(68px,7vw,110px)] shrink-0"
            aria-label={`${title} Logo`}
          >
            <img
              src={resolveAssetSrc(logo)}
              alt=""
              className="h-full w-full object-contain drop-shadow-[0_6px_20px_rgba(0,0,0,0.6)]"
            />
          </div>

          <h1 className="mt-[1.4vw] text-[clamp(34px,3.7vw,76px)] font-semibold leading-none tracking-[-0.04em] text-white">
            {title}
          </h1>
        </div>
      </section>

      <div
        aria-label={stripAriaLabel}
        className="border-b border-[#B3B3B3]/40 bg-white py-5 text-black sm:py-6"
      >
        <div
          className={`no-scrollbar mx-auto flex max-w-[1440px] items-center justify-start ${justifyClass} gap-6 overflow-x-auto px-6 sm:gap-8 sm:px-8 lg:gap-10 lg:px-12`}
        >
          {items.map((item, idx) => (
            <div
              key={item}
              className="flex shrink-0 items-center gap-2.5 text-sm font-medium tracking-wide text-black sm:text-base"
            >
              <span className="font-mono text-xs font-semibold text-[#8E8E8E] sm:text-[13px]">
                {String(idx + 1).padStart(2, '0')}
              </span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
