import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import groupMarkMain from '../../assets/logos/khater-mark-main.png';
import groupMarkTriangle from '../../assets/logos/khater-mark-triangle.png';
import { DIVISIONS } from '../../constants/site';
import sport from '../../assets/hero/khater-sport.png';
import play from '../../assets/hero/khater-play.png';
import scape from '../../assets/hero/khater-scape.png';
import tech from '../../assets/hero/khater-tech.png';
import aquatics from '../../assets/hero/khater-aquatics.png';

const SLIDE_DURATION = 6000;
const TRANSITION_COOLDOWN = 1250;
const slides = [
  { id: 'sports', src: sport },
  { id: 'play', src: play },
  { id: 'scape', src: scape },
  { id: 'tech', src: tech },
  { id: 'aquatics', src: aquatics },
];

const wrapIndex = (index) => (index + slides.length) % slides.length;

const repeatSectorSpinAfterPause = (mark, spinTweenRef) => {
  spinTweenRef.current = gsap.delayedCall(1, () => {
    spinTweenRef.current = gsap.to(mark, {
      rotation: '+=360',
      duration: 1.35,
      ease: 'none',
      repeat: -1,
      repeatDelay: 1,
    });
  });
};

export default function Hero() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef(null);
  const imageRefs = useRef([]);
  const groupMarkMainRef = useRef(null);
  const groupMarkTriangleRef = useRef(null);
  const sectorMarkRefs = useRef([]);
  const sectorSpinTweenRef = useRef(null);
  const lastActiveRef = useRef(null);
  const lastWheelAtRef = useRef(-TRANSITION_COOLDOWN);
  const isTransitioningRef = useRef(false);
  const touchStartYRef = useRef(null);

  // Keep the existing gentle auto-advance. Manual gestures restart this timer.
  useEffect(() => {
    const timer = window.setTimeout(() => setActive((current) => wrapIndex(current + 1)), SLIDE_DURATION);
    return () => window.clearTimeout(timer);
  }, [active]);

  // The central group mark keeps its grow/rotate/settle transition. The incoming
  // sector K starts a turn, then keeps spinning while its slide remains active.
  useLayoutEffect(() => {
    const previousIndex = lastActiveRef.current;
    const currentImage = previousIndex === null ? null : imageRefs.current[previousIndex];
    const nextImage = imageRefs.current[active];
    const currentMark = previousIndex === null ? null : sectorMarkRefs.current[previousIndex];
    const nextMark = sectorMarkRefs.current[active];
    const groupMain = groupMarkMainRef.current;
    const groupTriangle = groupMarkTriangleRef.current;

    if (!nextImage || !nextMark || !groupMain || !groupTriangle) return undefined;

    if (previousIndex === null) {
      gsap.set(imageRefs.current, { autoAlpha: 0, scale: 1.035 });
      gsap.set(nextImage, { autoAlpha: 1, scale: 1 });
      gsap.set(sectorMarkRefs.current, { rotation: 0, scale: 1, transformOrigin: '39% 49%' });
      gsap.set([groupMain, groupTriangle], { autoAlpha: 1, scale: 1, rotation: 0 });
      if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        gsap.to(nextMark, {
          rotation: 360,
          duration: 1.35,
          transformOrigin: '39% 49%',
          ease: 'power2.inOut',
          onComplete: () => repeatSectorSpinAfterPause(nextMark, sectorSpinTweenRef),
        });
      }
      lastActiveRef.current = active;
      isTransitioningRef.current = false;
      return undefined;
    }

    if (!currentImage || currentImage === nextImage) return undefined;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const outgoingAngle = currentMark ? Number(gsap.getProperty(currentMark, 'rotation')) || 0 : 0;
    sectorSpinTweenRef.current?.kill();
    sectorSpinTweenRef.current = null;
    gsap.killTweensOf([currentImage, nextImage, currentMark, nextMark, groupMain, groupTriangle].filter(Boolean));
    gsap.set(nextImage, { autoAlpha: 0, scale: reduceMotion ? 1 : 1.035 });
    gsap.set(groupMain, { autoAlpha: 1, scale: 1 });
    gsap.set(groupTriangle, { autoAlpha: 1, scale: 1 });
    if (currentMark) gsap.set(currentMark, { scale: 1 });
    gsap.set(nextMark, { rotation: 0, scale: 1, transformOrigin: '39% 49%' });
    const targetSettleAngle = outgoingAngle > 0 ? Math.ceil(outgoingAngle / 360) * 360 : 360;
    const settleDuration = Math.max(0.18, Math.min(0.55, ((targetSettleAngle - outgoingAngle) / 360) * 1.35));
    const nextGroupRotation = (Number(gsap.getProperty(groupMain, 'rotation')) || 0) + 360;

    const timeline = gsap.timeline({
      defaults: { overwrite: 'auto' },
      onComplete: () => {
        lastActiveRef.current = active;
        isTransitioningRef.current = false;
      },
    });
    isTransitioningRef.current = true;

    if (reduceMotion) {
      timeline
        .to(currentImage, { autoAlpha: 0, duration: 0.25, ease: 'power1.out' }, 0)
        .to(nextImage, { autoAlpha: 1, duration: 0.4, ease: 'power1.out' }, 0.12)
        .call(() => {
          if (currentMark) gsap.set(currentMark, { rotation: 0 });
          gsap.set(nextMark, { rotation: 0 });
        }, null, 0.4);
    } else {
      timeline
        .to(groupMain, {
          scale: 17,
          rotation: nextGroupRotation,
          duration: 0.95,
          transformOrigin: '50% 50%',
          ease: 'power3.in',
        }, 0)
        .to(groupTriangle, { autoAlpha: 0.12, duration: 0.4, ease: 'power2.in' }, 0.08)
        .to(currentImage, { autoAlpha: 0, duration: 0.72, ease: 'power1.inOut' }, 0)
        .to(nextImage, { autoAlpha: 1, scale: 1, duration: 0.9, ease: 'power2.out' }, 0.2)
        .to(groupMain, {
          scale: 1,
          rotation: nextGroupRotation,
          duration: 1.05,
          transformOrigin: '50% 50%',
          ease: 'power3.out',
        }, 0.85)
        .to(groupTriangle, { autoAlpha: 1, duration: 0.4, ease: 'power2.out' }, 1.35)
        .to(currentMark, {
          rotation: targetSettleAngle,
          duration: settleDuration,
          transformOrigin: '39% 49%',
          ease: 'power2.out',
          onComplete: () => gsap.set(currentMark, { rotation: 0 }),
        }, 0)
        .to(nextMark, {
          rotation: 360,
          duration: 1.35,
          transformOrigin: '39% 49%',
          ease: 'power2.inOut',
        }, 0.12)
        .call(() => {
          repeatSectorSpinAfterPause(nextMark, sectorSpinTweenRef);
        }, null, 1.48);
    }

    lastActiveRef.current = active;
    return () => timeline.kill();
  }, [active]);

  useEffect(() => () => sectorSpinTweenRef.current?.kill(), []);

  // A deliberate wheel gesture steps one image at a time instead of scrolling past the hero.
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    const handleWheel = (event) => {
      if (Math.abs(event.deltaY) < 22) return;
      const now = performance.now();
      if (now - lastWheelAtRef.current < TRANSITION_COOLDOWN) {
        if (event.cancelable) event.preventDefault();
        return;
      }

      lastWheelAtRef.current = now;
      if (event.cancelable) event.preventDefault();
      if (isTransitioningRef.current) return;
      setActive((current) => wrapIndex(current + (event.deltaY > 0 ? 1 : -1)));
    };

    section.addEventListener('wheel', handleWheel, { passive: false });
    return () => section.removeEventListener('wheel', handleWheel);
  }, []);

  const moveSlide = (direction) => {
    const now = performance.now();
    if (isTransitioningRef.current || now - lastWheelAtRef.current < TRANSITION_COOLDOWN) return;
    lastWheelAtRef.current = now;
    setActive((current) => wrapIndex(current + direction));
  };

  const handleTouchStart = (event) => {
    touchStartYRef.current = event.touches[0]?.clientY ?? null;
  };

  const handleTouchEnd = (event) => {
    const startY = touchStartYRef.current;
    const endY = event.changedTouches[0]?.clientY;
    if (startY === null || endY === undefined || Math.abs(startY - endY) < 48) return;
    moveSlide(startY > endY ? 1 : -1);
    touchStartYRef.current = null;
  };

  return (
    <section
      ref={sectionRef}
      aria-label="Khater Group main hero. Scroll to move between sector images."
      className="relative isolate h-svh min-h-[720px] touch-none overflow-hidden bg-brand-black text-white"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onKeyDown={(event) => {
        if (event.key === 'ArrowDown' || event.key === 'ArrowRight') moveSlide(1);
        if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') moveSlide(-1);
      }}
      tabIndex={0}
    >
      {/* Background slides crossfade while the active division mark spins in place. */}
      <div className="absolute inset-0 -z-20" aria-hidden="true">
        {slides.map((slide, index) => (
          <img
            key={slide.id}
            ref={(element) => {
              imageRefs.current[index] = element;
            }}
            src={slide.src}
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        ))}
      </div>

      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-black/55 via-transparent to-black/45"
        aria-hidden="true"
      />

      {/* Group mark and active division K animate together on every slide change. */}
      <div className="absolute inset-x-0 top-[22svh] z-0 flex flex-col items-center px-6 text-center md:top-[27svh]">
        <div
          className="relative h-[clamp(52px,5.4vw,112px)] w-[clamp(44px,4.5vw,95px)]"
          aria-label="Khater Group monogram"
          role="img"
        >
          <img
            ref={groupMarkMainRef}
            src={groupMarkMain}
            alt=""
            className="absolute inset-0 h-full w-full object-contain brightness-0 invert"
            style={{ transformOrigin: '50% 50%', willChange: 'transform, opacity' }}
          />
          <img
            ref={groupMarkTriangleRef}
            src={groupMarkTriangle}
            alt=""
            className="absolute inset-0 h-full w-full object-contain brightness-0 invert"
            style={{ willChange: 'opacity' }}
          />
        </div>

        <h1 className="mt-[1.4vw] text-[clamp(34px,3.7vw,76px)] font-semibold leading-none tracking-[-0.04em]">
          Khater Group
        </h1>

        <p className="mt-[2.4vw] max-w-[90vw] text-[clamp(10px,1.1vw,22px)] font-medium uppercase tracking-[0.36em] text-white/85 md:mt-[2.6vw]">
          One Group. Five Specialized Sectors.
        </p>

        <span className="my-[1.8vw] block h-px w-[clamp(110px,10.7vw,220px)] bg-white/70" aria-hidden="true" />

        <p className="font-medium tracking-[0.4em] text-white">
          Building Better Environments
        </p>

        <button
          type="button"
          onClick={() => moveSlide(1)}
          aria-label="Show next sector image"
          className="mt-[4.2vw] text-white/90 transition-colors hover:text-white"
        >
          <svg width="36" height="20" viewBox="0 0 36 20" fill="none" aria-hidden="true">
            <path d="M1 1l17 17L35 1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <div className="absolute inset-x-0 bottom-[7svh] flex justify-center px-4 md:px-6">
        <nav
          aria-label="Our sectors"
          className="flex w-full max-w-[1140px] overflow-x-auto rounded-full border border-white/30 bg-gradient-to-b from-white/10 to-black/40 px-3 py-4 backdrop-blur-md [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:px-0"
        >
          {DIVISIONS.map((division, index) => (
            <Link
              key={division.slug}
              to={`/businesses/${division.slug}`}
              className={`group flex shrink-0 items-center justify-center gap-3 px-6 transition-opacity hover:opacity-80 lg:flex-1 lg:px-4 ${
                index > 0 ? 'border-l border-white/15' : ''
              }`}
            >
              <span className="relative block h-9 w-9 shrink-0" aria-hidden="true">
                <img
                  ref={(element) => {
                    sectorMarkRefs.current[index] = element;
                  }}
                  src={division.markMain}
                  alt=""
                  className="absolute inset-0 h-full w-full object-contain"
                  style={{ transformOrigin: '50% 50%', willChange: 'transform' }}
                />
                <img
                  src={division.markTriangle}
                  alt=""
                  className="absolute inset-0 h-full w-full object-contain"
                />
              </span>
              <span className="text-[17px] font-semibold leading-[1.05] tracking-[-0.02em]">
                Khater
                <br />
                {division.name}
              </span>
            </Link>
          ))}
        </nav>
      </div>

      <div className="pointer-events-none absolute bottom-[2.2svh] right-6 z-10 text-[10px] tracking-[0.22em] text-white/65 md:right-12">
        {String(active + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
      </div>
    </section>
  );
}
