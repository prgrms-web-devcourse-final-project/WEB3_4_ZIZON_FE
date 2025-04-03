import OrderResult from '@/components/organisms/order/orderResult/OrderResult';
import OrderResultTemplate from '@/components/templates/orderResultTemplate/OrderResultTemplate';

export default async function OrderResultPage() {
  // 성공/실패시 자동으로 리디렉션되는 페이지
  // const secretKey = process.env.TOSS_SECRET_KEY || '';
  // const basTOKEN = Buffer.from(`${secretKey}`, 'utf-8').toString('base64');

  // const url = 'https://api.tosspayments.com/v1/payments/orders/';

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
