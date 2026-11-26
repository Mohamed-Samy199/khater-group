// import Link from 'next/link';
// import { ArrowRight, Globe2, Layers, ShieldCheck, Trophy } from 'lucide-react';
// import egBg from '@/assets/banners/projects.webp';
// import ksaBg from '@/assets/hero/khater-sport.jpg';
// import groupMarkMain from '@/assets/logos/khater-mark-main.png';
// import groupMarkTriangle from '@/assets/logos/khater-mark-triangle.png';
// import sportsMarkMain from '@/assets/logos/khater-sports-main.png';
// import sportsMarkTriangle from '@/assets/logos/khater-sports-triangle.png';
// import { DIVISIONS } from '@/constants/site';
// import { resolveAssetSrc } from '@/lib/assets';

// export default function RegionSplitGateway() {
//   return (
//     <section
//       aria-label="Khater Regional Selection — Saudi Arabia and Egypt"
//       className="relative grid min-h-svh w-full grid-cols-1 overflow-hidden bg-brand-black text-brand-white lg:grid-cols-2"
//     >
//       <h1 className="sr-only">
//         Khater — Select Your Regional Destination: Khater Sports Saudi Arabia (KSA) or Khater Group Egypt (EG)
//       </h1>

//       {/* Center / Top-Center Heritage Crest */}
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute left-1/2 top-1/2 z-30 hidden -translate-x-1/2 -translate-y-1/2 flex-col items-center lg:flex"
//       >
//         <div className="flex items-center gap-2.5 rounded-full border border-white/25 bg-black/80 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.22em] text-white/90 shadow-[0_12px_40px_rgba(0,0,0,0.85)] backdrop-blur-xl">
//           <span>Est. 1987</span>
//           <span className="h-1 w-1 rounded-full bg-white/50" />
//           <span>40+ Years</span>
//         </div>
//       </div>

//       {/* Divider line */}
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-x-0 top-1/2 z-20 h-px bg-white/20 lg:inset-x-auto lg:inset-y-0 lg:left-1/2 lg:h-auto lg:w-px"
//       />

//       {/* HALF 1 — SAUDI ARABIA (KSA): KHATER SPORTS */}
//       <Link
//         href="/ksa"
//         aria-label="Enter Khater Sports Saudi Arabia (KSA)"
//         className="group relative isolate flex min-h-[50svh] flex-col justify-between overflow-hidden px-6 py-10 transition-colors duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-sports-light sm:px-10 sm:py-12 lg:min-h-svh lg:px-14 lg:py-14"
//       >
//         {/* Background Stadium Photography */}
//         <img
//           src={resolveAssetSrc(ksaBg)}
//           alt=""
//           fetchPriority="high"
//           className="absolute inset-0 -z-20 h-full w-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
//         />

//         {/* Scrims */}
//         <div
//           aria-hidden="true"
//           className="absolute inset-0 -z-10 bg-black/65 transition-colors duration-500 group-hover:bg-black/50"
//         />
//         <div
//           aria-hidden="true"
//           className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_75%,rgba(222,31,38,0.28),transparent_60%)] opacity-75 transition-opacity duration-500 group-hover:opacity-100"
//         />
//         <div
//           aria-hidden="true"
//           className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(0,0,0,0.75)_0%,transparent_35%,rgba(0,0,0,0.85)_100%)]"
//         />

//         {/* Top Country Header */}
//         <div className="flex items-center justify-between gap-4">
//           <span className="inline-flex items-center gap-2.5 rounded-full border border-white/25 bg-black/45 px-4 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-md">
//             <span className="h-2 w-2 rounded-full bg-sports-light" />
//             KSA · Kingdom of Saudi Arabia
//           </span>

//           <span className="hidden items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-white/60 sm:inline-flex">
//             <Trophy className="h-3.5 w-3.5 text-sports-light" aria-hidden="true" />
//             Jeddah Hub
//           </span>
//         </div>

//         {/* Center Brand Identity */}
//         <div className="my-8 max-w-lg lg:my-0">
//           <div className="flex items-center gap-4">
//             <span
//               aria-hidden="true"
//               className="relative block h-14 w-14 shrink-0 sm:h-16 sm:w-16"
//             >
//               <img
//                 src={resolveAssetSrc(sportsMarkMain)}
//                 alt=""
//                 className="absolute inset-0 h-full w-full object-contain transition-transform duration-700 ease-out group-hover:rotate-[360deg]"
//               />
//               <img
//                 src={resolveAssetSrc(sportsMarkTriangle)}
//                 alt=""
//                 className="absolute inset-0 h-full w-full object-contain"
//               />
//             </span>
//             <div>
//               <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.26em] text-sports-light">
//                 Dedicated Sports Division
//               </p>
//               <h2 className="mt-1 text-4xl font-semibold leading-none tracking-[-0.03em] text-white sm:text-5xl lg:text-[3.5rem]">
//                 Khater Sports
//               </h2>
//             </div>
//           </div>

//           <p className="mt-6 text-base font-light leading-relaxed text-white/80 sm:text-lg">
//             Delivering international championship stadiums, athletic tracks, sports courts, and Vision 2030 infrastructure across the Kingdom of Saudi Arabia.
//           </p>

