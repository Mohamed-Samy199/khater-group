export interface CareerMetric {
  value: string;
  label: string;
}

export interface CulturePillar {
  number: string;
  title: string;
  description: string;
  highlight: string;
}

export interface FilterOption {
  id: string;
  label: string;
}

export interface JobOpening {
  id: string;
  title: string;
  division: string;
  divisionName: string;
  department: string;
  departmentName: string;
  location: string;
  type: string;
  experience: string;
  shortDescription: string;
  overview: string;
  responsibilities: string[];
  qualifications: string[];
}

export interface CareerFormState {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  division: string;
  position: string;
  experience: string;
  education: string;
  currentRole: string;
  currentEmployer: string;
  noticePeriod: string;
  portfolioUrl: string;
  coverLetter: string;
}
