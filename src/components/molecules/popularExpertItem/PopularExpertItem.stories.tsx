import type { Meta, StoryObj } from '@storybook/react';
import PopularExpertItem from './PopularExpertItem';

const meta = {
  title: 'Molecules/PopularExpertItem',
  component: PopularExpertItem,
  parameters: {
    layout: 'centered',
    componentSubtitle: '메인페이지에서 사용되는 인기 전문가 카드 컴포넌트',
  },
  tags: ['autodocs'],
} as Meta<typeof PopularExpertItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imageSrc: '/public/images/ServiceMock.png',
    name: '조현우',
    category: '설치/수리',
    rating: 4.5,
    reviewCount: 100,
    likeCount: 50,
    expertId: 'e125434',
    onLikeClick: () => alert('좋아요 클릭'),
    isFilled: false,
  },
};

export const ErrorImage: Story = {
  args: {
    imageSrc: '/public/images/Service.png',
    name: '조현우',
    category: '설치/수리',
    rating: 4.5,
    reviewCount: 100,
    likeCount: 50,
    expertId: 'e125434',
    onLikeClick: () => alert('좋아요 클릭'),
    isFilled: false,
  },
};
