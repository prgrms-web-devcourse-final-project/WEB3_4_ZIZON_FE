'use client';

import { SuccessResponse } from '@/apis/payment/getSuccess';
import PaymentNotice from '@/components/molecules/order/paymentNotice/PaymentNotice';
import ResultBanner from '@/components/molecules/order/resultBanner/ResultBanner';
import ResultButtons from '@/components/molecules/order/resultButtons/ResultButtons';
import OrderResult from '@/components/organisms/order/orderResult/OrderResult';

type SuccessResultType = Pick<SuccessResponse, 'amount' | 'expertName' | 'paymentName' | 'status'>;
type FailResultType = Pick<SuccessResponse, 'errorCode' | 'message' | 'status'>;

interface OrderResultTemplateProps<T extends 'SUCCESS' | 'FAIL'> {
  status: T;
  resultData: T extends 'SUCCESS' ? SuccessResultType : FailResultType;
}

export default function OrderResultTemplate<T extends 'SUCCESS' | 'FAIL'>({
  status,
  resultData,
}: OrderResultTemplateProps<T>) {
  return (
    <div className="flex flex-col items-center justify-center gap-40">
      <ResultBanner status={status} />
      {status === 'SUCCESS' ? (
        <>
          <PaymentNotice text="결제 금액은 서비스 완료 후 전문가에게 전달됩니다." />
          <OrderResult
            infoList={[
              {
                attribute: '구매 상품',
                value: (resultData as SuccessResultType).paymentName,
              },
              {
                attribute: '전문가',
                value: (resultData as SuccessResultType).expertName,
              },
              {
                attribute: '가격',
                value: (resultData as SuccessResultType).amount.toLocaleString('ko-KR') + '원',
              },
            ]}
            totalPrice={(resultData as SuccessResultType).amount}
          />
        </>
      ) : (
        <OrderResult
          infoList={[
            {
              attribute: '구매 실패 코드',
              value: (resultData as FailResultType).errorCode!.toString(),
            },
            {
              attribute: '구매 실패 사유',
              value: (resultData as FailResultType).message!,
            },
          ]}
          totalPrice={1000000}
        />
      )}

      <ResultButtons />
    </div>
  );
}
