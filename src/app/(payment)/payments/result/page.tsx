import OrderResult from '@/components/organisms/order/orderResult/OrderResult';
import OrderResultTemplate from '@/components/templates/orderResultTemplate/OrderResultTemplate';

export default async function OrderResultPage() {
  // 성공/실패시 자동으로 리디렉션되는 페이지

  return (
    // === OrderResultTemplate 사용 예시 ===
    <OrderResultTemplate />
  );
}
