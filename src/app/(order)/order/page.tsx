'use client';

import ChargeInfo from '@/components/molecules/order/chargeInfo/ChargeInfo';
import OrderInfoList from '@/components/organisms/order/orderInfoList/OrderInfoList';
import OrderTemplate from '@/components/templates/orderTemplate/OrderTemplate';
import { PaymentType } from '@/types/payment';
import { useSearchParams } from 'next/navigation';

export default function OrderPage() {
  const searchParams = useSearchParams();

  const id = searchParams.get('id');
  const paymentType = searchParams.get('type') as PaymentType; // PROJECT, ORDER, PROVISION

  // 결제 정보 가져오는 로직을 여기에 작성

  const handlePayment = () => {
    // 결제하기 버튼 클릭 시 처리할 로직
  };
  return (
    // == Template 사용 예 ===
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
      {paymentType === 'PROJECT' && (
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
      )}
      <ChargeInfo serviceFee={10000} totalPrice={8000} />
    </OrderTemplate>
  );
}
