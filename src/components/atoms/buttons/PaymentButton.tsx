import { PropsWithChildren, isValidElement, ReactElement, cloneElement } from 'react';
import { loadTossPayments } from '@tosspayments/payment-sdk';
import { PROJECT_CATEGORY, ProjectCategoryIdType } from '@/constants/category';

interface PaymentInfo {
  seller: string;
  categoryId: ProjectCategoryIdType;
  charge: number;
  startDate: string;
  endDate: string;
}

export default function PaymentButton({
  orderInfo,
  orderId,
}: {
  orderInfo: PaymentInfo;
  orderId: string;
}) {
  const handlePayment = async () => {
    if (!process.env.NEXT_PUBLIC_TOSS_CLIENT_KEY) {
      throw new Error('NEXT_PUBLIC_TOSS_KEY is not defined');
    }
    // clientKey는 돕당용 : 결제 페이지 랜더링 시 사용
    // customerKey는 고객용
    // TRY : loadTossPayments(customerKey)
    loadTossPayments(process.env.NEXT_PUBLIC_TOSS_CLIENT_KEY)
      .then(tossPayments => {
        tossPayments.requestPayment('카드', {
          orderId: orderId, // 주문번호
          amount: orderInfo.charge, // 결제 금액
          orderName: PROJECT_CATEGORY[orderInfo.categoryId], // 구매상품
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
    <button
      type="button"
      disabled={false}
      onClick={handlePayment}
      className={`px-16 py-12 rounded-[8px] text-16 font-semibold cursor-pointer bg-primary5 text-primary0`}
    >
      결제하기
    </button>
  );
}