//           <div className="mt-6 flex flex-wrap gap-2">
//             {['Vision 2030 Partner', 'Red Sea Global Vendor', 'FIFA · World Athletics · FIBA'].map((tag) => (
//               <span
//                 key={tag}
//                 className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 text-[11px] font-medium text-white/85 backdrop-blur-sm"
//               >
//                 <ShieldCheck className="h-3 w-3 text-sports-light" aria-hidden="true" />
//                 {tag}
//               </span>
//             ))}
//           </div>
//         </div>

//         {/* Bottom Action Bar */}
//         <div className="flex items-center justify-between border-t border-white/15 pt-5">
//           <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/70 transition-colors group-hover:text-white">
//             Enter Saudi Arabia Site
//           </span>
//           <span className="inline-flex items-center gap-2 rounded-full bg-sports-light px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white shadow-[0_8px_24px_rgba(222,31,38,0.4)] transition-all duration-300 group-hover:bg-white group-hover:text-black">
//             Khater Sports KSA
//             <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
//           </span>
//         </div>
//       </Link>

//       {/* HALF 2 — EGYPT (EG): KHATER GROUP */}
//       <Link
//         href="/eg"
//         aria-label="Enter Khater Group Egypt (EG)"
//         className="group relative isolate flex min-h-[50svh] flex-col justify-between overflow-hidden px-6 py-10 transition-colors duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white sm:px-10 sm:py-12 lg:min-h-svh lg:px-14 lg:py-14"
//       >
//         {/* Background Multi-Sector Architecture Photography */}
//         <img
//           src={resolveAssetSrc(egBg)}
//           alt=""
//           fetchPriority="high"
//           className="absolute inset-0 -z-20 h-full w-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
//         />

//         {/* Scrims */}
//         <div
//           aria-hidden="true"
//           className="absolute inset-0 -z-10 bg-black/70 transition-colors duration-500 group-hover:bg-black/55"
//         />
//         <div
//           aria-hidden="true"
//           className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(0,0,0,0.8)_0%,transparent_35%,rgba(0,0,0,0.88)_100%)]"
//         />

//         {/* Top Country Header */}
//         <div className="flex items-center justify-between gap-4">
//           <span className="inline-flex items-center gap-2.5 rounded-full border border-white/25 bg-black/45 px-4 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-md">
//             <span className="h-2 w-2 rounded-full bg-white" />
//             EG · Arab Republic of Egypt
//           </span>

//           <span className="hidden items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-white/60 sm:inline-flex">
//             <Globe2 className="h-3.5 w-3.5 text-white/80" aria-hidden="true" />
//             Cairo Headquarters
//           </span>
//         </div>

//         {/* Center Brand Identity */}
//         <div className="my-8 max-w-lg lg:my-0">
//           <div className="flex items-center gap-4">
//             <span
//               aria-hidden="true"
//               className="relative block h-14 w-12 shrink-0 sm:h-16 sm:w-14"
//             >
//               <img
//                 src={resolveAssetSrc(groupMarkMain)}
//                 alt=""
//                 className="absolute inset-0 h-full w-full object-contain brightness-0 invert transition-transform duration-700 ease-out group-hover:rotate-[360deg]"
//               />
//               <img
//                 src={resolveAssetSrc(groupMarkTriangle)}
//                 alt=""
//                 className="absolute inset-0 h-full w-full object-contain brightness-0 invert"
//               />
//             </span>
//             <div>
//               <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.26em] text-white/65">
//                 One Group · Five Sectors
//               </p>
//               <h2 className="mt-1 text-4xl font-semibold leading-none tracking-[-0.03em] text-white sm:text-5xl lg:text-[3.5rem]">
//                 Khater Group
//               </h2>
//             </div>
//           </div>

//           <p className="mt-6 text-base font-light leading-relaxed text-white/80 sm:text-lg">
//             An integrated group uniting five specialized sectors across Egypt—delivering turnkey sports complexes, playgrounds, landscapes, arena electronics, and Olympic pools.
//           </p>

//           <div className="mt-6 flex flex-wrap items-center gap-2">
//             <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-white/60 mr-1">
//               <Layers className="h-3.5 w-3.5" aria-hidden="true" />
//               Sectors:
//             </span>
//             {DIVISIONS.map((div) => (
//               <span
//                 key={div.slug}
//                 className="rounded-full border border-white/20 bg-white/[0.06] px-3 py-1 text-[11px] font-medium text-white/90 backdrop-blur-sm"
//               >
//                 {div.name}
//               </span>
//             ))}
//           </div>
//         </div>

//         {/* Bottom Action Bar */}
//         <div className="flex items-center justify-between border-t border-white/15 pt-5">
//           <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/70 transition-colors group-hover:text-white">
//             Enter Egypt Site
//           </span>
//           <span className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-black shadow-lg transition-all duration-300 group-hover:bg-white/90">
//             Khater Group EG
//             <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
//           </span>
//         </div>
//       </Link>
//     </section>
//   );
// }





























// 'use client';

