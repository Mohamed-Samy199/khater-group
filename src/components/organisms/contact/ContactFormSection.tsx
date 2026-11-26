'use client';

import { useState, type ChangeEvent, type FormEvent } from 'react';
import {
  CheckCircle2,
  FileCheck,
  MessageSquare,
  Paperclip,
  Send,
  ShieldCheck,
  X,
} from 'lucide-react';
import { CONTACT_DIVISIONS } from '@/constants/contactData';
import { resolveAssetSrc } from '@/lib/assets';

const TIMELINES = [
  'Planning & Feasibility',
  'Active Tender / Bidding',
  'Execution Within 3 Months',
  'Construction in Progress',
  'Maintenance / Resurfacing',
];

const COUNTRY_CODES = [
  { code: '+20', country: 'EG', name: 'Egypt' },
  { code: '+966', country: 'SA', name: 'Saudi Arabia' },
  { code: '+971', country: 'AE', name: 'UAE' },
  { code: '+974', country: 'QA', name: 'Qatar' },
  { code: '+965', country: 'KW', name: 'Kuwait' },
  { code: '+968', country: 'OM', name: 'Oman' },
  { code: '+973', country: 'BH', name: 'Bahrain' },
  { code: '+44', country: 'UK', name: 'United Kingdom' },
  { code: '+1', country: 'US', name: 'United States' },
];

