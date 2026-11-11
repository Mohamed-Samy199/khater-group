// import { useEffect, useRef, useState } from 'react';
// import { Link } from 'react-router-dom';
// import Container from '../ui/Container';

// // Fires once when the section enters the viewport
// function useInView(threshold = 0.35) {
//   const ref = useRef(null);
//   const [inView, setInView] = useState(false);

//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return undefined;
//     if (!('IntersectionObserver' in window)) {
//       setInView(true);
//       return undefined;
//     }
//     const io = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setInView(true);
//           io.disconnect();
//         }
//       },
//       { threshold },
//     );
//     io.observe(el);
//     return () => io.disconnect();
//   }, [threshold]);

//   return [ref, inView];
// }

// // Counts 0 → `to` with ease-out (instant for reduced motion)
// function useCountUp(to, start, duration = 2000) {
//   const [value, setValue] = useState(0);

//   useEffect(() => {
//     if (!start) return undefined;
//     if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
//       setValue(to);
//       return undefined;
//     }
//     let raf;
//     let t0;
//     const tick = (t) => {
//       if (t0 === undefined) t0 = t;
//       const p = Math.min((t - t0) / duration, 1);
//       setValue(Math.round(to * (1 - Math.pow(1 - p, 3))));
//       if (p < 1) raf = requestAnimationFrame(tick);
//     };
//     raf = requestAnimationFrame(tick);
//     return () => cancelAnimationFrame(raf);
//   }, [to, start, duration]);

//   return value;
// }

// function Reveal({ show, delay = 0, className = '', children }) {
//   return (
//     <div
//       style={{ transitionDelay: `${delay}ms` }}
//       className={`transition-[opacity,transform] duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
//         show ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
//       } ${className}`}
//     >
//       {children}
//     </div>
//   );
// }

// export default function About() {
//   const [ref, show] = useInView();
//   const years = useCountUp(37, show);

//   return (
//     <section
//       id="about"
//       ref={ref}
//       aria-label="About Khater Group"
//       className="relative min-h-svh overflow-hidden bg-brand-black pb-12 pt-28 text-white lg:h-svh lg:pb-0 lg:pt-20"
//     >
//       <Container className="h-full">
//         <div className="grid h-full items-center gap-12 lg:grid-cols-2 lg:gap-20">
//           {/* Left: number + headline */}
//           <div>
//             <Reveal show={show}>
//               <span className="text-xs uppercase tracking-[0.28em] text-brand-silver">[ About Us ]</span>
//             </Reveal>

//             <Reveal show={show} delay={150} className="mt-8">
//               <p className="text-sm uppercase tracking-[0.36em] text-brand-silver">With over</p>
//               <p
//                 aria-label="37"
//                 className="mt-2 text-[min(18vw,34svh)] font-bold leading-[0.85] tracking-[-0.06em] tabular-nums"
//               >
//                 {years}
//               </p>
//             </Reveal>

//             <Reveal show={show} delay={300}>
//               <h2 className="mt-6 max-w-lg text-[clamp(24px,2.8vw,44px)] font-light leading-[1.1] tracking-[-0.03em]">
//                 years of proven success in <span className="font-semibold">every governorate</span> in Egypt.
//               </h2>
//             </Reveal>
//           </div>

//           {/* Right: copy */}
//           <div className="max-w-xl lg:justify-self-end">
//             <Reveal show={show} delay={400}>
//               <p className="text-base font-light leading-relaxed text-brand-silver md:text-lg">
//                 Khater Sports is a leading provider of comprehensive sports facility solutions in Egypt and the
//                 region. Established in 1987, we are driven by a passion for sport and a commitment to building a
//                 healthier and more active future.
//               </p>
//             </Reveal>

//             <Reveal show={show} delay={550}>
//               <p className="mt-6 text-base font-light leading-relaxed text-brand-silver md:text-lg">
//                 From sports environments to play spaces, landscapes, technology and aquatics, our businesses work
//                 across different needs with a shared commitment to quality and performance.
//               </p>
//             </Reveal>

//             <Reveal show={show} delay={700}>
//               <Link
//                 to="/about"
//                 className="group mt-10 inline-flex items-center gap-3 border-b border-white/40 pb-1 text-[15px] text-white transition-colors hover:border-white"
//               >
//                 Learn more about us
//                 <svg
//                   width="11"
//                   height="11"
//                   viewBox="0 0 11 11"
//                   fill="none"
//                   className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
//                   aria-hidden="true"
//                 >
//                   <path
//                     d="M2 9L9 2M3.5 2H9v5.5"
//                     stroke="currentColor"
//                     strokeWidth="1.3"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                 </svg>
//               </Link>
//             </Reveal>
//           </div>
//         </div>
//       </Container>
//     </section>
//   );
// }