// import { useEffect, useLayoutEffect, useRef, useState } from 'react';
// import type { CSSProperties, PointerEvent as ReactPointerEvent } from 'react';
// import Link from 'next/link';
// import gsap from 'gsap';
// import { ArrowRight, Globe2, Layers, ShieldCheck, Trophy } from 'lucide-react';
// import egBg from '@/assets/banners/projects.webp';
// import ksaBg from '@/assets/hero/khater-sport.jpg';
// import groupMarkMain from '@/assets/logos/khater-mark-main.png';
// import groupMarkTriangle from '@/assets/logos/khater-mark-triangle.png';
// import sportsMarkMain from '@/assets/logos/khater-sports-main.png';
// import sportsMarkTriangle from '@/assets/logos/khater-sports-triangle.png';
// import { DIVISIONS } from '@/constants/site';
// import { resolveAssetSrc } from '@/lib/assets';

// const useIsoLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

// type Side = 'ksa' | 'eg';

// const SKEW = 6; // ميل الخط الفاصل (% من العرض)
// const IDLE = 50;
// const HOVER = { ksa: 57, eg: 43 } as const;

// /* قص كل جهة بناءً على متغيرين: --split و --skew */
// const KSA_CLIP =
//   'polygon(0 0, calc((var(--split) + var(--skew)) * 1%) 0, calc((var(--split) - var(--skew)) * 1%) 100%, 0 100%)';
// const EG_CLIP =
//   'polygon(calc((var(--split) + var(--skew)) * 1%) 0, 100% 0, 100% 100%, calc((var(--split) - var(--skew)) * 1%) 100%)';

// const rootStyle = {
//   '--split': IDLE,
//   '--skew': SKEW,
//   '--ksa-clip': KSA_CLIP,
//   '--eg-clip': EG_CLIP,
// } as CSSProperties;

// const GHOST_STROKE = '1.5px rgba(255,255,255,0.16)';

// export default function RegionSplitGateway() {
//   const rootRef = useRef<HTMLElement | null>(null);
//   const lineRef = useRef<SVGLineElement | null>(null);
//   const crestRef = useRef<HTMLDivElement | null>(null);
//   const state = useRef({ split: IDLE, skew: SKEW });
//   const [side, setSide] = useState<Side | null>(null);

//   const apply = () => {
//     const root = rootRef.current;
//     if (!root) return;
//     const { split, skew } = state.current;
//     root.style.setProperty('--split', String(split));
//     root.style.setProperty('--skew', String(skew));
//     const line = lineRef.current;
//     if (line) {
//       line.setAttribute('x1', String(split + skew));
//       line.setAttribute('x2', String(split - skew));
//     }
//     if (crestRef.current) crestRef.current.style.left = `${split}%`;
//   };

//   const goTo = (split: number) => {
//     gsap.to(state.current, {
//       split,
//       duration: 0.8,
//       ease: 'power3.out',
//       overwrite: 'auto',
//       onUpdate: apply,
//     });
//   };

//   /* Intro */
//   useIsoLayoutEffect(() => {
//     const root = rootRef.current;
//     if (!root) return undefined;

//     const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
//     if (reduce) {
//       state.current.split = IDLE;
//       state.current.skew = SKEW;
//       apply();
//       return undefined;
//     }

//     const ctx = gsap.context(() => {
//       state.current.skew = 0;
//       apply();

//       const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
//       tl.to(state.current, { skew: SKEW, duration: 1.3, ease: 'power3.inOut', onUpdate: apply })
//         .fromTo('[data-bg]', { scale: 1.2 }, { scale: 1, duration: 1.6, ease: 'power2.out' }, 0)
//         .fromTo(
//           '[data-reveal]',
//           { opacity: 0, y: 28 },
//           { opacity: 1, y: 0, duration: 0.8, stagger: 0.08 },
//           0.5
//         )
//         .fromTo('[data-ghost]', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1 }, 0.4)
//         .fromTo(
//           '[data-crest]',
//           { scale: 0, rotate: -90 },
//           { scale: 1, rotate: 0, duration: 0.9, ease: 'back.out(1.8)' },
//           0.8
//         );
//     }, root);

//     return () => ctx.revert();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   const enter = (s: Side) => (e: ReactPointerEvent<HTMLAnchorElement>) => {
//     setSide(s);
//     if (e.pointerType === 'mouse') goTo(HOVER[s]);
//   };

//   const leave = () => {
//     setSide(null);
//     goTo(IDLE);
//   };

//   const spotlight = (e: ReactPointerEvent<HTMLAnchorElement>) => {
//     const r = e.currentTarget.getBoundingClientRect();
//     e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`);
//     e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`);
//   };

//   const dim = (me: Side) => (side && side !== me ? 'bg-black/85' : 'bg-black/60');

//   return (
//     <section
//       ref={rootRef}
//       aria-label="Khater Regional Selection — Saudi Arabia and Egypt"
//       onPointerLeave={leave}
//       style={rootStyle}
//       className="relative isolate grid w-full grid-cols-1 overflow-hidden bg-brand-black text-brand-white lg:block lg:h-svh lg:min-h-[640px]"
//     >
//       <h1 className="sr-only">
//         Khater — Select Your Regional Destination: Khater Sports Saudi Arabia (KSA) or Khater Group Egypt (EG)
//       </h1>

