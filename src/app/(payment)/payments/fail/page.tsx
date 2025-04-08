import getFail from '@/apis/payment/getFail';
import getResult from '@/apis/payment/getFail';
import OrderResult from '@/components/organisms/order/orderResult/OrderResult';
import OrderResultTemplate from '@/components/templates/orderResultTemplate/OrderResultTemplate';
import { get } from 'http';

export default async function OrderResultPage({
  searchParams,
}: {
  searchParams: Promise<{
    orderId: string;
    paymentKey: string;
    amount: string;
  }>;
}) {
  const { orderId, paymentKey, amount } = await searchParams;
  const response = await getFail({
    orderId: orderId,
    paymentKey: paymentKey,
    amount: amount,
  });

  const failResultData = {
    errorCode: response.errorCode,
    message: response.message,
    status: response.status,
  };
  return <OrderResultTemplate status="FAIL" resultData={failResultData} />;
}
