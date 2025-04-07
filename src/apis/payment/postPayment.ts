import { APIBuilder } from '@/utils/APIBuilder';

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
export const postPayment = async (request: PaymentRequestType): Promise<PaymentResponseType> => {
  const { referenceId, paymentType } = request;

  const response = await APIBuilder.post('/payments/orderId', {
    referenceId,
    paymentType,
  })
    .baseURL(`${process.env.LOCAL_SERVER_URL}`)
    .data({
      referenceId,
      paymentType,
    })
    .headers({
      'Content-Type': 'application/json',
    })
    .timeout(10000)
    .withCredentials(true)
    .build()
    .call<PaymentResponseType>();

  return response.data;
};
