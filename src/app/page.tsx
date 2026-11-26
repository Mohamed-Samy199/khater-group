import type { Metadata } from 'next';
import RegionSplitGateway from '@/components/organisms/gateway/RegionSplitGateway';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Khater — Khater Sports (KSA) & Khater Group (Egypt)',
  description:
    'Select your regional destination: Khater Sports Saudi Arabia (KSA) for Vision 2030 stadiums & sports infrastructure, or Khater Group Egypt (EG) across Sports, Play, Scapes, Tech & Aquatics.',
  path: '/',
  keywords: [
    'Khater Group Egypt',
    'Khater Sports Saudi Arabia',
    'Khater Sports KSA',
    'Khater Group EG',
    'sports infrastructure Egypt Saudi Arabia',
  ],
});

export default function GatewayPage() {
  return <RegionSplitGateway />;
}
