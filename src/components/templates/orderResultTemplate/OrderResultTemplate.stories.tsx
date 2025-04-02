import type { Meta, StoryObj } from '@storybook/react';
import OrderResultTemplate from './OrderResultTemplate';
import OrderResult from '@/components/organisms/order/orderResult/OrderResult';

const meta = {
  title: 'Templates/Order/OrderResultTemplate',
  component: OrderResultTemplate,
  parameters: {
    layout: 'fullscreen',
    componentSubtitle: '주문 결과 페이지 ',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof OrderResultTemplate>;

export default meta;
type Story = StoryObj<typeof OrderResultTemplate>;

export const Default = () => {
  return (
    <OrderResultTemplate
      OrderResultComponent={
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
      }
    />
  );
};
