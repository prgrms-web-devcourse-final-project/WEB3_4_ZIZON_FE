import type { Meta, StoryObj } from '@storybook/react';
import ExpertProfile from './ExpertProfile';
import ExpertInfoCard from '@/components/molecules/expert/expertInfoCard/ExpertInfoCard';

const meta = {
  title: 'Molecules/ExpertDetail/ExpertProfile',
  component: ExpertProfile,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ExpertProfile>;

export default meta;
type Story = StoryObj<typeof ExpertProfile>;

export const Default: Story = {
  args: {
    profileImageUrl: '/images/DefaultImage.png',
    name: '이상훈',
    introduction: '단순한 이사가 아닌, 진짜 이사가 어떤 것인지 보여드립니다.',
    categoryId: 1000,
    ExpertInfoCardComponent: (
      <ExpertInfoCard
        infoArray={[
          {
            content: '홍길동',
            title: '이름',
          },
          {
            content: '개발자',
            title: '직업',
          },
          {
            content: '5년',
            title: '경력',
          },
        ]}
        type="large"
      />
    ),
  },
};
