import SelectedOption from '@/components/atoms/texts/selectedOption/SelectedOption';
import { formatMoney } from '@/utils/moneyFormat';

interface OrderResultProps {
  infoList: {
    attribute: string;
    value: string;
  }[];
  totalPrice?: number;
}

const Divider = () => <div className="w-full h-[1px]  mb-16 bg-black4" />;

export default function OrderResult({ infoList, totalPrice }: OrderResultProps) {
  return (
    <div className="flex flex-col gap-32 w-full">
      <h2 className="text-20 font-bold text-black12">구매상품</h2>
      <div className="flex flex-col gap-16 w-350">
        {infoList.map((info, index) => (
          <SelectedOption
            type="left-impact"
            leftText={info.attribute}
            rightText={info.value}
            key={info.attribute}
          />
        ))}
      </div>
      <Divider />
      {totalPrice && (
        <SelectedOption
          type="price-small"
          leftText="최종 결제금액"
          rightText={`${formatMoney(totalPrice)}원`}
        />
      )}
    </div>
  );
}
