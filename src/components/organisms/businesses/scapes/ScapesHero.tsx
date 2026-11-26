import khaterScapeBg from '@/assets/hero/khater-scape.jpg';
import khaterScapesLogo from '@/assets/logos/khater-scapes.png';
import DivisionHero from '@/components/molecules/DivisionHero';

const SCAPES_ITEMS = [
  'Hardscape Plazas',
  'Living Softscapes',
  'Smart Irrigation',
  'Water Features',
  'Timber Pergolas',
  'Specimen Palms',
  'Nightscapes',
];

export default function ScapesHero() {
  return (
    <DivisionHero
      title="KHATER SCAPES"
      backgroundImage={khaterScapeBg}
      logo={khaterScapesLogo}
      items={SCAPES_ITEMS}
      stripAriaLabel="Landscape solutions"
    />
  );
}
