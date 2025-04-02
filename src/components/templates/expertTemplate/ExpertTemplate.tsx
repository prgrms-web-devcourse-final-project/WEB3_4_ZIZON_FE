'use client';

import Banner from '@/components/atoms/banner/Banner';
import SearchBar from '@/components/atoms/inputs/searchBar/SearchBar';
import ExpertFilterTab from '@/components/molecules/expert/expertFilterTab/ExpertFilterTab';
import ExpertList from '@/components/molecules/expert/expertList/ExpertList';
import ExpertListItem, {
  ExpertListItemProps,
} from '@/components/molecules/expert/expertListItem/ExpertListItem';
import SortButtons, { SortType } from '@/components/molecules/sortButtons/SortButtons';
import ExpertSidebar from '@/components/organisms/sidebar/ExpertSidebar/ExpertSidebar';
import { CareerCategoryIdType, ProjectCategoryIdType } from '@/constants/category';

interface ExpertTemplateProps {
  search: string;
  selectedCategory: ProjectCategoryIdType;
  selectedCareer: CareerCategoryIdType;
  selectedSort: SortType;
  onSearchChange: (value: string) => void;
  onCategoryChange: (categoryId: ProjectCategoryIdType, checked: boolean) => void;
  onCareerChange: (careerId: CareerCategoryIdType) => void;
  onSortChange: (sort: SortType) => void;
  onReset: () => void;
  expertList: Array<ExpertListItemProps>;
}

export default function ExpertTemplate({
  search,
  selectedCategory,
  selectedCareer,
  selectedSort,
  onSearchChange,
  onCareerChange,
  onCategoryChange,
  onSortChange,
  onReset,
  expertList,
}: ExpertTemplateProps) {
  return (
    <div className="w-full h-fit mt-46">
      <Banner />

      {/* 사이드바 영역 */}
      <div className="w-full flex gap-24 mt-40">
        <ExpertSidebar
          onReset={() => {
            onReset();
          }}
          SearchBarComponent={
            <SearchBar
              onChange={(value: string) => onSearchChange(value)}
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
                onCategoryChange(categoryId, checked)
              }
              onCareerChange={(careerId: CareerCategoryIdType) => onCareerChange(careerId)}
            />
          }
        />
        {/* 컨텐츠 영역 */}
        <div className="w-full flex flex-col gap-16">
          <SortButtons
            selectedSort={selectedSort}
            onSortChange={(sort: SortType) => {
              onSortChange(sort);
            }}
          />
          <ExpertList>
            {expertList.map(expert => (
              <ExpertListItem {...expert} key={expert.expert_id} />
            ))}
          </ExpertList>
        </div>
      </div>
    </div>
  );
}
