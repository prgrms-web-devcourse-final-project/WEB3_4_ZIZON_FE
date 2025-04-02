import OrderResult from '@/components/organisms/order/orderResult/OrderResult';
import OrderResultTemplate from '@/components/templates/orderResultTemplate/OrderResultTemplate';

export default function OrderResultPage() {
  // 여기서 결제 완료 정보 호출

  return (
    // === OrderResultTemplate 사용 예시 ===
    <OrderResultTemplate
      OrderResultComponent={
        <OrderResult
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
          totalPrice={1000000}
        />
      }
    />
  );
}
