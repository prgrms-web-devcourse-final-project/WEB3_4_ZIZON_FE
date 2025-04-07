'use client';
import PaymentNotice from '@/components/molecules/order/paymentNotice/PaymentNotice';
import PaymentButton from '@/components/atoms/buttons/PaymentButton';
import OrderInfoList from '@/components/organisms/order/orderInfoList/OrderInfoList';
import ChargeInfo from '@/components/molecules/order/chargeInfo/ChargeInfo';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { postPayment } from '@/apis/payment/postPayment';

export default function OrderTemplate() {
  const searchParams = useSearchParams();
  const paymentType = searchParams.get('type') as string;
  const referenceId = searchParams.get('id') as string;

  const { data, isLoading } = useQuery({
    queryKey: ['paymentInfo', referenceId],
    queryFn: async () => postPayment({ paymentType, referenceId: ~~referenceId }),
  });

  if (isLoading) {
    console.log('결제 정보 로딩중');
  }

  return (
    <div className="w-full flex flex-col items-start gap-40 relative">
      {/* 제목과 안내사항 */}
      <h1 className="text-black12 font-semibold text-32">결제하기</h1>
      {paymentType === 'PROJECT' && (
        <PaymentNotice text="결제 금액은 서비스 완료 후 전문가에게 전달됩니다." />
      )}

      {/* 주문 정보 */}
      <div className="w-full flex flex-col gap-32">
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
      </div>

      {/* 결제하기 버튼 */}
      <div className="w-193 absolute right-0 bottom-[-80px]">
        <PaymentButton orderId={orderId} orderInfo={orderInfo} />
      </div>
    </div>
  );
}
