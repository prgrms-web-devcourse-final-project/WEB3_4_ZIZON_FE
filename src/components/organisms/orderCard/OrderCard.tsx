import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Order } from '@/types/order';
import { getDotSeparatedDate } from '@/utils/dateFormat';
import SmallTag from '@/components/atoms/tags/smallTag/SmallTag';
import DigitalContentList from '@/components/molecules/digitalContentList/DigitalContentList';
import SelectedOption from '@/components/atoms/texts/selectedOption/SelectedOption';

interface OrderCardProps {
  order: Order;
}

export default function OrderCard({ order }: OrderCardProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/store/products/${order.id}`);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'PAID':
        return { text: '결제 완료', theme: 'lightGreen' as const };
      case 'PREPARING':
        return { text: '준비 중', theme: 'lightBlue' as const };
      case 'SHIPPING':
        return { text: '배송 중', theme: 'lightBlue' as const };
      case 'DELIVERED':
        return { text: '배송 완료', theme: 'lightGreen' as const };
      case 'CANCELLED':
        return { text: '취소됨', theme: 'grey' as const };
      default:
        return { text: '알 수 없음', theme: 'grey' as const };
    }
  };

  const statusBadge = getStatusBadge(order.status);

  return (
    <article
      className="bg-black1 px-28 py-24 flex flex-col gap-16 rounded-lg hover:shadow-style1 overflow-hidden cursor-pointer transition-shadow duration-300"
      onClick={handleClick}
    >
      <div className="flex justify-between">
        <div className="flex items-center gap-8">
          <span className="text-16 text-black7">주문번호: {order.orderId}</span>
        </div>
        <SmallTag text={statusBadge.text} theme={statusBadge.theme} />
      </div>

      <div className="flex items-center gap-24">
        <div className="relative w-124 h-124 border border-black3 rounded-lg">
          <Image
            src={order.productThumbnail || '/images/DeafultImage.png'}
            alt={order.productTitle}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex-1 flex justify-between pr-24">
          <div className="flex flex-col justify-between gap-20">
            <h3 className="text-20 font-semibold mt-12">{order.productTitle}</h3>
            <div className="flex flex-col">
              <SelectedOption type="small" leftText="판매자" rightText={order.sellerName} />
              <SelectedOption type="small" leftText="결제방법" rightText={order.paymentMethod} />
              <SelectedOption
                type="small"
                leftText="주문일시"
                rightText={getDotSeparatedDate(new Date(order.orderedAt))}
              />
            </div>
          </div>
          <div className="flex flex-col self-end">
            <SelectedOption type="right-impact" leftText="수량" rightText={`${order.quantity}개`} />
            <SelectedOption
              type="right-impact"
              leftText="결제금액"
              rightText={`${order.totalPrice.toLocaleString()}원`}
            />
          </div>
        </div>
      </div>
      {order.productType === 'DIGITAL' && order.digitalContent.length > 0 && (
        <DigitalContentList digitalContent={order.digitalContent} />
      )}
    </article>
  );
}
