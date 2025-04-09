'use client';

import { postOffer, PostOfferRequestType } from '@/apis/offer/postOffer';
import { ProjectResponseType } from '@/apis/project/getProject';
import OfferForm, { OfferFormType } from '@/components/organisms/offerForm/OfferForm';
import ProjectSummary from '@/components/organisms/projectSummary/ProjectSummary';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

interface MakeOfferTemplateProps {
  projectSummary: ProjectResponseType;
}

export default function MakeOfferTemplate({ projectSummary }: MakeOfferTemplateProps) {
  const router = useRouter();
  const projectId = projectSummary.id;

  const offerMutation = useMutation({
    mutationFn: (request: PostOfferRequestType) => postOffer(request),
    onSuccess: data => {
      router.push('/expert/chat');
    },
    onError: error => {
      console.error('견적서 전송 실패', error);
    },
  });

  const handleOfferSubmit = (offerForm: OfferFormType) => {
    offerMutation.mutate({
      offer: offerForm,
      projectId: projectId,
    });
  };

  return (
    <div className="w-876 flex gap-64">
      <ProjectSummary projectData={projectSummary} />
      <OfferForm onSubmit={handleOfferSubmit} />
    </div>
  );
}
