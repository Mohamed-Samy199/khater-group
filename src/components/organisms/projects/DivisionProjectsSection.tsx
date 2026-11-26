import { ArrowUpRight, MapPin } from 'lucide-react';
import { resolveAssetSrc, type AssetSource } from '@/lib/assets';
import type { PortfolioProject } from '@/types/projects';
import type { DivisionSlug } from '@/types/site';
import DivisionSectionAnimator from './DivisionSectionAnimator';
import { ProjectCardTrigger } from './ProjectsModalProvider';

export interface DivisionDisplayConfig {
  id: DivisionSlug;
  slug: DivisionSlug;
  name: string;
  title: string;
  logo: AssetSource;
  color: string;
}

const pad = (n: number) => String(n).padStart(2, '0');

export default function DivisionProjectsSection({
  division,
  projects,
  bgLight = false,
}: {
  division: DivisionDisplayConfig;
  projects: PortfolioProject[];
  bgLight?: boolean;
}) {
  return (
    <DivisionSectionAnimator
      id={`projects-${division.slug}`}
      ariaLabel={`${division.name} Projects`}
      bgLight={bgLight}
    >
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <div className="div-head-anim flex flex-col gap-2.5 border-b border-[#B3B3B3]/30 pb-6">
          <div className="flex items-center gap-3">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-black/10 bg-white p-1 shadow-sm">
              <img src={resolveAssetSrc(division.logo)} alt="" className="h-full w-full object-contain" />
            </span>
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-black">
              {division.name}
            </span>
            <span className="rounded-full bg-black/5 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-[#5B5B5B]">
              {pad(projects.length)} Projects
            </span>
          </div>

          <h2 className="text-xl font-normal tracking-tight text-black sm:text-2xl">
            {division.title}
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {projects.map((project, idx) => (
            <ProjectCardTrigger
              key={project.id}
              project={project}
              className="div-proj-card group relative flex cursor-pointer flex-col justify-between overflow-hidden rounded-2xl border border-[#B3B3B3] bg-white transition-all duration-500 hover:-translate-y-1.5 hover:border-black hover:shadow-[0_20px_45px_-18px_rgba(0,0,0,0.18)]"
            >
              <div className="relative h-56 w-full overflow-hidden bg-[#090909] sm:h-60">
                <img
                  src={project.image}
                  alt={project.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-80" />

                <div className="absolute inset-x-0 top-0 flex items-center justify-between p-3.5">
                  <span className="rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-black shadow-sm backdrop-blur-md">
                    {project.category}
                  </span>
                  <span className="rounded-full bg-black/75 px-2.5 py-0.5 font-mono text-[11px] font-semibold text-white backdrop-blur-md">
                    {pad(idx + 1)}
                  </span>
                </div>

                <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-xs text-white/90">
                  <span className="rounded-full bg-black/60 px-2.5 py-0.5 text-[10px] font-semibold text-white backdrop-blur-md">
                    {project.scopeBadge}
                  </span>
                  <span className="font-mono text-[10px] text-white/75">{project.year}</span>
                </div>
              </div>

              <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
                <div>
                  <div className="flex items-center justify-between gap-2 text-[10px] font-semibold uppercase tracking-wider text-[#5B5B5B]">
                    <span className="truncate">{project.client ? project.client.split('&')[0].trim() : 'Turnkey Scope'}</span>
                    <span className="inline-flex shrink-0 items-center gap-1 text-[#8E8E8E]">
                      <MapPin size={11} />
                      <span>{project.location.split(',')[0]}</span>
                    </span>
                  </div>

                  <h3 className="mt-2.5 line-clamp-2 text-xl font-light leading-snug tracking-tight text-black transition-colors group-hover:text-black">
                    {project.name}
                  </h3>

                  <p className="mt-2 line-clamp-2 text-xs font-light leading-relaxed text-[#5B5B5B]">
                    {project.summary}
                  </p>

                  {project.tags && project.tags.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-black/5 bg-[#FAFAFA] px-2.5 py-0.5 text-[10px] font-medium text-black/75"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-[#B3B3B3]/40 pt-3.5 text-xs">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#8E8E8E]">
                    {division.name}
                  </span>
                  <span className="inline-flex items-center gap-1 font-semibold text-black transition-transform group-hover:translate-x-0.5">
                    View Scope
                    <ArrowUpRight size={13} />
                  </span>
                </div>
              </div>

              <span
                className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-black transition-transform duration-500 group-hover:scale-x-100"
                aria-hidden="true"
              />
            </ProjectCardTrigger>
          ))}
        </div>
      </div>
    </DivisionSectionAnimator>
  );
}
