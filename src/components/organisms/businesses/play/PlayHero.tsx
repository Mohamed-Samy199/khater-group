import khaterPlayBg from '@/assets/hero/khater-play.jpg';
import khaterPlayLogo from '@/assets/logos/khater-play.png';
import DivisionHero from '@/components/molecules/DivisionHero';

const PLAY_ITEMS = [
  'Multi-Play Towers',
  'EPDM Safety Flooring',
  'Climbing Pyramids',
  'Inclusive Play',
  'Toddler Zones',
  'Robinia Wood',
  'Splash Pads',
];

export default function PlayHero() {
  return (
    <DivisionHero
      title="KHATER PLAY"
      backgroundImage={khaterPlayBg}
      logo={khaterPlayLogo}
      items={PLAY_ITEMS}
      stripAriaLabel="Play solutions"
    />
  );
}
