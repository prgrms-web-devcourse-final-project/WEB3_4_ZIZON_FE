import PaymentNotice from '@/components/molecules/order/paymentNotice/PaymentNotice';
import ResultBanner from '@/components/molecules/order/resultBanner/ResultBanner';
import ResultButtons from '@/components/molecules/order/resultButtons/ResultButtons';
import OrderResult from '@/components/organisms/order/orderResult/OrderResult';
import { ReactElement } from 'react';

interface OrderResultTemplateProps {
  OrderResultComponent: ReactElement<typeof OrderResult>;
}
export default function OrderResultTemplate({ OrderResultComponent }: OrderResultTemplateProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-40">
      <ResultBanner />
      <PaymentNotice text="결제 금액은 서비스 완료 후 전문가에게 전달됩니다." />
      {OrderResultComponent}
      <ResultButtons />
    </div>
  );
}
