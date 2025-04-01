import SmallTag from '@/components/atoms/tags/smallTag/SmallTag';
import { PROJECT_CATEGORY, ProjectCategoryIdType } from '@/constants/category';
import Image from 'next/image';
import Link from 'next/link';
import ArrowUpRight from 'public/icons/ArrowUpRight.svg';

export interface ProjectItemCardProps {
  categoryId: ProjectCategoryIdType;
  title: string;
  budget: string;
  dueDate: string;
  comissionId: string;
}

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
        <span className="text-16 font-regular text-black7"> 예산 : {budget}원</span>
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
