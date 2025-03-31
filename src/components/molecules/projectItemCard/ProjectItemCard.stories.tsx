import type { Meta, StoryObj } from '@storybook/react';
import ProjectItemCard from './ProjectItemCard';

const meta = {
  title: 'Molecules/ProjectItemCard',
  component: ProjectItemCard,
  parameters: {
    layout: 'centered',
    componentSubtitle: '메인페이지에서 사용되는 최근 등록된 서비스 컴포넌트',
  },
  tags: ['autodocs'],
} as Meta<typeof ProjectItemCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    categoryId: 1000,
    title: '원룸이사 도와주실 분 구합니다.',
    budget: '300000',
    dueDate: '2023-12-31',
    comissiond: '1234df',
  },
};
