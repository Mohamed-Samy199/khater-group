import type { AssetSource } from '@/lib/assets';

export interface ContactOffice {
  id: string;
  country: string;
  city: string;
  title: string;
  address: string;
  fullAddress: string;
  phonePrimary: string;
  phoneLandlines?: string[];
  fax?: string;
  email: string;
  secondaryEmail?: string;
  workingHours: string;
  weekend: string;
  mapsUrl: string;
  embedQuery: string;
  status: string;
  badges: string[];
}

export interface ContactDivision {
  id: string;
  name: string;
  label: string;
  logo: AssetSource;
  email: string;
  color: string;
  description: string;
}

export interface ContactFaqItem {
  question: string;
  answer: string;
}
