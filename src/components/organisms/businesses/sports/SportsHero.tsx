import khaterSportBg from '@/assets/hero/khater-sport.jpg';
import khaterSportsLogo from '@/assets/logos/khater-sports.png';
import DivisionHero from '@/components/molecules/DivisionHero';

const SPORTS_ITEMS = [
  'Football',
  'Basketball',
  'Tennis',
  'Padel',
  'Athletics',
  'Squash',
  'Hockey',
  'Volleyball',
  'Handball',
  'Padbol',
];

export default function SportsHero() {
  return (
    <DivisionHero
      title="KHATER SPORTS"
      backgroundImage={khaterSportBg}
      logo={khaterSportsLogo}
      items={SPORTS_ITEMS}
      stripAriaLabel="Sports disciplines"
      stripCenterBreakpoint="xl"
    />
  );
}
