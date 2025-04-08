import type { Meta, StoryObj } from '@storybook/react';
import GradientCategoryItem from './GradientCategoryItem';

const meta = {
  title: 'molecules/GradientCategoryItem',
  component: GradientCategoryItem,
  parameters: {
    layout: 'centered',
    componentSubtitle: '그라데이션이 적용된 카테고리 카드 아이템',
  },
  tags: ['autodocs'],
} as Meta<typeof GradientCategoryItem>;

export default meta;
type Story = StoryObj<typeof meta>;

const CATEGORY_ARRAY = [
  {
    categoryName: '악보',
    caption: '당신의 음악을 완성하다.',
    linkTo: '/store',
    imageSrc: 'public/images/CategorySheetMusic.jpg',
  },
  {
    categoryName: '코드',
    caption: '프로젝트를 위한 완벽한 도구',
    linkTo: '/store',
    imageSrc: 'public/images/CategoryCode.jpg',
  },
  ,
  {
    categoryName: '분재(화분)',
    caption: '자연의 아름다움을 집안으로',
    linkTo: '/store',
    imageSrc: 'public/images/CategoryPot.jpeg',
  },
  {
    categoryName: '가구(DIY)',
    caption: '나만의 스타일로 꾸미다',
    linkTo: '/store',
    imageSrc: 'public/images/CategoryFurniture.jpeg',
  },
];

export const Default: Story = {
  args: {
    categoryName: '악보',
    caption: '당신의 음악을 완성하다.',
    linkTo: '/store',
    imageSrc: 'public/images/CategorySheetMusic.jpg',
  },
};

export const Code: Story = {
  args: {
    categoryName: '코드',
    caption: '프로젝트를 위한 완벽한 도구',
    linkTo: '/store',
    imageSrc: 'public/images/CategoryCode.jpg',
  },
};
export const Plant: Story = {
  args: {
    categoryName: '분재(화분)',
    caption: '자연의 아름다움을 집안으로',
    linkTo: '/store',
    imageSrc: 'public/images/CategoryPot.jpeg',
  },
};
export const Furniture: Story = {
  args: {
    categoryName: '가구(DIY)',
    caption: '나만의 스타일로 꾸미다',
    linkTo: '/store',
    imageSrc: 'public/images/CategoryFurniture.jpeg',
  },
};

export const AllCategory = () => {
  return (
    <div className="flex gap-16">
      {CATEGORY_ARRAY.map((category, index) => (
        <GradientCategoryItem
          key={index}
          categoryName={category!.categoryName}
          caption={category!.caption}
          linkTo={category!.linkTo}
          imageSrc={category!.imageSrc}
        />
      ))}
    </div>
  );
};
