import { PaymentType } from '@/types/payment';
import StandardButton from '@/components/atoms/buttons/standardButton/StandardButton';
import PaymentNotice from '@/components/molecules/order/paymentNotice/PaymentNotice';

interface OrderTemplateProps {
  paymentType: PaymentType;
  onPaymentClick: () => void;
  children?: React.ReactNode;
}
export default function OrderTemplate({
  paymentType,
  onPaymentClick,
  children,
}: OrderTemplateProps) {
  return (
    <div className="w-full flex flex-col items-start gap-40 relative">
      {/* 제목과 안내사항 */}
      <h1 className="text-black12 font-semibold text-32">결제하기</h1>
      {paymentType === 'PROJECT' && (
        <PaymentNotice text="결제 금액은 서비스 완료 후 전문가에게 전달됩니다." />
      )}

      {/* 주문 정보 */}
      <div className="w-full flex flex-col gap-32">{children}</div>

      {/* 결제하기 버튼 */}
      <div className="w-193 absolute right-0 bottom-[-80px]">
        <StandardButton
          text="결제하기"
          onClick={() => onPaymentClick()}
          disabled={false}
          size="full"
          state="blue"
        />
      </div>
    </div>
  );
}
