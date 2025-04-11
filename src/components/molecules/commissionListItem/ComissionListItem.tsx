import { ProjectType } from '@/apis/project/getProjectsAll';
import MediumTag from '@/components/atoms/tags/mediumTag/MediumTag';
import SelectedOption from '@/components/atoms/texts/selectedOption/SelectedOption';
import { getDotSeparatedDate } from '@/utils/dateFormat';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

function CommissionListItem(commission: ProjectType) {
  const { id, region, summary, title, budget, deadline, status, categoryId, clientName } =
    commission;

  const router = useRouter();
  const onClickHandler = () => {
    router.push(`/commission/${id}`);
  };
  return (
    <article
      onClick={onClickHandler}
      className="w-740 flex justify-between bg-black1 gap-44 px-44 py-40 rounded-2xl hover:shadow-style2 transition-all duration-300 cursor-pointer"
    >
      <div className="flex flex-col gap-40">
        <div className="flex flex-col gap-24">
          <div className="flex gap-8 items-center">
            <Image src="/icons/MapPin.svg" alt="지도 핀" width={15} height={19} />
            <div className="text-16 font-semibold text-black7">{region}</div>
          </div>
          <div className="flex flex-col gap-12">
            <div className="text-24 font-semibold text-black10">{title}</div>
            <div className="text-16 text-black7 truncate">{summary}</div>
          </div>
        </div>
        <div className="flex gap-12">
          {categoryId === 1000 ? <MediumTag text="이사/청소" theme="lightBlue" /> : null}
          {categoryId === 2000 ? <MediumTag text="설치/수리" theme="lightGreen" /> : null}
          {categoryId === 3000 ? <MediumTag text="과외" theme="lightPurple" /> : null}
          {categoryId === 4000 ? <MediumTag text="취미생활" theme="lightOrange" /> : null}
          <MediumTag text={status} theme="" />
        </div>
      </div>
      <div className="flex flex-col items-end justify-between">
        <p className="text-16 text-black6">{clientName}</p>
        <div className="flex flex-col gap-8">
          <SelectedOption
            type="right-impact"
            leftText="예산"
            rightText={budget.toLocaleString('ko-KR') + '원'}
          />
          <SelectedOption
            type="right-impact"
            leftText="마감일"
            rightText={getDotSeparatedDate(new Date(deadline))}
          />
        </div>
      </div>
    </article>
  );
}

export default CommissionListItem;
