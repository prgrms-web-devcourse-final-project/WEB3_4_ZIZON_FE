import type { Meta, StoryObj } from '@storybook/react';
import OrderTemplate from './OrderTemplate';
import OrderInfoList from '@/components/organisms/order/orderInfoList/OrderInfoList';
import ChargeInfo from '@/components/molecules/order/chargeInfo/ChargeInfo';

const meta = {
  title: 'Templates/Order/OrderTemplate',
  component: OrderTemplate,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof OrderTemplate>;

export default meta;

export const Default = () => {
  const handlePayment = () => {
    // 결제하기 버튼 클릭 시 처리할 로직
  };
  return (
    <OrderTemplate paymentType={'PROJECT'} onPaymentClick={handlePayment}>
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
      <OrderInfoList
        title="견적상세"
        infoList={[
          {
            attribute: '이사 날짜',
            value: '2023년 10월 1일',
          },
          {
            attribute: '이사 시간',
            value: '오후 2시',
          },
        ]}
      />
      <ChargeInfo serviceFee={10000} totalPrice={8000} />
    </OrderTemplate>
  );
};
