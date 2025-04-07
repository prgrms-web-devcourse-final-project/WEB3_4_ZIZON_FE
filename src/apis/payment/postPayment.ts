import { APIBuilder } from '@/utils/APIBuilder';
import { cookies } from 'next/headers';

export interface PaymentRequestType {
  referenceId: number;
  paymentType: string;
}

export interface PaymentResponseType {
  // 결제창 연동을 위한 key
  orderId: string;
  customerKey: string;
  // 구매 상품 정보
  expertName: string;
  category: string;
  price: number;
  startDate: string;
  endDate: string;
}

// 백엔드로 부터 결제창 오픈에 필요한 OrderId, CustomerKey를 가져오는 API
export const postPayment = async (request: PaymentRequestType) => {
  const { referenceId, paymentType } = request;
  console.log('🔥 요청 req query', referenceId, paymentType);

  const response = await APIBuilder.post('/payments/orderId', {
    referenceId: referenceId,
    paymentType: paymentType,
  })
    .headers({
      'Content-Type': 'application/json',
    })
    .withCredentials(true)
    .timeout(50000)
    .build()
    .call();
  console.log('결제창 연동을 위한 res', response);
  console.log('결제창 연동을 위한 res', response.data);

  // 요청 실행

  // const Data = {
  //   orderId: response.data.orderId,
  //   customerKey: response.data.customerKey,
  //   expertName: response.data.expertName,
  //   category: response.data.category,
  //   price: response.data.price,
  //   startDate: response.data.startDate,
  //   endDate: response.data.endDate,
  // };
  // return Data;
  return response;
};
