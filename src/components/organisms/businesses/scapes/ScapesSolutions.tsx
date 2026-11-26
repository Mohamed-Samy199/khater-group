import StandardSolutionsGrid from '@/components/molecules/StandardSolutionsGrid';
import { SCAPES_CATEGORIES, SCAPES_SOLUTIONS } from '@/constants/scapesData';

export default function ScapesSolutions() {
  return (
    <StandardSolutionsGrid
      id="scapes-solutions"
      theme="scapes"
      headingLead="Hardscape"
      headingAccent="& Softscape Solutions"
      description="Khater Scapes provides comprehensive outdoor development divided into durable structural hardscapes and vibrant living softscapes."
      categories={SCAPES_CATEGORIES}
      solutions={SCAPES_SOLUTIONS}
    />
  );
}
