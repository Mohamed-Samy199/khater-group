'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type DragEvent,
  type FormEvent,
  type ReactNode,
} from 'react';
import {
  AlertCircle,
  Briefcase,
  CheckCircle,
  FileText,
  Loader2,
  Send,
  Trash2,
  UploadCloud,
  User,
  X,
} from 'lucide-react';
import {
  DIVISIONS_FILTER,
  EDUCATION_LEVELS,
  EXPERIENCE_LEVELS,
  FORM_DEFAULTS,
  LOCATIONS_LIST,
  NOTICE_PERIODS,
} from '@/constants/careersData';
import type { CareerFormState, JobOpening } from '@/types/careers';

interface CareersModalContextValue {
  openApplyModal: (job?: JobOpening | null) => void;
}

const CareersModalContext = createContext<CareersModalContextValue | null>(null);

export function useCareersModal() {
  const ctx = useContext(CareersModalContext);
  if (!ctx) {
    throw new Error('useCareersModal must be used inside CareersModalProvider');
  }
  return ctx;
}

export function CareersModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);

  const openApplyModal = useCallback((job: JobOpening | null = null) => {
    setSelectedJob(job);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    setSelectedJob(null);
  }, []);

  return (
    <CareersModalContext.Provider value={{ openApplyModal }}>
      {children}
      <CareerApplyModal isOpen={isOpen} onClose={closeModal} initialJob={selectedJob} />
    </CareersModalContext.Provider>
  );
}

export function CareerApplyTrigger({
  job = null,
  className = '',
  children,
}: {
  job?: JobOpening | null;
  className?: string;
  children: ReactNode;
}) {
  const { openApplyModal } = useCareersModal();
  return (
    <button type="button" onClick={() => openApplyModal(job)} className={className}>
      {children}
    </button>
  );
}

