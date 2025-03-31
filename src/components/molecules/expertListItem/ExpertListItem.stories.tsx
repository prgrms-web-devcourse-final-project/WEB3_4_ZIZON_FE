import type { Meta, StoryObj } from '@storybook/react';
import ExpertListItem from './ExpertListItem';

const meta = {
  title: 'Molecules/ExpertListItem',
  component: ExpertListItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ExpertListItem>;

export default meta;
type Story = StoryObj<typeof ExpertListItem>;

export const Default: Story = {
  args: {
    expert_id: '1',
    name: '이상훈',
    profile_image: '/images/Tutoring.png',
    introduction: '단순한 이사가 아닌, 진짜 이사가 어떤 것인지 보여드립니다.',
    career_years: 13,
    skill: '이사/청소',
  },
};

export const NoImage: Story = {
  args: {
    ...Default.args,
    profile_image: '',
  },
};
