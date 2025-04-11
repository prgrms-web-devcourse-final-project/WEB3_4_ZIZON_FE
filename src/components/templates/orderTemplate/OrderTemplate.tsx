'use client';
import PaymentNotice from '@/components/molecules/order/paymentNotice/PaymentNotice';
import PaymentButton from '@/components/atoms/buttons/PaymentButton';
import OrderInfoList from '@/components/organisms/order/orderInfoList/OrderInfoList';
import ChargeInfo from '@/components/molecules/order/chargeInfo/ChargeInfo';
import {
  StorePaymentResponseType,
  ProjectPaymentResponseType,
  PaymentResponseType,
} from '@/apis/payment/postPayment';
import { getDotSeparatedDate } from '@/utils/dateFormat';
import { PROJECT_CATEGORY } from '@/constants/category';

interface OrderTemplateProps {
  paymentType: string;
  data: PaymentResponseType;
}

// 📁 프로젝트 주문서
const ProjectPaymentInformation = (data: ProjectPaymentResponseType) => {
  const categoryName = PROJECT_CATEGORY[data.categoryId];
  return (
    <div className="w-full flex flex-col gap-32">
      <PaymentNotice text="결제 금액은 서비스 완료 후 전문가에게 전달됩니다." />

      <OrderInfoList
        title="구매상품"
        infoList={[
          {
            attribute: '구매 상품',
            value: `${categoryName} 서비스`,
          },
          {
            attribute: '전문가',
            value: data.expertName,
          },
        ]}
      />

      <OrderInfoList
        title="견적상세"
        infoList={[
          {
            attribute: '작업 시작일',
            value: getDotSeparatedDate(new Date(data.startDate)),
          },
          {
            attribute: '작업 종료일',
            value: getDotSeparatedDate(new Date(data.endDate)),
          },
        ]}
      />
      <ChargeInfo serviceFee={data.price} totalPrice={data.price} />
    </div>
  );
};

// 🎁 스토어 주문서
const StorePaymentInformation = (data: StorePaymentResponseType) => {
  return (
    <div className="w-full flex flex-col gap-32">
      <OrderInfoList
        title="구매상품"
        infoList={[
          {
            attribute: '구매 상품',
            value: `${data.title} 상품`,
          },
          {
            attribute: '판매자',
            value: data.sellerName,
          },
        ]}
      />
      <ChargeInfo serviceFee={data.price} totalPrice={data.totalPrice} />
    </div>
  );
};

export default function OrderTemplate({ paymentType, data }: OrderTemplateProps) {
  return (
    <div className="w-full flex flex-col items-start gap-40 relative">
      {/* 제목*/}
      <h1 className="text-black12 font-semibold text-32">결제하기</h1>

      {/* 주문 정보 */}
      <div className="w-full flex flex-col gap-32">
        {paymentType === 'PROJECT'
          ? ProjectPaymentInformation(data as ProjectPaymentResponseType)
          : StorePaymentInformation(data as StorePaymentResponseType)}
      </div>

      {/* 결제하기 버튼 */}
      <div className="w-193 absolute right-0 bottom-[-80px]">
        <PaymentButton paymentInfo={data} />
      </div>
    </div>
  );
}
