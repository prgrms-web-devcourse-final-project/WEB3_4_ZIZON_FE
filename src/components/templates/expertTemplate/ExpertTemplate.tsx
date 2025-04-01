'use client';

import Banner from '@/components/atoms/banner/Banner';
import SearchBar from '@/components/atoms/inputs/searchBar/SearchBar';
import ExpertFilterTab from '@/components/molecules/expertFilterTab/ExpertFilterTab';
import ExpertList from '@/components/molecules/expertList/ExpertList';
import { EXPERT_LIST } from '@/components/molecules/expertList/ExpertList.stories';
import ExpertListItem from '@/components/molecules/expertListItem/ExpertListItem';
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
      <Banner
        title="원하는 전문가를 \n 쉽고 빠르게 찾아보세요!"
        subTitle="다양한 분야의 검증된 전문가들과 함께, 당신의 프로젝트를 성공적으로 완성하세요."
      />

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
