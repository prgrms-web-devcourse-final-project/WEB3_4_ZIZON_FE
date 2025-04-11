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
    onSuccess: async () => {
      alert('견적서가 성공적으로 전송되었습니다.');
      try {
        const response = await postCreateRoom(projectId);
        alert('채팅방 생성 성공');
        router.push('/expert/chat');
      } catch (error) {
        alert(`채팅방 생성 실패 ${error}`);
        console.error('채팅방 생성 실패', error);
      }
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
  };

  return (
    <div className="w-876 flex gap-64">
      <ProjectSummary projectData={projectSummary} />
      <OfferForm onSubmit={handleOfferSubmit} />
    </div>
  );
}
