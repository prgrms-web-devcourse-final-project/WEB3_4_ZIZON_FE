'use client';

import PaymentNotice from '@/components/molecules/order/paymentNotice/PaymentNotice';
import ResultBanner from '@/components/molecules/order/resultBanner/ResultBanner';
import ResultButtons from '@/components/molecules/order/resultButtons/ResultButtons';
import OrderResult from '@/components/organisms/order/orderResult/OrderResult';
import { APIBuilder } from '@/utils/APIBuilder';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function OrderResultTemplate() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get('orderId') as string;
  const paymentKey = searchParams.get('paymentKey') as string;
  const amount = searchParams.get('amount') as string;

  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('useEffect 내부 실행');
    const fetchPaymentResult = async () => {
      try {
        console.log('실행중');
        const response = await APIBuilder.get(
          `/payments/success?orderId=${orderId}&paymentKey=${paymentKey}&amount=${amount}`,
        )
          .withCredentials(true)
          .build()
          .call<any>();
        console.log('res', response);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };
    fetchPaymentResult();
  }, []);

  if (loading) return <p>로딩 중...</p>;
  return (
    <div className="flex flex-col items-center justify-center gap-40">
      <ResultBanner />
      <PaymentNotice text="결제 금액은 서비스 완료 후 전문가에게 전달됩니다." />
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
      <ResultButtons />
    </div>
  );
}
