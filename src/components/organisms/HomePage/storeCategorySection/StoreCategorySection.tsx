'use client';

import StandardButton from '@/components/atoms/buttons/standardButton/StandardButton';
import SectionTitle from '@/components/atoms/texts/sectionTitle/SectionTitle';
import GradientCategoryItem, {
  GradientCategoryItemProps,
} from '@/components/molecules/gradientCategoryItem/GradientCategoryItem';

const CATEGORY_ARRAY: GradientCategoryItemProps[] = [
  {
    categoryName: '악보',
    caption: '당신의 음악을 완성하다.',
    linkTo: '/store',
    imageSrc: '/images/CategorySheetMusic.jpg',
  },
  {
    categoryName: '코드',
    caption: '프로젝트를 위한 완벽한 도구',
    linkTo: '/store',
    imageSrc: '/images/CategoryCode.jpg',
  },
  {
    categoryName: '분재(화분)',
    caption: '자연의 아름다움을 집안으로',
    linkTo: '/store',
    imageSrc: '/images/CategoryPot.jpeg',
  },
  {
    categoryName: '가구(DIY)',
    caption: '나만의 스타일로 꾸미다',
    linkTo: '/store',
    imageSrc: '/images/CategoryFurniture.jpeg',
  },
] as const;

function StoreCategorySection() {
  return (
    <section className="flex flex-col gap-40">
      <div className="flex justify-between items-end">
        <SectionTitle
          title="전문가의 작품을 만나보세요!"
          subtitle="악보부터 DIY 가구까지, 다양한 분야의 전문가들이 직접 만든 작업물을 한곳에서 구매하세요."
        />
        <StandardButton text="모두보기" onClick={() => {}} disabled={false} state="default" />
      </div>
      <div className="grid grid-cols-4 gap-24">
        {CATEGORY_ARRAY.map(item => (
          <GradientCategoryItem key={item.categoryName} {...item} />
        ))}
      </div>
    </section>
  );
}

export default StoreCategorySection;
