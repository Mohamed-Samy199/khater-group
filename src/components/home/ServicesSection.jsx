// // import React, { useState } from 'react';

// // const serviceCategories = [
// //   {
// //     id: 'courts',
// //     name: 'Courts',
// //     description: 'إنشاء وتجهيز أحدث الملاعب الرياضية بأعلى معايير الجودة العالمية.',
// //     items: [
// //       { name: 'Football', image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=600&auto=format&fit=crop' },
// //       { name: 'Basketball', image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=600&auto=format&fit=crop' },
// //       { name: 'Padel & Padbol', image: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=600&auto=format&fit=crop' },
// //       { name: 'Tennis & Squash', image: 'https://images.unsplash.com/photo-1622163642115-4c6e9c914bf6?q=80&w=600&auto=format&fit=crop' },
// //       { name: 'Volleyball & Handball', image: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?q=80&w=600&auto=format&fit=crop' },
// //       { name: 'Tracks & Running', image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=600&auto=format&fit=crop' }
// //     ]
// //   },
// //   {
// //     id: 'pools',
// //     name: 'Pools & Aquatics',
// //     description: 'تصميم وتنفيذ حمامات السباحة والأنظمة المائية المتقدمة.',
// //     items: [
// //       { name: 'Olympic Pools', image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=600&auto=format&fit=crop' },
// //       { name: 'Recreational Pools', image: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=600&auto=format&fit=crop' },
// //       { name: 'Water Features', image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=600&auto=format&fit=crop' }
// //     ]
// //   },
// //   {
// //     id: 'electronics',
// //     name: 'Sports Electronics',
// //     description: 'لوحات النتائج الإلكترونية وأنظمة التحكم الذكية للملاعب.',
// //     items: [
// //       { name: 'LED Scoreboards', image: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=600&auto=format&fit=crop' },
// //       { name: 'Timing Systems', image: 'https://images.unsplash.com/photo-1508615039623-a25605d2b022?q=80&w=600&auto=format&fit=crop' }
// //     ]
// //   },
// //   {
// //     id: 'landscape',
// //     name: 'Landscape & Play',
// //     description: 'تنسيق الحدائق ومناطق ألعاب الأطفال الآمنة والترفيهية.',
// //     items: [
// //       { name: 'Artificial Turf', image: 'https://images.unsplash.com/photo-1589487391730-58f20eb2c308?q=80&w=600&auto=format&fit=crop' },
// //       { name: 'Kids Playgrounds', image: 'https://images.unsplash.com/photo-1596464019340-a1846467ff2e?q=80&w=600&auto=format&fit=crop' }
// //     ]
// //   }
// // ];

// // export default function ServicesSectionLight() {
// //   const [activeTab, setActiveTab] = useState(serviceCategories[0].id);

// //   const currentCategory = serviceCategories.find((cat) => cat.id === activeTab);

// //   return (
// //     <section className="relative bg-[#ffffff] text-black px-6 py-24 md:px-12 md:py-32 lg:px-20 overflow-hidden">
      
// //       {/* رأس السكشن */}
// //       <div className="mx-auto max-w-[1440px] mb-16">
// //         <div className="flex items-center gap-4 mb-4">
// //           <span className="h-px w-12 bg-black/70" aria-hidden="true" />
// //           <p className="text-xs font-semibold uppercase tracking-[0.28em] text-black/60">
// //             Our Expertise
// //           </p>
// //         </div>
// //         <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
// //           <h2 className="text-4xl md:text-6xl font-medium tracking-tight uppercase">
// //             Engineered For <br />
// //             <span className="text-gray-400 font-light">Performance</span>
// //           </h2>
// //           <p className="max-w-md text-gray-600 text-sm md:text-base font-light">
// //             {currentCategory.description}
// //           </p>
// //         </div>
// //       </div>

// //       {/* الأزرار التفاعلية الأفقية (Tabs) */}
// //       <div className="mx-auto max-w-[1440px] mb-12 flex flex-wrap gap-3 border-b border-black/10 pb-6">
// //         {serviceCategories.map((category) => {
// //           const isActive = activeTab === category.id;
// //           return (
// //             <button
// //               key={category.id}
// //               onClick={() => setActiveTab(category.id)}
// //               className={`px-6 py-3 text-xs md:text-sm uppercase tracking-wider font-medium transition-all duration-300 rounded-lg border ${
// //                 isActive
// //                   ? 'bg-black text-white border-black shadow-[0_10px_20px_rgba(0,0,0,0.15)]'
// //                   : 'bg-[#f7f7f7] text-gray-600 border-black/10 hover:border-black/40 hover:text-black'
// //               }`}
// //             >
// //               {category.name}
// //             </button>
// //           );
// //         })}
// //       </div>

// //       {/* شبكة الخدمات المتحركة (Bento Grid Cards) */}
// //       <div className="mx-auto max-w-[1440px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //         {currentCategory.items.map((item, index) => (
// //           <div
// //             key={item.name}
// //             className="group relative h-[280px] rounded-2xl overflow-hidden border border-black/10 bg-[#f9f9f9] transition-all duration-500 hover:border-black/40 hover:-translate-y-1 shadow-sm hover:shadow-md"
// //             style={{ animation: `fadeIn 0.5s ease-out forwards ${index * 0.1}s` }}
// //           >
// //             {/* صورة خلفية مع تدرج فاتح يظهر عند الهوفر */}
// //             <div className="absolute inset-0 z-0">
// //               <img
// //                 src={item.image}
// //                 alt={item.name}
// //                 className="w-full h-full object-cover opacity-20 grayscale transition-transform duration-700 group-hover:scale-110 group-hover:grayscale-0 group-hover:opacity-40"
// //               />
// //               <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent"></div>
// //             </div>

// //             {/* محتوى البطاقة */}
// //             <div className="relative z-10 h-full p-8 flex flex-col justify-between">
// //               <div className="flex justify-between items-start">
// //                 <span className="text-xs font-mono text-black/40">0{index + 1}</span>
// //                 <span className="w-8 h-8 rounded-full border border-black/20 flex items-center justify-center text-xs transition-transform duration-300 group-hover:bg-black group-hover:text-white">
// //                   ↗
// //                 </span>
// //               </div>
// //               <div>
// //                 <h3 className="text-xl md:text-2xl font-semibold uppercase tracking-wide text-black">
// //                   {item.name}
// //                 </h3>
// //                 <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">
// //                   Khater Standards
// //                 </p>
// //               </div>
// //             </div>
// //           </div>
// //         ))}
// //       </div>

// //     </section>
// //   );
// // }






// import { useRef, useState } from 'react';
// import servicesBg from '../../assets/services/services-bg.png';

