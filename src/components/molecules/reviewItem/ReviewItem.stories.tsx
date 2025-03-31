import type { Meta, StoryObj } from '@storybook/react';
import ReviewItem from './ReviewItem';

const meta = {
  title: 'Molecules/ReviewItem',
  component: ReviewItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ReviewItem>;

export default meta;
type Story = StoryObj<typeof ReviewItem>;

export const Default: Story = {
  args: {
    profile_image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd5nBVKsENWNTJfWtT4vavHKYDQXuxqQad9w&s',
    name: '김민수',
    content: '이사 서비스가 정말 좋았습니다. 꼼꼼하게 포장해주시고, 시간도 잘 지켜주셨어요.',
    review_type: '이사/청소',
    created_at: new Date('2025-03-31T09:00:00'),
    rating: 5,
  },
};

export const NoProfileImage: Story = {
  args: {
    ...Default.args,
    profile_image: '',
  },
};

export const LongContent: Story = {
  args: {
    ...Default.args,
    content:
      '이사 서비스가 정말 좋았습니다. 꼼꼼하게 포장해주시고, 시간도 잘 지켜주셨어요. 특히 깨지기 쉬운 물건들도 안전하게 운반해주셔서 매우 만족스러웠습니다. 다음에도 이사할 일이 있다면 꼭 다시 이용하고 싶은 서비스였습니다.',
  },
};

export const LowRating: Story = {
  args: {
    ...Default.args,
    rating: 2,
  },
};

export const OldReview: Story = {
  args: {
    ...Default.args,
    created_at: new Date('2024-03-31T09:00:00'), // 1년 전 리뷰
  },
};
