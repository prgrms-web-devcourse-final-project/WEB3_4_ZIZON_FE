import MediumTag from '@/components/atoms/tags/mediumTag/MediumTag';
import SelectedOption from '@/components/atoms/texts/selectedOption/SelectedOption';
import { getTimeStampTo } from '@/utils/dateFormat';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export interface CommissionListItemProps {
  deadline: string;
  id: number; // 프로젝트 ID
  title: string; // 프로젝트 제목
  summary: string; // 프로젝트 요약
  region: string; // 지역 정보
  budget: number; // 예산
  categoryId: number;
}

function CommissionListItem({
  id,
  region,
  summary,
  title,
  budget,
  deadline,
  categoryId
}: CommissionListItemProps) {
  const router = useRouter();
  const onClickHandler = () => {
    router.push(`/commission/${id}`);
  }
  return (
    <article onClick={onClickHandler} className="w-953 flex justify-between bg-black1 gap-44 px-44 py-40 rounded-2xl hover:shadow-project-item-card transition-all duration-300">
      <div className="flex flex-col gap-40">
        <div className="flex flex-col gap-24">
          <div className="flex gap-8 items-center">
            <Image src="/icons/MapPin.svg" alt="지도 핀" width={15} height={19} />
            <div className="text-16 font-semibold text-black7">{region}</div>
          </div>
          <div className="w-600 flex flex-col gap-12">
            <div className="text-24 font-semibold text-black10">{title}</div>
            <div className="text-16 text-black7 truncate">{summary}</div>
          </div>
        </div>
        <div className="flex gap-12">
          {categoryId === 1000 ? <MediumTag text="이사/청소" theme="lightBlue" />: null}
          {categoryId === 2000 ? <MediumTag text="설치/수리" theme="lightGreen" />: null}
          {categoryId === 3000 ? <MediumTag text="과외" theme="lightPurple" />: null}
          {categoryId === 4000 ? <MediumTag text="취미생활" theme="lightOrange" />: null}
          <MediumTag text="수능 대비" theme="" />
        </div>
      </div>
      <div className="flex flex-col items-end justify-between">
        <p className="text-16 text-black6">마감일 {getTimeStampTo(deadline)}</p>
        <div className="flex flex-col gap-16">
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

export default CommissionListItem;