// const serviceCategories = [
//   {
//     id: 'courts',
//     name: 'Courts',
//     description: 'إنشاء وتجهيز أحدث الملاعب الرياضية بأعلى معايير الجودة العالمية.',
//     items: [
//       { name: 'Football', image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=600&auto=format&fit=crop' },
//       { name: 'Basketball', image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=600&auto=format&fit=crop' },
//       { name: 'Padel & Padbol', image: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=600&auto=format&fit=crop' },
//       { name: 'Tennis & Squash', image: 'https://images.unsplash.com/photo-1622163642115-4c6e9c914bf6?q=80&w=600&auto=format&fit=crop' },
//       { name: 'Volleyball & Handball', image: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?q=80&w=600&auto=format&fit=crop' },
//       { name: 'Tracks & Running', image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=600&auto=format&fit=crop' },
//     ],
//   },
//   {
//     id: 'pools',
//     name: 'Pools & Aquatics',
//     description: 'تصميم وتنفيذ حمامات السباحة والأنظمة المائية المتقدمة.',
//     items: [
//       { name: 'Olympic Pools', image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=600&auto=format&fit=crop' },
//       { name: 'Recreational Pools', image: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=600&auto=format&fit=crop' },
//       { name: 'Water Features', image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=600&auto=format&fit=crop' },
//     ],
//   },
//   {
//     id: 'electronics',
//     name: 'Sports Electronics',
//     description: 'لوحات النتائج الإلكترونية وأنظمة التحكم الذكية للملاعب.',
//     items: [
//       { name: 'LED Scoreboards', image: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=600&auto=format&fit=crop' },
//       { name: 'Timing Systems', image: 'https://images.unsplash.com/photo-1508615039623-a25605d2b022?q=80&w=600&auto=format&fit=crop' },
//     ],
//   },
//   {
//     id: 'landscape',
//     name: 'Landscape & Play',
//     description: 'تنسيق الحدائق ومناطق ألعاب الأطفال الآمنة والترفيهية.',
//     items: [
//       { name: 'Artificial Turf', image: 'https://images.unsplash.com/photo-1589487391730-58f20eb2c308?q=80&w=600&auto=format&fit=crop' },
//       { name: 'Kids Playgrounds', image: 'https://images.unsplash.com/photo-1596464019340-a1846467ff2e?q=80&w=600&auto=format&fit=crop' },
//     ],
//   },
// ];

// /* ---------- icons (keyed by category id) ---------- */

// const ICONS = {
//   courts: (
//     <>
//       <rect x="3" y="6" width="18" height="12" rx="1" />
//       <path d="M12 6v12" />
//       <circle cx="12" cy="12" r="2.5" />
//     </>
//   ),
//   pools: (
//     <>
//       <path d="M3 18c1.5 1.2 3 1.2 4.5 0s3-1.2 4.5 0 3 1.2 4.5 0 3-1.2 4.5 0" />
//       <path d="M3 14c1.5 1.2 3 1.2 4.5 0s3-1.2 4.5 0 3 1.2 4.5 0 3-1.2 4.5 0" />
//       <path d="M8 4v6M14 4v6M8 6.5h6M8 9.5h6" />
//     </>
//   ),
//   electronics: (
//     <>
//       <rect x="3" y="5" width="18" height="12" rx="1.5" />
//       <path d="M8 20h8M12 17v3M8 9h2M14 9h2M9 13h6" />
//     </>
//   ),
//   landscape: (
//     <>
//       <path d="M5 19c0-8 5-13 14-14 0 9-5 14-13 14" />
//       <path d="M5 19c3-4 6-7 10-10" />
//     </>
//   ),
//   default: (
//     <>
//       <rect x="4" y="4" width="16" height="16" rx="2" />
//       <path d="M4 12h16M12 4v16" />
//     </>
//   ),
// };

// function Icon({ id, className = '' }) {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.4"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       className={className}
//       aria-hidden="true"
//     >
//       {ICONS[id] || ICONS.default}
//     </svg>
//   );
// }

// /* ---------- ring placement ---------- */

// // |offset| 0 = center, 1 = beside it, 2 = far side
// const POS = {
//   0: { x: '0px', z: 0, ry: 0, s: 1, op: 1, zi: 30 },
//   1: { x: 'calc(var(--cw) / 2 + var(--sw) * 0.45 + 14px)', z: -70, ry: 30, s: 0.92, op: 1, zi: 20 },
//   2: { x: 'calc(var(--cw) / 2 + var(--sw) * 1 + 24px)', z: -170, ry: 42, s: 0.8, op: 0.55, zi: 10 },
// };

// const EASE = 'cubic-bezier(0.22, 1, 0.36, 1)';

// const CSS = `
// @keyframes svc-in {
//   from { opacity: 0; transform: translateY(10px); }
//   to   { opacity: 1; transform: none; }
// }
// @media (prefers-reduced-motion: reduce) {
//   .svc-anim { animation: none !important; }
//   .svc-card { transition: none !important; }
// }
// `;

// export default function ServicesSectionLight() {
//   const [active, setActive] = useState(0);
//   const n = serviceCategories.length;
//   const current = serviceCategories[active];

//   const startX = useRef(null);
//   const dragged = useRef(false);

//   const go = (i) => setActive(((i % n) + n) % n);

//   const onPointerUp = (e) => {
//     if (startX.current === null) return;
//     const dx = e.clientX - startX.current;
//     startX.current = null;
//     if (Math.abs(dx) > 60) {
//       dragged.current = true;
//       window.setTimeout(() => (dragged.current = false), 80);
//       go(active + (dx < 0 ? 1 : -1));
//     }
//   };

//   const onKeyDown = (e) => {
//     if (e.key === 'ArrowRight') go(active + 1);
//     if (e.key === 'ArrowLeft') go(active - 1);
//   };

//   return (
//     <section className="relative isolate overflow-hidden px-6 py-24 text-black md:px-12 md:py-28 lg:px-20">
//       <style>{CSS}</style>

//       {/* Background image + white fade at the top */}
//       <img
//         src={servicesBg}
//         alt=""
//         aria-hidden="true"
//         className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
//       />
//       <div
//         className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-white/80 via-30% to-white/5"
//         aria-hidden="true"
//       />

//       {/* Header */}
//       <div className="mx-auto mb-14 max-w-[1440px]">
//         <div className="mb-4 flex items-center gap-4">
//           <span className="h-px w-12 bg-black/70" aria-hidden="true" />
//           <p className="text-xs font-semibold uppercase tracking-[0.28em] text-black/60">Our Expertise</p>
//         </div>
//         <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
//           <h2 className="text-4xl font-medium uppercase tracking-tight md:text-6xl">
//             Engineered For <br />
//             <span className="font-light text-gray-400">Performance</span>
//           </h2>
//           <p
//             key={current.id}
//             className="svc-anim max-w-md text-sm font-light text-gray-600 md:text-base"
//             style={{ animation: 'svc-in 0.6s ease-out both' }}
//           >
//             {current.description}
//           </p>
//         </div>
//       </div>

