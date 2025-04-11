import { postPayment } from '@/apis/payment/postPayment';
import OrderTemplate from '@/components/templates/orderTemplate/OrderTemplate';

export default async function OrderPage({
  searchParams,
}: {
  searchParams: Promise<{ id: string; type: string; quantity?: string }>;
}) {
  // 테스트 경로 : /payments?id=53&type=PROJECT
  // 1. 서버에서 결제 정보(orderId, customerKey, 구매 상품 정보)를 가져오기

  const { id, type, quantity } = await searchParams;

  const paymentRequest = quantity
    ? {
        referenceId: ~~id,
        paymentType: type,
        quantity: ~~quantity,
      }
    : {
        referenceId: ~~id,
        paymentType: type,
      };
  const data = await postPayment(paymentRequest);

  // console.log('결제 정보:', data);
  return <OrderTemplate data={data} paymentType={type} />;
}
