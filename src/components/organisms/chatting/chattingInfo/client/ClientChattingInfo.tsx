import ChattingButtonGroup from '@/components/molecules/chat/ChattingButtonGroup';
import ChattingExpertInfo from '@/components/molecules/chat/ChattingExpertInfo';
import OfferInfo from '@/components/molecules/chat/OfferInfo';
import { ExpertInfoType } from '@/types/expert';
import { OfferInfoType } from '@/types/offer';

export default function ClientChattingInfo({
  offerInfo,
  expertInfo,
}: {
  offerInfo: OfferInfoType;
  expertInfo: ExpertInfoType;
}) {
  return (
    <div className="w-full max-w-402 flex flex-col gap-16">
      <ChattingButtonGroup offerInfo={offerInfo} expertInfo={expertInfo} />
      <OfferInfo offerInfo={offerInfo} type="client" />
      <ChattingExpertInfo />
    </div>
  );
}
