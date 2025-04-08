import type { Meta, StoryObj } from '@storybook/react';
import ProductListItem from './ProductListItem';

const meta = {
  title: 'Molecules/ProductListItem',
  component: ProductListItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ProductListItem>;

export default meta;
type Story = StoryObj<typeof ProductListItem>;

const baseArgs = {
  imageUrl: '',
  category: '디지털 컨텐츠' as const,
  title: '디테일이 살아있는 차트 UI',
  seller_name: '코딩천재',
  price: 35000,
};

export const Large: Story = {
  args: {
    ...baseArgs,
    size: 'large',
  },
};

export const Small: Story = {
  args: {
    ...baseArgs,
    size: 'small',
  },
};

export const LivingCategory: Story = {
  args: {
    ...baseArgs,
    size: 'large',
    category: '리빙' as const,
    title: '수제 도자기 그릇 세트',
    seller_name: '도예공방',
    price: 89000,
  },
};

export const LongTitle: Story = {
  args: {
    ...baseArgs,
    size: 'large',
    title: '2024년 최신 트렌드가 반영된 웹디자인 템플릿 모음집 한정판',
  },
};

export const NoImage: Story = {
  args: {
    ...baseArgs,
    size: 'large',
    imageUrl: '',
  },
};

export const HighPrice: Story = {
  args: {
    ...baseArgs,
    size: 'large',
    price: 1250000,
  },
};
