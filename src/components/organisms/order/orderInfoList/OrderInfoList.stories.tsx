import type { Meta, StoryObj } from '@storybook/react';
import OrderInfoList from './OrderInfoList';

const meta = {
  title: 'Organisms/Order/OrderInfoList',
  component: OrderInfoList,
  parameters: {
    layout: 'centered',
    componentSubtitle: '주문 정보 템플릿',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof OrderInfoList>;

export default meta;
type Story = StoryObj<typeof OrderInfoList>;

export const Default = () => {
  return (
    <OrderInfoList
      title="구매상품"
      infoList={[
        {
          attribute: '구매 상품',
          value: '이사 서비스',
        },
        {
          attribute: '전문가',
          value: '이상훈',
        },
      ]}
    />
  );
};
