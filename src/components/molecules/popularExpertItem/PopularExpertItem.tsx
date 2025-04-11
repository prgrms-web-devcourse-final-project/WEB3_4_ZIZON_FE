import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export interface PopularExpertItemProps {
  name: string;
  categoryName: string;
  careerYears: number;
  introduction: string;
  profileImage: string;
  expertId: number;
  mainCategoryId: number;
}

export default function PopularExpertItem({
  categoryName,
  name,
  careerYears,
  introduction,
  profileImage,
  expertId,
  mainCategoryId,
}: PopularExpertItemProps) {
  const [imagePath, setImagePath] = useState(profileImage);
  // const isLikeOn = isLike ? 'like-on' : 'like-off';
  return (
    <Link
      href={`/expert/${expertId}`}
      className="flex flex-col items-center gap-20 px-24 py-24 bg-black1 border border-black3 rounded-[20px]  hover:shadow-style1 hover:border-transparent transition-all duration-300"
    >
      <div className="w-254 h-200 border border-black2 overflow-hidden rounded-xl">
        <Image
          src={imagePath === '' ? '/images/DefaultImage.png' : imagePath}
          width={254}
          height={200}
          className="size-full object-cover"
          alt="expert-thumbnail-image"
          onError={() => setImagePath('/public/images/DefaultImage.png')}
        />
      </div>
      <div className="flex flex-col items-center gap-24">
        <div className="flex flex-col items-center gap-12">
          <span className="font-bold text-20 text-black10"> {name}</span>
          <span className="font-medium text-16 text-black7">{categoryName} 전문가</span>
        </div>
        {/*<div className="flex items-center justify-center gap-8">*/}
        {/*  <button onClick={() => onLikeClick(expertId)} className="cursor-pointer h-32">*/}
        {/*    <LikeTag type={isLikeOn} count={likeCount} />*/}
        {/*  </button>*/}
        {/*  <StarTag rating={rating} reviewCount={reviewCount} />*/}
        {/*</div>*/}
      </div>
    </Link>
  );
}
