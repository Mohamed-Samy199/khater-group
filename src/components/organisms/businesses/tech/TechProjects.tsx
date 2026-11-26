import { Cpu } from 'lucide-react';
import khaterTechLogo from '@/assets/logos/khater-tech.png';
import DivisionProjectsShowcase from '@/components/molecules/DivisionProjectsShowcase';
import { TECH_PROJECTS } from '@/constants/techData';

export default function TechProjects() {
  return (
    <DivisionProjectsShowcase
      theme="tech"
      headingLead="Championship"
      headingAccent="& Tech Venues"
      description="From international basketball tournaments at Cairo Stadium to FINA-compliant pool timing and illuminated courts across Egypt."
      projects={TECH_PROJECTS}
      badgeIcon={<Cpu className="h-3.5 w-3.5 text-tech" />}
      logo={khaterTechLogo}
      logoAlt="Khater Tech"
      footerLabel="FIBA, FINA & Stramatel Grade"
      ctaLabel="Project Inquiry"
    />
  );
}