// import { useEffect, useRef, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { DIVISIONS } from '../../constants/site';
// import { GroupMark } from '../ui/Logo';

// const sectorPositions = [
//   { x: 85, y: 130 }, // Sports
//   { x: 310, y: 68 }, // Play
//   { x: 535, y: 130 }, // Scapes
//   { x: 85, y: 390 }, // Tech
//   { x: 535, y: 390 }, // Aquatics
// ];

// const networkPaths = [
//   'M85 130 H535',
//   'M85 260 H535',
//   'M85 390 H535',
//   'M85 130 V390',
//   'M310 68 V452',
//   'M535 130 V390',
//   'M85 130 L310 260',
//   'M310 68 L310 260',
//   'M535 130 L310 260',
//   'M85 390 L310 260',
//   'M535 390 L310 260',
// ];

// // Each pulse follows a real connection in the network, outward from the group mark.
// const sectorPulsePaths = [
//   { id: 'sports', d: 'M310 260 L85 130' },
//   { id: 'play', d: 'M310 260 L310 68' },
//   { id: 'scapes', d: 'M310 260 L535 130' },
//   { id: 'tech', d: 'M310 260 L85 390' },
//   { id: 'aquatics', d: 'M310 260 L535 390' },
// ];

// export default function AboutSection() {
//   const sectionRef = useRef(null);
//   const [networkVisible, setNetworkVisible] = useState(
//     () => typeof window !== 'undefined' && !('IntersectionObserver' in window),
//   );

//   useEffect(() => {
//     if (!('IntersectionObserver' in window)) {
//       return undefined;
//     }

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setNetworkVisible(true);
//           observer.disconnect();
//         }
//       },
//       { threshold: 0.2 },
//     );

//     if (sectionRef.current) observer.observe(sectionRef.current);

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       id="about"
//       aria-labelledby="about-heading"
//       className="overflow-hidden bg-[#050505] px-6 py-24 text-white md:px-12 md:py-32 lg:px-20"
//     >
//       <div className="mx-auto grid max-w-[1440px] items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
//         {/* Content column */}
//         <div className="max-w-[590px]">
//           <div className="mb-9 flex items-center gap-4">
//             <span className="h-px w-12 bg-white/70" aria-hidden="true" />
//             <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/60">
//               About Us
//             </p>
//           </div>

//           <h2
//             id="about-heading"
//             className="text-4xl font-medium leading-none tracking-[-0.04em] md:text-5xl"
//           >
//             With over
//           </h2>

//           <div className="mt-5 flex items-end gap-5 border-b border-white/20 pb-8">
//             <span className="text-[clamp(112px,16vw,190px)] font-medium leading-[0.76] tracking-[-0.09em]">
//               37
//             </span>

//             <p className="max-w-[240px] pb-2 text-base leading-6 text-white/70 md:pb-3 md:text-lg md:leading-7">
//               years of proven success in every governorate in Egypt.
//             </p>
//           </div>

//           <div className="mt-8 space-y-5 text-base leading-7 text-white/70 md:text-lg md:leading-8">
//             <p>
//               Khater Sports is a leading provider of comprehensive sports facility
//               solutions in Egypt and the region. Established in 1987, we are driven by
//               a passion for sport and a commitment to building a healthier and more
//               active future.
//             </p>

//             <p>
//               From sports environments to play spaces, landscapes, technology and
//               aquatics, our businesses work across different needs with a shared
//               commitment to quality and performance.
//             </p>
//           </div>

//           <Link
//             to="/about"
//             className="group mt-9 inline-flex items-center gap-5 border-b border-white/70 pb-3 text-sm font-semibold uppercase tracking-[0.14em] transition-colors hover:text-white/65"
//           >
//             Discover Khater Group
//             <span
//               aria-hidden="true"
//               className="text-xl transition-transform duration-300 group-hover:translate-x-1"
//             >
//               →
//             </span>
//           </Link>
//         </div>

