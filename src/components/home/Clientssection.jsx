// import { useMemo } from 'react';

// // Vite: loads every logo in src/assets/clients (Images1.jpg ... Images36.jpg)
// // Path assumes this file lives in src/components/<folder>/ like ServicesSectionLight
// const modules = import.meta.glob('../../assets/clients/*.{jpg,jpeg,png,webp,svg}', {
//   eager: true,
//   import: 'default',
// });

// // Sort naturally: Images2 before Images10
// const LOGOS = Object.entries(modules)
//   .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
//   .map(([, src]) => src);

// // Marquee rows: direction + duration (seconds). Different speeds feel organic.
// const ROWS = [
//   { dir: 'left', duration: 60 },
//   { dir: 'right', duration: 75 },
//   { dir: 'left', duration: 65 },
// ];

// const CSS = `
// @keyframes clients-left  { from { transform: translateX(0); }    to { transform: translateX(-50%); } }
// @keyframes clients-right { from { transform: translateX(-50%); } to { transform: translateX(0); } }

// .clients-marquee:hover .clients-track { animation-play-state: paused; }

// .clients-track { will-change: transform; }

// @media (prefers-reduced-motion: reduce) {
//   .clients-track { animation: none !important; }
// }
// `;

// function LogoTile({ src, hidden = false }) {
//   return (
//     <li
//       aria-hidden={hidden || undefined}
//       className="group mr-4 shrink-0 md:mr-5"
//     >
//       <div className="grid h-24 w-24 place-items-center overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-500 group-hover:-translate-y-1.5 group-hover:border-black/30 group-hover:shadow-[0_18px_40px_rgba(0,0,0,0.18)] sm:h-28 sm:w-28 md:h-32 md:w-32">
//         <img
//           src={src}
//           alt=""
//           loading="lazy"
//           draggable="false"
//           className="h-full w-full object-contain opacity-70 grayscale transition-all duration-500 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"
//         />
//       </div>
//     </li>
//   );
// }

