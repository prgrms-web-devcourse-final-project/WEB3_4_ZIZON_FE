'use client';

import OfferForm from '@/components/organisms/offerForm/OfferForm';
import ProjectSummary, {
  ProjectSummaryProps,
} from '@/components/organisms/projectSummary/ProjectSummary';

interface MakeOfferTemplateProps {
  projectSummary: ProjectSummaryProps;
}

export default function MakeOfferTemplate({ projectSummary }: MakeOfferTemplateProps) {
  const handleOfferSubmit = () => {};
  // TODO : 견적 보내는 요청

  return (
    <div className="w-full flex gap-64">
      <ProjectSummary {...projectSummary} />
      <OfferForm onSubmit={handleOfferSubmit} />
    </div>
  );
}
