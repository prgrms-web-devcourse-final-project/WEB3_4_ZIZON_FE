'use client';
import PaymentNotice from '@/components/molecules/order/paymentNotice/PaymentNotice';
import PaymentButton from '@/components/atoms/buttons/PaymentButton';
import OrderInfoList from '@/components/organisms/order/orderInfoList/OrderInfoList';
import ChargeInfo from '@/components/molecules/order/chargeInfo/ChargeInfo';
import { PaymentResponseType } from '@/apis/payment/postPayment';

interface OrderTemplateProps {
  paymentType: string;
  data: PaymentResponseType;
}

export default function OrderTemplate({ paymentType, data }: OrderTemplateProps) {
  return (
    <div className="w-full flex flex-col items-start gap-40 relative">
      {/* 제목과 안내사항 */}
      <h1 className="text-black12 font-semibold text-32">결제하기</h1>
      {paymentType === 'PROJECT' && (
        <PaymentNotice text="결제 금액은 서비스 완료 후 전문가에게 전달됩니다." />
      )}

      {/* 주문 정보 */}
      <div className="w-full flex flex-col gap-32">
        <OrderInfoList
          title="구매상품"
          infoList={[
            {
              attribute: '구매 상품',
              value: `${data.category} 서비스`,
            },
            {
              attribute: '전문가',
              value: data.expertName,
            },
          ]}
        />
        {paymentType === 'PROJECT' && (
          <OrderInfoList
            title="견적상세"
            infoList={[
              {
                attribute: '이사 날짜',
                value: data.startDate,
              },
              {
                attribute: '이사 시간',
                value: data.endDate,
              },
            ]}
          />
        )}
        <ChargeInfo serviceFee={data.price} totalPrice={data.price} />
      </div>

      {/* 결제하기 버튼 */}
      <div className="w-193 absolute right-0 bottom-[-80px]">
        <PaymentButton paymentInfo={data} />
      </div>
    </div>
  );
}
