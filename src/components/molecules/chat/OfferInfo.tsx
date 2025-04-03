import Image from 'next/image';
import WonIcon from '/public/icons/Won.svg';
import ChatIcon from '/public/icons/ChatBubbleLeftEllipsisLine.svg';
import SelectedOption from '@/components/atoms/texts/selectedOption/SelectedOption';
import { formatMoney } from '@/utils/moneyFormat';
import { OfferInfoType } from '@/types/offter';

const Divider = () => {
  return <div className="w-full h-1 bg-black4" />;
};

// 견적서 정보
export default function OfferInfo(offerInfo: OfferInfoType) {
  return (
    <div className="w-full flex flex-col gap-16 px-32 py-32 rounded-[16px] bg-white border-1 border-priamry6 ">
      <h3 className="flex gap-4">
        <Image src={WonIcon} alt="won-icon" width={17} height={17} className="w-17 h-17" />
        <span className="text-black10 font-semibold text-16">견적서</span>
      </h3>

      <p className="font-regular text-16 text-black8"> {offerInfo.description}</p>

      <Divider />

      <div>
        <SelectedOption type="right-impact" leftText="서비스" rightText={offerInfo.categoryName} />
        <SelectedOption
          type="right-impact"
          leftText="예상금액"
          rightText={`총 ${formatMoney(offerInfo.price.toLocaleString())} 원`}
        />
      </div>
      <Divider />

      <div className="flex gap-4">
        <Image src={ChatIcon} width={26} height={22} className="w-26 h-22 " alt="chat-icon" />
        <span className="text-16 font-medium text-black9">
          견적금액에 대해 궁금한 점을 채팅으로 물어보세요.
        </span>
      </div>
    </div>
  );
}
