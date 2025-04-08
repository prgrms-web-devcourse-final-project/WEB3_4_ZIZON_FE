'use client';
import { OfferResponseType } from '@/apis/offer/getOffer';
import { ProjectResponseType } from '@/apis/project/getProject';
import StandardButton from '@/components/atoms/buttons/standardButton/StandardButton';
import OfferInfo from '@/components/molecules/chat/OfferInfo';
import ProjectSummary from '@/components/organisms/projectSummary/ProjectSummary';

interface ExpertChattingInfoProps {
  offerData: OfferResponseType | undefined;
  projectData: ProjectResponseType | undefined;
}

export default function ExpertChattingInfo({ offerData, projectData }: ExpertChattingInfoProps) {
  if (!offerData || !projectData) {
    return <div>로딩중</div>;
  }
  return (
    <div className="w-full max-w-402 flex flex-col gap-16">
      <StandardButton
        text="채팅방 나가기"
        state="default"
        size="full"
        onClick={() => {}}
        disabled={false}
      />

      {/* 보낸 견적서 */}
      <OfferInfo offerInfo={offerData} type="expert" />

      <ProjectSummary projectData={projectData} />
    </div>
  );
}