//       {/* ───────── KSA ───────── */}
//       <Link
//         href="/ksa"
//         aria-label="Enter Khater Sports Saudi Arabia (KSA)"
//         onPointerEnter={enter('ksa')}
//         onPointerMove={spotlight}
//         onFocus={() => {
//           setSide('ksa');
//           goTo(HOVER.ksa);
//         }}
//         onBlur={leave}
//         style={{ '--mx': '30%', '--my': '60%' } as CSSProperties}
//         className="group relative isolate block min-h-[50svh] overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-sports-light lg:absolute lg:inset-0 lg:min-h-0 lg:[clip-path:var(--ksa-clip)]"
//       >
//         <img
//           data-bg
//           src={resolveAssetSrc(ksaBg)}
//           alt=""
//           fetchPriority="high"
//           className="absolute inset-0 -z-20 h-full w-full object-cover object-center transition-transform duration-[1200ms] ease-out group-hover:scale-105"
//         />
//         <div aria-hidden="true" className={`absolute inset-0 -z-10 transition-colors duration-700 ${dim('ksa')}`} />
//         <div
//           aria-hidden="true"
//           className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(0,0,0,0.75)_0%,transparent_35%,rgba(0,0,0,0.88)_100%)]"
//         />
//         {/* Cursor spotlight */}
//         <div
//           aria-hidden="true"
//           className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 [background:radial-gradient(520px_circle_at_var(--mx)_var(--my),rgba(222,31,38,0.32),transparent_62%)] group-hover:opacity-100"
//         />
//         {/* Ghost code */}
//         <span
//           data-ghost
//           aria-hidden="true"
//           className="pointer-events-none absolute -bottom-[3vw] left-3 -z-10 hidden select-none font-semibold leading-none text-transparent lg:block lg:text-[17vw]"
//           style={{ WebkitTextStroke: GHOST_STROKE }}
//         >
//           KSA
//         </span>

//         <div className="mx-auto flex h-full min-h-[50svh] flex-col justify-between gap-8 px-6 py-10 sm:px-10 sm:py-12 lg:ml-0 lg:min-h-0 lg:w-[min(36vw,30rem)] lg:px-0 lg:py-14 lg:pl-14">
//           <div data-reveal className="flex items-center justify-between gap-4">
//             <span className="inline-flex items-center gap-2.5 rounded-full border border-white/25 bg-black/45 px-4 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-md">
//               <span className="h-2 w-2 rounded-full bg-sports-light" />
//               KSA · Saudi Arabia
//             </span>
//             <span className="hidden items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-white/60 xl:inline-flex">
//               <Trophy className="h-3.5 w-3.5 text-sports-light" aria-hidden="true" />
//               Jeddah Hub
//             </span>
//           </div>

//           <div>
//             <div data-reveal className="flex items-center gap-4">
//               <span aria-hidden="true" className="relative block h-14 w-14 shrink-0 sm:h-16 sm:w-16">
//                 <img
//                   src={resolveAssetSrc(sportsMarkMain)}
//                   alt=""
//                   className="absolute inset-0 h-full w-full object-contain transition-transform duration-700 ease-out group-hover:rotate-[360deg]"
//                 />
//                 <img
//                   src={resolveAssetSrc(sportsMarkTriangle)}
//                   alt=""
//                   className="absolute inset-0 h-full w-full object-contain"
//                 />
//               </span>
//               <div>
//                 <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.26em] text-sports-light">
//                   Dedicated Sports Division
//                 </p>
//                 <h2 className="mt-1 text-4xl font-semibold leading-none tracking-[-0.03em] text-white sm:text-5xl lg:text-[3.25rem]">
//                   Khater Sports
//                 </h2>
//               </div>
//             </div>

//             <p data-reveal className="mt-5 text-base font-light leading-relaxed text-white/80">
//               Delivering international championship stadiums, athletic tracks, sports courts, and Vision 2030
//               infrastructure across the Kingdom of Saudi Arabia.
//             </p>

//             <div data-reveal className="mt-5 flex flex-wrap gap-2">
//               {['Vision 2030 Partner', 'Red Sea Global Vendor', 'FIFA · World Athletics · FIBA'].map((tag) => (
//                 <span
//                   key={tag}
//                   className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 text-[11px] font-medium text-white/85 backdrop-blur-sm"
//                 >
//                   <ShieldCheck className="h-3 w-3 text-sports-light" aria-hidden="true" />
//                   {tag}
//                 </span>
//               ))}
//             </div>
//           </div>

//           <div data-reveal className="flex items-center gap-4 border-t border-white/15 pt-5">
//             <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-sports-light text-white shadow-[0_8px_28px_rgba(222,31,38,0.45)] transition-all duration-300 group-hover:scale-110 group-hover:bg-white group-hover:text-black">
//               <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
//             </span>
//             <span>
//               <span className="block text-[10px] font-medium uppercase tracking-[0.22em] text-white/60">
//                 Enter Saudi Arabia Site
//               </span>
//               <span className="mt-0.5 block text-sm font-semibold uppercase tracking-wider text-white">
//                 Khater Sports KSA
//               </span>
//             </span>
//           </div>
//         </div>
//       </Link>

