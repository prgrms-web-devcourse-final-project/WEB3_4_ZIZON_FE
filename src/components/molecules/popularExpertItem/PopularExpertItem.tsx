import StarTag from '@/components/atoms/starTag/StarTag';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import TagIconLeft from '@/components/atoms/tagIconLeft/TagIconLeft';
import { ProjectCategoryType } from '@/types/category';

interface PopularExpertItemProps {
  imageSrc: string;
  name: string;
  category: ProjectCategoryType;
  expertId: string;
  rating: number;
  reviewCount: number;
  likeCount: number;
  onLikeClick: (expertId: string) => void;
  isLike: boolean;
}

export default function PopularExpertItem({
  imageSrc,
  name,
  category,
  expertId,
  rating,
  reviewCount,
  likeCount,
  onLikeClick,
  isLike,
}: PopularExpertItemProps) {
  const [imagePath, setImagePath] = useState(imageSrc);
  const isLikeOn = isLike ? 'like-on' : 'like-off';
  return (
    <Link
      href={`/expert/${expertId}`}
      className="flex flex-col items-center gap-20 px-24 py-24 bg-black1 border-1 border-black4 rounded-[20px] hover:shadow-card hover:border-none"
    >
      <Image
        src={imagePath}
        width={254}
        height={181}
        className="rounded-[12px] object-fill h-181 w-254"
        alt="expert-thumbnail-image"
        onError={() => setImagePath('/public/images/DefaultImage.png')}
      />
      <div className="flex flex-col items-center gap-24">
        <div className="flex flex-col items-center gap-12">
          <span className="font-bold text-20 text-black10"> {name}</span>
          <span className="font-medium text-16 text-black7">{category} 전문가</span>
        </div>
        <div className="flex items-center justify-center gap-8">
          <button onClick={() => onLikeClick(expertId)} className="cursor-pointer h-32">
            <TagIconLeft type={isLikeOn} count={likeCount} />
          </button>
          <StarTag rating={rating} reviewCount={reviewCount} />
        </div>
      </div>
    </Link>
  );
}
