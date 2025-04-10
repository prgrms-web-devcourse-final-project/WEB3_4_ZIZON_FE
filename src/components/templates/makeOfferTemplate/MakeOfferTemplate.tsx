'use client';

import postCreateRoom from '@/apis/chat/postCreateRoom';
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
    onSuccess: () => {
      //console.log('견적서 전송 성공');
    },
    onError: error => {
      console.error('견적서 전송 실패', error);
    },
  });

  const handleOfferSubmit = async (offerForm: OfferFormType) => {
    offerMutation.mutate({
      offer: offerForm,
      projectId: projectId,
    });

    if (offerMutation.isSuccess) {
      try {
        const response = await postCreateRoom(projectId);
        router.push('/expert/chat');
      } catch (error) {
        alert(`채팅방 생성 실패 ${error}`);
        console.error('채팅방 생성 실패', error);
      }
    }
  };

  return (
    <div className="w-876 flex gap-64">
      <ProjectSummary projectData={projectSummary} />
      <OfferForm onSubmit={handleOfferSubmit} />
    </div>
  );
}
