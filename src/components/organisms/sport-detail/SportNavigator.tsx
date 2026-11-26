import Link from 'next/link';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import Container from '@/components/atoms/Container';
import type { SportDiscipline } from '@/types/sports';

interface SportNavigatorProps {
  prevSport?: SportDiscipline;
  nextSport?: SportDiscipline;
}

export default function SportNavigator({ prevSport, nextSport }: SportNavigatorProps) {
  if (!prevSport || !nextSport) return null;

  return (
    <section aria-label="Discipline navigation" className="border-b border-black/10 bg-[#FAFAFA] py-12">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <Link
            href={`/businesses/sports/${prevSport.id}`}
            className="group flex items-center gap-3.5 text-left transition"
          >
            <span className="grid h-11 w-11 place-items-center rounded-full border border-black/15 bg-white text-black shadow-sm transition group-hover:border-sports-light group-hover:bg-sports-light group-hover:text-white">
              <ArrowLeft size={16} />
            </span>
            <div>
              <span className="block font-mono text-[10px] uppercase tracking-widest text-black/40">
                Previous Discipline
              </span>
              <span className="font-semibold text-brand-black transition-colors group-hover:text-sports-light">
                {prevSport.name}
              </span>
            </div>
          </Link>

          <Link
            href="/businesses/sports#courts"
            className="rounded-full border border-black/15 bg-white px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-brand-black shadow-sm transition hover:border-black hover:bg-black hover:text-white"
          >
            View All 14 Disciplines
          </Link>

          <Link
            href={`/businesses/sports/${nextSport.id}`}
            className="group flex items-center gap-3.5 text-right transition"
          >
            <div>
              <span className="block font-mono text-[10px] uppercase tracking-widest text-black/40">
                Next Discipline
              </span>
              <span className="font-semibold text-brand-black transition-colors group-hover:text-sports-light">
                {nextSport.name}
              </span>
            </div>
            <span className="grid h-11 w-11 place-items-center rounded-full border border-black/15 bg-white text-black shadow-sm transition group-hover:border-sports-light group-hover:bg-sports-light group-hover:text-white">
              <ChevronRight size={16} />
            </span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
