'use client';

import Image from 'next/image';
import NumberReadability from '@/components/atoms/texts/numberReadability/NumberReadability';
import SmallTag from '@/components/atoms/tags/smallTag/SmallTag';
import { Product } from '@/apis/store/getProductList';
import { useState } from 'react';

interface ProductListItemProps {
  size: 'small' | 'large';
  product: Product;
}

const SIZE_CONFIG = {
  small: {
    container: 'w-193',
    imageStlye: 'w-193 h-193',
    imageSize: 193,
  },
  large: {
    container: 'w-302',
    imageStlye: 'w-302 h-302',
    imageSize: 302,
  },
} as const;

function ProductListItem({ size, product }: ProductListItemProps) {
  const sizeStyle = SIZE_CONFIG[size];
  // TODO : 백엔드 데이터에 포함된 오류 이미지 제거용. 이후 삭제 예정
  const imgPath =
    product.thumbnailUrl === 'image.png' ? '/images/DefaultImage.png' : product.thumbnailUrl;
  return (
    <div className={`${sizeStyle.container} flex flex-col gap-16 group`}>
      <div className={`${sizeStyle.imageStlye} rounded-2xl overflow-hidden`}>
        <Image
          src={imgPath}
          alt={product.name}
          width={sizeStyle.imageSize}
          height={sizeStyle.imageSize}
          className="size-full object-cover group-hover:scale-105 transition-all duration-300 "
        />
      </div>

      <div className="flex flex-col gap-8">
        <div className="flex gap-8">
          <SmallTag
            text={product.categoryName}
            theme={product.categoryName === '리빙' ? 'lightOrange' : 'lightBlue'}
          />
          <SmallTag text="소분류" theme="grey" />
        </div>
        <span className="text-16 font-regular text-black12 truncate">{product.name}</span>
        <span className="text-13 font-regular text-black7">{product.expertName}</span>
      </div>

      <div className="flex text-20 font-bold text-black12">
        <NumberReadability value={product.price} />원
      </div>
    </div>
  );
}

export default ProductListItem;
