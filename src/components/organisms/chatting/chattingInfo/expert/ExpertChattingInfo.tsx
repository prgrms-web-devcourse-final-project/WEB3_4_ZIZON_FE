'use client';
import StandardButton from '@/components/atoms/buttons/standardButton/StandardButton';
import OfferInfo from '@/components/molecules/chat/OfferInfo';
import ProjectSummary from '@/components/organisms/projectSummary/ProjectSummary';
import { OfferInfoType } from '@/types/offer';

const dummyOfferInfo: OfferInfoType = {
  id: 401,
  project_id: 301,
  expert_id: 102,
  price: 4800000.0,
  description: '경력과 포트폴리오를 기반으로 한 제안입니다.',
  delivery_days: 10,
  categoryName: '웹 개발',
  status: 'pending',
  created_at: '2025-03-24T11:00:00Z',
};
const DummyProjectSummary = {
  clientProfile: '/images/DefaultImage.png',
  clientName: '홍길동',
  location: '서울특별시 강남구 역삼동',
  projectName: '과외',
  description: {
    '어떤 도움이 필요한가요': '과외',
    '과외생은 어디에 속해있나요': '고등학교 1학년',
    '어떤 교과과목 인가요': '한국사',
  },
};

export default function ExpertChattingInfo() {
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
      <OfferInfo offerInfo={dummyOfferInfo} type="expert" />

      <ProjectSummary {...DummyProjectSummary} />
    </div>
  );
}