//       {/* ───────── EG ───────── */}
//       <Link
//         href="/eg"
//         aria-label="Enter Khater Group Egypt (EG)"
//         onPointerEnter={enter('eg')}
//         onPointerMove={spotlight}
//         onFocus={() => {
//           setSide('eg');
//           goTo(HOVER.eg);
//         }}
//         onBlur={leave}
//         style={{ '--mx': '70%', '--my': '60%' } as CSSProperties}
//         className="group relative isolate block min-h-[50svh] overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white lg:absolute lg:inset-0 lg:min-h-0 lg:[clip-path:var(--eg-clip)]"
//       >
//         <img
//           data-bg
//           src={resolveAssetSrc(egBg)}
//           alt=""
//           fetchPriority="high"
//           className="absolute inset-0 -z-20 h-full w-full object-cover object-center transition-transform duration-[1200ms] ease-out group-hover:scale-105"
//         />
//         <div aria-hidden="true" className={`absolute inset-0 -z-10 transition-colors duration-700 ${dim('eg')}`} />
//         <div
//           aria-hidden="true"
//           className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(0,0,0,0.8)_0%,transparent_35%,rgba(0,0,0,0.9)_100%)]"
//         />
//         <div
//           aria-hidden="true"
//           className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 [background:radial-gradient(520px_circle_at_var(--mx)_var(--my),rgba(255,255,255,0.16),transparent_62%)] group-hover:opacity-100"
//         />
//         <span
//           data-ghost
//           aria-hidden="true"
//           className="pointer-events-none absolute -bottom-[3vw] right-3 -z-10 hidden select-none font-semibold leading-none text-transparent lg:block lg:text-[17vw]"
//           style={{ WebkitTextStroke: GHOST_STROKE }}
//         >
//           EG
//         </span>

//         <div className="mx-auto flex h-full min-h-[50svh] flex-col justify-between gap-8 px-6 py-10 sm:px-10 sm:py-12 lg:ml-auto lg:mr-0 lg:min-h-0 lg:w-[min(36vw,30rem)] lg:px-0 lg:py-14 lg:pr-14">
//           <div data-reveal className="flex items-center justify-between gap-4">
//             <span className="inline-flex items-center gap-2.5 rounded-full border border-white/25 bg-black/45 px-4 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-md">
//               <span className="h-2 w-2 rounded-full bg-white" />
//               EG · Arab Republic of Egypt
//             </span>
//             <span className="hidden items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-white/60 xl:inline-flex">
//               <Globe2 className="h-3.5 w-3.5 text-white/80" aria-hidden="true" />
//               Cairo HQ
//             </span>
//           </div>

//           <div>
//             <div data-reveal className="flex items-center gap-4">
//               <span aria-hidden="true" className="relative block h-14 w-12 shrink-0 sm:h-16 sm:w-14">
//                 <img
//                   src={resolveAssetSrc(groupMarkMain)}
//                   alt=""
//                   className="absolute inset-0 h-full w-full object-contain brightness-0 invert transition-transform duration-700 ease-out group-hover:rotate-[360deg]"
//                 />
//                 <img
//                   src={resolveAssetSrc(groupMarkTriangle)}
//                   alt=""
//                   className="absolute inset-0 h-full w-full object-contain brightness-0 invert"
//                 />
//               </span>
//               <div>
//                 <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.26em] text-white/65">
//                   One Group · Five Sectors
//                 </p>
//                 <h2 className="mt-1 text-4xl font-semibold leading-none tracking-[-0.03em] text-white sm:text-5xl lg:text-[3.25rem]">
//                   Khater Group
//                 </h2>
//               </div>
//             </div>

//             <p data-reveal className="mt-5 text-base font-light leading-relaxed text-white/80">
//               An integrated group uniting five specialized sectors across Egypt—delivering turnkey sports complexes,
//               playgrounds, landscapes, arena electronics, and Olympic pools.
//             </p>

//             <div data-reveal className="mt-5 flex flex-wrap items-center gap-2">
//               <span className="mr-1 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-white/60">
//                 <Layers className="h-3.5 w-3.5" aria-hidden="true" />
//                 Sectors:
//               </span>
//               {DIVISIONS.map((div) => (
//                 <span
//                   key={div.slug}
//                   className="rounded-full border border-white/20 bg-white/[0.06] px-3 py-1 text-[11px] font-medium text-white/90 backdrop-blur-sm"
//                 >
//                   {div.name}
//                 </span>
//               ))}
//             </div>
//           </div>

//           <div data-reveal className="flex items-center gap-4 border-t border-white/15 pt-5">
//             <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-white text-black shadow-[0_8px_28px_rgba(255,255,255,0.18)] transition-all duration-300 group-hover:scale-110 group-hover:bg-sports-light group-hover:text-white">
//               <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
//             </span>
//             <span>
//               <span className="block text-[10px] font-medium uppercase tracking-[0.22em] text-white/60">
//                 Enter Egypt Site
//               </span>
//               <span className="mt-0.5 block text-sm font-semibold uppercase tracking-wider text-white">
//                 Khater Group EG
//               </span>
//             </span>
//           </div>
//         </div>
//       </Link>

