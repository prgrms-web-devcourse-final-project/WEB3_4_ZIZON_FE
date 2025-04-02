import SelectedOption from '@/components/atoms/texts/selectedOption/SelectedOption';

interface OrderInfoListProps {
  title: string;
  infoList: {
    attribute: string;
    value: string;
  }[];
}

export default function OrderInfoList({ title, infoList }: OrderInfoListProps) {
  return (
    <div className="flex flex-col gap-32">
      <h2 className="text-20 font-bold text-black12">{title}</h2>
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
    </div>
  );
}
