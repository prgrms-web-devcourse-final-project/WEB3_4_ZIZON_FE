import type { Meta, StoryObj } from '@storybook/react';
import ExpertFilterTab from './ExpertFilterTab';
import { useState } from 'react';
import { CareerCategoryIdType, ProjectCategoryIdType } from '@/constants/category';
const meta = {
  title: 'Molecules/Expert/ExpertFilterTab',
  component: ExpertFilterTab,
  parameters: {
    layout: 'centered',
    componentSubtitle: '전문가 조회 페이지의 사이드바에 사용되는 필터 탭',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ExpertFilterTab>;

export default meta;
type Story = StoryObj<typeof ExpertFilterTab>;

export const Default = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategoryIdType>(1000);
  const [selectedCareer, setSelectedCareer] = useState<CareerCategoryIdType>('junior');

  return (
    <ExpertFilterTab
      selectedCategory={selectedCategory}
      selectedCareer={selectedCareer}
      onCategoryChange={(categoryId: ProjectCategoryIdType, checked: boolean) =>
        setSelectedCategory(categoryId)
      }
      onCareerChange={(careerId: CareerCategoryIdType) => setSelectedCareer(careerId)}
    />
  );
};
