import MediumTag from '@/components/atoms/mediumTag/MediumTag';
import SelectedOption from '@/components/atoms/selectedOption/SelectedOption';
import { getDotSeparatedDate } from '@/utils/dateFormat';
import Image from 'next/image';

interface ComissionListItemProps {
  location: string;
  title: string;
  description: string;
  budget: number;
  deadline: Date;
  created_at: Date;
}

function ComissionListItem({
  location,
  title,
  description,
  budget,
  deadline,
  created_at,
}: ComissionListItemProps) {
  return (
    <article className="w-953 flex justify-between gap-44 px-44 py-40 rounded-2xl hover:shadow-hover transition-all duration-300">
      <div className="flex flex-col gap-40">
        <div className="flex flex-col gap-24">
          <div className="flex gap-8 items-center">
            <Image src="/icons/MapPin.svg" alt="지도 핀" width={15} height={19} />
            <div className="text-16 font-semibold text-black7">{location}</div>
          </div>
          <div className="w-600 flex flex-col gap-12">
            <div className="text-24 font-semibold text-black10">{title}</div>
            <div className="text-16 text-black7 truncate">{description}</div>
          </div>
        </div>
        <div className="flex gap-12">
          <MediumTag text="과외" theme="lightPurple" />
          <MediumTag text="수능 대비" theme="" />
        </div>
      </div>
      <div className="flex flex-col items-end justify-between">
        <p className="text-16 text-black6">{getDotSeparatedDate(created_at)} 등록</p>
        <div className="flex flex-col gap-16">
          <SelectedOption
            type="right-impact"
            leftText="마감일"
            rightText={getDotSeparatedDate(deadline)}
          />
          <SelectedOption
            type="right-impact"
            leftText="예산"
            rightText={budget.toLocaleString('ko-KR') + '원'}
          />
        </div>
      </div>
    </article>
  );
}

export default ComissionListItem;
