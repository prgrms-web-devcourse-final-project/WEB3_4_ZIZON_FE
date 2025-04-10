'use client';

import { ProductResponseType } from '@/apis/store/getProduct';
import StandardButton from '@/components/atoms/buttons/standardButton/StandardButton';
import NumberInput from '@/components/atoms/inputs/numberInput/NumberInput';
import InputLabel from '@/components/atoms/texts/inputLabel/InputLabel';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
interface StoreProductImageTitleProps {
  product: ProductResponseType;
}

// - “상품의 경우” :id = {상품고유Id}, paymentType=”ORDER”
// - “전문가의 능력의 경우”:id = {상품고유Id}, paymentType=”PROVISION”

export default function StoreProductImageTitle({ product }: StoreProductImageTitleProps) {
  const paymentType = 'ORDER';
  const [amount, setAmount] = useState<number>(1);
  const router = useRouter();

  const handleBuyClick = () => {
    // 결제 페이지로 이동
    router.push(`/payments?id=${product.id}&type=${paymentType}&quantity=${amount}`);
  };
  return (
    <div className="w-full flex gap-43">
      {/* 상품이미지 */}
      <Image
        src={product.thumbnailImage}
        alt="product-image"
        className="w-392 h-392 rounded-[16px] object-cover"
        width={392}
        height={392}
      />

      {/* 상품 기본 정보 */}
      <div className="w-full relative">
        {/* 텍스트정보 */}
        <div className="flex flex-col gap-20 mb-130">
          <h3 className="font-regular text-16 text-black7">{product.expert}</h3>
          <h2 className="font-regular text-20 text-black12 ">{product.title}</h2>
          <p className="flex items-center ">
            <span className="font-bold text-32 text-black12">{product.price}</span>
            <span className="font-regualr text-24 text-black12">원</span>
          </p>
        </div>

        {/* 주문 수량 */}
        <div className="flex flex-col gap-8 max-w-500">
          <InputLabel label="주문 수량" htmlFor="amount" />
          <NumberInput
            value={amount}
            onChange={value => setAmount(value)}
            id={'amount'}
            placeholder={'주문수량'}
            error={amount > product.stock}
            errorText="재고가 부족합니다."
          />
        </div>

        <div className="absolute bottom-0 left-0 w-full max-w-500">
          <StandardButton
            text={'구매하기'}
            size="full"
            state="blue"
            onClick={handleBuyClick}
            disabled={amount > product.stock}
          />
        </div>
      </div>
    </div>
  );
}
