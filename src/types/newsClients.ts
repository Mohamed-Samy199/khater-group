export interface FlagshipAmaala {
  eyebrow: string;
  client: string;
  country: string;
  status: string;
  summary: string;
  highlights: string[];
  image: string;
}

export interface RegionalStat {
  value: string;
  label: string;
}

export interface RegionalOffice {
  role: string;
  country: string;
  entity: string;
  address: string;
}

export interface ExclusiveAgent {
  badge: string;
  name: string;
  legalEntity: string;
  arabicName: string;
  description: string;
}

export interface RegionalPresenceData {
  eyebrow: string;
  title: string;
  summary: string;
  stats: RegionalStat[];
  offices: RegionalOffice[];
  exclusiveAgent: ExclusiveAgent;
}

export interface ClientSector {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  clients: string[];
}

export interface GlobalPartner {
  name: string;
  country: string;
  code: string;
  category: string;
  division: string;
  divisionColor: string;
  specialty: string;
  description: string;
}

export interface NewsStory {
  id: string;
  featured: boolean;
  category: string;
  tag: string;
  location: string;
  division: string;
  title: string;
  excerpt: string;
  body: string[];
  keyFacts: string[];
  image: string;
  isOfficialPoster?: boolean;
}
