import { Project } from '@/types/project';
import { APIBuilder } from '@/utils/APIBuilder';
import { cookies } from 'next/headers';
export interface PaymentRequestType {
  referenceId: number;
  paymentType: string;
  quantity?: number; // 주문 수량, 선택 사항
}

export interface StorePaymentResponseType {
  customerKey: string;
  orderId: string;
  clientId: number;
  totalPrice: number;
  price: number;
  sellerName: string;
  title: string;
}

export interface ProjectPaymentResponseType {
  customerKey: string;
  expertName: string;
  expertId: number;
  clientId: number;
  orderId: string;
  startDate: string;
  endDate: string;
  title: string;
  categoryName: string;
  price: number;
  contractId: number;
  projectId: number;
  categoryId: number;
}

export type PaymentResponseType = StorePaymentResponseType | ProjectPaymentResponseType;

// 백엔드로 부터 결제창 오픈에 필요한 OrderId, CustomerKey를 가져오는 API
export const postPayment = async (request: PaymentRequestType): Promise<PaymentResponseType> => {
  const { referenceId, paymentType } = request;
  const cookieStore = await cookies();
  const token = cookieStore.get('accessToken')?.value;

  const buyProductType = request.quantity ? 'STORE_PRODUCT' : 'PROJECT_SERVICE';
  const requestBody = request.quantity
    ? {
        referenceId: referenceId,
        paymentType: paymentType,
        quantity: request.quantity,
      }
    : {
        referenceId: referenceId,
        paymentType: paymentType,
      };

  if (buyProductType === 'STORE_PRODUCT') {
    const response = await APIBuilder.post('/payments/orderId', requestBody)
      .headers({
        'Content-Type': 'application/json',
        Cookie: `accessToken=${token}`,
      })
      .withCredentials(true)
      .timeout(50000)
      .build()
      .call<StorePaymentResponseType>();
    return response.data;
  } else {
    const response = await APIBuilder.post('/payments/orderId', requestBody)
      .headers({
        'Content-Type': 'application/json',
        Cookie: `accessToken=${token}`,
      })
      .withCredentials(true)
      .timeout(50000)
      .build()
      .call<ProjectPaymentResponseType>();
    return response.data;
  }
};