//         {/* Structured sector network with light pulses from the central group mark */}
//         <div
//           className={`khater-about-network relative mx-auto aspect-[1.1923] w-full max-w-[720px] ${
//             networkVisible ? 'is-visible' : ''
//           }`}
//           aria-label="Khater Group and its five sectors"
//         >
//           <svg
//             viewBox="0 0 620 520"
//             preserveAspectRatio="none"
//             className="absolute inset-0 h-full w-full"
//             aria-hidden="true"
//           >
//             <defs>
//               <filter id="khater-pulse-glow" x="-300%" y="-300%" width="700%" height="700%">
//                 <feGaussianBlur stdDeviation="2.4" result="blur" />
//                 <feMerge>
//                   <feMergeNode in="blur" />
//                   <feMergeNode in="SourceGraphic" />
//                 </feMerge>
//               </filter>
//             </defs>

//             {/* Quiet static structure */}
//             <g
//               fill="none"
//               stroke="white"
//               strokeOpacity="0.24"
//               strokeWidth="1"
//               strokeLinecap="round"
//             >
//               {networkPaths.map((path, index) => (
//                 <path
//                   key={`network-${index}`}
//                   d={path}
//                   className="khater-about-network__line"
//                   style={{ '--line-order': index }}
//                 />
//               ))}
//             </g>

//             {/* Motion paths are hidden; animated light particles travel along them */}
//             {sectorPulsePaths.map((pulse) => (
//               <path
//                 key={`pulse-path-${pulse.id}`}
//                 id={`khater-pulse-path-${pulse.id}`}
//                 d={pulse.d}
//                 fill="none"
//                 stroke="none"
//               />
//             ))}

//             {networkVisible && sectorPulsePaths.map((pulse, index) => (
//               <g key={`pulse-${pulse.id}`} className="khater-about-network__pulse-group">
//                 <circle
//                   r="2.6"
//                   fill="white"
//                   filter="url(#khater-pulse-glow)"
//                   className="khater-about-network__pulse"
//                 >
//                   <animateMotion
//                     dur="2.4s"
//                     begin={`${index * 0.42}s`}
//                     repeatCount="indefinite"
//                     rotate="auto"
//                   >
//                     <mpath href={`#khater-pulse-path-${pulse.id}`} />
//                   </animateMotion>
//                   <animate
//                     attributeName="opacity"
//                     values="0;1;1;0"
//                     keyTimes="0;0.12;0.82;1"
//                     dur="2.4s"
//                     begin={`${index * 0.42}s`}
//                     repeatCount="indefinite"
//                   />
//                 </circle>
//               </g>
//             ))}
//           </svg>

//           {DIVISIONS.map((division, index) => {
//             const position = sectorPositions[index];

//             return (
//               <figure
//                 key={division.slug}
//                 className="absolute z-10 m-0 text-center"
//                 style={{
//                   left: `${(position.x / 620) * 100}%`,
//                   top: `${(position.y / 520) * 100}%`,
//                   transform: 'translate(-50%, -50%)',
//                 }}
//               >
//                 <Link
//                   to={`/businesses/${division.slug}`}
//                   aria-label={`Explore Khater ${division.name}`}
//                   className="khater-about-network__sector-node flex h-[58px] w-[58px] items-center justify-center rounded-md border border-white/15 bg-[#111111] p-2.5 transition-colors duration-300 hover:border-white/50 hover:bg-[#191919] sm:h-[68px] sm:w-[68px] md:h-[76px] md:w-[76px]"
//                   style={{ '--node-order': index }}
//                 >
//                   <span className="relative block h-full w-full" aria-hidden="true">
//                     <img
//                       src={division.markMain}
//                       alt=""
//                       loading="lazy"
//                       className="absolute inset-0 h-full w-full object-contain"
//                     />
//                     <img
//                       src={division.markTriangle}
//                       alt=""
//                       loading="lazy"
//                       className="absolute inset-0 h-full w-full object-contain"
//                     />
//                   </span>
//                 </Link>

//                 <figcaption className="mt-2 whitespace-nowrap text-[9px] font-medium uppercase tracking-[0.1em] text-white/65 sm:text-[10px]">
//                   {division.name}
//                 </figcaption>
//               </figure>
//             );
//           })}

//           {/* Official Khater Group mark at the centre of the network */}
//           <div
//             className="khater-about-network__group-node absolute z-20 flex h-[92px] w-[92px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-md border border-white/40 bg-[#080808] shadow-[0_0_36px_rgba(255,255,255,0.08)] sm:h-[108px] sm:w-[108px]"
//             style={{ left: '50%', top: '50%' }}
//             role="img"
//             aria-label="Khater Group"
//           >
//             <GroupMark className="h-[48px] sm:h-[58px]" />
//             <span className="mt-1 text-[8px] font-semibold uppercase tracking-[0.18em] text-white/85 sm:text-[9px]">
//               Khater Group
//             </span>
//           </div>
//         </div>
//       </div>

