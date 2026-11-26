import {
  Award,
  CheckCircle2,
  HeartHandshake,
  Layers,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import DivisionCertifications from '@/components/molecules/DivisionCertifications';
import { PLAY_CERTIFICATIONS } from '@/constants/playData';

function renderPlayCertIcon(iconKey: string) {
  switch (iconKey) {
    case 'en1176':
      return <ShieldCheck className="h-5 w-5" />;
    case 'en1177':
      return <Layers className="h-5 w-5" />;
    case 'iso9001':
      return <Award className="h-5 w-5" />;
    case 'iso45001':
      return <CheckCircle2 className="h-5 w-5" />;
    case 'inclusive':
      return <HeartHandshake className="h-5 w-5" />;
    case 'childSafe':
      return <Sparkles className="h-5 w-5" />;
    default:
      return <ShieldCheck className="h-5 w-5" />;
  }
}

export default function PlayCertifications() {
  return (
    <DivisionCertifications
      ariaLabel="Playground Engineering Certifications"
      theme="play"
      headingLead="Engineered to European"
      headingAccent="Safety Standards"
      description="From HIC-calibrated impact attenuating surfaces to non-toxic food-grade polymers, every recreational environment engineered by Khater Play complies with stringent European EN 1176/1177 and ISO safety norms."
      items={PLAY_CERTIFICATIONS}
      renderIcon={renderPlayCertIcon}
    />
  );
}
