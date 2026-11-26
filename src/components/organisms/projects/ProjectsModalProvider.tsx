'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';
import Link from 'next/link';
import { ArrowUpRight, CheckCircle2, MapPin, X } from 'lucide-react';
import type { PortfolioProject } from '@/types/projects';

interface ProjectsModalContextValue {
  openProject: (project: PortfolioProject) => void;
}

const ProjectsModalContext = createContext<ProjectsModalContextValue | null>(null);

export function ProjectsModalProvider({ children }: { children: ReactNode }) {
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  const openProject = useCallback((project: PortfolioProject) => {
    setSelectedProject(project);
  }, []);

  const close = useCallback(() => {
    setSelectedProject(null);
  }, []);

  return (
    <ProjectsModalContext.Provider value={{ openProject }}>
      {children}
      <ProjectDetailModal project={selectedProject} onClose={close} />
    </ProjectsModalContext.Provider>
  );
}

export function ProjectCardTrigger({
  project,
  className = '',
  children,
}: {
  project: PortfolioProject;
  className?: string;
  children: ReactNode;
}) {
  const ctx = useContext(ProjectsModalContext);

  return (
    <article
      onClick={() => ctx?.openProject(project)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          ctx?.openProject(project);
        }
      }}
      tabIndex={0}
      className={className}
    >
      {children}
    </article>
  );
}

function ProjectDetailModal({
  project,
  onClose,
}: {
  project: PortfolioProject | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!project) return undefined;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={project.name}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-black/10 bg-white p-6 text-black shadow-2xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close project modal"
          className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full border border-black/10 bg-white/90 text-black shadow-sm transition hover:bg-black hover:text-white"
        >
          <X size={18} />
        </button>

        <div className="relative h-64 w-full overflow-hidden rounded-2xl bg-[#090909] sm:h-80">
          <img
            src={project.image}
            alt={project.name}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

          <div className="absolute left-4 top-4 flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-black shadow-sm backdrop-blur-md">
              {project.divisionName}
            </span>
            <span className="rounded-full bg-black/75 px-3 py-1 text-[10px] font-semibold text-white backdrop-blur-md">
              {project.scopeBadge}
            </span>
          </div>

          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white/90">
            <span className="inline-flex items-center gap-1.5 font-medium">
              <MapPin size={13} className="text-white" />
              {project.location}
            </span>
            <span className="font-mono text-[11px] text-white/70">
              {project.year}
            </span>
          </div>
        </div>

        <div className="mt-6">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#B3B3B3]/30 pb-4">
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#5B5B5B]">
                {project.category}
              </span>
              <h3 className="mt-1 text-2xl font-light leading-snug tracking-tight text-black sm:text-3xl">
                {project.name}
              </h3>
            </div>
            {project.client && (
              <span className="rounded-full border border-[#B3B3B3] bg-[#FAFAFA] px-3.5 py-1 text-xs font-medium text-black/75">
                Client: {project.client}
              </span>
            )}
          </div>

          <p className="mt-5 text-sm font-light leading-relaxed text-[#5B5B5B] sm:text-base">
            {project.summary}
          </p>

          {project.details && project.details.length > 0 && (
            <div className="mt-6 rounded-2xl border border-black/10 bg-[#FAFAFA] p-5 sm:p-6">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-black">
                Delivered Engineering Scope
              </h4>
              <ul className="mt-3.5 space-y-2.5">
                {project.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-[#5B5B5B] sm:text-sm">
                    <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-black" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.tags && project.tags.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-black/10 bg-white px-3 py-1 text-[11px] font-medium text-black/80"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-black/10 pt-5">
            <Link
              href="/contact"
              onClick={onClose}
              className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-neutral-800"
            >
              Inquire About Similar Project
              <ArrowUpRight size={14} />
            </Link>

            <button
              type="button"
              onClick={onClose}
              className="rounded-full border border-[#B3B3B3] bg-white px-5 py-2 text-xs font-semibold uppercase tracking-wider text-black transition hover:border-black hover:bg-black hover:text-white"
            >
              Close Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
