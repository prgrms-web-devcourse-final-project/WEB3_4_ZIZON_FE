'use client';

import { EXPERT_LIST } from '@/components/molecules/expert/expertList/ExpertList.stories';
import { ExpertListItemProps } from '@/components/molecules/expert/expertListItem/ExpertListItem';
import { SortType } from '@/components/molecules/sortButtons/SortButtons';
import ExpertTemplate from '@/components/templates/expertTemplate/ExpertTemplate';
import { CareerCategoryIdType, ProjectCategoryIdType } from '@/constants/category';
import { useState } from 'react';

export default function ExpertPage() {
  // 여기서 expert-list 정보를 불러와야 함
  // expert-list는 검색어, 카테고리, 경력, 정렬 방식이 바뀜에 따라 새롭게 불러와져야 함

  const [search, setSearch] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategoryIdType>(1000);
  const [selectedCareer, setSelectedCareer] = useState<CareerCategoryIdType>('junior');
  const [selectedSort, setSelectedSort] = useState<SortType>('latest');

  // Template에 내려줘야 할 정보,
  const expertList: Array<ExpertListItemProps> = [...EXPERT_LIST];

  return (
    <div className="w-full min-x-1280 px-320">
      <ExpertTemplate
        search={search}
        selectedCategory={selectedCategory}
        selectedCareer={selectedCareer}
        selectedSort={selectedSort}
        onSearchChange={(value: string) => setSearch(value)}
        onCategoryChange={(categoryId: ProjectCategoryIdType, checked: boolean) =>
          setSelectedCategory(categoryId)
        }
        onCareerChange={(careerId: CareerCategoryIdType) => setSelectedCareer(careerId)}
        onSortChange={(sort: SortType) => setSelectedSort(sort)}
        onReset={() => {
          setSearch('');
          setSelectedCategory(1000);
          setSelectedCareer('junior');
        }}
        expertList={expertList}
      />
    </div>
  );
}
