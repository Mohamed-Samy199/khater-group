import {
  Award,
  CheckCircle2,
  Droplets,
  Leaf,
  SunMedium,
  TreePine,
} from 'lucide-react';
import DivisionCertifications from '@/components/molecules/DivisionCertifications';
import { SCAPES_CERTIFICATIONS } from '@/constants/scapesData';

function renderScapesCertIcon(key: string) {
  switch (key) {
    case 'iso14001':
      return <Leaf className="h-5 w-5" />;
    case 'smartWater':
      return <Droplets className="h-5 w-5" />;
    case 'bsHardscape':
      return <Award className="h-5 w-5" />;
    case 'bsSoftscape':
      return <TreePine className="h-5 w-5" />;
    case 'iso9001':
      return <CheckCircle2 className="h-5 w-5" />;
    case 'leedSustainable':
      return <SunMedium className="h-5 w-5" />;
    default:
      return <Award className="h-5 w-5" />;
  }
}

export default function ScapesCertifications() {
  return (
    <DivisionCertifications
      ariaLabel="Landscape Engineering Certifications"
      theme="scapes"
      headingLead="Certified to Global"
      headingAccent="Landscape Norms"
      description="Every hardscape plaza, softscape ecosystem, and smart irrigation network constructed by Khater Scapes adheres to British Standards (BS), ISO 14001 environmental frameworks, and LEED sustainability principles."
      items={SCAPES_CERTIFICATIONS}
      renderIcon={renderScapesCertIcon}
    />
  );
}