//       <style>{`
//         .khater-about-network__line {
//           stroke-dasharray: 900;
//           stroke-dashoffset: 900;
//         }

//         .khater-about-network.is-visible .khater-about-network__line {
//           animation: khater-about-draw 1.1s ease-out forwards;
//           animation-delay: calc(var(--line-order) * 70ms);
//         }

//         .khater-about-network__sector-node,
//         .khater-about-network__group-node {
//           opacity: 0;
//         }

//         .khater-about-network.is-visible .khater-about-network__sector-node,
//         .khater-about-network.is-visible .khater-about-network__group-node {
//           animation: khater-about-reveal 600ms ease-out forwards;
//           animation-delay: calc(650ms + var(--node-order, 5) * 100ms);
//         }

//         .khater-about-network__pulse {
//           opacity: 0;
//           will-change: transform, opacity;
//         }

//         @keyframes khater-about-draw {
//           to {
//             stroke-dashoffset: 0;
//           }
//         }

//         @keyframes khater-about-reveal {
//           from {
//             opacity: 0;
//           }
//           to {
//             opacity: 1;
//           }
//         }

//         @media (prefers-reduced-motion: reduce) {
//           .khater-about-network__line {
//             stroke-dasharray: none;
//             stroke-dashoffset: 0;
//           }

//           .khater-about-network.is-visible .khater-about-network__line,
//           .khater-about-network.is-visible .khater-about-network__sector-node,
//           .khater-about-network.is-visible .khater-about-network__group-node {
//             animation: none;
//             opacity: 1;
//           }

//           .khater-about-network__pulse-group {
//             display: none;
//           }
//         }
//       `}</style>
//     </section>
//   );
// }















import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import aboutVideo from '../../assets/about/about-pingpong.mp4';
import aboutPoster from '../../assets/about/poster.png';

export default function AboutSection() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const [videoVisible, setVideoVisible] = useState(
    () => typeof window !== 'undefined' && !('IntersectionObserver' in window),
  );
  const [prefersReducedMotion] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => setVideoVisible(entry.isIntersecting),
      { threshold: 0.15 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;

    if (videoVisible && !prefersReducedMotion) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }

    return () => video.pause();
  }, [videoVisible, prefersReducedMotion]);

  return (
    <section
      ref={sectionRef}
      id="about"
      aria-labelledby="about-heading"
      className="overflow-hidden bg-[#050505] px-6 py-24 text-white md:px-12 md:py-32 lg:px-20"
    >
      <div className="mx-auto grid max-w-[1440px] items-center gap-14 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:gap-10">
        {/* About text */}
        <div className="max-w-[560px]">
          <div className="mb-9 flex items-center gap-4">
            <span className="h-px w-12 bg-white/70" aria-hidden="true" />
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/60">
              About Us
            </p>
          </div>

          <h2
            id="about-heading"
            className="text-4xl font-medium leading-none tracking-[-0.04em] md:text-5xl"
          >
            With over
          </h2>

          <div className="mt-5 flex items-end gap-5 border-b border-white/20 pb-8">
            <span className="text-[clamp(112px,16vw,190px)] font-medium leading-[0.76] tracking-[-0.09em]">
              37
            </span>

            <p className="max-w-[240px] pb-2 text-base leading-6 text-white/70 md:pb-3 md:text-lg md:leading-7">
              years of proven success in every governorate in Egypt.
            </p>
          </div>

          <div className="mt-8 space-y-5 text-base leading-7 text-white/70 md:text-lg md:leading-8">
            <p>
              Khater Sports is a leading provider of comprehensive sports facility
              solutions in Egypt and the region. Established in 1987, we are driven by
              a passion for sport and a commitment to building a healthier and more
              active future.
            </p>

            <p>
              From sports environments to play spaces, landscapes, technology and
              aquatics, our businesses work across different needs with a shared
              commitment to quality and performance.
            </p>
          </div>

          <Link
            to="/about"
            className="group mt-9 inline-flex items-center gap-5 border-b border-white/70 pb-3 text-sm font-semibold uppercase tracking-[0.14em] transition-colors hover:text-white/65"
          >
            Discover Khater Group
            <span
              aria-hidden="true"
              className="text-xl transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>

        {/* User-provided video with a soft black edge fade */}
        <div
          className="khater-about-video relative mx-auto aspect-video w-full max-w-[980px] lg:-mr-[5vw] lg:w-[calc(100%+5vw)]"
          role="img"
          aria-label="Khater Group sectors connected through a shared vision"
        >
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-contain"
            src={aboutVideo}
            poster={aboutPoster}
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
          />

          <div
            className="pointer-events-none absolute inset-0"
            aria-hidden="true"
            style={{
              background: [
                'linear-gradient(rgba(5,5,5,.3), rgba(5,5,5,.3))',
                'linear-gradient(90deg, #050505 0%, rgba(5,5,5,.42) 3%, transparent 15%, transparent 85%, rgba(5,5,5,.42) 97%, #050505 100%)',
                'linear-gradient(0deg, #050505 0%, transparent 13%, transparent 87%, #050505 100%)',
                'radial-gradient(ellipse 92% 88% at 50% 50%, transparent 73%, rgba(5,5,5,.3) 92%, #050505 100%)',
              ].join(', '),
            }}
          />
        </div>
      </div>
    </section>
  );
}