//       {/* Tab bar */}
//       <div
//         role="tablist"
//         className="mx-auto flex w-fit max-w-full gap-2 overflow-x-auto rounded-2xl border border-white/70 bg-white/50 p-2 shadow-[0_10px_40px_rgba(0,0,0,0.12)] backdrop-blur-xl [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
//       >
//         {serviceCategories.map((c, i) => {
//           const on = i === active;
//           return (
//             <button
//               key={c.id}
//               role="tab"
//               aria-selected={on}
//               onClick={() => go(i)}
//               className={`flex shrink-0 items-center gap-2.5 rounded-xl border px-4 py-3 text-xs font-medium uppercase tracking-wider transition-all duration-300 md:px-6 md:text-sm ${
//                 on
//                   ? 'border-brand-gold/60 bg-white text-black shadow-md'
//                   : 'border-transparent text-black/60 hover:bg-white/60 hover:text-black'
//               }`}
//             >
//               <Icon id={c.id} className="h-5 w-5 shrink-0 text-brand-gold" />
//               {c.name}
//             </button>
//           );
//         })}
//       </div>

//       {/* Circular carousel */}
//       <div
//         tabIndex={0}
//         onKeyDown={onKeyDown}
//         onPointerDown={(e) => (startX.current = e.clientX)}
//         onPointerUp={onPointerUp}
//         onPointerCancel={() => (startX.current = null)}
//         aria-label="Services carousel"
//         className="relative mx-auto mt-6 h-[calc(var(--ch)_+_90px)] max-w-[1440px] touch-pan-y outline-none [--ch:470px] [--cw:min(86vw,500px)] [--sw:96px] [perspective:1500px] md:[--ch:min(60svh,480px)] md:[--cw:clamp(440px,40vw,580px)] md:[--sw:clamp(130px,12vw,180px)]"
//       >
//         {/* Platform */}
//         <div className="pointer-events-none absolute inset-x-0 bottom-3 flex justify-center" aria-hidden="true">
//           <div className="relative flex h-[clamp(70px,12vw,150px)] w-[min(96vw,1020px)] items-center justify-center rounded-[50%] border border-white/60 bg-gradient-to-b from-white/10 to-transparent shadow-[0_0_60px_rgba(255,255,255,0.35)]">
//             <div className="h-[72%] w-[82%] rounded-[50%] border border-brand-gold/50" />
//             {[
//               [14, 62],
//               [31, 88],
//               [50, 99],
//               [69, 88],
//               [86, 62],
//             ].map(([l, t], i) => (
//               <span
//                 key={i}
//                 className="absolute h-1.5 w-1.5 animate-pulse rounded-full bg-brand-gold"
//                 style={{ left: `${l}%`, top: `${t}%`, animationDelay: `${i * 0.4}s` }}
//               />
//             ))}
//           </div>
//         </div>

//         {serviceCategories.map((cat, i) => {
//           // Shortest circular distance from the active card
//           let o = i - active;
//           if (o > n / 2) o -= n;
//           if (o < -n / 2) o += n;

//           const isActive = o === 0;
//           const a = Math.abs(o);
//           const hidden = a > 2;
//           const p = POS[Math.min(a, 2)];
//           const sign = o < 0 ? -1 : 1;

//           return (
//             <div
//               key={cat.id}
//               role={isActive ? undefined : 'button'}
//               tabIndex={isActive || hidden ? -1 : 0}
//               aria-label={isActive ? undefined : `Show ${cat.name}`}
//               onClick={() => !isActive && !dragged.current && go(i)}
//               onKeyDown={(e) => {
//                 if (!isActive && (e.key === 'Enter' || e.key === ' ')) {
//                   e.preventDefault();
//                   go(i);
//                 }
//               }}
//               className={`svc-card absolute left-1/2 top-1/2 overflow-hidden rounded-3xl border border-white/70 bg-gradient-to-b from-white/75 to-white/35 backdrop-blur-xl will-change-transform ${
//                 isActive
//                   ? 'shadow-[0_30px_80px_rgba(0,0,0,0.28)]'
//                   : 'cursor-pointer shadow-[0_18px_50px_rgba(0,0,0,0.18)] hover:border-brand-gold/70'
//               } ${a === 2 ? 'max-md:pointer-events-none max-md:!opacity-0' : ''}`}
//               style={{
//                 width: isActive ? 'var(--cw)' : 'var(--sw)',
//                 height: isActive ? 'var(--ch)' : 'calc(var(--ch) * 0.8)',
//                 transform: `translate(-50%, -50%) translateX(calc(${sign} * (${p.x}))) translateZ(${p.z}px) rotateY(${sign * p.ry}deg) scale(${p.s})`,
//                 opacity: hidden ? 0 : p.op,
//                 zIndex: p.zi,
//                 pointerEvents: hidden ? 'none' : 'auto',
//                 transition: `transform 900ms ${EASE}, width 900ms ${EASE}, height 900ms ${EASE}, opacity 700ms ease`,
//               }}
//             >
//               {/* Side-card face */}
//               <div
//                 className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-3 text-center transition-opacity duration-500"
//                 style={{ opacity: isActive ? 0 : 1, pointerEvents: 'none' }}
//               >
//                 <Icon id={cat.id} className="h-[clamp(34px,4vw,52px)] w-[clamp(34px,4vw,52px)] text-brand-gold" />
//                 <span className="text-sm font-medium tracking-wide text-black/80 md:text-base">{cat.name}</span>
//               </div>

//               {/* Center-card content */}
//               <div
//                 className="absolute inset-0 overflow-y-auto p-6 transition-opacity duration-500 md:p-8"
//                 style={{
//                   opacity: isActive ? 1 : 0,
//                   transitionDelay: isActive ? '450ms' : '0ms',
//                   pointerEvents: isActive ? 'auto' : 'none',
//                 }}
//               >
//                 <div className="flex items-center gap-3">
//                   <Icon id={cat.id} className="h-7 w-7 text-brand-gold" />
//                   <h3 className="text-2xl font-light tracking-tight text-black md:text-3xl">{cat.name}</h3>
//                 </div>

//                 <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
//                   {cat.items.map((item) => (
//                     <li
//                       key={item.name}
//                       className="group relative overflow-hidden rounded-xl border border-white/70 bg-white/60"
//                     >
//                       <img
//                         src={item.image}
//                         alt=""
//                         loading="lazy"
//                         className="absolute inset-0 h-full w-full object-cover opacity-0 grayscale transition-opacity duration-500 group-hover:opacity-30"
//                       />
//                       <div className="relative flex items-center gap-3 px-4 py-3 text-sm text-black/80">
//                         <svg
//                           width="14"
//                           height="14"
//                           viewBox="0 0 14 14"
//                           fill="none"
//                           className="shrink-0 text-brand-gold"
//                           aria-hidden="true"
//                         >
//                           <path d="M2 7.5l3 3 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//                         </svg>
//                         {item.name}
//                       </div>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       {/* Pager dots */}
//       <div className="mt-8 flex justify-center gap-2">
//         {serviceCategories.map((c, i) => (
//           <button
//             key={c.id}
//             onClick={() => go(i)}
//             aria-label={c.name}
//             className={`h-1.5 rounded-full transition-all duration-500 ${
//               i === active ? 'w-8 bg-black' : 'w-3 bg-black/25 hover:bg-black/50'
//             }`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }






// import { useRef, useState } from 'react';
// import servicesBg from '../../assets/services/services-bg.png';
// import darkLogo from '../../assets/logos/khater-dark.png';
// import { DIVISIONS } from '../../constants/site';