//       {/* Diagonal divider */}
//       <svg
//         aria-hidden="true"
//         viewBox="0 0 100 100"
//         preserveAspectRatio="none"
//         className="pointer-events-none absolute inset-0 z-20 hidden h-full w-full lg:block"
//       >
//         <line
//           ref={lineRef}
//           x1={IDLE + SKEW}
//           y1="0"
//           x2={IDLE - SKEW}
//           y2="100"
//           stroke="rgba(255,255,255,0.45)"
//           strokeWidth="1"
//           vectorEffect="non-scaling-stroke"
//         />
//       </svg>

//       {/* Mobile divider */}
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-x-0 top-1/2 z-20 h-px bg-white/20 lg:hidden"
//       />

//       {/* Heritage seal on the divider */}
//       <div
//         ref={crestRef}
//         aria-hidden="true"
//         className="pointer-events-none absolute left-1/2 top-1/2 z-30 hidden -translate-x-1/2 -translate-y-1/2 lg:block"
//       >
//         <div
//           data-crest
//           className="grid h-28 w-28 place-items-center rounded-full border border-white/30 bg-black/75 text-center shadow-[0_12px_40px_rgba(0,0,0,0.8)] backdrop-blur-xl"
//         >
//           <div>
//             <p className="text-[9px] font-medium uppercase tracking-[0.3em] text-white/60">Est.</p>
//             <p className="text-2xl font-semibold leading-none tracking-tight text-white">1987</p>
//             <p className="mt-1 text-[9px] font-medium uppercase tracking-[0.22em] text-sports-light">40+ Years</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }




'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import type { PointerEvent as ReactPointerEvent } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ArrowRight, Globe2, Layers, ShieldCheck, Trophy } from 'lucide-react';
import egBg from '@/assets/banners/projects.webp';
import ksaBg from '@/assets/hero/khater-sport.jpg';
import groupMarkMain from '@/assets/logos/khater-mark-main.png';
import groupMarkTriangle from '@/assets/logos/khater-mark-triangle.png';
import sportsMarkMain from '@/assets/logos/khater-sports-main.png';
import sportsMarkTriangle from '@/assets/logos/khater-sports-triangle.png';
import { DIVISIONS } from '@/constants/site';
import { resolveAssetSrc } from '@/lib/assets';

const useIsoLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

const AUTOPLAY_SECONDS = 7;

type RegionId = 'ksa' | 'eg';

interface Region {
  id: RegionId;
  href: string;
  code: string;
  ariaLabel: string;
  countryLine: string;
  hub: string;
  eyebrow: string;
  title: string;
  body: string;
  enter: string;
  cta: string;
  tabLabel: string;
  tabSub: string;
  tint: string;
}

const REGIONS: Region[] = [
  {
    id: 'ksa',
    href: '/ksa',
    code: 'KSA',
    ariaLabel: 'Enter Khater Sports Saudi Arabia (KSA)',
    countryLine: 'KSA · Kingdom of Saudi Arabia',
    hub: 'Jeddah Hub',
    eyebrow: 'Dedicated Sports Division',
    title: 'Khater Sports',
    body: 'Delivering international championship stadiums, athletic tracks, sports courts, and Vision 2030 infrastructure across the Kingdom of Saudi Arabia.',
    enter: 'Enter Saudi Arabia Site',
    cta: 'Khater Sports KSA',
    tabLabel: 'Khater Sports',
    tabSub: 'Kingdom of Saudi Arabia',
    tint: 'radial-gradient(circle at 12% 88%, rgba(222,31,38,0.38), transparent 55%)',
  },
  {
    id: 'eg',
    href: '/eg',
    code: 'EG',
    ariaLabel: 'Enter Khater Group Egypt (EG)',
    countryLine: 'EG · Arab Republic of Egypt',
    hub: 'Cairo Headquarters',
    eyebrow: 'One Group · Five Sectors',
    title: 'Khater Group',
    body: 'An integrated group uniting five specialized sectors across Egypt—delivering turnkey sports complexes, playgrounds, landscapes, arena electronics, and Olympic pools.',
    enter: 'Enter Egypt Site',
    cta: 'Khater Group EG',
    tabLabel: 'Khater Group',
    tabSub: 'Arab Republic of Egypt',
    tint: 'radial-gradient(circle at 12% 88%, rgba(255,255,255,0.14), transparent 55%)',
  },
];

const KSA_TAGS = ['Vision 2030 Partner', 'Red Sea Global Vendor', 'FIFA · World Athletics · FIBA'];

const GHOST_STROKE = '1.5px rgba(255,255,255,0.16)';