// function MarqueeRow({ logos, dir, duration }) {
//   return (
//     <div
//       className="clients-marquee relative overflow-hidden py-3"
//       style={{
//         WebkitMaskImage: 'linear-gradient(to right, transparent, #000 10%, #000 90%, transparent)',
//         maskImage: 'linear-gradient(to right, transparent, #000 10%, #000 90%, transparent)',
//       }}
//     >
//       <ul
//         className="clients-track flex w-max"
//         style={{ animation: `clients-${dir} ${duration}s linear infinite` }}
//       >
//         {logos.map((src, i) => (
//           <LogoTile key={`a-${i}`} src={src} />
//         ))}
//         {/* duplicate set = seamless loop */}
//         {logos.map((src, i) => (
//           <LogoTile key={`b-${i}`} src={src} hidden />
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default function ClientsSection() {
//   // Split the logos evenly across the rows
//   const rows = useMemo(() => {
//     const per = Math.ceil(LOGOS.length / ROWS.length);
//     return ROWS.map((r, i) => ({ ...r, logos: LOGOS.slice(i * per, (i + 1) * per) }));
//   }, []);

//   return (
//     <section className="relative isolate overflow-hidden bg-white py-16 text-black md:py-24">
//       <style>{CSS}</style>

//       {/* Soft background: dotted grid + light glow */}
//       <div
//         aria-hidden="true"
//         className="absolute inset-0 -z-10 opacity-60"
//         style={{
//           backgroundImage: 'radial-gradient(rgba(0,0,0,0.12) 1px, transparent 1px)',
//           backgroundSize: '22px 22px',
//           WebkitMaskImage: 'radial-gradient(ellipse at center, #000 20%, transparent 75%)',
//           maskImage: 'radial-gradient(ellipse at center, #000 20%, transparent 75%)',
//         }}
//       />
//       <div
//         aria-hidden="true"
//         className="absolute left-1/2 top-1/2 -z-10 h-[420px] w-[820px] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-black/5 via-black/[0.02] to-black/5 blur-3xl"
//       />

//       {/* Header */}
//       <div className="mx-auto mb-10 px-6 text-center md:mb-14">
//         <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.25em] text-black/60 backdrop-blur">
//           <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-black" />
//           Trusted by
//         </span>

//         <h2 className="mt-5 text-3xl font-light tracking-tight text-black md:text-5xl">Our Clients</h2>

//         <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-black/55 md:text-base">
//           Clubs, universities, developers and global brands rely on Khater Group to build their sports and leisure spaces.
//         </p>

//         {/* Counter */}
//         <div className="mt-7 inline-flex items-center gap-4 rounded-2xl border border-white/70 bg-white/60 px-6 py-3 shadow-[0_10px_40px_rgba(0,0,0,0.08)] backdrop-blur-xl">
//           <span className="text-3xl font-light tracking-tight md:text-4xl">{LOGOS.length}+</span>
//           <span className="h-8 w-px bg-black/15" />
//           <span className="text-left text-[11px] font-medium uppercase leading-tight tracking-[0.2em] text-black/60">
//             Clients &<br />Partners
//           </span>
//         </div>
//       </div>

//       {/* Marquee rows */}
//       <div className="flex flex-col gap-1 md:gap-2">
//         {rows.map((r, i) => (
//           <MarqueeRow key={i} logos={r.logos} dir={r.dir} duration={r.duration} />
//         ))}
//       </div>
//     </section>
//   );
// }













// import { useMemo } from 'react';

// // Vite: loads every logo in src/assets/clients (Images1.jpg ... Images36.jpg)
// // Path assumes this file lives in src/components/<folder>/ like ServicesSectionLight
// const modules = import.meta.glob('../../assets/clients/*.{jpg,jpeg,png,webp,svg}', {
//   eager: true,
//   import: 'default',
// });

// // Sort naturally: Images2 before Images10
// const LOGOS = Object.entries(modules)
//   .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
//   .map(([, src]) => src);

// // Marquee rows. `anim` classes come from tailwind.config.js (full class names so Tailwind can see them)
// const ROWS = [
//   { anim: 'animate-marquee-left', duration: 60 },
//   { anim: 'animate-marquee-right', duration: 75 },
//   { anim: 'animate-marquee-left', duration: 65 },
// ];

// function LogoTile({ src, hidden = false }) {
//   return (
//     <li aria-hidden={hidden || undefined} className="group mr-4 shrink-0 md:mr-5">
//       <div className="grid h-24 w-24 place-items-center overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-500 group-hover:-translate-y-1.5 group-hover:border-black/30 group-hover:shadow-[0_18px_40px_rgba(0,0,0,0.18)] sm:h-28 sm:w-28 md:h-32 md:w-32">
//         <img
//           src={src}
//           alt=""
//           loading="lazy"
//           draggable="false"
//           className="h-full w-full object-contain opacity-70 grayscale transition-all duration-500 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"
//         />
//       </div>
//     </li>
//   );
// }

// function MarqueeRow({ logos, anim, duration }) {
//   return (
//     <div className="group/row relative overflow-hidden py-3 [-webkit-mask-image:linear-gradient(to_right,transparent,#000_10%,#000_90%,transparent)] [mask-image:linear-gradient(to_right,transparent,#000_10%,#000_90%,transparent)]">
//       <ul
//         className={`flex w-max will-change-transform group-hover/row:[animation-play-state:paused] motion-reduce:animate-none ${anim}`}
//         style={{ '--marquee-duration': `${duration}s` }}
//       >
//         {logos.map((src, i) => (
//           <LogoTile key={`a-${i}`} src={src} />
//         ))}
//         {/* duplicate set = seamless loop */}
//         {logos.map((src, i) => (
//           <LogoTile key={`b-${i}`} src={src} hidden />
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default function ClientsSection() {
//   // Split the logos evenly across the rows
//   const rows = useMemo(() => {
//     const per = Math.ceil(LOGOS.length / ROWS.length);
//     return ROWS.map((r, i) => ({ ...r, logos: LOGOS.slice(i * per, (i + 1) * per) }));
//   }, []);

//   return (
//     <section className="relative isolate overflow-hidden bg-white py-16 text-black md:py-12">
//       {/* Background: dotted grid (faded at the edges) + soft glow */}
//       <div
//         aria-hidden="true"
//         className="absolute inset-0 -z-10 opacity-60 [background-image:radial-gradient(rgba(0,0,0,0.12)_1px,transparent_1px)] [background-size:22px_22px] [-webkit-mask-image:radial-gradient(ellipse_at_center,#000_20%,transparent_75%)] [mask-image:radial-gradient(ellipse_at_center,#000_20%,transparent_75%)]"
//       />
//       <div
//         aria-hidden="true"
//         className="absolute left-1/2 top-1/2 -z-10 h-[420px] w-[820px] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-black/5 via-black/[0.02] to-black/5 blur-3xl"
//       />

//       {/* Header */}
//       <div className="mx-auto mb-10 px-6 text-center md:mb-14">
//         <h2 className="mt-5 text-3xl font-light tracking-tight text-black md:text-5xl">Our Clients</h2>

//         <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-black/55 md:text-base">
//           Clubs, universities, developers and global brands rely on Khater Group to build their sports and leisure spaces.
//         </p>

//         {/* Counter */}
//         <div className="mt-7 inline-flex items-center gap-4 rounded-2xl border border-white/70 bg-white/60 px-6 py-3 shadow-[0_10px_40px_rgba(0,0,0,0.08)] backdrop-blur-xl">
//           <span className="text-3xl font-light tracking-tight md:text-4xl">{LOGOS.length}+</span>
//           <span className="h-8 w-px bg-black/15" />
//           <span className="text-left text-[11px] font-medium uppercase leading-tight tracking-[0.2em] text-black/60">
//             Clients &<br />Partners
//           </span>
//         </div>
//       </div>

//       {/* Marquee rows */}
//       <div className="flex flex-col gap-1 md:gap-2">
//         {rows.map((r, i) => (
//           <MarqueeRow key={i} logos={r.logos} anim={r.anim} duration={r.duration} />
//         ))}
//       </div>
//     </section>
//   );
// }


import { useEffect, useMemo, useRef } from 'react';
import khaterLogo from '../../assets/logos/khater-dark.png';

// Vite: loads every logo in src/assets/clients (Images1.jpg ... Images36.jpg)
// Path assumes this file lives in src/components/<folder>/ like ServicesSectionLight
const modules = import.meta.glob('../../assets/clients/*.{jpg,jpeg,png,webp,svg}', {
  eager: true,
  import: 'default',
});

// Sort naturally: Images2 before Images10
const LOGOS = Object.entries(modules)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([, src]) => src);

// Marquee rows. `anim` classes come from tailwind.config.js (full class names so Tailwind can see them)
const ROWS = [
  { anim: 'animate-marquee-left', duration: 60 },
  { anim: 'animate-marquee-right', duration: 75 },
  { anim: 'animate-marquee-left', duration: 65 },
];

/* ---------- Khater logo scroll reveal (added) ---------- */
const DELAY = 0; // share of the pinned scroll before the logo starts rising (raise it = later start)
const TRAVEL = 0.75; // pinned-scroll share at which the logo reaches the centre
const SCROLL_VH = 75; // extra scroll distance (in vh) while the section is pinned
const START_OFFSET_VH = 70; // where the logo card starts (below the screen)
const SLOGAN = 'We build the spaces where champions play'; // text under the logo, change it freely
const clamp = (v, min = 0, max = 1) => Math.min(max, Math.max(min, v));

function LogoTile({ src, hidden = false }) {
  return (
    <li aria-hidden={hidden || undefined} className="group mr-4 shrink-0 md:mr-5">
      <div className="grid h-24 w-24 place-items-center overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-500 group-hover:-translate-y-1.5 group-hover:border-black/30 group-hover:shadow-[0_18px_40px_rgba(0,0,0,0.18)] sm:h-28 sm:w-28 md:h-32 md:w-32">
        <img
          src={src}
          alt=""
          loading="lazy"
          draggable="false"
          className="h-full w-full object-contain opacity-70 grayscale transition-all duration-500 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"
        />
      </div>
    </li>
  );
}

function MarqueeRow({ logos, anim, duration }) {
  return (
    <div className="group/row relative overflow-hidden py-3 [-webkit-mask-image:linear-gradient(to_right,transparent,#000_10%,#000_90%,transparent)] [mask-image:linear-gradient(to_right,transparent,#000_10%,#000_90%,transparent)]">
      <ul
        className={`flex w-max will-change-transform group-hover/row:[animation-play-state:paused] motion-reduce:animate-none ${anim}`}
        style={{ '--marquee-duration': `${duration}s` }}
      >
        {logos.map((src, i) => (
          <LogoTile key={`a-${i}`} src={src} />
        ))}
        {/* duplicate set = seamless loop */}
        {logos.map((src, i) => (
          <LogoTile key={`b-${i}`} src={src} hidden />
        ))}
      </ul>
    </div>
  );
}

export default function ClientsSection() {
  // Split the logos evenly across the rows
  const rows = useMemo(() => {
    const per = Math.ceil(LOGOS.length / ROWS.length);
    return ROWS.map((r, i) => ({ ...r, logos: LOGOS.slice(i * per, (i + 1) * per) }));
  }, []);

  /* ---------- scroll reveal (added): writes CSS variables, no re-renders ---------- */
  const wrapRef = useRef(null);
  const stageRef = useRef(null);
  const rowsRef = useRef(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const stage = stageRef.current;
    if (!wrap || !stage) return undefined;

    let raf = 0;

    const update = () => {
      raf = 0;
      const vh = window.innerHeight;
      const h = stage.offsetHeight;

      // If the section is taller than the screen, pin it by its bottom edge so nothing is cut off
      const top = Math.min(0, vh - h);
      stage.style.top = `${top}px`;

      const rect = wrap.getBoundingClientRect();
      const dist = rect.height - h; // scroll distance while pinned
      const p = dist > 0 ? clamp((top - rect.top) / dist) : 1;
      // The logo never starts before the last marquee row is fully on screen
      const rowsEl = rowsRef.current;
      const seen = rowsEl ? rowsEl.getBoundingClientRect().bottom <= vh - 16 : true;
      const q = seen ? clamp((p - DELAY) / (TRAVEL - DELAY)) : 0;
      const e = 1 - Math.pow(1 - q, 2); // light ease-out: starts moving right away

      stage.style.setProperty('--vt', `${Math.max(0, h - vh)}px`); // top of the visible screen inside the stage
      stage.style.setProperty('--y', `${((1 - e) * START_OFFSET_VH).toFixed(2)}vh`);
      stage.style.setProperty('--s', (0.9 + 0.1 * e).toFixed(3));
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    const ro = new ResizeObserver(onScroll);
    ro.observe(stage);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      ro.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    // Tall wrapper = the scroll distance. No overflow-* on this element or its parents (it would break sticky).
    <div ref={wrapRef} className="relative bg-white">
      <div
        ref={stageRef}
        className="sticky top-0 flex min-h-screen items-center overflow-hidden bg-white"
        style={{ '--vt': '0px', '--y': '70vh', '--s': 0.9 }}
      >
        {/* ======== original section (design unchanged) ======== */}
        <section className="relative isolate w-full overflow-hidden bg-white py-16 text-black md:py-12">
          {/* Background: dotted grid (faded at the edges) + soft glow */}
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 opacity-60 [background-image:radial-gradient(rgba(0,0,0,0.12)_1px,transparent_1px)] [background-size:22px_22px] [-webkit-mask-image:radial-gradient(ellipse_at_center,#000_20%,transparent_75%)] [mask-image:radial-gradient(ellipse_at_center,#000_20%,transparent_75%)]"
          />
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -z-10 h-[420px] w-[820px] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-black/5 via-black/[0.02] to-black/5 blur-3xl"
          />

          {/* Header */}
          <div className="mx-auto mb-10 px-6 text-center md:mb-14">
            <h2 className="mt-5 text-3xl font-light tracking-tight text-black md:text-5xl">Our Clients</h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-black/55 md:text-base">
              Clubs, universities, developers and global brands rely on Khater Group to build their sports and leisure spaces.
            </p>

            {/* Counter */}
            <div className="mt-7 inline-flex items-center gap-4 rounded-2xl border border-white/70 bg-white/60 px-6 py-3 shadow-[0_10px_40px_rgba(0,0,0,0.08)] backdrop-blur-xl">
              <span className="text-3xl font-light tracking-tight md:text-4xl">{LOGOS.length}+</span>
              <span className="h-8 w-px bg-black/15" />
              <span className="text-left text-[11px] font-medium uppercase leading-tight tracking-[0.2em] text-black/60">
                Clients &<br />Partners
              </span>
            </div>
          </div>

          {/* Marquee rows */}
          <div ref={rowsRef} className="flex flex-col gap-1 md:gap-2">
            {rows.map((r, i) => (
              <MarqueeRow key={i} logos={r.logos} anim={r.anim} duration={r.duration} />
            ))}
          </div>
        </section>
        {/* ======== end of original section ======== */}

        {/* ADDED: screen-sized overlay (always aligned with the visible screen) */}
        <div className="pointer-events-none absolute left-0 top-[var(--vt)] h-screen w-full">
          <div className="absolute inset-0 grid place-items-center px-6">
            {/* Card: Khater logo + slogan, rises from the bottom to the centre of the screen */}
            <div className="flex w-[min(88vw,440px)] flex-col items-center rounded-3xl border border-black/10 bg-white/90 px-8 pb-6 pt-8 text-center shadow-[0_30px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl will-change-transform [transform:translateY(var(--y))_scale(var(--s))]">
              <img
                src={khaterLogo}
                alt="Khater Group"
                draggable="false"
                className="w-[min(46vw,200px)] object-contain"
              />
              <span className="mt-5 h-px w-12 bg-black/20" />
              <p className="mt-4 text-[11px] font-medium uppercase leading-relaxed tracking-[0.22em] text-black/60">
                {SLOGAN}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ADDED: scroll distance while the section is pinned */}
      <div aria-hidden="true" style={{ height: `${SCROLL_VH}vh` }} />
    </div>
  );
}