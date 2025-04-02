import type { Meta, StoryObj } from '@storybook/react';
import OrderResult from './OrderResult';

const meta = {
  title: 'Organisms/Order/OrderResult',
  component: OrderResult,
  parameters: {
    layout: 'centered',
    componentSubtitle: '주문 결과 정보 ',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof OrderResult>;

export default meta;
type Story = StoryObj<typeof OrderResult>;

export const Default = () => {
  return (
    <OrderResult
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
      totalPrice={1000000}
    />
  );
};
