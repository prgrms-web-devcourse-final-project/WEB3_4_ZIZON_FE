'use client';

import MediumTag from '@/components/atoms/tags/mediumTag/MediumTag';
import StandardButton from '@/components/atoms/buttons/standardButton/StandardButton';
import Image from 'next/image';

export interface ExpertListItemProps {
  expert_id: string;
  name: string;
  profile_image: string;
  introduction: string;
  career_years: number;
  skill: string;
  onClick: (expert_id: string) => void;
}

function ExpertListItem({
  name,
  profile_image,
  introduction,
  career_years,
  skill,
  expert_id,
  onClick,
}: ExpertListItemProps) {
  return (
    <article className="w-410 flex flex-col p-24 bg-black1 rounded-[20px] border-2 border-black1 hover:border-primary3 transition-all duration-300">
      <div className="flex flex-col mb-32">
        <div className="w-full h-240 mb-16 rounded-xl overflow-hidden">
          <Image
            src={profile_image || '/images/DefaultImage.png'}
            alt="expert"
            width={362}
            height={240}
            className="object-cover"
          />
        </div>
        <div className="flex gap-8 mb-16">
          <MediumTag theme="lightBlue" text={`${skill}`} />
          <MediumTag theme="" text={`${career_years}년 경력`} />
        </div>
        <div className="flex flex-col">
          <span className="inline-block mb-12 text-20 font-bold text-black10">{name}</span>
          <span className="inline-block w-full text-16 font-regular text-black7 truncate">
            {introduction}
          </span>
        </div>
      </div>
      <StandardButton
        onClick={() => onClick(expert_id)}
        text="프로필 보기"
        disabled={false}
        state="gray"
        size="full"
      />
    </article>
  );
}

export default ExpertListItem;