// // Sector logos (from constants/site.js) used as the category icons
// const LOGO = Object.fromEntries(DIVISIONS.map((d) => [d.slug, d.logo]));

// // Categories without their own `logo` fall back to khater-dark.png
// const serviceCategories = [
//   {
//     id: 'sports',
//     name: 'Sports',
//     logo: LOGO.sports,
//     items: [
//       'Football', 'Basketball', 'Hockey', 'Padbol', 'Volleyball', 'Playgrounds', 'Handball',
//       'Tracks', 'Tennis', 'Squash', 'MultiPurpose', 'Padel', 'Landscape', 'Climbing walls',
//     ],
//   },
//   {
//     id: 'aquatics',
//     name: 'Aquatics',
//     logo: LOGO.aquatics,
//     items: ['Swimming Pools', 'Olympic Pool', 'Semi Olympic Pool', 'Leisure pools'],
//   },
//   {
//     id: 'tech',
//     name: 'Tech',
//     logo: LOGO.tech,
//     items: ['Sports Electronics', 'Scoreboards', 'Swimming Pool Touchpad Starting System', 'Court Lighting Poles'],
//   },
//   {
//     id: 'tables',
//     name: 'Tennis Tables',
//     items: ['Ping Pong Tables'],
//   },
//   {
//     id: 'scapes',
//     name: 'Scapes',
//     logo: LOGO.scapes,
//     items: ['Landscape', 'Hardscape Services', 'Softscape'],
//   },
//   {
//     id: 'play',
//     name: 'Play',
//     logo: LOGO.play,
//     // TODO: replace with the final list for the kids area
//     items: ['Kids Playgrounds', 'Kids Areas'],
//   },
//   {
//     id: 'maintenance',
//     name: 'Maintenance',
//     items: ['Maintenance'],
//   },
// ];

// // Optional photo per item name. Items without one render as a clean glass tile.
// const IMG = {
//   Football: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=600&auto=format&fit=crop',
//   Basketball: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=600&auto=format&fit=crop',
//   Padel: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=600&auto=format&fit=crop',
//   Padbol: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=600&auto=format&fit=crop',
//   Tennis: 'https://images.unsplash.com/photo-1622163642115-4c6e9c914bf6?q=80&w=600&auto=format&fit=crop',
//   Squash: 'https://images.unsplash.com/photo-1622163642115-4c6e9c914bf6?q=80&w=600&auto=format&fit=crop',
//   Volleyball: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?q=80&w=600&auto=format&fit=crop',
//   Handball: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?q=80&w=600&auto=format&fit=crop',
//   Tracks: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=600&auto=format&fit=crop',
//   Playgrounds: 'https://images.unsplash.com/photo-1596464019340-a1846467ff2e?q=80&w=600&auto=format&fit=crop',
//   'Kids Playgrounds': 'https://images.unsplash.com/photo-1596464019340-a1846467ff2e?q=80&w=600&auto=format&fit=crop',
//   'Swimming Pools': 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=600&auto=format&fit=crop',
//   'Olympic Pool': 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=600&auto=format&fit=crop',
//   'Semi Olympic Pool': 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=600&auto=format&fit=crop',
//   'Leisure pools': 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=600&auto=format&fit=crop',
//   Scoreboards: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=600&auto=format&fit=crop',
//   'Sports Electronics': 'https://images.unsplash.com/photo-1508615039623-a25605d2b022?q=80&w=600&auto=format&fit=crop',
//   Landscape: 'https://images.unsplash.com/photo-1589487391730-58f20eb2c308?q=80&w=600&auto=format&fit=crop',
// };

// function CatIcon({ cat, className = '' }) {
//   return <img src={cat.logo || darkLogo} alt="" className={`object-contain ${className}`} />;
// }

// /* ---------- ring placement ---------- */

// // |offset| 0 = center, 1 = beside it, 2 = far side
// const POS = {
//   0: { x: '0px', z: 0, ry: 0, s: 1, op: 1, zi: 30 },
//   1: { x: 'calc(var(--cw) / 2 + var(--sw) * 0.45 + 14px)', z: -70, ry: 30, s: 0.92, op: 1, zi: 20 },
//   2: { x: 'calc(var(--cw) / 2 + var(--sw) * 1 + 24px)', z: -170, ry: 42, s: 0.8, op: 0.55, zi: 10 },
// };

// const EASE = 'cubic-bezier(0.22, 1, 0.36, 1)';

// const CSS = `
// @media (prefers-reduced-motion: reduce) {
//   .svc-card, .svc-card * { transition: none !important; }
// }
// `;

// export default function ServicesSectionLight() {
//   const [active, setActive] = useState(0);
//   const n = serviceCategories.length;

//   const startX = useRef(null);
//   const dragged = useRef(false);

//   const go = (i) => setActive(((i % n) + n) % n);

//   const onPointerUp = (e) => {
//     if (startX.current === null) return;
//     const dx = e.clientX - startX.current;
//     startX.current = null;
//     if (Math.abs(dx) > 60) {
//       dragged.current = true;
//       window.setTimeout(() => (dragged.current = false), 80);
//       go(active + (dx < 0 ? 1 : -1));
//     }
//   };

//   const onKeyDown = (e) => {
//     if (e.key === 'ArrowRight') go(active + 1);
//     if (e.key === 'ArrowLeft') go(active - 1);
//   };

//   return (
//     <section className="relative isolate overflow-hidden px-6 pb-16 pt-24 text-black md:px-12 lg:px-20">
//       <style>{CSS}</style>

//       {/* Background image + light white fade at the top (for the title) */}
//       <img
//         src={servicesBg}
//         alt=""
//         aria-hidden="true"
//         className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
//       />
//       <div
//         className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-white/60 via-12% to-transparent"
//         aria-hidden="true"
//       />

//       {/* Title */}
//       <div className="mx-auto mb-8 text-center md:mb-10">
//         <h2 className="text-3xl font-light tracking-tight text-black md:text-5xl">Our Services</h2>
//         <span className="mx-auto mt-4 block h-px w-28 bg-brand-gold" aria-hidden="true" />
//         <span className="mx-auto mt-1.5 block h-px w-14 bg-brand-gold/60" aria-hidden="true" />
//       </div>

//       {/* Tab bar */}
//       <div
//         role="tablist"
//         className="mx-auto flex w-fit max-w-full gap-1.5 overflow-x-auto rounded-2xl border border-white/70 bg-white/50 p-1.5 shadow-[0_10px_40px_rgba(0,0,0,0.12)] backdrop-blur-xl [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
//       >
//         {serviceCategories.map((c, i) => {
//           const on = i === active;
//           return (
//             <button
//               key={c.id}
//               role="tab"
//               aria-selected={on}
//               onClick={() => go(i)}
//               className={`flex shrink-0 items-center gap-2.5 rounded-xl border px-4 py-2.5 text-xs font-medium uppercase tracking-wider transition-all duration-300 lg:px-5 lg:text-[13px] ${
//                 on
//                   ? 'border-brand-gold/60 bg-white text-black shadow-md'
//                   : 'border-transparent text-black/60 hover:bg-white/60 hover:text-black'
//               }`}
//             >
//               <CatIcon cat={c} className="h-5 w-5 shrink-0" />
//               {c.name}
//             </button>
//           );
//         })}
//       </div>