function CareerApplyModal({
  isOpen,
  onClose,
  initialJob = null,
}: {
  isOpen: boolean;
  onClose: () => void;
  initialJob?: JobOpening | null;
}) {
  const [formData, setFormData] = useState<CareerFormState>(FORM_DEFAULTS);
  const [file, setFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [referenceCode, setReferenceCode] = useState('');
  const modalRef = useRef<HTMLDivElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      if (initialJob) {
        setFormData((prev) => ({
          ...prev,
          division: initialJob.division || 'sports',
          position: initialJob.title || '',
          location: 'Cairo (HQ - Nasr City / Sites)',
        }));
      } else {
        setFormData(FORM_DEFAULTS);
      }
      setFile(null);
      setFileError('');
      setErrors({});
      setIsSuccess(false);
      setIsSubmitting(false);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, initialJob]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen && !isSubmitting) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, isSubmitting, onClose]);

  if (!isOpen) return null;

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateAndSetFile = (uploadedFile?: File) => {
    setFileError('');
    if (!uploadedFile) return;

    const allowedExtensions = ['pdf', 'doc', 'docx'];
    const extension = uploadedFile.name.split('.').pop()?.toLowerCase() ?? '';

    if (!allowedExtensions.includes(extension)) {
      setFileError('Allowed formats are PDF, DOC, or DOCX only.');
      setFile(null);
      return;
    }

    const maxSizeInBytes = 10 * 1024 * 1024;
    if (uploadedFile.size > maxSizeInBytes) {
      setFileError('File size exceeds 10MB limit.');
      setFile(null);
      return;
    }

    setFile(uploadedFile);
    if (errors.file) {
      setErrors((prev) => ({ ...prev, file: '' }));
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    validateAndSetFile(e.target.files?.[0]);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      validateAndSetFile(e.dataTransfer.files[0]);
    }
  };

  const handleRemoveFile = () => {
    setFile(null);
    setFileError('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Mobile phone number is required.';
    }
    if (!formData.position.trim()) {
      newErrors.position = 'Please specify the position applied for.';
    }
    if (!file) {
      newErrors.file = 'Please attach your CV / Resume.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    window.setTimeout(() => {
      const generatedCode = `KG-${new Date().getFullYear()}-${Math.floor(
        10000 + Math.random() * 90000
      )}`;
      setReferenceCode(generatedCode);
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="career-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto p-3 sm:p-5"
    >
      <div
        onClick={isSubmitting ? undefined : onClose}
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
      />

      <div
        ref={modalRef}
        className="relative z-10 my-auto flex max-h-[90vh] w-full max-w-2xl flex-col border border-[#B3B3B3]/50 bg-white text-black shadow-2xl"
      >
        <div className="flex items-center justify-between border-b border-[#B3B3B3]/40 bg-[#FAFAFA] px-6 py-5">
          <div>
            <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-[#5B5B5B]">
              <span>Khater Group Careers Portal</span>
            </div>
            <h3
              id="career-modal-title"
              className="mt-1 text-xl font-normal tracking-tight text-black sm:text-2xl"
            >
              {isSuccess
                ? 'Application Successfully Submitted'
                : initialJob
                ? `Apply for ${initialJob.title}`
                : 'Khater Group Job Application'}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            disabled={isSubmitting}
            aria-label="Close dialog"
            className="flex h-9 w-9 items-center justify-center border border-[#B3B3B3]/40 bg-white text-black transition-colors hover:border-black hover:bg-black hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="flex-1 space-y-6 overflow-y-auto p-6 sm:p-8">
          {isSuccess ? (
            <div className="space-y-6 py-4 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 text-emerald-600">
                <CheckCircle className="h-8 w-8" />
              </div>

              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#737373]">
                  APPLICATION REFERENCE NUMBER
                </span>
                <p className="mt-1 font-mono text-2xl font-bold tracking-tight text-black">
                  {referenceCode}
                </p>
              </div>

              <div className="mx-auto max-w-lg space-y-2 text-sm font-light text-[#5B5B5B]">
                <p>
                  Thank you, <strong className="font-semibold text-black">{formData.fullName}</strong>.
                  Your application for <strong className="font-semibold text-black">{formData.position}</strong> has been
                  safely registered in our recruitment system.
                </p>
                <p className="text-xs text-[#737373]">
                  A confirmation receipt and technical evaluation update will be delivered to{' '}
                  <span className="font-medium text-black">{formData.email}</span>.
                </p>
              </div>

              <div className="space-y-3 border border-[#B3B3B3]/40 bg-[#FAFAFA] p-5 text-left">
                <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-black">
                  What Happens Next?
                </h4>
                <ol className="space-y-2.5 text-xs text-[#5B5B5B]">
                  <li className="flex items-start gap-2.5">
                    <span className="font-mono font-bold text-black">01.</span>
                    <span>
                      <strong className="font-medium text-black">Technical Profile Review:</strong>{' '}
                      Our engineering division directors evaluate your qualifications and portfolio.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="font-mono font-bold text-black">02.</span>
                    <span>
                      <strong className="font-medium text-black">Candidate Contact:</strong> Qualified candidates
                      are contacted by HR within 3-5 business days for an initial interview.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="font-mono font-bold text-black">03.</span>
                    <span>
                      <strong className="font-medium text-black">Technical &amp; Site Discussion:</strong> In-depth
                      review with our technical office or site project management.
                    </span>
                  </li>
                </ol>
              </div>

              <div className="flex justify-center pt-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="bg-black px-8 py-3 text-xs font-medium uppercase tracking-wider text-white transition-colors hover:bg-[#5B5B5B]"
                >
                  Done / Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              <div>
                <h4 className="flex items-center gap-2 border-b border-[#B3B3B3]/30 pb-2 font-mono text-xs font-semibold uppercase tracking-wider text-black">
                  <User className="h-3.5 w-3.5 text-black" />
                  <span>Personal &amp; Contact Information</span>
                </h4>

                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-medium text-black">
                      Full Name <span className="text-[#5B5B5B]">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Eng. Ahmed Mostafa"
                      className={`mt-1.5 w-full border ${
                        errors.fullName ? 'border-[#5B5B5B] bg-neutral-50' : 'border-[#B3B3B3]/60'
                      } bg-[#FAFAFA] px-3.5 py-2.5 text-sm text-black placeholder:text-[#8E8E8E] transition-colors focus:border-black focus:bg-white focus:outline-none`}
                    />
                    {errors.fullName && (
                      <p className="mt-1 flex items-center gap-1 text-xs text-[#5B5B5B]">
                        <AlertCircle className="h-3 w-3" />
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-black">
                      Email Address <span className="text-[#5B5B5B]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. ahmed@domain.com"
                      className={`mt-1.5 w-full border ${
                        errors.email ? 'border-[#5B5B5B] bg-neutral-50' : 'border-[#B3B3B3]/60'
                      } bg-[#FAFAFA] px-3.5 py-2.5 text-sm text-black placeholder:text-[#8E8E8E] transition-colors focus:border-black focus:bg-white focus:outline-none`}
                    />
                    {errors.email && (
                      <p className="mt-1 flex items-center gap-1 text-xs text-[#5B5B5B]">
                        <AlertCircle className="h-3 w-3" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-black">
                      Mobile Number <span className="text-[#5B5B5B]">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +20 100 123 4567"
                      className={`mt-1.5 w-full border ${
                        errors.phone ? 'border-[#5B5B5B] bg-neutral-50' : 'border-[#B3B3B3]/60'
                      } bg-[#FAFAFA] px-3.5 py-2.5 text-sm text-black placeholder:text-[#8E8E8E] transition-colors focus:border-black focus:bg-white focus:outline-none`}
                    />
                    {errors.phone && (
                      <p className="mt-1 flex items-center gap-1 text-xs text-[#5B5B5B]">
                        <AlertCircle className="h-3 w-3" />
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-medium text-black">
                      Current Location / City
                    </label>
                    <select
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className="mt-1.5 w-full cursor-pointer border border-[#B3B3B3]/60 bg-[#FAFAFA] px-3.5 py-2.5 text-sm text-black transition-colors focus:border-black focus:bg-white focus:outline-none"
                    >
                      {LOCATIONS_LIST.map((loc) => (
                        <option key={loc} value={loc}>
                          {loc}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="flex items-center gap-2 border-b border-[#B3B3B3]/30 pb-2 font-mono text-xs font-semibold uppercase tracking-wider text-black">
                  <Briefcase className="h-3.5 w-3.5 text-black" />
                  <span>Target Role &amp; Division</span>
                </h4>

                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-medium text-black">
                      Sector / Business Division
                    </label>
                    <select
                      name="division"
                      value={formData.division}
                      onChange={handleChange}
                      className="mt-1.5 w-full cursor-pointer border border-[#B3B3B3]/60 bg-[#FAFAFA] px-3.5 py-2.5 text-sm text-black transition-colors focus:border-black focus:bg-white focus:outline-none"
                    >
                      {DIVISIONS_FILTER.filter((d) => d.id !== 'all').map((div) => (
                        <option key={div.id} value={div.id}>
                          {div.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-black">
                      Position Applied For <span className="text-[#5B5B5B]">*</span>
                    </label>
                    <input
                      type="text"
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      placeholder="e.g. Technical Office Engineer"
                      className={`mt-1.5 w-full border ${
                        errors.position ? 'border-[#5B5B5B] bg-neutral-50' : 'border-[#B3B3B3]/60'
                      } bg-[#FAFAFA] px-3.5 py-2.5 text-sm text-black placeholder:text-[#8E8E8E] transition-colors focus:border-black focus:bg-white focus:outline-none`}
                    />
                    {errors.position && (
                      <p className="mt-1 flex items-center gap-1 text-xs text-[#5B5B5B]">
                        <AlertCircle className="h-3 w-3" />
                        {errors.position}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-black">
                      Years of Experience
                    </label>
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      className="mt-1.5 w-full cursor-pointer border border-[#B3B3B3]/60 bg-[#FAFAFA] px-3.5 py-2.5 text-sm text-black transition-colors focus:border-black focus:bg-white focus:outline-none"
                    >
                      {EXPERIENCE_LEVELS.map((exp) => (
                        <option key={exp} value={exp}>
                          {exp}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-black">
                      Highest Degree / Major
                    </label>
                    <select
                      name="education"
                      value={formData.education}
                      onChange={handleChange}
                      className="mt-1.5 w-full cursor-pointer border border-[#B3B3B3]/60 bg-[#FAFAFA] px-3.5 py-2.5 text-sm text-black transition-colors focus:border-black focus:bg-white focus:outline-none"
                    >
                      {EDUCATION_LEVELS.map((edu) => (
                        <option key={edu} value={edu}>
                          {edu}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-black">
                      Current / Recent Employer (Optional)
                    </label>
                    <input
                      type="text"
                      name="currentEmployer"
                      value={formData.currentEmployer}
                      onChange={handleChange}
                      placeholder="Company name"
                      className="mt-1.5 w-full border border-[#B3B3B3]/60 bg-[#FAFAFA] px-3.5 py-2.5 text-sm text-black placeholder:text-[#8E8E8E] transition-colors focus:border-black focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-black">
                      Notice Period
                    </label>
                    <select
                      name="noticePeriod"
                      value={formData.noticePeriod}
                      onChange={handleChange}
                      className="mt-1.5 w-full cursor-pointer border border-[#B3B3B3]/60 bg-[#FAFAFA] px-3.5 py-2.5 text-sm text-black transition-colors focus:border-black focus:bg-white focus:outline-none"
                    >
                      {NOTICE_PERIODS.map((p) => (
                        <option key={p} value={p}>
                          {p}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="flex items-center gap-2 border-b border-[#B3B3B3]/30 pb-2 font-mono text-xs font-semibold uppercase tracking-wider text-black">
                  <UploadCloud className="h-3.5 w-3.5 text-black" />
                  <span>Resume &amp; Documents <span className="text-[#5B5B5B]">*</span></span>
                </h4>

                <div className="mt-3">
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="hidden"
                    id="resume-upload-input"
                  />

                  {!file ? (
                    <div
                      onDragOver={handleDragOver}
                      onDrop={handleDrop}
                      onClick={() => fileInputRef.current?.click()}
                      className={`cursor-pointer border-2 border-dashed ${
                        errors.file ? 'border-[#5B5B5B] bg-neutral-50' : 'border-[#B3B3B3]/60 hover:border-black'
                      } bg-[#FAFAFA] p-6 text-center transition-colors sm:p-8`}
                    >
                      <UploadCloud className="mx-auto h-8 w-8 text-[#737373]" />
                      <p className="mt-2 text-sm font-medium text-black">
                        Click to browse or drag and drop your CV here
                      </p>
                      <p className="mt-1 text-xs text-[#737373]">
                        Supports PDF, DOC, DOCX up to 10MB
                      </p>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between border border-[#B3B3B3]/60 bg-[#FAFAFA] p-3.5">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center bg-black text-white">
                          <FileText className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="line-clamp-1 text-sm font-medium text-black">
                            {file.name}
                          </p>
                          <p className="text-xs text-[#737373]">
                            {(file.size / (1024 * 1024)).toFixed(2)} MB • Ready for submission
                          </p>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={handleRemoveFile}
                        className="p-2 text-[#737373] transition-colors hover:text-black"
                        title="Remove file"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  )}

                  {(fileError || errors.file) && (
                    <p className="mt-1.5 flex items-center gap-1 text-xs text-[#5B5B5B]">
                      <AlertCircle className="h-3 w-3" />
                      {fileError || errors.file}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-black">
                    LinkedIn Profile or Engineering Portfolio URL (Optional)
                  </label>
                  <input
                    type="url"
                    name="portfolioUrl"
                    value={formData.portfolioUrl}
                    onChange={handleChange}
                    placeholder="https://linkedin.com/in/... or drive portfolio link"
                    className="mt-1.5 w-full border border-[#B3B3B3]/60 bg-[#FAFAFA] px-3.5 py-2.5 text-sm text-black placeholder:text-[#8E8E8E] transition-colors focus:border-black focus:bg-white focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-black">
                    Brief Introduction / Cover Note (Optional)
                  </label>
                  <textarea
                    rows={3}
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleChange}
                    placeholder="Briefly highlight relevant construction projects, specialized software skills, or why you want to join Khater..."
                    className="mt-1.5 w-full resize-none border border-[#B3B3B3]/60 bg-[#FAFAFA] px-3.5 py-2.5 text-sm text-black placeholder:text-[#8E8E8E] transition-colors focus:border-black focus:bg-white focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex flex-col items-center justify-between gap-4 border-t border-[#B3B3B3]/40 pt-4 sm:flex-row">
                <span className="text-center text-[11px] text-[#737373] sm:text-left">
                  By submitting, you agree to our confidential talent evaluation policy.
                </span>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex w-full items-center justify-center gap-2 bg-black px-8 py-3 text-xs font-medium uppercase tracking-wider text-white transition-colors hover:bg-[#5B5B5B] disabled:opacity-50 sm:w-auto"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>Transmitting Application...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-3.5 w-3.5" />
                      <span>Submit Application</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