// // import { useEffect, useRef, useState } from 'react';
// // import { Link } from 'react-router-dom';
// // import { DIVISIONS } from '../../constants/site';
// // import { GroupMark } from '../ui/Logo';

// // const sectorPositions = [
// //   { x: 85, y: 130 },  // Sports
//   { x: 310, y: 68 },  // Play
//   { x: 535, y: 130 }, // Scapes
//   { x: 85, y: 390 },  // Tech
//   { x: 535, y: 390 }, // Aquatics
// ];

// const networkPaths = [
//   'M85 130 H535',
//   'M85 260 H535',
//   'M85 390 H535',
//   'M85 130 V390',
//   'M310 68 V452',
//   'M535 130 V390',
//   'M85 130 L310 260',
//   'M310 68 L310 260',
//   'M535 130 L310 260',
//   'M85 390 L310 260',
//   'M535 390 L310 260',
// ];

// export default function AboutSection() {
//   const sectionRef = useRef(null);
//   const [networkVisible, setNetworkVisible] = useState(false);

//   useEffect(() => {
//     if (!('IntersectionObserver' in window)) {
//       setNetworkVisible(true);
//       return undefined;
//     }

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setNetworkVisible(true);
//           observer.disconnect();
//         }
//       },
//       { threshold: 0.2 },
//     );

//     if (sectionRef.current) observer.observe(sectionRef.current);

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       id="about"
//       aria-labelledby="about-heading"
//       className="overflow-hidden bg-[#050505] px-6 py-24 text-white md:px-12 md:py-32 lg:px-20"
//     >
//       <div className="mx-auto grid max-w-[1440px] items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
//         {/* المحتوى النصي — منظم على الشمال */}
//         <div className="max-w-[590px]">
//           <div className="mb-9 flex items-center gap-4">
//             <span className="h-px w-12 bg-white/70" aria-hidden="true" />
//             <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/60">
//               About Us
//             </p>
//           </div>

//           <h2
//             id="about-heading"
//             className="text-4xl font-medium leading-none tracking-[-0.04em] md:text-5xl"
//           >
//             With over
//           </h2>

//           <div className="mt-5 flex items-end gap-5 border-b border-white/20 pb-8">
//             <span className="text-[clamp(112px,16vw,190px)] font-medium leading-[0.76] tracking-[-0.09em]">
//               37
//             </span>

//             <p className="max-w-[240px] pb-2 text-base leading-6 text-white/70 md:pb-3 md:text-lg md:leading-7">
//               years of proven success in every governorate in Egypt.
//             </p>
//           </div>

//           <div className="mt-8 space-y-5 text-base leading-7 text-white/70 md:text-lg md:leading-8">
//             <p>
//               Khater Sports is a leading provider of comprehensive sports facility
//               solutions in Egypt and the region. Established in 1987, we are driven by
//               a passion for sport and a commitment to building a healthier and more
//               active future.
//             </p>

//             <p>
//               From sports environments to play spaces, landscapes, technology and
//               aquatics, our businesses work across different needs with a shared
//               commitment to quality and performance.
//             </p>
//           </div>
//         </div>

