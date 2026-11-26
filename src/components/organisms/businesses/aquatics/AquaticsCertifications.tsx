import {
  Droplets,
  Layers,
  ShieldCheck,
  Thermometer,
  Timer,
  Waves,
} from 'lucide-react';
import DivisionCertifications from '@/components/molecules/DivisionCertifications';
import { AQUATICS_CERTIFICATIONS } from '@/constants/aquaticsData';

function renderAquaticsCertIcon(key: string) {
  switch (key) {
    case 'fina':
      return <Waves className="h-5 w-5" />;
    case 'structural':
      return <Layers className="h-5 w-5" />;
    case 'mechanical':
      return <Droplets className="h-5 w-5" />;
    case 'timingSync':
      return <Timer className="h-5 w-5" />;
    case 'thermal':
      return <Thermometer className="h-5 w-5" />;
    case 'deckSafety':
      return <ShieldCheck className="h-5 w-5" />;
    default:
      return <Waves className="h-5 w-5" />;
  }
}

export default function AquaticsCertifications() {
  return (
    <DivisionCertifications
      ariaLabel="Swimming Pools & Aquatics Certifications"
      theme="aquatics"
      headingLead="Certified to World Aquatics &"
      headingAccent="Olympic Standards"
      description="Every Olympic competition swimming pool, leisure aquatic complex, and commercial MEP filtration plant engineered by Khater Aquatics is constructed strictly compliant with World Aquatics (FINA) and DIN norms."
      items={AQUATICS_CERTIFICATIONS}
      renderIcon={renderAquaticsCertIcon}
    />
  );
}
