export interface DivisionProject {
  name: string;
  location: string;
  type: string;
  capacity: string;
  details: string;
  image: string;
  highlight: string;
}

export interface DivisionCertification {
  key: string;
  code: string;
  sub: string;
  title: string;
  scope: string;
  text: string;
  image?: string;
}

export interface ArcShowcaseItem {
  name: string;
  img: string;
}

export interface StandardSolution {
  id: string;
  name: string;
  category: string;
  scopeBadge: string;
  description: string;
  image: string;
  scopeItems: string[];
}

export interface PlaySolution {
  id: string;
  name: string;
  category: string;
  badge: string;
  description: string;
  image: string;
  specs: Record<string, string>;
  features: string[];
}
