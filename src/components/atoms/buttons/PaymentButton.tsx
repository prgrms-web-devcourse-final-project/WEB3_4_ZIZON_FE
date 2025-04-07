'use client';

import { loadTossPayments, TossPaymentsPayment } from '@tosspayments/tosspayments-sdk';

import { PaymentResponseType } from '@/apis/payment/postPayment';
import { useEffect, useState } from 'react';

export default function PaymentButton({ paymentInfo }: { paymentInfo: PaymentResponseType }) {
  console.log('paymentInfo', paymentInfo);
  const [payment, setPayment] = useState<TossPaymentsPayment | null>(null);

  const clientKey = process.env.NEXT_PUBLIC_TOSS_CLIENT_KEY;
  const customerKey = paymentInfo.customerKey;

  useEffect(() => {
    async function fetchPayment() {
      try {
        if (!clientKey) {
          throw new Error('NEXT_PUBLIC_TOSS_KEY is not defined');
        }
        const tossPayments = await loadTossPayments(clientKey);

        if (!customerKey) {
          throw new Error('customerKey is not defined');
        }
        // 회원 결제
        const payment = tossPayments.payment({
          customerKey,
        });
        setPayment(payment);
      } catch (error) {
        console.error('Error fetching payment:', error);
      }
    }

    fetchPayment();
  }, []);

  const handlePayment = async () => {
    // clientKey는 돕당용 : 결제 페이지 랜더링 시 사용
    // customerKey는 고객용

    if (!payment) {
      console.error('Payment object is not initialized');
      return;
    }
    await payment.requestPayment({
      method: 'CARD',
      orderId: paymentInfo.orderId, // 주문번호
      amount: {
        currency: 'KRW',
        value: paymentInfo.price,
      },
      orderName: paymentInfo.category, // 구매상품
      successUrl: `${window.location.origin}/payments/success`, // 결제 성공 시  URL -> ✅ SUCCESS 결제창 열림
      failUrl: `${window.location.origin}/payments/fail`, // 결제 실패 시 URL -> ✅ SUCCESS
      card: {
        useEscrow: false,
        useCardPoint: false,
        flowMode: 'DEFAULT',
        useAppCardOnly: false,
      },
    });
  };

  return (
    <button
      type="button"
      disabled={false}
      onClick={() => handlePayment()}
      className={`w-200 px-16 py-12 rounded-[8px] text-16 font-semibold cursor-pointer bg-primary5 text-primary0`}
    >
      결제하기
    </button>
  );
}
