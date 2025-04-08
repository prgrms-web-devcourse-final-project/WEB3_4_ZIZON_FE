import type { Meta, StoryObj } from '@storybook/react';
import CommissionInfoItem from './CommissionInfoItem';

const meta = {
  title: 'Atoms/CommissionInfoItem',
  component: CommissionInfoItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CommissionInfoItem>;

export default meta;
type Story = StoryObj<typeof CommissionInfoItem>;

export const Default: Story = {
  args: {
    label: '마감일',
    content: new Date('2025-03-31'),
  },
};

export const Deadline: Story = {
  args: {
    label: '마감일',
    content: new Date('2024-03-25'),
  },
};

export const Location: Story = {
  args: {
    label: '근무지',
    content: '서울특별시 강남구',
  },
};

export const Budget: Story = {
  args: {
    label: '예산',
    content: 150000,
  },
};

export const LargeBudget: Story = {
  args: {
    label: '예산',
    content: 1500000,
  },
};
