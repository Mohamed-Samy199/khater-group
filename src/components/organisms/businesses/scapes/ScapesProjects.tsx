import { Shield } from 'lucide-react';
import khaterScapesLogo from '@/assets/logos/khater-scapes.png';
import DivisionProjectsShowcase from '@/components/molecules/DivisionProjectsShowcase';
import { SCAPES_PROJECTS } from '@/constants/scapesData';

export default function ScapesProjects() {
  return (
    <DivisionProjectsShowcase
      theme="scapes"
      headingLead="Living Vistas"
      headingAccent="& Project Domains"
      description="Explore signature landscape sectors and outdoor master environments engineered by Khater Scapes across coastal resorts, residential communities, commercial plazas, and sporting campuses."
      projects={SCAPES_PROJECTS}
      badgeIcon={<Shield className="h-3.5 w-3.5 text-scapes" />}
      logo={khaterScapesLogo}
      logoAlt="Khater Scapes"
      footerLabel="BS & ISO Landscape Standards"
      ctaLabel="Project Inquiry"
    />
  );
}