//         {/* شبكة ثابتة ومنظمة — علامات القطاعات حول شعار المجموعة */}
//         <div
//           className={`khater-about-network relative mx-auto aspect-[1.1923] w-full max-w-[720px] ${
//             networkVisible ? 'is-visible' : ''
//           }`}
//           aria-label="Khater Group and its five sectors"
//         >
//           <svg
//             viewBox="0 0 620 520"
//             preserveAspectRatio="none"
//             className="absolute inset-0 h-full w-full"
//             aria-hidden="true"
//           >
//             <g
//               fill="none"
//               stroke="white"
//               strokeOpacity="0.24"
//               strokeWidth="1"
//               strokeLinecap="round"
//             >
//               {networkPaths.map((path, index) => (
//                 <path
//                   key={path}
//                   d={path}
//                   className="khater-about-network__line"
//                   style={{ '--line-order': index }}
//                 />
//               ))}
//             </g>
//           </svg>

//           {DIVISIONS.map((division, index) => {
//             const position = sectorPositions[index];

//             return (
//               <figure
//                 key={division.slug}
//                 className="absolute z-10 m-0 text-center"
//                 style={{
//                   left: `${(position.x / 620) * 100}%`,
//                   top: `${(position.y / 520) * 100}%`,
//                   transform: 'translate(-50%, -50%)',
//                 }}
//               >
//                 <Link
//                   to={`/businesses/${division.slug}`}
//                   aria-label={`Explore Khater ${division.name}`}
//                   className="khater-about-network__sector-node flex h-[58px] w-[58px] items-center justify-center rounded-md border border-white/15 bg-[#111111] p-2.5 transition-colors duration-300 hover:border-white/50 hover:bg-[#191919] sm:h-[68px] sm:w-[68px] md:h-[76px] md:w-[76px]"
//                   style={{ '--node-order': index }}
//                 >
//                   <span className="relative block h-full w-full" aria-hidden="true">
//                     <img
//                       src={division.markMain}
//                       alt=""
//                       loading="lazy"
//                       className="absolute inset-0 h-full w-full object-contain"
//                     />
//                     <img
//                       src={division.markTriangle}
//                       alt=""
//                       loading="lazy"
//                       className="absolute inset-0 h-full w-full object-contain"
//                     />
//                   </span>
//                 </Link>

//                 <figcaption className="mt-2 whitespace-nowrap text-[9px] font-medium uppercase tracking-[0.1em] text-white/65 sm:text-[10px]">
//                   {division.name}
//                 </figcaption>
//               </figure>
//             );
//           })}

//           {/* شعار المجموعة الرسمي في مركز الشبكة */}
//           <div
//             className="khater-about-network__group-node absolute z-20 flex h-[92px] w-[92px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-md border border-white/40 bg-[#080808] shadow-[0_0_36px_rgba(255,255,255,0.08)] sm:h-[108px] sm:w-[108px]"
//             style={{ left: '50%', top: '50%' }}
//             role="img"
//             aria-label="Khater Group"
//           >
//             <GroupMark className="h-[48px] sm:h-[58px]" />
//             <span className="mt-1 text-[8px] font-semibold uppercase tracking-[0.18em] text-white/85 sm:text-[9px]">
//               Khater Group
//             </span>
//           </div>
//         </div>
//       </div>

//       <style>{`
//         .khater-about-network__line {
//           stroke-dasharray: 900;
//           stroke-dashoffset: 900;
//         }

//         .khater-about-network.is-visible .khater-about-network__line {
//           animation: khater-about-draw 1.1s ease-out forwards;
//           animation-delay: calc(var(--line-order) * 70ms);
//         }

//         .khater-about-network__sector-node,
//         .khater-about-network__group-node {
//           opacity: 0;
//         }

//         .khater-about-network.is-visible .khater-about-network__sector-node,
//         .khater-about-network.is-visible .khater-about-network__group-node {
//           animation: khater-about-reveal 600ms ease-out forwards;
//           animation-delay: calc(650ms + var(--node-order, 5) * 100ms);
//         }

//         @keyframes khater-about-draw {
//           to {
//             stroke-dashoffset: 0;
//           }
//         }

//         @keyframes khater-about-reveal {
//           from {
//             opacity: 0;
//           }
//           to {
//             opacity: 1;
//           }
//         }

//         @media (prefers-reduced-motion: reduce) {
//           .khater-about-network__line {
//             stroke-dasharray: none;
//             stroke-dashoffset: 0;
//           }

//           .khater-about-network.is-visible .khater-about-network__line,
//           .khater-about-network.is-visible .khater-about-network__sector-node,
//           .khater-about-network.is-visible .khater-about-network__group-node {
//             animation: none;
//             opacity: 1;
//           }
//         }
//       `}</style>
//     </section>
//   );
// }
