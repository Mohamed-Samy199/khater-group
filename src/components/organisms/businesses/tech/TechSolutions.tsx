import StandardSolutionsGrid from '@/components/molecules/StandardSolutionsGrid';
import { TECH_CATEGORIES, TECH_SOLUTIONS } from '@/constants/techData';

export default function TechSolutions() {
  return (
    <StandardSolutionsGrid
      id="tech-solutions"
      theme="tech"
      headingLead="Arena Systems"
      headingAccent="& Tech Solutions"
      description="Federation-compliant electronic scoreboards, LED video cubes, millisecond swimming touchpads, and high-efficiency court lighting engineered for competitive venues."
      categories={TECH_CATEGORIES}
      solutions={TECH_SOLUTIONS}
    />
  );
}
