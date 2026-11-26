import { Cpu, ShieldCheck, Sun, Timer, Tv, Waves } from 'lucide-react';
import DivisionCertifications from '@/components/molecules/DivisionCertifications';
import { TECH_CERTIFICATIONS } from '@/constants/techData';

function renderTechCertIcon(key: string) {
  switch (key) {
    case 'fiba':
      return <Tv className="h-5 w-5" />;
    case 'stramatel':
      return <Cpu className="h-5 w-5" />;
    case 'finaTiming':
      return <Waves className="h-5 w-5" />;
    case 'iaafTiming':
      return <Timer className="h-5 w-5" />;
    case 'enLighting':
      return <Sun className="h-5 w-5" />;
    case 'ipProtection':
      return <ShieldCheck className="h-5 w-5" />;
    default:
      return <Cpu className="h-5 w-5" />;
  }
}

export default function TechCertifications() {
  return (
    <DivisionCertifications
      ariaLabel="Sports Electronics & Lighting Certifications"
      theme="tech"
      headingLead="Accredited to International"
      headingAccent="Technology Standards"
      description="From FIBA-approved arena video cubes and millisecond touchpad timing to EN 12193 broadcast lighting, Khater Tech integrates certified hardware engineered for premier competition venues."
      items={TECH_CERTIFICATIONS}
      renderIcon={renderTechCertIcon}
    />
  );
}
