'use client';
import { ExpertType, getExpert } from '@/apis/expert/getExpert';
import getOfferList, { OfferListResponseType } from '@/apis/offer/getOfferList';
import ChattingButtonGroup from '@/components/molecules/chat/ChattingButtonGroup';
import ChattingExpertInfo from '@/components/molecules/chat/ChattingExpertInfo';
import OfferInfo from '@/components/molecules/chat/OfferInfo';

interface ClientChattingInfoProps {
  expertData: ExpertType | null;
  offerListData: OfferListResponseType | null;
  expertId: number | null;
}

export default function ClientChattingInfo({
  expertData,
  offerListData,
  expertId,
}: ClientChattingInfoProps) {
  const recentOffer = offerListData?.filter(offer => offer.expert_id === expertId).at(-1); // 해당 전문가의 offer를 찾음
  return (
    <div className="w-full max-w-402 flex flex-col gap-16">
      {/* <ChattingButtonGroup offerInfo={recentOffer} expertInfo={expertData} />
      <OfferInfo offerInfo={recentOffer} type="client" /> */}
      <ChattingExpertInfo expertData={expertData} />
    </div>
  );
}
