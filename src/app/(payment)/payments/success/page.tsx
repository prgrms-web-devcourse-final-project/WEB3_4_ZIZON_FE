import getSuccess from '@/apis/payment/getSuccess';
import OrderResultTemplate from '@/components/templates/orderResultTemplate/OrderResultTemplate';

export default async function SuccessResultPage({
  searchParams,
}: {
  searchParams: Promise<{
    orderId: string;
    paymentKey: string;
    amount: string;
  }>;
}) {
  const { orderId, paymentKey, amount } = await searchParams;
  // 성공 자동으로 리디렉션되는 페이지
  //http://localhost:3000/payments/success?orderId=380dbef6-5dee-410d-a2c0-d9aed546023d&paymentKey=tviva20250408095747hBvF1&amount=100000
  // params -> serverurl/payments/success로 params 붙여서 호출
  // result로 리다이렉트

  const response = await getSuccess({
    orderId: orderId,
    paymentKey: paymentKey,
    amount: amount,
  });

  const successResultData = {
    amount: response.amount,
    expertName: response.expertName,
    paymentName: response.paymentName,
    status: response.status,
  };
  // 로딩
  return <OrderResultTemplate status="SUCCESS" resultData={successResultData} />;
}
