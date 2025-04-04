import Image from 'next/image';
import WonIcon from 'public/icons/Won.svg';
import ChatIcon from 'public/icons/ChatBubbleLeftEllipsisLine.svg';
import SelectedOption from '@/components/atoms/texts/selectedOption/SelectedOption';
import { formatMoney } from '@/utils/moneyFormat';
import { OfferInfoType } from '@/types/offter';
import Link from 'next/link';
import ArrowRightIcon from 'public/icons/RightArrowWhite.svg';
const Divider = () => {
  return <div className="w-full h-1 bg-black4" />;
};

interface OfferInfoProps {
  offerInfo: OfferInfoType;
  type: 'client' | 'expert';
}

// 견적서 정보
export default function OfferInfo({ offerInfo, type }: OfferInfoProps) {
  return (
    <div className="w-full flex flex-col gap-16 px-32 py-32 rounded-[16px] bg-white border-1 border-priamry6 ">
      <h3 className="flex gap-4">
        <Image src={WonIcon} alt="won-icon" width={17} height={17} className="w-17 h-17" />
        <span className="text-black10 font-semibold text-16">
          {type === 'client' ? '견적서' : '보낸 견적서'}
        </span>
      </h3>

      <p className="font-regular text-16 text-black8">
        {' '}
        고객님 안녕하세요. 요청서에 따른 예상금액입니다.
      </p>

      <Divider />

      <div className="h-fit">
        <SelectedOption type="right-impact" leftText="서비스" rightText={offerInfo.categoryName} />
        <SelectedOption
          type="right-impact"
          leftText="예상금액"
          rightText={`총 ${formatMoney(offerInfo.price.toLocaleString())} 원`}
        />
      </div>
      {type === 'client' && (
        <div className="flex flex-col gap-16">
          <Divider />
          <div className="flex gap-4">
            <Image src={ChatIcon} width={26} height={22} className="w-26 h-22 " alt="chat-icon" />
            <span className="text-16 font-medium text-black9">
              견적금액에 대해 궁금한 점을 채팅으로 물어보세요.
            </span>
          </div>

          <Link
            href={`/expert/${offerInfo.expert_id}`}
            className="flex bg-primary6 rounded-[4px] px-20 py-12 justify-between items-center"
          >
            <span className="font-regular text-13 text-primary0">전문가 프로필 보기</span>
            <Image
              src={ArrowRightIcon}
              width={7}
              height={11}
              className="width-7 height-11"
              alt="arrow-icon"
            />
          </Link>
        </div>
      )}
    </div>
  );
}
