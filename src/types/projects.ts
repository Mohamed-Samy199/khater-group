import type { DivisionSlug } from './site';

export type ProjectDivisionFilterId = 'all' | DivisionSlug;

export interface ProjectDivisionFilter {
  id: ProjectDivisionFilterId;
  label: string;
  countKey: ProjectDivisionFilterId;
  color?: string;
}

export interface ProjectMetric {
  value: string;
  label: string;
}

export interface PortfolioProject {
  id: string;
  divisionId: DivisionSlug;
  divisionName: string;
  name: string;
  client: string;
  location: string;
  year: string;
  category: string;
  scopeBadge: string;
  image: string;
  featured: boolean;
  summary: string;
  details: string[];
  tags: string[];
}
