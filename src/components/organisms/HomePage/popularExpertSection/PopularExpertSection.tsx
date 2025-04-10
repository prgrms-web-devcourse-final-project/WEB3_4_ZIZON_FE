'use client';

import { useState } from 'react';
import PopularExpertItem, {
  PopularExpertItemProps,
} from '@/components/molecules/popularExpertItem/PopularExpertItem';
import { ExpertCategory } from '@/constants/expert';
import SectionTitle from '@/components/atoms/texts/sectionTitle/SectionTitle';
import ExpertCategoryButtons from '@/components/molecules/HomePage/ExpertCategoryButtons';
import { SortedExperts } from '@/apis/main/getPopularExpert';

interface PopularExpertSectionProps{
  expertsByCategory: SortedExperts;
}
function PopularExpertSection({expertsByCategory}: PopularExpertSectionProps) {
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
        {expertsByCategory[selectedCategory] && expertsByCategory[selectedCategory].length > 0 && (
          expertsByCategory[selectedCategory].slice(0, 4).map((item) => (
            <PopularExpertItem key={item.name} {...item} />
          ))
        )}
      </div>
    </section>
  );
}

export default PopularExpertSection;