export default function ContactFormSection() {
  const [selectedDivision, setSelectedDivision] = useState('general');
  const [countryCode, setCountryCode] = useState('+20');
  const [timeline, setTimeline] = useState('Execution Within 3 Months');
  const [attachedFiles, setAttachedFiles] = useState<Array<{ name: string; size: string }>>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketNumber, setTicketNumber] = useState('');

  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    location: '',
    projectScope: '',
    message: '',
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).map((f) => ({
        name: f.name,
        size: `${(f.size / (1024 * 1024)).toFixed(2)} MB`,
      }));
      setAttachedFiles((prev) => [...prev, ...filesArray]);
    }
  };

  const handleRemoveFile = (index: number) => {
    setAttachedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    window.setTimeout(() => {
      const randomTicket = `KH-${Math.floor(100000 + Math.random() * 900000)}`;
      setTicketNumber(randomTicket);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const handleResetForm = () => {
    setIsSubmitted(false);
    setAttachedFiles([]);
    setFormData({
      fullName: '',
      company: '',
      email: '',
      phone: '',
      location: '',
      projectScope: '',
      message: '',
    });
  };

  const currentDivisionMeta = CONTACT_DIVISIONS.find((d) => d.id === selectedDivision);

  return (
    <section id="inquiry-form" className="relative bg-white py-16 text-brand-black sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col justify-between lg:col-span-5">
            <div>
              <h2 className="text-3xl font-light tracking-tight text-brand-black sm:text-4xl lg:text-5xl">
                Let’s Plan Your <br />
                <span className="font-medium text-black/50">Next Landmark</span>
              </h2>

              <p className="mt-5 text-sm font-light leading-relaxed text-black/70 sm:text-base">
                Submit project details, request feasibility consultations, or share tender drawings with our specialized commercial engineering teams across Egypt and Saudi Arabia.
              </p>

              <div className="mt-8 border-t border-black/10 pt-6">
                <label className="text-[11px] font-semibold uppercase tracking-wider text-black/60">
                  Select Sector / Specialized Division
                </label>
                <div className="mt-3 grid grid-cols-3 gap-1.5 sm:gap-2">
                  {CONTACT_DIVISIONS.map((div) => {
                    const isSelected = selectedDivision === div.id;
                    return (
                      <button
                        key={div.id}
                        type="button"
                        onClick={() => setSelectedDivision(div.id)}
                        className={`flex h-10 w-full items-center justify-center gap-1.5 rounded-xl border px-1.5 text-[11px] font-medium transition-all sm:gap-2 sm:px-2.5 sm:text-xs ${
                          isSelected
                            ? 'border-black bg-black text-white shadow-sm'
                            : 'border-black/10 bg-[#F9F9F9] text-black/70 hover:border-black/25 hover:bg-white'
                        }`}
                      >
                        <img
                          src={resolveAssetSrc(div.logo)}
                          alt=""
                          className={`shrink-0 object-contain ${
                            div.id === 'general' ? 'h-3.5 w-3.5' : 'h-4 w-4'
                          }`}
                        />
                        <span className="truncate">{div.name}</span>
                      </button>
                    );
                  })}
                </div>

                {currentDivisionMeta && (
                  <div className="mt-4 rounded-xl border border-black/10 bg-[#FAFAFA] p-4 text-xs">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-black/10 bg-white p-2 shadow-sm">
                        <img
                          src={resolveAssetSrc(currentDivisionMeta.logo)}
                          alt={currentDivisionMeta.name}
                          className={`object-contain transition-all ${
                            currentDivisionMeta.id === 'general' ? 'h-5 w-5' : 'h-7 w-7'
                          }`}
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-brand-black">
                          {currentDivisionMeta.label}
                        </p>
                        <p className="font-mono text-[11px] text-black/50">
                          {currentDivisionMeta.name}
                        </p>
                      </div>
                    </div>
                    <p className="mt-2.5 font-light leading-relaxed text-black/60">
                      {currentDivisionMeta.description}
                    </p>
                    <div className="mt-3 flex items-center gap-2 border-t border-black/[0.05] pt-2.5 font-mono text-[11px] text-black/50">
                      <span>Direct Channel:</span>
                      <span className="font-medium text-brand-black">
                        {currentDivisionMeta.email}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-8 hidden rounded-2xl border border-black/10 bg-[#FBFBFB] p-5 lg:block">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-black/[0.04] text-black">
                  <ShieldCheck size={20} strokeWidth={1.8} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-brand-black">Corporate Non-Disclosure &amp; Integrity</p>
                  <p className="text-[11px] leading-relaxed text-black/55">
                    All drawings, BoQs, and proprietary project data remain strictly confidential.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-[0_15px_40px_-20px_rgba(0,0,0,0.08)] sm:p-8 lg:p-10">
              {isSubmitted ? (
                <div className="animate-fade-up py-8 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 text-emerald-600">
                    <CheckCircle2 size={36} strokeWidth={2} />
                  </div>

                  <h3 className="mt-5 text-2xl font-light text-brand-black">
                    Inquiry Received Successfully
                  </h3>
                  <p className="mx-auto mt-2 max-w-md text-sm font-light leading-relaxed text-black/60">
                    Your request has been routed to the <strong className="font-semibold text-black">{currentDivisionMeta?.name}</strong> engineering team. An estimator will review your specifications shortly.
                  </p>

                  <div className="mx-auto mt-6 inline-flex flex-col items-center justify-center rounded-xl border border-black/10 bg-[#FAFAFA] px-6 py-3">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-black/50">Reference Ticket</span>
                    <span className="font-mono text-xl font-bold tracking-wider text-brand-black">{ticketNumber}</span>
                  </div>

                  <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={handleResetForm}
                      className="rounded-xl border border-black/15 bg-white px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-black transition hover:bg-black/[0.03]"
                    >
                      Submit Another Inquiry
                    </button>
                    <a
                      href={`https://wa.me/201001204191?text=Hello%20Khater%20Group,%20following%20up%20on%20Inquiry%20Ticket:%20${ticketNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-black px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-black/80"
                    >
                      <MessageSquare size={14} />
                      <span>WhatsApp Follow-up</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-black/70">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="e.g. Eng. Tarek Mansour"
                        className="w-full rounded-xl border border-black/15 bg-[#FAFAFA] px-4 py-3 text-sm text-brand-black placeholder:text-black/35 transition focus:border-black focus:bg-white focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-black/70">
                        Organization / Club / Company <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="e.g. Al Ahly SC / Orascom EPC"
                        className="w-full rounded-xl border border-black/15 bg-[#FAFAFA] px-4 py-3 text-sm text-brand-black placeholder:text-black/35 transition focus:border-black focus:bg-white focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-black/70">
                        Work Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="name@organization.com"
                        className="w-full rounded-xl border border-black/15 bg-[#FAFAFA] px-4 py-3 text-sm text-brand-black placeholder:text-black/35 transition focus:border-black focus:bg-white focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-black/70">
                        Mobile / WhatsApp <span className="text-red-500">*</span>
                      </label>
                      <div className="flex gap-2">
                        <select
                          value={countryCode}
                          onChange={(e) => setCountryCode(e.target.value)}
                          className="w-24 shrink-0 rounded-xl border border-black/15 bg-[#FAFAFA] px-2.5 py-3 text-sm text-brand-black transition focus:border-black focus:bg-white focus:outline-none"
                        >
                          {COUNTRY_CODES.map((c) => (
                            <option key={c.code} value={c.code}>
                              {c.country} ({c.code})
                            </option>
                          ))}
                        </select>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="100 123 4567"
                          className="w-full rounded-xl border border-black/15 bg-[#FAFAFA] px-4 py-3 text-sm text-brand-black placeholder:text-black/35 transition focus:border-black focus:bg-white focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-black/70">
                        Project Location (City / Country) <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="location"
                        required
                        value={formData.location}
                        onChange={handleInputChange}
                        placeholder="e.g. New Administrative Capital, Egypt"
                        className="w-full rounded-xl border border-black/15 bg-[#FAFAFA] px-4 py-3 text-sm text-brand-black placeholder:text-black/35 transition focus:border-black focus:bg-white focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-black/70">
                        Project Timeline / Stage
                      </label>
                      <select
                        value={timeline}
                        onChange={(e) => setTimeline(e.target.value)}
                        className="w-full rounded-xl border border-black/15 bg-[#FAFAFA] px-4 py-3 text-sm text-brand-black transition focus:border-black focus:bg-white focus:outline-none"
                      >
                        {TIMELINES.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-black/70">
                      Service / Project Scope <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="projectScope"
                      required
                      value={formData.projectScope}
                      onChange={handleInputChange}
                      placeholder="e.g. FIFA Quality Pro Synthetic Football Pitch & 8-Lane Running Track"
                      className="w-full rounded-xl border border-black/15 bg-[#FAFAFA] px-4 py-3 text-sm text-brand-black placeholder:text-black/35 transition focus:border-black focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-black/70">
                      Detailed Project Specifications / Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Please outline surface dimensions, existing sub-base status, target completion deadline, and any specific federation certifications needed..."
                      className="w-full resize-y rounded-xl border border-black/15 bg-[#FAFAFA] px-4 py-3 text-sm text-brand-black placeholder:text-black/35 transition focus:border-black focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-black/70">
                      Tender Drawings / BoQ Attachment (Optional)
                    </label>
                    <div className="relative rounded-xl border border-dashed border-black/20 bg-[#FAFAFA] p-4 text-center transition hover:border-black/40 hover:bg-black/[0.02]">
                      <input
                        type="file"
                        multiple
                        onChange={handleFileChange}
                        className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
                        accept=".pdf,.doc,.docx,.dwg,.dxf,.zip,.rar,.xlsx,.xls"
                      />
                      <div className="pointer-events-none flex flex-col items-center justify-center gap-1.5">
                        <Paperclip size={20} className="text-black/50" />
                        <p className="text-xs font-medium text-brand-black">
                          Click to upload or drag &amp; drop files
                        </p>
                        <p className="text-[10px] text-black/45">
                          PDF, DWG, DXF, XLSX, ZIP (Max 25MB per file)
                        </p>
                      </div>
                    </div>

                    {attachedFiles.length > 0 && (
                      <div className="mt-2.5 space-y-1.5">
                        {attachedFiles.map((file, idx) => (
                          <div
                            key={idx}
                            className="flex items-center justify-between rounded-lg border border-black/10 bg-white px-3 py-1.5 text-xs"
                          >
                            <div className="flex items-center gap-2 truncate">
                              <FileCheck size={14} className="shrink-0 text-emerald-600" />
                              <span className="truncate font-medium text-brand-black">{file.name}</span>
                              <span className="shrink-0 text-[10px] text-black/45">({file.size})</span>
                            </div>
                            <button
                              type="button"
                              onClick={() => handleRemoveFile(idx)}
                              className="p-1 text-black/40 transition hover:text-red-500"
                            >
                              <X size={13} />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group flex w-full items-center justify-center gap-2 rounded-xl bg-black px-6 py-4 text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-black/85 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/20 border-t-white" />
                          <span>Routing Request...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Engineering Inquiry</span>
                          <Send size={14} className="transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </button>
                    <p className="mt-3 text-center text-[11px] text-black/50">
                      Typical turnaround: initial review within <strong>24–48 hours</strong> by division project leads.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
