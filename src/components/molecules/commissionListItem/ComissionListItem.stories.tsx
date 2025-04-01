import type { Meta, StoryObj } from '@storybook/react';
import ComissionListItem from './ComissionListItem';

const meta = {
  title: 'Molecules/ComissionListItem',
  component: ComissionListItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ComissionListItem>;

export default meta;
type Story = StoryObj<typeof ComissionListItem>;

const baseArgs = {
  location: '서울시 마포구',
  title: '고등학교 수학 과외 선생님 구합니다',
  description: '고3 수험생 수학 성적 향상을 위한 과외 선생님을 찾고 있습니다.',
  budget: 150000,
  deadline: new Date('2024-03-31'),
  created_at: new Date('2024-03-20'),
};

export const Default: Story = {
  args: baseArgs,
};

export const LongDescription: Story = {
  args: {
    ...baseArgs,
    description:
      '고3 수험생 수학 성적 향상을 위한 과외 선생님을 찾고 있습니다. 기초가 부족한 상태라 기초부터 차근차근 가르쳐주실 수 있는 선생님이었으면 좋겠습니다. 주 2회, 각 2시간씩 수업 예정입니다.',
  },
};

export const HighBudget: Story = {
  args: {
    ...baseArgs,
    budget: 1500000,
  },
};
