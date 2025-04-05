import ChargeInfo from '@/components/molecules/order/chargeInfo/ChargeInfo';
import OrderInfoList from '@/components/organisms/order/orderInfoList/OrderInfoList';
import OrderTemplate from '@/components/templates/orderTemplate/OrderTemplate';
import PaymentButton from '@/components/atoms/buttons/PaymentButton';
import { PROJECT_CATEGORY, ProjectCategoryIdType } from '@/constants/category';

export default async function OrderPage({
  searchParams,
}: {
  searchParams: Promise<{ type: string; id: string }>;
}) {
  const { type: paymentType, id } = await searchParams;

  // 1. 서버에서 결제 정보(orderId, customerKey, 구매 상품 정보)를 가져오기 -> RQ로 래핑
  // const orderRes = await fetch(`${process.env.SERVER_URL}/payments/orderId`, {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({
  //     paymentType: paymentType,
  //     referenceId: id,
  //   }),
  // }).then(res => res.json());

  const orderRes = {
    orderInfo: {
      seller: '이상훈',
      categoryId: 2000 as ProjectCategoryIdType,
      charge: 10000,
      startDate: '2023-10-01T14:00:00Z',
      endDate: '2023-10-01T16:00:00Z',
    },
    orderId: 'order_1234567890',
    customerKey: 'customer_1234567890',
  };

  // 2. 결제에 필요한 orderId, customerKey
  const { orderId, customerKey, orderInfo } = orderRes;
  // TODO : 서버에서 orderRes에서 구매상품정보 가져오는 기능 추가예정

  return (
    // == Template 사용 예 ===
    <OrderTemplate
      paymentType={'PROJECT'}
      orderId={orderId}
      orderInfo={orderInfo}
      customerKey={customerKey}
    >
      <OrderInfoList
        title="구매상품"
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
      />
      {paymentType === 'PROJECT' && (
        <OrderInfoList
          title="견적상세"
          infoList={[
            {
              attribute: '이사 날짜',
              value: '2023년 10월 1일',
            },
            {
              attribute: '이사 시간',
              value: '오후 2시',
            },
          ]}
        />
      )}
      <ChargeInfo serviceFee={10000} totalPrice={8000} />
    </OrderTemplate>
  );
}
