'use client';

import React from 'react';
import NumberReadability from '@/components/atoms/texts/numberReadability/NumberReadability';
import Image from 'next/image';
import StandardButton from '@/components/atoms/buttons/standardButton/StandardButton';
import { SellState, sellStateConfig } from '@/types/sellState';

export interface OrderListItemProps {
  imageUrl: string;
  price: number;
  sellState: SellState;
  onClickAskButton: () => void;
  category: string;
  isExpertView?: boolean;
}

interface ButtonStyle {
  text: string;
  state: 'default' | 'dark' | 'red' | 'green';
}

const buttonStyle: Record<SellState, ButtonStyle> = {
  OPEN: {
    text: '문의하기',
    state: 'default',
  },
  IN_PROGRESS: {
    text: '문의하기',
    state: 'default',
  },
  COMPLETED: {
    text: '리뷰작성',
    state: 'dark',
  },
  CANCELLED: {
    text: '취소하기',
    state: 'red',
  },
} as const;

export default function OrderListItem({
  imageUrl,
  price,
  sellState,
  onClickAskButton,
  category,
  isExpertView = false,
}: OrderListItemProps) {
  const stateConfig = sellStateConfig[sellState];
  const buttonConfig = isExpertView
    ? { text: '문의하기', state: 'default' as const }
    : buttonStyle[sellState];

  return (
    <div className="flex bg-black1 border border-black3 p-20 rounded-xl items-center justify-between">
      <div className="flex items-center gap-16">
        <div className="w-85 h-85 rounded-lg overflow-hidden">
          <Image
            className={`size-full object-cover ${sellState === 'COMPLETED' && 'saturate-0'}`}
            src={imageUrl}
            alt={category}
            width={85}
            height={85}
          />
        </div>
        <div className="flex flex-col gap-12">
          <label className={`text-16 font-semibold ${stateConfig.textColor}`}>
            {stateConfig.label}
          </label>
          <div className="flex flex-col gap-8">
            <span className="text-16 font-regular">{category}</span>
            <p className="text-16 font-semibold">
              <NumberReadability value={price} />원
            </p>
          </div>
        </div>
      </div>
      <StandardButton
        text={buttonConfig.text}
        state={buttonConfig.state}
        size="fit"
        onClick={onClickAskButton}
        disabled={false}
      />
    </div>
  );
}