//       {/* Circular carousel */}
//       <div
//         tabIndex={0}
//         onKeyDown={onKeyDown}
//         onPointerDown={(e) => (startX.current = e.clientX)}
//         onPointerUp={onPointerUp}
//         onPointerCancel={() => (startX.current = null)}
//         aria-label="Services carousel"
//         className="relative mx-auto mt-10 h-[640px] w-full max-w-[1440px] touch-pan-y outline-none [--cw:min(86vw,500px)] [--sw:96px] [perspective:1500px] md:h-[780px] md:[--cw:clamp(440px,40vw,600px)] md:[--sw:clamp(130px,12vw,180px)]"
//       >
//         {/* Platform */}
//         <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center" aria-hidden="true">
//           <div className="relative flex h-[clamp(70px,11vw,140px)] w-[min(96vw,1020px)] items-center justify-center rounded-[50%] border border-white/60 bg-gradient-to-b from-white/10 to-transparent shadow-[0_0_60px_rgba(255,255,255,0.35)]">
//             <div className="h-[72%] w-[82%] rounded-[50%] border border-brand-gold/50" />
//             {[
//               [14, 62],
//               [31, 88],
//               [50, 99],
//               [69, 88],
//               [86, 62],
//             ].map(([l, t], i) => (
//               <span
//                 key={i}
//                 className="absolute h-1.5 w-1.5 animate-pulse rounded-full bg-brand-gold"
//                 style={{ left: `${l}%`, top: `${t}%`, animationDelay: `${i * 0.4}s` }}
//               />
//             ))}
//           </div>
//         </div>

//         {serviceCategories.map((cat, i) => {
//           // Shortest circular distance from the active card
//           let o = i - active;
//           if (o > n / 2) o -= n;
//           if (o < -n / 2) o += n;

//           const isActive = o === 0;
//           const a = Math.abs(o);
//           const hidden = a > 2;
//           const p = POS[Math.min(a, 2)];
//           const sign = o < 0 ? -1 : 1;
//           const count = cat.items.length;
//           // Fewer items → taller tiles; many items → compact rows
//           const maxRow = count <= 2 ? 170 : count <= 6 ? 120 : 96;

//           return (
//             <div
//               key={cat.id}
//               role={isActive ? undefined : 'button'}
//               tabIndex={isActive || hidden ? -1 : 0}
//               aria-label={isActive ? undefined : `Show ${cat.name}`}
//               onClick={() => !isActive && !dragged.current && go(i)}
//               onKeyDown={(e) => {
//                 if (!isActive && (e.key === 'Enter' || e.key === ' ')) {
//                   e.preventDefault();
//                   go(i);
//                 }
//               }}
//               className={`svc-card group/card absolute left-1/2 will-change-transform ${
//                 isActive ? '' : 'cursor-pointer'
//               } ${a === 2 ? 'max-md:pointer-events-none max-md:!opacity-0' : ''}`}
//               style={{
//                 top: '47%',
//                 width: isActive ? 'var(--cw)' : 'var(--sw)',
//                 height: isActive ? '86%' : '68%',
//                 transform: `translate(-50%, -50%) translateX(calc(${sign} * (${p.x}))) translateZ(${p.z}px) rotateY(${sign * p.ry}deg) scale(${p.s})`,
//                 opacity: hidden ? 0 : p.op,
//                 zIndex: p.zi,
//                 pointerEvents: hidden ? 'none' : 'auto',
//                 transition: `transform 900ms ${EASE}, width 900ms ${EASE}, height 900ms ${EASE}, opacity 700ms ease`,
//               }}
//             >
//               {/* Glass body */}
//               <div
//                 className={`absolute inset-0 overflow-hidden rounded-3xl border border-white/70 bg-gradient-to-b from-white/75 to-white/35 backdrop-blur-xl ${
//                   isActive
//                     ? 'shadow-[0_30px_80px_rgba(0,0,0,0.28)]'
//                     : 'shadow-[0_18px_50px_rgba(0,0,0,0.18)] group-hover/card:border-brand-gold/70'
//                 }`}
//               >
//                 {/* Side-card face */}
//                 <div
//                   className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-2 text-center transition-opacity duration-500"
//                   style={{ opacity: isActive ? 0 : 1, pointerEvents: 'none' }}
//                 >
//                   <CatIcon cat={cat} className="h-[clamp(34px,4vw,52px)] w-[clamp(34px,4vw,52px)]" />
//                   <span className="text-sm font-medium tracking-wide text-black/80 md:text-base">{cat.name}</span>
//                 </div>

//                 {/* Center-card content */}
//                 <div
//                   className="absolute inset-0 flex flex-col p-4 transition-opacity duration-500 md:p-6"
//                   style={{
//                     opacity: isActive ? 1 : 0,
//                     transitionDelay: isActive ? '450ms' : '0ms',
//                     pointerEvents: isActive ? 'auto' : 'none',
//                   }}
//                 >
//                   <div className="flex shrink-0 items-center gap-3">
//                     <CatIcon cat={cat} className="h-7 w-7" />
//                     <h3 className="text-2xl font-light tracking-tight text-black md:text-3xl">{cat.name}</h3>
//                   </div>

//                   <ul
//                     className="mt-4 grid min-h-0 flex-1 grid-cols-1 content-start gap-2 overflow-y-auto sm:grid-cols-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
//                     style={{ gridAutoRows: `minmax(40px, ${maxRow}px)` }}
//                   >
//                     {cat.items.map((name) => {
//                       const image = IMG[name];
//                       return (
//                         <li
//                           key={name}
//                           className="group relative overflow-hidden rounded-lg border border-white/70 bg-white/55 shadow-sm sm:[&:nth-child(odd):last-child]:col-span-2"
//                         >
//                           {image && (
//                             <>
//                               <img
//                                 src={image}
//                                 alt=""
//                                 loading="lazy"
//                                 className="absolute inset-0 h-full w-full object-cover saturate-[0.6] transition-all duration-700 group-hover:scale-110 group-hover:saturate-100"
//                               />
//                               <div
//                                 className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-white/5 transition-opacity duration-500 group-hover:opacity-80"
//                                 aria-hidden="true"
//                               />
//                             </>
//                           )}
//                           <div className="relative flex h-full items-center gap-2.5 px-3.5 text-[13px] font-medium text-black/85">
//                             <svg
//                               width="13"
//                               height="13"
//                               viewBox="0 0 14 14"
//                               fill="none"
//                               className="shrink-0 text-brand-gold"
//                               aria-hidden="true"
//                             >
//                               <path d="M2 7.5l3 3 7-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
//                             </svg>
//                             <span className="line-clamp-2 leading-tight">{name}</span>
//                             <span className="ml-auto grid h-6 w-6 shrink-0 place-items-center rounded-full border border-black/15 bg-white/50 text-[10px] opacity-0 transition-all duration-300 group-hover:border-black group-hover:bg-black group-hover:text-white group-hover:opacity-100">
//                               ↗
//                             </span>
//                           </div>
//                         </li>
//                       );
//                     })}
//                   </ul>
//                 </div>
//               </div>

