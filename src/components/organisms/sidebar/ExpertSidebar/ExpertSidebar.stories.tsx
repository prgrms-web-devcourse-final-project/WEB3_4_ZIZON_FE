import type { Meta, StoryObj } from '@storybook/react';
import ExpertSidebar from './ExpertSidebar';
import SearchBar from '@/components/atoms/inputs/searchBar/SearchBar';
import { useState } from 'react';
import { CareerCategoryIdType, ProjectCategoryIdType } from '@/constants/category';
import ExpertFilterTab from '@/components/molecules/expertFilterTab/ExpertFilterTab';
const meta = {
  title: 'Organisms/ExpertSidebar',
  component: ExpertSidebar,
  parameters: {
    layout: 'centered',
    componentSubtitle: '전문가 조회 페이지의 사이드바',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ExpertSidebar>;

export default meta;
type Story = StoryObj<typeof ExpertSidebar>;

export const Default = () => {
  const [search, setSearch] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategoryIdType>(1000);
  const [selectedCareer, setSelectedCareer] = useState<CareerCategoryIdType>('junior');

  return (
    <div className="w-411 h-full">
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
    </div>
  );
};
