import SmallTag, { Theme } from '@/components/atoms/tags/smallTag/SmallTag';
import NumberReadability from '@/components/atoms/texts/numberReadability/NumberReadability';
import { PROJECT_CATEGORY, ProjectCategoryIdType } from '@/constants/category';
import Image from 'next/image';
import Link from 'next/link';
import ArrowUpRight from 'public/icons/ArrowUpRight.svg';

export interface ProjectItemCardProps {
  categoryId: ProjectCategoryIdType;
  title: string;
  budget: number;
  dueDate: string;
  comissionId: string;
}

type TagColorType = {
  [key in ProjectCategoryIdType]: Theme;
};

export default function ProjectItemCard({
  categoryId,
  title,
  budget,
  dueDate,
  comissionId,
}: ProjectItemCardProps) {
  const tagColorVariation: Record<
    ProjectCategoryIdType,
    'lightBlue' | 'lightGreen' | 'lightPurple' | 'lightOrange'
  > = {
    1000: 'lightBlue',
    2000: 'lightGreen',
    3000: 'lightPurple',
    4000: 'lightOrange',
  };

  return (
    <button className="w-411 flex justify-center items-end bg-black1 px-28 py-24 rounded-2xl shadow-style1 hover:ring-2 hover:ring-primary3 transition-all duration-300">
      <div className="w-323 flex flex-col items-start gap-12">
        <SmallTag theme={tagColorVariation[categoryId]} text={PROJECT_CATEGORY[categoryId]} />
        <p className="text-16 font-bold text-black12">{title}</p>
        <p className="flex gap-4 text-16 font-regular text-black7">
          <span>예산 : </span>
          <span className="flex">
            <NumberReadability value={budget} />원
          </span>
        </p>
        <span className="text-16 font-regular text-black7">마감 : {dueDate}</span>
      </div>
      <Link
        href={`/comission/${comissionId}`}
        className="w-32 h-32 flex justify-center items-center bg-black2 rounded-[4px] cursor-pointer"
      >
        <Image src={ArrowUpRight} width={15} height={15} alt="arrow-up-right-icon" />
      </Link>
    </button>
  );
}