//               {/* Pointer triangle under the active card */}
//               <span
//                 aria-hidden="true"
//                 className="absolute left-1/2 top-full h-3.5 w-7 -translate-x-1/2 bg-white/60 backdrop-blur-xl transition-opacity duration-500"
//                 style={{
//                   clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
//                   marginTop: '-1px',
//                   opacity: isActive ? 1 : 0,
//                 }}
//               />
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }





import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import servicesBg from '../../assets/services/services-bg.png';
import darkLogo from '../../assets/logos/khater-dark.png';
import { DIVISIONS } from '../../constants/site';

// Sector logos (from constants/site.js) used as the category icons
const LOGO = Object.fromEntries(DIVISIONS.map((d) => [d.slug, d.logo]));

// How many service tiles each slide shows before the "View More" card
const MAX_ITEMS = 6;

// Route of the per-sector page (to be built later): /services/:sectorId
const sectorPath = (id) => `/services/${id}`;

// Categories without their own `logo` fall back to khater-dark.png
const serviceCategories = [
  {
    id: 'sports',
    name: 'Sports',
    logo: LOGO.sports,
    items: [
      'Football', 'Basketball', 'Hockey', 'Padbol', 'Volleyball', 'Playgrounds', 'Handball',
      'Tracks', 'Tennis', 'Squash', 'MultiPurpose', 'Padel', 'Landscape', 'Climbing walls',
    ],
  },
  {
    id: 'aquatics',
    name: 'Aquatics',
    logo: LOGO.aquatics,
    items: ['Swimming Pools', 'Olympic Pool', 'Semi Olympic Pool', 'Leisure pools'],
  },
  {
    id: 'tech',
    name: 'Tech',
    logo: LOGO.tech,
    items: ['Sports Electronics', 'Scoreboards', 'Swimming Pool Touchpad Starting System', 'Court Lighting Poles'],
  },
  {
    id: 'tables',
    name: 'Tennis Tables',
    items: ['Ping Pong Tables'],
  },
  {
    id: 'scapes',
    name: 'Scapes',
    logo: LOGO.scapes,
    items: ['Landscape', 'Hardscape Services', 'Softscape'],
  },
  {
    id: 'play',
    name: 'Play',
    logo: LOGO.play,
    // TODO: replace with the final list for the kids area
    items: ['Kids Playgrounds', 'Kids Areas'],
  },
  {
    id: 'maintenance',
    name: 'Maintenance',
    items: ['Maintenance'],
  },
];

// Optional photo per item name. Items without one render as a clean glass tile.

const IMG = {
  // SPORTS
  Football:
    'https://images.unsplash.com/photo-1675684512606-a6333b7531fb?auto=format&fit=crop&w=600&q=80',

  Basketball:
    'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=600&auto=format&fit=crop',

  Hockey:
    'https://images.unsplash.com/photo-1515703407324-5f753afd8be8?q=80&w=600&auto=format&fit=crop',

  Padbol:
    'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=600&auto=format&fit=crop',

  Volleyball:
    'https://images.unsplash.com/photo-1592656094267-764a45160876?q=80&w=600&auto=format&fit=crop',

  Handball:
    'https://images.unsplash.com/photo-1519861531473-9200262188bf?q=80&w=600&auto=format&fit=crop',

  Tracks:
    'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=600&auto=format&fit=crop',

  Playgrounds:
  'https://images.unsplash.com/photo-1771169204750-3b1b20d98053?auto=format&fit=crop&w=600&q=80',

  Tennis:
    'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=600&auto=format&fit=crop',

  Squash:
    'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=600&auto=format&fit=crop',

  MultiPurpose:
    'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=600&auto=format&fit=crop',

  Padel:
    'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=600&auto=format&fit=crop',

  'Climbing walls':
    'https://images.unsplash.com/photo-1522163182402-834f871fd851?q=80&w=600&auto=format&fit=crop',

  // AQUATICS
  'Swimming Pools':
    'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=600&auto=format&fit=crop',

  'Olympic Pool':
    'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=600&auto=format&fit=crop',

  'Semi Olympic Pool':
    'https://images.unsplash.com/photo-1530549387789-4c1017266635?q=80&w=600&auto=format&fit=crop',

  'Leisure pools':
    'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=600&auto=format&fit=crop',

  // SPORTS TECHNOLOGY
  Scoreboards:
    'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=600&auto=format&fit=crop',

  'Sports Electronics':
    'https://images.unsplash.com/photo-1765445139654-cd48b90c20ea?auto=format&fit=crop&w=600&q=80',

  'Swimming Pool Touchpad Starting System':
    'https://images.unsplash.com/photo-1530549387789-4c1017266635?q=80&w=600&auto=format&fit=crop',

  'Court Lighting Poles':
    'https://images.unsplash.com/photo-1487466365202-1afdb86c764e?q=80&w=600&auto=format&fit=crop',

  // TENNIS TABLES
  'Ping Pong Tables':
    'https://images.unsplash.com/photo-1534158914592-062992fbe900?q=80&w=600&auto=format&fit=crop',

  // LANDSCAPE & SCAPES
  Landscape:
    'https://images.unsplash.com/photo-1589487391730-58f20eb2c308?q=80&w=600&auto=format&fit=crop',

  'Hardscape Services':
    'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=600&auto=format&fit=crop',

  Softscape:
    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=600&auto=format&fit=crop',

  // KHATER PLAY
  'Kids Playgrounds':
    'https://images.unsplash.com/photo-1564429238817-393bd4286b2d?q=80&w=600&auto=format&fit=crop',

  'Kids Areas':
    'https://images.unsplash.com/photo-1503919005314-30d93d07d823?q=80&w=600&auto=format&fit=crop',

  // MAINTENANCE
  Maintenance:
    'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=600&auto=format&fit=crop',
};


function CatIcon({ cat, className = '' }) {
  return <img src={cat.logo || darkLogo} alt="" className={`object-contain ${className}`} />;
}

function useMediaQuery(query) {
  const [matches, setMatches] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(query).matches,
  );
  useEffect(() => {
    const mq = window.matchMedia(query);
    const onChange = () => setMatches(mq.matches);
    onChange();
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, [query]);
  return matches;
}

/* ---------- card sizing (the slide hugs its content, no empty space) ---------- */

const PAD = 20; // card padding (px)
const HEAD = 40; // header row: icon + title
const HEAD_GAP = 16; // space between header and tiles
const GAP = 8; // gap between tiles / before the View More card
const MORE_H = 60; // View More card height
const TOP = 8; // space above the tallest card

/* ---------- background light alignment ---------- */

// services-bg.png is 1536×1024; its bottom-center light sits at (752, 957)
const BG_W = 1536;
const BG_H = 1024;
const LIGHT_X = 752;
const LIGHT_FROM_BOTTOM = BG_H - 957; // 67px at the image's natural size
const TRI_H = 14; // height of the pointer triangle under the active card
const LIGHT_GAP = 36; // gap between the triangle's tip and the light (≈ 2cm), tweak here