export default function RegionSplitGateway() {
  const rootRef = useRef<HTMLElement | null>(null);
  const tween = useRef<gsap.core.Tween | null>(null);
  const hovered = useRef(false);
  const [active, setActive] = useState(0);

  const current = REGIONS[active];

  /* Ken Burns للصورة النشطة: بدون cleanup عشان الصورة الخارجة تكمل حركتها وهي بتتلاشى */
  useIsoLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    gsap.fromTo(
      `[data-bg="${current.id}"]`,
      { scale: 1.14 },
      { scale: 1, duration: 9, ease: 'none', overwrite: true }
    );
  }, [current.id]);

  useEffect(
    () => () => {
      gsap.killTweensOf('[data-bg]');
    },
    []
  );

  /* دخول النص + خط التقدم + التبديل التلقائي */
  useIsoLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const id = current.id;

    const ctx = gsap.context(() => {
      gsap.set('[data-progress]', { scaleX: 0 });
      if (reduce) return;

      gsap.fromTo(
        `[data-panel="${id}"] [data-swap]`,
        { opacity: 0, y: 32 },
        { opacity: 1, y: 0, duration: 0.85, stagger: 0.08, ease: 'power3.out', delay: 0.15 }
      );

      tween.current = gsap.fromTo(
        `[data-progress="${id}"]`,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: AUTOPLAY_SECONDS,
          ease: 'none',
          onComplete: () => setActive((a) => (a + 1) % REGIONS.length),
        }
      );
      if (hovered.current) tween.current.pause();
    }, root);

    return () => {
      tween.current = null;
      ctx.revert();
    };
  }, [current.id]);

  const onEnter = (e: ReactPointerEvent<HTMLElement>) => {
    if (e.pointerType !== 'mouse') return;
    hovered.current = true;
    tween.current?.pause();
  };

  const onLeave = (e: ReactPointerEvent<HTMLElement>) => {
    if (e.pointerType !== 'mouse') return;
    hovered.current = false;
    tween.current?.resume();
  };

  const select = (i: number) => setActive((a) => (a === i ? a : i));

  return (
    <section
      ref={rootRef}
      aria-label="Khater Regional Selection — Saudi Arabia and Egypt"
      onPointerEnter={onEnter}
      onPointerLeave={onLeave}
      className="relative isolate h-svh min-h-[640px] w-full overflow-hidden bg-brand-black text-brand-white"
    >
      <h1 className="sr-only">
        Khater — Select Your Regional Destination: Khater Sports Saudi Arabia (KSA) or Khater Group Egypt (EG)
      </h1>

      {/* ───────── Backgrounds (crossfade) ───────── */}
      {REGIONS.map((r, i) => (
        <div
          key={r.id}
          aria-hidden="true"
          className={`absolute inset-0 -z-10 transition-opacity duration-1000 motion-reduce:transition-none ${
            i === active ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            data-bg={r.id}
            src={resolveAssetSrc(r.id === 'ksa' ? ksaBg : egBg)}
            alt=""
            fetchPriority={i === 0 ? 'high' : 'auto'}
            className="absolute inset-0 h-full w-full object-cover object-center will-change-transform"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.7)_0%,transparent_30%,rgba(0,0,0,0.85)_100%)]" />
          <div className="absolute inset-0" style={{ background: r.tint }} />
        </div>
      ))}

      {/* ───────── Ghost code ───────── */}
      {REGIONS.map((r, i) => (
        <span
          key={r.id}
          aria-hidden="true"
          className={`pointer-events-none absolute -right-[1vw] bottom-[18%] hidden select-none font-semibold leading-none text-transparent transition-all duration-1000 ease-out motion-reduce:transition-none lg:block lg:text-[24vw] ${
            i === active ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'
          }`}
          style={{ WebkitTextStroke: GHOST_STROKE }}
        >
          {r.code}
        </span>
      ))}

      <div className="relative z-10 flex h-full flex-col">
        {/* ───────── Top bar ───────── */}
        <div className="flex items-center justify-between gap-4 px-6 pt-8 sm:px-10 lg:px-14 lg:pt-10">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-white/25 bg-black/45 px-4 py-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-white/90 backdrop-blur-md">
            <span>Est. 1987</span>
            <span className="h-1 w-1 rounded-full bg-white/50" />
            <span>40+ Years</span>
          </span>
          <span className="hidden items-center gap-2 font-mono text-[11px] uppercase tracking-[0.24em] text-white/60 sm:inline-flex">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sports-light opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-sports-light" />
            </span>
            Select Your Region
          </span>
        </div>

        {/* ───────── Panels (stacked in one grid cell) ───────── */}
        <div className="grid flex-1 items-center px-6 sm:px-10 lg:px-14">
          {REGIONS.map((r, i) => {
            const on = i === active;
            const isKsa = r.id === 'ksa';
            return (
              <div
                key={r.id}
                data-panel={r.id}
                aria-hidden={!on}
                className={`max-w-2xl transition-[opacity,visibility] duration-700 [grid-area:1/1] motion-reduce:transition-none ${
                  on ? 'visible opacity-100' : 'invisible opacity-0'
                }`}
              >
                <div data-swap className="flex items-center gap-4">
                  <span aria-hidden="true" className="relative block h-14 w-14 shrink-0 sm:h-16 sm:w-16">
                    <img
                      src={resolveAssetSrc(isKsa ? sportsMarkMain : groupMarkMain)}
                      alt=""
                      className={`absolute inset-0 h-full w-full object-contain ${isKsa ? '' : 'brightness-0 invert'}`}
                    />
                    <img
                      src={resolveAssetSrc(isKsa ? sportsMarkTriangle : groupMarkTriangle)}
                      alt=""
                      className={`absolute inset-0 h-full w-full object-contain ${isKsa ? '' : 'brightness-0 invert'}`}
                    />
                  </span>
                  <div>
                    <p
                      className={`font-mono text-[11px] font-semibold uppercase tracking-[0.26em] ${
                        isKsa ? 'text-sports-light' : 'text-white/65'
                      }`}
                    >
                      {r.eyebrow}
                    </p>
                    <p className="mt-1 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-white/55">
                      {isKsa ? (
                        <Trophy className="h-3.5 w-3.5 text-sports-light" aria-hidden="true" />
                      ) : (
                        <Globe2 className="h-3.5 w-3.5 text-white/80" aria-hidden="true" />
                      )}
                      {r.countryLine} · {r.hub}
                    </p>
                  </div>
                </div>

                <h2
                  data-swap
                  className="mt-6 text-5xl font-semibold leading-[0.95] tracking-[-0.035em] text-white sm:text-6xl lg:text-7xl"
                >
                  {r.title}
                </h2>

                <p data-swap className="mt-5 max-w-xl text-base font-light leading-relaxed text-white/80 sm:text-lg">
                  {r.body}
                </p>

                <div data-swap className="mt-5 flex flex-wrap items-center gap-2">
                  {isKsa ? (
                    KSA_TAGS.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 text-[11px] font-medium text-white/85 backdrop-blur-sm"
                      >
                        <ShieldCheck className="h-3 w-3 text-sports-light" aria-hidden="true" />
                        {tag}
                      </span>
                    ))
                  ) : (
                    <>
                      <span className="mr-1 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-white/60">
                        <Layers className="h-3.5 w-3.5" aria-hidden="true" />
                        Sectors:
                      </span>
                      {DIVISIONS.map((div) => (
                        <span
                          key={div.slug}
                          className="rounded-full border border-white/20 bg-white/[0.06] px-3 py-1 text-[11px] font-medium text-white/90 backdrop-blur-sm"
                        >
                          {div.name}
                        </span>
                      ))}
                    </>
                  )}
                </div>

                <div data-swap className="mt-8">
                  <Link
                    href={r.href}
                    aria-label={r.ariaLabel}
                    tabIndex={on ? 0 : -1}
                    className={`group inline-flex items-center gap-4 rounded-full py-2 pl-7 pr-2 text-sm font-semibold uppercase tracking-wider shadow-xl transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black ${
                      isKsa
                        ? 'bg-sports-light text-white shadow-[0_12px_36px_rgba(222,31,38,0.45)] hover:bg-white hover:text-black'
                        : 'bg-white text-black hover:bg-sports-light hover:text-white'
                    }`}
                  >
                    <span className="text-left leading-tight">
                      <span className="block text-[10px] font-medium tracking-[0.2em] opacity-70">{r.enter}</span>
                      <span className="block">{r.cta}</span>
                    </span>
                    <span
                      className={`grid h-12 w-12 place-items-center rounded-full transition-all duration-300 group-hover:translate-x-0.5 ${
                        isKsa
                          ? 'bg-white text-sports-light group-hover:bg-black group-hover:text-white'
                          : 'bg-black text-white group-hover:bg-white group-hover:text-sports-light'
                      }`}
                    >
                      <ArrowRight className="h-5 w-5" aria-hidden="true" />
                    </span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* ───────── Selector bar ───────── */}
        <div role="tablist" aria-label="Choose region" className="grid grid-cols-2 border-t border-white/15 bg-black/40 backdrop-blur-md">
          {REGIONS.map((r, i) => {
            const on = i === active;
            return (
              <button
                key={r.id}
                type="button"
                role="tab"
                aria-selected={on}
                onClick={() => select(i)}
                onFocus={() => select(i)}
                onPointerEnter={(e) => e.pointerType === 'mouse' && select(i)}
                className={`group relative flex items-center gap-4 px-6 py-5 text-left transition-colors duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white/60 sm:px-10 lg:px-14 lg:py-6 ${
                  i === 0 ? '' : 'border-l border-white/15'
                } ${on ? 'bg-white/[0.06]' : 'hover:bg-white/[0.03]'}`}
              >
                {/* Progress line */}
                <span className="absolute inset-x-0 top-0 h-0.5 bg-white/10" aria-hidden="true">
                  <span data-progress={r.id} className="block h-full origin-left scale-x-0 bg-sports-light" />
                </span>

                <span className="font-mono text-xs font-bold tracking-[0.2em] text-white/35">0{i + 1}</span>
                <span
                  className={`text-2xl font-semibold tracking-tight transition-colors duration-500 sm:text-3xl ${
                    on ? 'text-white' : 'text-white/45 group-hover:text-white/75'
                  }`}
                >
                  {r.code}
                </span>
                <span className="hidden min-w-0 flex-col sm:flex">
                  <span className={`truncate text-sm font-medium transition-colors ${on ? 'text-white' : 'text-white/55'}`}>
                    {r.tabLabel}
                  </span>
                  <span className="truncate text-[11px] font-light text-white/40">{r.tabSub}</span>
                </span>
                <ArrowRight
                  className={`ml-auto h-4 w-4 shrink-0 transition-all duration-500 ${
                    on ? 'translate-x-0 text-sports-light opacity-100' : '-translate-x-2 text-white/40 opacity-0'
                  }`}
                  aria-hidden="true"
                />
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}