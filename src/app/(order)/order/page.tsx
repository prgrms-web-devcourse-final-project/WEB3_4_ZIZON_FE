'use client';
import { loadTossPayments } from '@tosspayments/payment-sdk';
import ChargeInfo from '@/components/molecules/order/chargeInfo/ChargeInfo';
import OrderInfoList from '@/components/organisms/order/orderInfoList/OrderInfoList';
import OrderTemplate from '@/components/templates/orderTemplate/OrderTemplate';
import { PaymentType } from '@/types/payment';
import { useSearchParams } from 'next/navigation';

export default function OrderPage() {
  const searchParams = useSearchParams();

  const id = searchParams.get('id');
  const paymentType = searchParams.get('type') as PaymentType; // PROJECT, ORDER, PROVISION

  // 1. 서버에서 결제 정보(orderId, customerKey, 구매 상품 정보)를 가져오기 -> RQ로 래핑
  const orderRes = await fetch('/payments/orderId', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      paymentType: paymentType,
      referenceId: id,
    }),
  }).then(res => res.json());

  // 2. 결제에 필요한 orderId, customerKey
  const { orderId, customerKey } = orderRes;
  // TODO : 서버에서 orderRes에서 구매상품정보 가져오는 기능 추가예정

  // 3. 결제하기 버튼 클릭 시 처리할 이벤트 핸들러
  const handlePayment = async () => {
    if (!process.env.NEXT_PUBLIC_TOSS_CLIENT_KEY) {
      throw new Error('NEXT_PUBLIC_TOSS_KEY is not defined');
    }

    // TRY : loadTossPayments(customerKey)
    loadTossPayments(process.env.NEXT_PUBLIC_TOSS_CLIENT_KEY)
      .then(tossPayments => {
        tossPayments.requestPayment('카드', {
          orderId: orderId, // 주문번호
          amount: 100, // 결제 금액
          orderName: '테스트 결제', // 구매상품
          customerName: '김토스', // 구매자 이름
          successUrl: `${process.env.SERVER_URL}/payments/success`, // 결제 성공 시  URL (server)
          failUrl: `${process.env.SERVER_URL}/payments/fail`, // 결제 실패 시 URL (server)
        });
      })
      .catch(function (error) {
        if (error.code === 'USER_CANCEL') {
          // 구매자가 결제창을 닫았을 때 에러 처리
        } else if (error.code === 'INVALID_CARD_COMPANY') {
          // 유효하지 않은 카드 코드에 대한 에러 처리
        }
      });
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