function layoutFor(count, twoCol) {
  const shown = Math.min(count, MAX_ITEMS);
  const cols = twoCol ? 2 : 1;
  const rows = Math.ceil(shown / cols);
  const rowH = twoCol ? (shown <= 2 ? 88 : 76) : 54;
  const h = PAD * 2 + HEAD + HEAD_GAP + rows * rowH + (rows - 1) * GAP + GAP + MORE_H;
  return { shown, cols, rowH, h };
}

/* ---------- ring placement ---------- */

// |offset| 0 = center, 1 = beside it, 2 = far side
const POS = {
  0: { x: '0px', z: 0, ry: 0, s: 1, op: 1, zi: 30 },
  1: { x: 'calc(var(--cw) / 2 + var(--sw) * 0.45 + 14px)', z: -70, ry: 30, s: 0.92, op: 1, zi: 20 },
  2: { x: 'calc(var(--cw) / 2 + var(--sw) * 1 + 24px)', z: -170, ry: 42, s: 0.8, op: 0.55, zi: 10 },
};

const EASE = 'cubic-bezier(0.22, 1, 0.36, 1)';

const CSS = `
@media (prefers-reduced-motion: reduce) {
  .svc-card, .svc-card * { transition: none !important; }
}
`;

export default function ServicesSectionLight() {
  const [active, setActive] = useState(0);
  const n = serviceCategories.length;
  const twoCol = useMediaQuery('(min-width: 640px)');

  const startX = useRef(null);
  const dragged = useRef(false);

  const go = (i) => setActive(((i % n) + n) % n);

  const onPointerUp = (e) => {
    if (startX.current === null) return;
    const dx = e.clientX - startX.current;
    startX.current = null;
    if (Math.abs(dx) > 60) {
      dragged.current = true;
      window.setTimeout(() => (dragged.current = false), 80);
      go(active + (dx < 0 ? 1 : -1));
    }
  };

  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') go(active + 1);
    if (e.key === 'ArrowLeft') go(active - 1);
  };

  // Cards are bottom-aligned to the tallest one, so the carousel is only as tall as it needs to be
  const maxH = Math.max(...serviceCategories.map((c) => layoutFor(c.items.length, twoCol).h));
  const bottomY = TOP + maxH;
  const sideH = Math.max(150, Math.round(maxH * 0.72));

  // Line the pointer triangle up with the light in the background image.
  // The image is object-cover + object-bottom, so its scale is max(W/1536, H/1024).
  // We solve for that scale, then size the space under the cards and nudge the
  // carousel sideways so the triangle tip lands LIGHT_GAP above the light.
  const sectionRef = useRef(null);
  const carouselRef = useRef(null);
  const [geo, setGeo] = useState({ spacer: 80, dx: 0 });

  useLayoutEffect(() => {
    const sec = sectionRef.current;
    const car = carouselRef.current;
    if (!sec || !car) return undefined;

    const calc = () => {
      const W = sec.clientWidth;
      const pb = parseFloat(getComputedStyle(sec).paddingBottom) || 0;
      const top = car.offsetTop + bottomY; // y of the cards' bottom edge inside the section
      const s = Math.max(
        W / BG_W,
        (top + LIGHT_GAP + TRI_H) / (BG_H - LIGHT_FROM_BOTTOM),
      );
      const spacer = Math.max(0, Math.round(LIGHT_FROM_BOTTOM * s + LIGHT_GAP + TRI_H - pb));
      const dx = Math.round((LIGHT_X - BG_W / 2) * s);
      setGeo((g) => (g.spacer === spacer && g.dx === dx ? g : { spacer, dx }));
    };

    calc();
    const ro = new ResizeObserver(calc);
    ro.observe(sec);
    return () => ro.disconnect();
  }, [bottomY]);

  return (
    <section ref={sectionRef} className="relative isolate overflow-hidden px-6 pb-3 pt-8 text-black md:px-12 md:pb-4 md:pt-10 lg:px-20">
      <style>{CSS}</style>

      {/* Background image + light white fade at the top (for the title) */}
      <img
        src={servicesBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-bottom"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-white/60 via-12% to-transparent"
        aria-hidden="true"
      />

      {/* Title (bigger bottom margin pushes the tab bar + slides down) */}
      <div className="mx-auto mb-8 text-center md:mb-10">
        <h2 className="text-3xl font-light tracking-tight text-black md:text-5xl">Our Services</h2>
      </div>

      {/* Tab bar */}
      <div
        role="tablist"
        className="mx-auto flex w-fit max-w-full gap-1.5 overflow-x-auto rounded-2xl border border-white/70 bg-white/50 p-1.5 shadow-[0_10px_40px_rgba(0,0,0,0.12)] backdrop-blur-xl [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {serviceCategories.map((c, i) => {
          const on = i === active;
          return (
            <button
              key={c.id}
              role="tab"
              aria-selected={on}
              onClick={() => go(i)}
              className={`flex shrink-0 items-center gap-2.5 rounded-xl border px-4 py-2.5 text-xs font-medium uppercase tracking-wider transition-all duration-300 lg:px-5 lg:text-[13px] ${
                on
                  ? 'border-black/25 bg-white text-black shadow-md'
                  : 'border-transparent text-black/60 hover:bg-white/60 hover:text-black'
              }`}
            >
              <CatIcon cat={c} className="h-5 w-5 shrink-0" />
              {c.name}
            </button>
          );
        })}
      </div>

      {/* Circular carousel */}
      <div
        ref={carouselRef}
        tabIndex={0}
        onKeyDown={onKeyDown}
        onPointerDown={(e) => (startX.current = e.clientX)}
        onPointerUp={onPointerUp}
        onPointerCancel={() => (startX.current = null)}
        aria-label="Services carousel"
        className="relative mx-auto mt-4 w-full max-w-[1440px] touch-pan-y outline-none [--cw:min(86vw,500px)] [--sw:96px] [perspective:1500px] md:[--cw:clamp(440px,40vw,600px)] md:[--sw:clamp(130px,12vw,180px)]"
        style={{ height: `${bottomY + geo.spacer}px`, left: `${geo.dx}px` }}
      >
        {/* Platform */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center" aria-hidden="true">
          <div className="relative flex h-[clamp(70px,11vw,140px)] w-[min(96vw,1020px)] items-center justify-center rounded-[50%] border border-white/60 bg-gradient-to-b from-white/10 to-transparent shadow-[0_0_60px_rgba(255,255,255,0.35)]">
            <div className="h-[72%] w-[82%] rounded-[50%] border border-black/20" />
            {[
              [14, 62],
              [31, 88],
              [50, 99],
              [69, 88],
              [86, 62],
            ].map(([l, t], i) => (
              <span
                key={i}
                className="absolute h-1.5 w-1.5 animate-pulse rounded-full bg-black/60"
                style={{ left: `${l}%`, top: `${t}%`, animationDelay: `${i * 0.4}s` }}
              />
            ))}
          </div>
        </div>

        {serviceCategories.map((cat, i) => {
          // Shortest circular distance from the active card
          let o = i - active;
          if (o > n / 2) o -= n;
          if (o < -n / 2) o += n;

          const isActive = o === 0;
          const a = Math.abs(o);
          const hidden = a > 2;
          const p = POS[Math.min(a, 2)];
          const sign = o < 0 ? -1 : 1;

          const total = cat.items.length;
          const { shown, cols, rowH, h } = layoutFor(total, twoCol);
          const items = cat.items.slice(0, shown);
          const remaining = total - shown;
          // Side cards all share one height, so left and right always match
          const cardH = isActive ? h : sideH;

          return (
            <div
              key={cat.id}
              role={isActive ? undefined : 'button'}
              tabIndex={isActive || hidden ? -1 : 0}
              aria-label={isActive ? undefined : `Show ${cat.name}`}
              onClick={() => !isActive && !dragged.current && go(i)}
              onKeyDown={(e) => {
                if (!isActive && (e.key === 'Enter' || e.key === ' ')) {
                  e.preventDefault();
                  go(i);
                }
              }}
              className={`svc-card group/card absolute left-1/2 will-change-transform ${
                isActive ? '' : 'cursor-pointer'
              } ${a === 2 ? 'max-md:pointer-events-none max-md:!opacity-0' : ''}`}
              style={{
                // bottom edge of every card sits on the same line
                top: `${bottomY - cardH / 2}px`,
                width: isActive ? 'var(--cw)' : 'var(--sw)',
                height: `${cardH}px`,
                transform: `translate(-50%, -50%) translateX(calc(${sign} * (${p.x}))) translateZ(${p.z}px) rotateY(${sign * p.ry}deg) scale(${p.s})`,
                opacity: hidden ? 0 : p.op,
                zIndex: p.zi,
                pointerEvents: hidden ? 'none' : 'auto',
                transition: `transform 900ms ${EASE}, top 900ms ${EASE}, width 900ms ${EASE}, height 900ms ${EASE}, opacity 700ms ease`,
              }}
            >
              {/* Glass body */}
              <div
                className={`absolute inset-0 overflow-hidden rounded-3xl border border-white/70 bg-gradient-to-b from-white/75 to-white/35 backdrop-blur-xl ${
                  isActive
                    ? 'shadow-[0_30px_80px_rgba(0,0,0,0.28)]'
                    : 'shadow-[0_18px_50px_rgba(0,0,0,0.18)] group-hover/card:border-black/40'
                }`}
              >
                {/* Side-card face */}
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-2 text-center transition-opacity duration-500"
                  style={{ opacity: isActive ? 0 : 1, pointerEvents: 'none' }}
                >
                  <CatIcon cat={cat} className="h-[clamp(34px,4vw,52px)] w-[clamp(34px,4vw,52px)]" />
                  <span className="text-sm font-medium tracking-wide text-black/80 md:text-base">{cat.name}</span>
                </div>

                {/* Center-card content */}
                <div
                  className="absolute inset-0 flex flex-col transition-opacity duration-500"
                  style={{
                    padding: `${PAD}px`,
                    opacity: isActive ? 1 : 0,
                    transitionDelay: isActive ? '450ms' : '0ms',
                    pointerEvents: isActive ? 'auto' : 'none',
                  }}
                >
                  <div className="flex shrink-0 items-center gap-3" style={{ height: `${HEAD}px` }}>
                    <CatIcon cat={cat} className="h-7 w-7" />
                    <h3 className="text-2xl font-light tracking-tight text-black md:text-3xl">{cat.name}</h3>
                  </div>

                  <div className="flex flex-col" style={{ marginTop: `${HEAD_GAP}px`, gap: `${GAP}px` }}>
                    {/* First MAX_ITEMS services */}
                    <ul
                      className="grid"
                      style={{
                        gap: `${GAP}px`,
                        gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
                        gridAutoRows: `${rowH}px`,
                      }}
                    >
                      {items.map((name, idx) => {
                        const image = IMG[name];
                        const spanFull = cols === 2 && items.length % 2 === 1 && idx === items.length - 1;
                        return (
                          <li
                            key={name}
                            style={spanFull ? { gridColumn: 'span 2' } : undefined}
                            className="group relative overflow-hidden rounded-lg border border-white/70 bg-white/55 shadow-sm"
                          >
                            {image && (
                              <>
                                <img
                                  src={image}
                                  alt=""
                                  loading="lazy"
                                  className="absolute inset-0 h-full w-full object-cover saturate-[0.6] transition-all duration-700 group-hover:scale-110 group-hover:saturate-100"
                                />
                                <div
                                  className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-white/5 transition-opacity duration-500 group-hover:opacity-80"
                                  aria-hidden="true"
                                />
                              </>
                            )}
                            <div className="relative flex h-full items-center gap-2.5 px-3.5 text-[13px] font-medium text-black/85">
                              <svg
                                width="13"
                                height="13"
                                viewBox="0 0 14 14"
                                fill="none"
                                className="shrink-0 text-black"
                                aria-hidden="true"
                              >
                                <path d="M2 7.5l3 3 7-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                              <span className="line-clamp-2 leading-tight">{name}</span>
                              <span className="ml-auto grid h-6 w-6 shrink-0 place-items-center rounded-full border border-black/15 bg-white/50 text-[10px] opacity-0 transition-all duration-300 group-hover:border-black group-hover:bg-black group-hover:text-white group-hover:opacity-100">
                                ↗
                              </span>
                            </div>
                          </li>
                        );
                      })}
                    </ul>

                    {/* View More card: same spot on every slide */}
                    <Link
                      to={sectorPath(cat.id)}
                      tabIndex={isActive ? 0 : -1}
                      onClick={(e) => {
                        if (dragged.current) e.preventDefault();
                      }}
                      aria-label={`View more ${cat.name} services`}
                      style={{ height: `${MORE_H}px` }}
                      className="group/more relative flex shrink-0 items-center justify-between gap-3 overflow-hidden rounded-xl border border-black bg-black px-4 text-white shadow-[0_10px_26px_rgba(0,0,0,0.28)] transition-all duration-500 hover:bg-white hover:text-black md:px-5"
                    >
                      <span className="min-w-0">
                        <span className="block text-[10px] font-medium uppercase tracking-[0.2em] text-white/60 transition-colors duration-500 group-hover/more:text-black/60">
                          {remaining > 0 ? `+${remaining} more` : `${total} ${total === 1 ? 'service' : 'services'}`}
                        </span>
                        <span className="mt-0.5 block truncate text-base font-light tracking-tight">View More</span>
                      </span>

                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white text-white transition-all duration-500 group-hover/more:border-black group-hover/more:bg-black group-hover/more:text-white">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 20 20"
                          fill="none"
                          className="transition-transform duration-500 group-hover/more:translate-x-0.5"
                          aria-hidden="true"
                        >
                          <path d="M4 10h12m0 0l-5-5m5 5l-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Pointer triangle under the active card */}
              <span
                aria-hidden="true"
                className="absolute left-1/2 top-full h-3.5 w-7 -translate-x-1/2 bg-white/60 backdrop-blur-xl transition-opacity duration-500"
                style={{
                  clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                  marginTop: '-1px',
                  opacity: isActive ? 1 : 0,
                }}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}