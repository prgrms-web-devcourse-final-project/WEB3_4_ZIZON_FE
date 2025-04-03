import ChattingButtonGroup from '@/components/molecules/chat/ChattingButtonGroup';
import ChattingExpertInfo from '@/components/molecules/chat/ChattingExpertInfo';
import OfferInfo from '@/components/molecules/chat/OfferInfo';
import { OfferInfoType } from '@/types/offter';

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

export default function ClientChattingInfo() {
  return (
    <div className="w-full max-w-402 flex flex-col gap-16">
      <ChattingButtonGroup />
      <OfferInfo offerInfo={dummyOfferInfo} type="client" />
      <ChattingExpertInfo />
    </div>
  );
}
