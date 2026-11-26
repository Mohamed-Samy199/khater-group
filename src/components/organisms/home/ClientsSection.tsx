import type { CSSProperties } from 'react';
import { CLIENT_LOGOS } from '@/constants/clientsLogos';
import { resolveAssetSrc, type AssetSource } from '@/lib/assets';

const ROWS = [
  { anim: 'animate-marquee-left', duration: 60 },
  { anim: 'animate-marquee-right', duration: 75 },
  { anim: 'animate-marquee-left', duration: 65 },
];

function LogoTile({ src, hidden = false }: { src: AssetSource; hidden?: boolean }) {
  return (
    <li aria-hidden={hidden || undefined} className="group mr-4 shrink-0 md:mr-5">
      <div className="grid h-24 w-24 place-items-center overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-500 group-hover:-translate-y-1.5 group-hover:border-black/30 group-hover:shadow-[0_18px_40px_rgba(0,0,0,0.18)] sm:h-28 sm:w-28 md:h-32 md:w-32">
        <img
          src={resolveAssetSrc(src)}
          alt=""
          loading="lazy"
          draggable={false}
          className="h-full w-full object-contain opacity-70 grayscale transition-all duration-500 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"
        />
      </div>
    </li>
  );
}

function MarqueeRow({
  logos,
  anim,
  duration,
}: {
  logos: AssetSource[];
  anim: string;
  duration: number;
}) {
  return (
    <div className="group/row relative overflow-hidden py-3 [-webkit-mask-image:linear-gradient(to_right,transparent,#000_10%,#000_90%,transparent)] [mask-image:linear-gradient(to_right,transparent,#000_10%,#000_90%,transparent)]">
      <ul
        className={`flex w-max will-change-transform group-hover/row:[animation-play-state:paused] motion-reduce:animate-none ${anim}`}
        style={{ '--marquee-duration': `${duration}s` } as CSSProperties}
      >
        {logos.map((src, i) => (
          <LogoTile key={`a-${i}`} src={src} />
        ))}
        {logos.map((src, i) => (
          <LogoTile key={`b-${i}`} src={src} hidden />
        ))}
      </ul>
    </div>
  );
}

export default function ClientsSection() {
  const per = Math.ceil(CLIENT_LOGOS.length / ROWS.length);
  const rows = ROWS.map((r, i) => ({
    ...r,
    logos: CLIENT_LOGOS.slice(i * per, (i + 1) * per),
  }));

  return (
    <section className="relative isolate w-full overflow-hidden bg-white py-16 text-black md:py-24">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-60 [background-image:radial-gradient(rgba(0,0,0,0.12)_1px,transparent_1px)] [background-size:22px_22px] [-webkit-mask-image:radial-gradient(ellipse_at_center,#000_20%,transparent_75%)] [mask-image:radial-gradient(ellipse_at_center,#000_20%,transparent_75%)]"
      />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -z-10 h-[420px] w-[820px] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-black/5 via-black/[0.02] to-black/5 blur-3xl"
      />

      <div className="mx-auto mb-10 px-6 text-center md:mb-14">
        <h2 className="text-3xl font-light tracking-tight text-black sm:text-4xl md:text-5xl">
          Our Clients
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[#5B5B5B] md:text-base">
          Clubs, universities, developers and global brands rely on Khater Group to build their sports and leisure spaces.
        </p>

        <div className="mt-7 inline-flex items-center gap-4 rounded-2xl border border-black/10 bg-white/80 px-6 py-3 shadow-[0_10px_40px_rgba(0,0,0,0.06)] backdrop-blur-xl">
          <span className="text-3xl font-light tracking-tight md:text-4xl">{CLIENT_LOGOS.length}+</span>
          <span className="h-8 w-px bg-black/15" />
          <span className="text-left text-[11px] font-medium uppercase leading-tight tracking-[0.2em] text-[#5B5B5B]">
            Clients &amp;
            <br />
            Partners
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-1 md:gap-2">
        {rows.map((r, i) => (
          <MarqueeRow key={i} logos={r.logos} anim={r.anim} duration={r.duration} />
        ))}
      </div>
    </section>
  );
}
