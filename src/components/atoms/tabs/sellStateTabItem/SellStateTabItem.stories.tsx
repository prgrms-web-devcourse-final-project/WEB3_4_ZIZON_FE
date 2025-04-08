import { Meta, StoryObj } from '@storybook/react';
import SellStateTabItem from './SellStateTabItem';

const meta = {
  title: 'atoms/SellStateTabItem',
  component: SellStateTabItem,
  tags: ['autodocs'],
} as Meta<typeof SellStateTabItem>;

export default meta;

type Story = StoryObj<typeof SellStateTabItem>;

export const Progress: Story = {
  args: {
    state: "진행",
    count: 10
  },
};

export const Waiting: Story = {
  args: {
    state: "대기",
    count: 123
  },
};

export const Cancellation: Story = {
  args: {
    state: "취소",
    count: 1234
  },
};

export const PurchaseConfirmation: Story = {
  args: {
    state: "구매",
    count: 12345
  },
};

