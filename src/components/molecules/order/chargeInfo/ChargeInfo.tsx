import SelectedOption from '@/components/atoms/texts/selectedOption/SelectedOption';
import { formatMoney } from '@/utils/moneyFormat';

interface ChargeInfoProps {
  serviceFee: number;
  totalPrice: number;
}

const Divider = () => {
  return <div className="w-full h-1 bg-black4 " />;
};

export default function ChargeInfo({ serviceFee, totalPrice }: ChargeInfoProps) {
  return (
    <div className="flex flex-col gap-32 items-start justify-center w-full">
      <h2 className="font-bold text-24 text-black12">결제 금액</h2>
      {/* 금액정보 */}
      <div className="flex flex-col w-full gap-16">
        <SelectedOption
          type="price-small"
          leftText="서비스 금액"
          rightText={`${formatMoney(serviceFee)}원`}
        />
        <Divider />
        <SelectedOption
          type="price-large"
          leftText="최종 결제금액"
          rightText={`${formatMoney(totalPrice)}원`}
        />
      </div>
    </div>
  );
}
