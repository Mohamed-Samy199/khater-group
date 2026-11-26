import { Shield } from 'lucide-react';
import khaterPlayLogo from '@/assets/logos/khater-play.png';
import DivisionProjectsShowcase from '@/components/molecules/DivisionProjectsShowcase';
import { PLAY_PROJECTS } from '@/constants/playData';

export default function PlayProjects() {
  return (
    <DivisionProjectsShowcase
      theme="play"
      headingLead="Worlds of Play"
      headingAccent="& Projects"
      description="Explore premier residential compounds, international schools, and sports clubs where Khater Play engineering inspires children across Egypt and the region."
      projects={PLAY_PROJECTS}
      badgeIcon={<Shield className="h-3.5 w-3.5 text-play" />}
      logo={khaterPlayLogo}
      logoAlt="Khater Play"
      footerLabel="EN 1176 & 1177 Safety Standards"
      ctaLabel="Project Details"
    />
  );
}
