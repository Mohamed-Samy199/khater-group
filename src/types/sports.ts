export type SportCategory = 'All' | 'Ball Sports' | 'Racket Sports' | 'Tracks & Specialty';

export interface RawSportProject {
  name: string;
  type?: string;
  images: string[];
}

export interface RawSportSystem {
  name: string;
  image?: string;
  description?: string;
}

export interface RawSport {
  id: string;
  propId: number;
  name: string;
  category: Exclude<SportCategory, 'All'>;
  description: string;
  cover: string | null;
  badge: string;
  systemsLabel?: string;
  systemsKind?: string;
  projects: RawSportProject[];
  systems: RawSportSystem[];
}

export interface SportProject extends RawSportProject {
  entry: number;
}

export interface SportSystem {
  name: string;
  image: string | null;
  description?: string;
  entry: number;
}

export interface SportGalleryEntry {
  kind: string;
  title: string;
  sub?: string;
  images: string[];
}

export interface SportDiscipline {
  id: string;
  propId: number;
  name: string;
  category: Exclude<SportCategory, 'All'>;
  description: string;
  cover: string | null;
  badge: string;
  systemsLabel: string;
  systemsKind?: string;
  href: string;
  projects: SportProject[];
  systems: SportSystem[];
  entries: SportGalleryEntry[];
}
