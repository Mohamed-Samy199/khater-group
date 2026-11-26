'use client';

import { useCallback, useEffect, useMemo, useRef, useState, type PointerEvent } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  FileText,
  MapPin,
  X,
} from 'lucide-react';
import { NEWS_CATEGORIES, NEWS_STORIES } from '@/constants/newsClientsData';
import type { NewsStory } from '@/types/newsClients';

gsap.registerPlugin(ScrollTrigger);

const reducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const pad = (n: number) => String(n).padStart(2, '0');

export default function NewsMilestonesSection() {
  const [cat, setCat] = useState('All');
  const [activeStory, setActiveStory] = useState<NewsStory | null>(null);
  const [index, setIndex] = useState(0);

  const sectionRef = useRef<HTMLElement | null>(null);
  const railRef = useRef<HTMLDivElement | null>(null);
  const barRef = useRef<HTMLDivElement | null>(null);
  const drag = useRef({ down: false, startX: 0, startLeft: 0, moved: false });

  const filtered = useMemo(
    () => (cat === 'All' ? NEWS_STORIES : NEWS_STORIES.filter((s) => s.category === cat)),
    [cat]
  );

  const stories = useMemo(() => {
    if (cat !== 'All') return filtered;
    const lead = filtered.find((s) => s.featured);
    return lead ? [lead, ...filtered.filter((s) => s.id !== lead.id)] : filtered;
  }, [filtered, cat]);

  const countFor = (category: string) =>
    category === 'All'
      ? NEWS_STORIES.length
      : NEWS_STORIES.filter((s) => s.category === category).length;

  useEffect(() => {
    if (reducedMotion()) return undefined;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
      });
      tl.fromTo(
        '.news-head',
        { opacity: 0, y: 22 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power2.out', clearProps: 'opacity,transform' }
      ).fromTo(
        '.news-card',
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.65, stagger: 0.06, ease: 'power3.out', clearProps: 'opacity,transform' },
        '-=0.3'
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return undefined;
    rail.scrollTo({ left: 0 });
    setIndex(0);
    if (barRef.current) barRef.current.style.transform = 'scaleX(0.04)';
    if (reducedMotion()) return undefined;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.news-card',
        { opacity: 0, x: 40 },
        { opacity: 1, x: 0, duration: 0.5, stagger: 0.05, ease: 'power2.out', clearProps: 'opacity,transform' }
      );
    }, rail);
    return () => ctx.revert();
  }, [cat]);

  const onScroll = useCallback(() => {
    const rail = railRef.current;
    if (!rail) return;
    const max = rail.scrollWidth - rail.clientWidth;
    const p = max > 0 ? rail.scrollLeft / max : 1;
    if (barRef.current) {
      barRef.current.style.transform = `scaleX(${Math.max(0.04, p)})`;
    }
    const cards = rail.querySelectorAll<HTMLElement>('.news-card');
    let best = 0;
    let dist = Infinity;
    cards.forEach((el, i) => {
      const d = Math.abs(el.offsetLeft - rail.offsetLeft - rail.scrollLeft);
      if (d < dist) {
        dist = d;
        best = i;
      }
    });
    setIndex(best);
  }, []);

  useEffect(() => {
    onScroll();
  }, [stories, onScroll]);

  const step = (dir: number) => {
    const rail = railRef.current;
    if (!rail) return;
    const card = rail.querySelector('.news-card');
    const w = card ? card.getBoundingClientRect().width + 24 : 360;
    rail.scrollBy({ left: dir * w, behavior: reducedMotion() ? 'auto' : 'smooth' });
  };

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== 'mouse' || !railRef.current) return;
    drag.current = { down: true, startX: e.clientX, startLeft: railRef.current.scrollLeft, moved: false };
  };
  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (!drag.current.down || !railRef.current) return;
    const dx = e.clientX - drag.current.startX;
    if (Math.abs(dx) > 6) drag.current.moved = true;
    if (drag.current.moved) railRef.current.scrollLeft = drag.current.startLeft - dx;
  };
  const endDrag = () => {
    drag.current.down = false;
    window.setTimeout(() => {
      drag.current.moved = false;
    }, 0);
  };

  const openStory = (story: NewsStory) => {
    if (drag.current.moved) return;
    setActiveStory(story);
  };

  useEffect(() => {
    if (!activeStory) return undefined;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setActiveStory(null);
    window.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [activeStory]);

  return (
    <section
      ref={sectionRef}
      id="khater-news"
      aria-label="Khater Group Corporate News and Milestones"
      className="relative overflow-hidden border-t border-black/10 bg-white pt-14 text-black lg:pt-20"
    >
      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <div className="news-head flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="text-3xl font-light tracking-tight text-black sm:text-4xl lg:text-5xl">
              Press, Events <span className="font-medium text-[#B3B3B3]">&amp; Achievements</span>
            </h2>
          </div>
          <p className="max-w-md text-sm font-light leading-relaxed text-[#5B5B5B] sm:text-base">
            Verified announcements, championship deployments, international certifications, and strategic milestones across Egypt and Saudi Arabia.
          </p>
        </div>

        <div className="news-head mt-8 flex flex-wrap items-center justify-between gap-4 border-b border-[#B3B3B3]/30 pb-6">
          <div className="flex flex-wrap items-center gap-2">
            {NEWS_CATEGORIES.map((name) => {
              const on = cat === name;
              return (
                <button
                  key={name}
                  type="button"
                  onClick={() => setCat(name)}
                  aria-pressed={on}
                  className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black ${
                    on
                      ? 'border-black bg-black text-white shadow-sm'
                      : 'border-[#B3B3B3] bg-white text-[#5B5B5B] hover:border-black hover:text-black'
                  }`}
                >
                  {name}
                  <span className={`font-mono text-[10px] ${on ? 'text-[#B3B3B3]' : 'text-[#8E8E8E]'}`}>
                    {pad(countFor(name))}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-4">
            <span className="font-mono text-xs font-semibold tracking-wider text-black">
              {pad(Math.min(index + 1, stories.length || 1))}
              <span className="text-[#B3B3B3]"> / {pad(stories.length)}</span>
            </span>
            <div className="flex gap-1.5">
              <button
                type="button"
                onClick={() => step(-1)}
                aria-label="Previous story"
                className="grid h-9 w-9 place-items-center rounded-full border border-[#B3B3B3] text-black transition hover:border-black hover:bg-black hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
              >
                <ArrowLeft size={14} />
              </button>
              <button
                type="button"
                onClick={() => step(1)}
                aria-label="Next story"
                className="grid h-9 w-9 place-items-center rounded-full border border-[#B3B3B3] text-black transition hover:border-black hover:bg-black hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
              >
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        ref={railRef}
        onScroll={onScroll}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        className="relative mt-8 flex cursor-grab snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-5 pb-4 pt-1 active:cursor-grabbing sm:px-8 lg:px-[max(3rem,calc((100vw-1280px)/2+3rem))] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        style={{ scrollPaddingLeft: 'max(1.25rem, calc((100vw - 1280px) / 2 + 3rem))' }}
      >
        {stories.map((story, i) => {
          const isLead = cat === 'All' && i === 0 && story.featured;

          return (
            <article
              key={story.id}
              onClick={() => openStory(story)}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), openStory(story))}
              tabIndex={0}
              role="button"
              aria-label={`Read story: ${story.title}`}
              className={`news-card group relative flex shrink-0 snap-start select-none flex-col justify-between overflow-hidden rounded-2xl border border-[#B3B3B3] bg-white transition-all duration-500 hover:-translate-y-1 hover:border-black hover:shadow-[0_20px_45px_-18px_rgba(0,0,0,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black ${
                isLead ? 'w-[86vw] sm:w-[480px] lg:w-[520px]' : 'w-[75vw] sm:w-[320px] lg:w-[340px]'
              }`}
            >
              <div className="relative h-48 w-full overflow-hidden bg-neutral-100 sm:h-52">
                <img
                  src={story.image}
                  alt={story.title}
                  loading="lazy"
                  draggable={false}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />

                <div className="absolute inset-x-0 top-0 flex items-center justify-between p-3.5">
                  <span className="rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-black shadow-sm backdrop-blur-md">
                    {isLead ? 'Featured Milestone' : story.tag}
                  </span>
                  <span className="rounded-full bg-black/75 px-2.5 py-0.5 font-mono text-[11px] font-semibold text-white backdrop-blur-md">
                    {pad(i + 1)}
                  </span>
                </div>
              </div>

              <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
                <div>
                  <div className="flex items-center justify-between gap-2 text-[10px] font-semibold uppercase tracking-wider text-[#5B5B5B]">
                    <span className="text-black">{story.category}</span>
                    <span className="inline-flex items-center gap-1 truncate text-[#8E8E8E]">
                      <MapPin size={11} className="shrink-0" />
                      <span>{story.location.split(',')[0]}</span>
                    </span>
                  </div>

                  <h3 className="mt-2.5 line-clamp-2 text-lg font-medium leading-snug tracking-tight text-black transition-colors group-hover:text-black">
                    {story.title}
                  </h3>

                  <p className="mt-2 line-clamp-2 text-xs font-light leading-relaxed text-[#5B5B5B]">
                    {story.excerpt}
                  </p>
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-[#B3B3B3]/40 pt-3.5 text-xs">
                  <span className="truncate font-mono text-[10px] uppercase tracking-wider text-[#8E8E8E]">
                    {story.division}
                  </span>
                  <span className="inline-flex items-center gap-1 font-semibold text-black transition-transform group-hover:translate-x-0.5">
                    Read Story
                    <ArrowUpRight size={13} />
                  </span>
                </div>
              </div>

              <span
                className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-black transition-transform duration-500 group-hover:scale-x-100"
                aria-hidden="true"
              />
            </article>
          );
        })}
        <span className="w-2 shrink-0 lg:w-8" aria-hidden="true" />
      </div>

      <div className="relative mx-auto mt-6 max-w-[1280px] px-5 sm:px-8 lg:px-12" aria-hidden="true">
        <div className="h-[2px] w-full overflow-hidden rounded-full bg-[#B3B3B3]/25">
          <div
            ref={barRef}
            className="h-full origin-left bg-black transition-transform duration-200"
            style={{ transform: 'scaleX(0.04)' }}
          />
        </div>
      </div>

      {activeStory && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeStory.title}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-md"
          onClick={() => setActiveStory(null)}
        >
          <div
            className="relative max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-black/10 bg-white p-6 text-black shadow-2xl sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveStory(null)}
              aria-label="Close article"
              className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full border border-black/10 bg-white text-black transition hover:bg-black hover:text-white"
            >
              <X size={18} />
            </button>

            <div className="relative h-60 w-full overflow-hidden rounded-2xl bg-neutral-100 sm:h-72">
              <img
                src={activeStory.image}
                alt={activeStory.title}
                className="h-full w-full object-cover"
              />
              <span className="absolute left-4 top-4 rounded-full bg-black/85 px-3.5 py-1 text-xs font-semibold text-white backdrop-blur-md">
                {activeStory.tag}
              </span>
            </div>

            <div className="mt-6">
              <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-wider text-[#5B5B5B]">
                <span className="text-black">{activeStory.category}</span>
                <span>•</span>
                <span className="inline-flex items-center gap-1">
                  <MapPin size={13} />
                  {activeStory.location}
                </span>
                <span>•</span>
                <span>{activeStory.division}</span>
              </div>

              <h3 className="mt-3 text-2xl font-light leading-snug tracking-tight text-black sm:text-3xl">
                {activeStory.title}
              </h3>

              <div className="mt-5 space-y-4 text-sm font-light leading-relaxed text-[#5B5B5B] sm:text-base">
                {activeStory.body.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-black/10 bg-[#FAFAFA] p-5">
                <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-black">
                  <FileText size={15} className="text-black" />
                  Key Verification Highlights
                </h4>
                <div className="mt-3.5 grid grid-cols-1 gap-2.5 text-xs sm:grid-cols-2">
                  {activeStory.keyFacts.map((fact) => (
                    <div
                      key={fact}
                      className="flex items-start gap-2 rounded-xl border border-black/5 bg-white p-3 font-medium text-black/85"
                    >
                      <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-black" />
                      <span>{fact}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-black/10 pt-5">
                <span className="font-mono text-xs uppercase tracking-wider text-[#8E8E8E]">
                  Official Khater Group Archive
                </span>
                <button
                  type="button"
                  onClick={() => setActiveStory(null)}
                  className="rounded-full bg-black px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-neutral-800"
                >
                  Close Document
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
