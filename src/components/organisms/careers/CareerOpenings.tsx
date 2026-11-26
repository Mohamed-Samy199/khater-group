'use client';

import { useMemo, useState } from 'react';
import {
  ArrowRight,
  Briefcase,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Clock,
  MapPin,
  Search,
} from 'lucide-react';
import {
  DEPARTMENTS_FILTER,
  DIVISIONS_FILTER,
  JOB_OPENINGS,
} from '@/constants/careersData';
import { useCareersModal } from './CareersModalProvider';

const DIVISION_COLORS: Record<string, string> = {
  sports: '#DE1F26',
  play: '#DF72E8',
  scapes: '#8DC85B',
  tech: '#6481BD',
  aquatics: '#14C1E2',
  corporate: '#111111',
};

export default function CareerOpenings() {
  const { openApplyModal } = useCareersModal();
  const [selectedDivision, setSelectedDivision] = useState('all');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedJobId, setExpandedJobId] = useState<string | null>(null);

  const filteredJobs = useMemo(() => {
    return JOB_OPENINGS.filter((job) => {
      const matchDivision =
        selectedDivision === 'all' || job.division === selectedDivision;
      const matchDepartment =
        selectedDepartment === 'all' || job.department === selectedDepartment;
      const query = searchQuery.trim().toLowerCase();
      const matchSearch =
        !query ||
        job.title.toLowerCase().includes(query) ||
        job.shortDescription.toLowerCase().includes(query) ||
        job.divisionName.toLowerCase().includes(query) ||
        job.location.toLowerCase().includes(query) ||
        job.responsibilities.some((r) => r.toLowerCase().includes(query)) ||
        job.qualifications.some((q) => q.toLowerCase().includes(query));

      return matchDivision && matchDepartment && matchSearch;
    });
  }, [selectedDivision, selectedDepartment, searchQuery]);

  const toggleExpand = (id: string) => {
    setExpandedJobId((prev) => (prev === id ? null : id));
  };

  const handleResetFilters = () => {
    setSelectedDivision('all');
    setSelectedDepartment('all');
    setSearchQuery('');
  };

  return (
    <section
      id="openings"
      className="scroll-mt-20 border-b border-[#B3B3B3]/40 bg-white py-16 text-black sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col justify-between gap-6 border-b border-[#B3B3B3]/40 pb-10 md:flex-row md:items-end">
          <div>
            <h2 className="text-3xl font-normal tracking-tight text-black sm:text-4xl">
              Open Positions <span className="font-medium text-[#5B5B5B]">Across Khater</span>
            </h2>
            <p className="mt-3 max-w-2xl text-base font-light leading-relaxed text-[#5B5B5B]">
              Join our engineering offices, on-site construction operations, or corporate leadership.
              Filter by division or discipline to find the role suited to your expertise.
            </p>
          </div>

          <div className="shrink-0 font-mono text-sm text-[#5B5B5B]">
            SHOWING <span className="font-semibold text-black">{filteredJobs.length}</span> POSITIONS
          </div>
        </div>

        <div className="mt-8 space-y-5">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="relative md:col-span-2">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#737373]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by job title, skill (e.g. AutoCAD, Civil, BOQ, MEP), or location..."
                className="w-full border border-[#B3B3B3]/50 bg-[#FAFAFA] py-3.5 pl-11 pr-4 text-sm text-black placeholder:text-[#8E8E8E] transition-colors focus:border-black focus:bg-white focus:outline-none"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 font-mono text-xs text-[#8E8E8E] hover:text-black"
                >
                  CLEAR
                </button>
              )}
            </div>

            <div>
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                aria-label="Filter by department"
                className="w-full cursor-pointer border border-[#B3B3B3]/50 bg-[#FAFAFA] px-4 py-3.5 text-sm text-black transition-colors focus:border-black focus:bg-white focus:outline-none"
              >
                {DEPARTMENTS_FILTER.map((dept) => (
                  <option key={dept.id} value={dept.id}>
                    {dept.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-2">
            <span className="mr-2 hidden font-mono text-xs uppercase tracking-wider text-[#737373] sm:inline">
              Sector:
            </span>
            {DIVISIONS_FILTER.map((div) => {
              const isActive = selectedDivision === div.id;
              const dotColor = div.id !== 'all' ? DIVISION_COLORS[div.id] : null;

              return (
                <button
                  type="button"
                  key={div.id}
                  onClick={() => setSelectedDivision(div.id)}
                  className={`inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-black text-white'
                      : 'border border-[#B3B3B3]/50 bg-white text-[#5B5B5B] hover:border-black hover:text-black'
                  }`}
                >
                  {dotColor && (
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{ backgroundColor: dotColor }}
                    />
                  )}
                  {div.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-10 space-y-5">
          {filteredJobs.length === 0 ? (
            <div className="border border-dashed border-[#B3B3B3] bg-[#FAFAFA] p-12 text-center">
              <p className="text-lg font-medium text-black">No positions match your current filter.</p>
              <p className="mt-2 text-sm text-[#737373]">
                Try adjusting your search terms or clearing the active filters.
              </p>
              <button
                type="button"
                onClick={handleResetFilters}
                className="mt-5 inline-flex items-center gap-2 border border-black bg-white px-5 py-2.5 text-xs font-medium uppercase tracking-wider text-black transition-colors hover:bg-black hover:text-white"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            filteredJobs.map((job) => {
              const isExpanded = expandedJobId === job.id;
              const brandColor = DIVISION_COLORS[job.division] || '#000000';

              return (
                <div
                  key={job.id}
                  className="border border-[#B3B3B3]/40 bg-white transition-all duration-200 hover:border-black/50 hover:shadow-[0_4px_20px_rgb(0,0,0,0.03)]"
                >
                  <div className="p-6 sm:p-8">
                    <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                        <span className="inline-flex items-center gap-1.5 border border-[#B3B3B3]/40 bg-[#FAFAFA] px-2.5 py-1 font-medium text-black">
                          <span
                            className="h-2 w-2 rounded-full"
                            style={{ backgroundColor: brandColor }}
                          />
                          {job.divisionName}
                        </span>

                        <span className="border border-[#B3B3B3]/40 bg-[#FAFAFA] px-2.5 py-1 text-[#5B5B5B]">
                          {job.departmentName}
                        </span>

                        <span className="inline-flex items-center gap-1 text-[#737373]">
                          <MapPin className="h-3.5 w-3.5" />
                          {job.location}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 font-mono text-[#737373]">
                        <Clock className="h-3.5 w-3.5" />
                        <span>{job.type}</span>
                      </div>
                    </div>

                    <div className="mt-4 flex flex-col justify-between gap-2 md:flex-row md:items-baseline">
                      <h3 className="text-xl font-medium tracking-tight text-black sm:text-2xl">
                        {job.title}
                      </h3>
                      <div className="inline-flex shrink-0 items-center gap-1.5 font-mono text-xs text-[#5B5B5B]">
                        <Briefcase className="h-3.5 w-3.5 text-black" />
                        <span>Experience: {job.experience}</span>
                      </div>
                    </div>

                    <p className="mt-3 max-w-4xl text-sm font-light leading-relaxed text-[#5B5B5B] sm:text-base">
                      {job.shortDescription}
                    </p>

                    <div className="mt-4 border-t border-[#B3B3B3]/20 pt-4">
                      <p className="text-xs font-semibold uppercase tracking-wider text-black">
                        Core Scope &amp; Deliverables:
                      </p>
                      <ul className="mt-2.5 grid grid-cols-1 gap-2 text-xs text-[#5B5B5B] md:grid-cols-2">
                        {job.responsibilities.slice(0, 4).map((resp, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-black" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-[#B3B3B3]/30 pt-4">
                      <button
                        type="button"
                        onClick={() => toggleExpand(job.id)}
                        className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-[#5B5B5B] transition-colors hover:text-black"
                      >
                        {isExpanded ? (
                          <>
                            <span>Hide Details &amp; Requirements</span>
                            <ChevronUp className="h-3.5 w-3.5" />
                          </>
                        ) : (
                          <>
                            <span>View Full Job Specifications</span>
                            <ChevronDown className="h-3.5 w-3.5" />
                          </>
                        )}
                      </button>

                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => openApplyModal(job)}
                          className="inline-flex items-center gap-2 bg-black px-6 py-2.5 text-xs font-medium uppercase tracking-wider text-white transition-colors hover:bg-[#5B5B5B]"
                        >
                          <span>Apply For This Role</span>
                          <ArrowRight className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {isExpanded && (
                    <div className="animate-fade-in space-y-6 border-t border-[#B3B3B3]/40 bg-[#FAFAFA] p-6 sm:p-8">
                      <div>
                        <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-black">
                          Role Overview
                        </h4>
                        <p className="mt-2 text-sm font-light leading-relaxed text-[#5B5B5B]">
                          {job.overview}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-black">
                          Comprehensive Responsibilities
                        </h4>
                        <ul className="mt-2.5 space-y-2 text-xs text-[#5B5B5B] sm:text-sm">
                          {job.responsibilities.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2.5">
                              <span className="mt-0.5 font-mono text-[10px] font-bold text-black">
                                [{String(idx + 1).padStart(2, '0')}]
                              </span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-black">
                          Required Qualifications &amp; Technical Skills
                        </h4>
                        <ul className="mt-2.5 space-y-2 text-xs text-[#5B5B5B] sm:text-sm">
                          {job.qualifications.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2.5">
                              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-black" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex justify-end border-t border-[#B3B3B3]/30 pt-4">
                        <button
                          type="button"
                          onClick={() => openApplyModal(job)}
                          className="inline-flex items-center gap-2 bg-black px-6 py-2.5 text-xs font-medium uppercase tracking-wider text-white transition-colors hover:bg-[#5B5B5B]"
                        >
                          <span>Submit Application For {job.title}</span>
                          <ArrowRight className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}
