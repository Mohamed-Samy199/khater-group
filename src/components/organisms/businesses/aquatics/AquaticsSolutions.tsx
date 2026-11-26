import StandardSolutionsGrid from '@/components/molecules/StandardSolutionsGrid';
import { AQUATICS_CATEGORIES, AQUATICS_SOLUTIONS } from '@/constants/aquaticsData';

export default function AquaticsSolutions() {
  return (
    <StandardSolutionsGrid
      id="aquatics-solutions"
      theme="aquatics"
      headingLead="Olympic, Leisure"
      headingAccent="& Pool Systems"
      description="Concrete and prefabricated swimming pools engineered to FINA standards, complete with low-maintenance filtration, heating, and competition accessories."
      categories={AQUATICS_CATEGORIES}
      solutions={AQUATICS_SOLUTIONS}
    />
  );
}
