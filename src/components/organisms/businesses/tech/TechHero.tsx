import khaterTechBg from '@/assets/hero/khater-tech.jpeg';
import khaterTechLogo from '@/assets/logos/khater-tech.png';
import DivisionHero from '@/components/molecules/DivisionHero';

const TECH_ITEMS = [
  'LED Scoreboards',
  'Video Cubes',
  'Scorepad Consoles',
  'Pool Touchpads',
  'Precision Timing',
  'Court Lighting Poles',
  'Arena Floodlights',
];

export default function TechHero() {
  return (
    <DivisionHero
      title="KHATER TECH"
      backgroundImage={khaterTechBg}
      logo={khaterTechLogo}
      items={TECH_ITEMS}
      stripAriaLabel="Sports technology solutions"
    />
  );
}
