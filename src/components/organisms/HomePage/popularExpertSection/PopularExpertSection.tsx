'use client';

import { useState } from 'react';
import PopularExpertItem, {
  PopularExpertItemProps,
} from '@/components/molecules/popularExpertItem/PopularExpertItem';
import { ExpertCategory } from '@/constants/expert';
import SectionTitle from '@/components/atoms/texts/sectionTitle/SectionTitle';
import ExpertCategoryButtons from '@/components/molecules/HomePage/ExpertCategoryButtons';

export const POPULAR_EXPERT_ITEMS: PopularExpertItemProps[] = [
  {
    imageSrc: '/images/DefaultImage.png',
    name: '이상훈',
    category: '이사/청소',
    expertId: '123',
    rating: 4.5,
    reviewCount: 100,
    likeCount: 100,
    isLike: false,
    onLikeClick: () => {},
  },
  {
    imageSrc: '/images/DefaultImage.png',
    name: '조현우',
    category: '설치/수리',
    expertId: '124',
    rating: 4.5,
    reviewCount: 100,
    likeCount: 100,
    isLike: false,
    onLikeClick: () => {},
  },
  {
    imageSrc: '/images/DefaultImage.png',
    name: '이수정',
    category: '과외',
    expertId: '125',
    rating: 4.5,
    reviewCount: 100,
    likeCount: 100,
    isLike: false,
    onLikeClick: () => {},
  },
  {
    imageSrc: '/images/DefaultImage.png',
    name: '최윤희',
    category: '취미/자기계발',
    expertId: '126',
    rating: 4.5,
    reviewCount: 100,
    likeCount: 100,
    isLike: false,
    onLikeClick: () => {},
  },
];

function PopularExpertSection() {
  const [selectedCategory, setSelectedCategory] = useState<ExpertCategory>(ExpertCategory.ALL);

  return (
    <section className="flex flex-col gap-40">
      <div className="flex justify-between items-end">
        <SectionTitle
          title="지금 인기 있는 전문가"
          subtitle="돕당에서 인기 많은 전문가를 알아보세요."
        />
        <ExpertCategoryButtons
          selectedCategory={selectedCategory}
          onCategorySelect={setSelectedCategory}
        />
      </div>
      <div className="grid grid-cols-4 gap-24">
        {POPULAR_EXPERT_ITEMS.map(item => (
          <PopularExpertItem key={item.expertId} {...item} />
        ))}
      </div>
    </section>
  );
}

export default PopularExpertSection;
