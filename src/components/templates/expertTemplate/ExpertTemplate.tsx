'use client';

import Banner from '@/components/atoms/banner/Banner';
import SearchBar from '@/components/atoms/inputs/searchBar/SearchBar';
import ExpertFilterTab from '@/components/molecules/expert/expertFilterTab/ExpertFilterTab';
import ExpertList from '@/components/molecules/expert/expertList/ExpertList';
import { EXPERT_LIST } from '@/components/molecules/expert/expertList/ExpertList.stories';

import ExpertListItem from '@/components/molecules/expert/expertListItem/ExpertListItem';
import SortButtons, { SortType } from '@/components/molecules/sortButtons/SortButtons';
import ExpertSidebar from '@/components/organisms/sidebar/ExpertSidebar/ExpertSidebar';
import { CareerCategoryIdType, ProjectCategoryIdType } from '@/constants/category';
import { useState } from 'react';

export default function Template() {
  const [search, setSearch] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategoryIdType>(1000);
  const [selectedCareer, setSelectedCareer] = useState<CareerCategoryIdType>('junior');
  const [selectedSort, setSelectedSort] = useState<SortType>('latest');

  return (
    <div className="w-full h-fit">
      <Banner />

      {/* 사이드바 영역 */}
      <div className="w-full flex gap-24 mt-40">
        <ExpertSidebar
          onReset={() => {
            setSearch('');
            setSelectedCategory(1000);
            setSelectedCareer('junior');
          }}
          SearchBarComponent={
            <SearchBar
              onChange={(value: string) => setSearch(value)}
              placedholder="검색어를 입력해주세요"
              type="default"
              value={search}
            />
          }
          ExpertFilterTabComponent={
            <ExpertFilterTab
              selectedCategory={selectedCategory}
              selectedCareer={selectedCareer}
              onCategoryChange={(categoryId: ProjectCategoryIdType, checked: boolean) =>
                setSelectedCategory(categoryId)
              }
              onCareerChange={(careerId: CareerCategoryIdType) => setSelectedCareer(careerId)}
            />
          }
        />
        {/* 컨텐츠 영역 */}
        <div className="w-full flex flex-col gap-16">
          <SortButtons
            selectedSort={selectedSort}
            onSortChange={(sort: SortType) => {
              setSelectedSort(sort);
            }}
          />
          <ExpertList>
            {/* TODO : DUMMYDATA로 대체 */}
            {EXPERT_LIST.map(expert => (
              <ExpertListItem {...expert} key={expert.expert_id} />
            ))}
          </ExpertList>
        </div>
      </div>
    </div>
  );
}
