import { ExpertListItemType } from '@/apis/expert/getExpertlist';
import MediumTag from '@/components/atoms/tags/mediumTag/MediumTag';
import Image from 'next/image';
import Link from 'next/link';

const THEME: Record<'이사/청소' | '설치/수리' | '과외' | '취미/자기계발', string> = {
  '이사/청소': 'lightBlue',
  '설치/수리': 'lightGreen',
  과외: 'lightPurple',
  '취미/자기계발': 'lightOrange',
};

function ExpertListItem({ expert }: { expert: ExpertListItemType }) {
  return (
    <article className="w-410 flex flex-col p-24 bg-black1 rounded-[20px] border-2 border-black1 hover:border-primary3 transition-all duration-300">
      <div className="flex flex-col mb-32">
        <div className="w-full h-240 mb-16 rounded-xl overflow-hidden">
          <Image
            src={expert.profileImage || '/images/DefaultImage.png'}
            alt="expert"
            width={362}
            height={240}
            className="object-cover"
          />
        </div>
        <div className="flex gap-8 mb-16">
          <MediumTag
            theme={THEME[expert.categoryName as keyof typeof THEME]}
            text={`${expert.categoryName}`}
          />
          <MediumTag theme="" text={`${expert.careerYears}년 경력`} />
        </div>
        <div className="flex flex-col">
          <span className="inline-block mb-12 text-20 font-bold text-black10">{expert.name}</span>
          <span className="inline-block w-full text-16 font-regular text-black7 truncate">
            {expert.introduction}
          </span>
        </div>
      </div>
      <Link
        href={`/expert/${expert.expertId}`}
        className="w-full bg-black2 font-semibold text-16 text-black7 px-16 py-12 text-center rounded-[8px] hover:bg-black3 transition-all duration-300"
      >
        프로필 보기
      </Link>
    </article>
  );
}

export default ExpertListItem;
