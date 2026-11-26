import khaterAquaticsBg from '@/assets/hero/khater-aquatics.jpg';
import khaterAquaticsLogo from '@/assets/logos/khater-aquatics.png';
import DivisionHero from '@/components/molecules/DivisionHero';

const AQUATICS_ITEMS = [
  'Olympic Pools',
  'Semi-Olympic Pools',
  'Leisure Pools',
  'Prefabricated Pools',
  'Filtration & Pumps',
  'Competition Gear',
  'Touchpad Timing',
];

export default function AquaticsHero() {
  return (
    <DivisionHero
      title="KHATER AQUATICS"
      backgroundImage={khaterAquaticsBg}
      logo={khaterAquaticsLogo}
      items={AQUATICS_ITEMS}
      stripAriaLabel="Aquatics systems"
    />
  );
}
