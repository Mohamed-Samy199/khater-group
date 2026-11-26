import type { AssetSource } from '@/lib/assets';

export type DivisionSlug = 'sports' | 'play' | 'scapes' | 'tech' | 'aquatics';

export interface DivisionInfo {
  slug: DivisionSlug;
  name: string;
  logo: AssetSource;
  markMain: AssetSource;
  markTriangle: AssetSource;
}

export interface NavLinkItem {
  to?: string;
  type?: 'businesses';
  label: string;
}

export interface LanguageOption {
  code: string;
  label: string;
}

export interface BreadcrumbItem {
  label: string;
  to?: string;
}

export interface BannerSpecItem {
  label: string;
  value: string | number | null | undefined;
  highlight?: boolean;
}
