import type { Meta, StoryObj } from '@storybook/react';
import ExpertIntroduction from './ExpertIntroduction';

const meta = {
  title: 'Organisms/ExpertDetail/ExpertIntroduction',
  component: ExpertIntroduction,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ExpertIntroduction>;

export default meta;
type Story = StoryObj<typeof ExpertIntroduction>;

const Reviews = [
  {
    profile_image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd5nBVKsENWNTJfWtT4vavHKYDQXuxqQad9w&s',
    name: '김민수',
    content: '이사 서비스가 정말 좋았습니다. 꼼꼼하게 포장해주시고, 시간도 잘 지켜주셨어요.',
    review_type: '이사/청소',
    created_at: new Date('2025-03-31T09:00:00'),
    rating: 5,
  },
  {
    profile_image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd5nBVKsENWNTJfWtT4vavHKYDQXuxqQad9w&s',
    name: '김민수',
    content: '이사 서비스가 정말 좋았습니다. 꼼꼼하게 포장해주시고, 시간도 잘 지켜주셨어요.',
    review_type: '이사/청소',
    created_at: new Date('2025-03-31T09:00:00'),
    rating: 5,
  },
  {
    profile_image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd5nBVKsENWNTJfWtT4vavHKYDQXuxqQad9w&s',
    name: '김민수',
    content: '이사 서비스가 정말 좋았습니다. 꼼꼼하게 포장해주시고, 시간도 잘 지켜주셨어요.',
    review_type: '이사/청소',
    created_at: new Date('2025-03-31T09:00:00'),
    rating: 5,
  },
];

export const Default: Story = {
  args: {
    introduction:
      '대학입시·논술·국영수 과외 전문가 이수정입니다.저는 15년 이상의 경력을 바탕으로, 대학입시와 논술, 국어, 영어, 수학 과외를 전문으로 지도하고 있습니다. 학생들의 개별적인 학습 스타일과 수준에 맞춘 맞춤형 수업을 제공하며, 그들의 학습 목표를 달성할 수 있도록 최선을 다하고 있습니다.',
    major_category: '이사/청소',
    sub_category: '이사',
    career_years: 13,
    certification: ['청소사업자 등록증', '청소전문가'],
    ReviewList: Reviews,
  },
};
