import { Waves } from 'lucide-react';
import khaterAquaticsLogo from '@/assets/logos/khater-aquatics.png';
import DivisionProjectsShowcase from '@/components/molecules/DivisionProjectsShowcase';
import { AQUATICS_PROJECTS } from '@/constants/aquaticsData';

export default function AquaticsProjects() {
  return (
    <DivisionProjectsShowcase
      theme="aquatics"
      headingLead="Championship Pools"
      headingAccent="& Portfolio"
      description="Verified Olympic, club, and international school swimming pool projects delivered by Khater across Egypt."
      projects={AQUATICS_PROJECTS}
      badgeIcon={<Waves className="h-3.5 w-3.5 text-aquatics" />}
      logo={khaterAquaticsLogo}
      logoAlt="Khater Aquatics"
      footerLabel="World Aquatics (FINA) Standards"
      ctaLabel="Project Inquiry"
    />
  );
}
