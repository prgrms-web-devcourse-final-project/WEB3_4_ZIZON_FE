import { Meta, StoryObj } from '@storybook/react';
import OrderListItem from './OrderListItem';

const meta = {
  title: 'Molecules/OrderListItem',
  component: OrderListItem,
  tags: ['autodocs'],
} as Meta<typeof OrderListItem>;

export default meta;

type Story = StoryObj<typeof OrderListItem>;

export const Progress: Story = {
  args: {
    imageUrl: "https://placehold.co/600x400",
    price: 150000,
    sellState: "진행",
    onClickAskButton: () => alert("문의하기 버튼"),
    category: "과외 • 수능 대비"
  },
};

export const Waiting: Story = {
  args: {
    imageUrl: "https://placehold.co/600x400",
    price: 150000,
    sellState: "대기",
    onClickAskButton: () => alert("문의하기 버튼"),
    category: "과외 • 수능 대비"
  },
};

export const Cancellation: Story = {
  args: {
    imageUrl: "https://placehold.co/600x400",
    price: 150000,
    sellState: "취소",
    onClickAskButton: () => alert("문의하기 버튼"),
    category: "과외 • 수능 대비"
  },
};

export const PurchaseConfirmation: Story = {
  args: {
    imageUrl: "https://placehold.co/600x400",
    price: 150000,
    sellState: "구매",
    onClickAskButton: () => alert("문의하기 버튼"),
    category: "과외 • 수능 대비"
  },
};
