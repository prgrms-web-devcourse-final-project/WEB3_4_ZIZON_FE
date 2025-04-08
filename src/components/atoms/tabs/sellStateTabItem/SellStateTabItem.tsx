'use client';

import Image from 'next/image';
import ProgressBlue from 'public/icons/ProgressBlue.svg';
import ProblemRed from 'public/icons/ProblemRed.svg';
import { SellState } from '@/types/sellState';

interface SellStateTabItemProps {
  state: SellState;
  count: number;
  isSelected?: boolean;
  isExpertView?: boolean;
  onClick?: () => void;
}

const stateConfig = {
  inProgress: {
    icon: ProgressBlue,
    label: '진행중',
    hasBorder: false,
  },
  cancelled: {
    icon: ProblemRed,
    label: '주문 취소',
    hasBorder: false,
  },
  completed: {
    icon: null,
    label: '구매 확정',
    expertLabel: '거래 완료',
    hasBorder: true,
  },
} as const;

function formatNumber(num: number): string {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export default function SellStateTabItem({
  state,
  count,
  isSelected = false,
  isExpertView = false,
  onClick,
}: SellStateTabItemProps) {
  const config = stateConfig[state];
  const formattedCount = formatNumber(count);
  const label = isExpertView && 'expertLabel' in config ? config.expertLabel : config.label;

  return (
    <div
      className={`h-full flex items-center justify-between bg-black1 shadow-style2 py-16 px-20 rounded-lg border border-black2 ${
        config.hasBorder ? 'border-black4' : ''
      } ${isSelected ? 'border-primary4' : ''}`}
      onClick={onClick}
    >
      <div className="flex items-center gap-12">
        {config.icon && (
          <>
            <Image src={config.icon} alt="" width={30} height={30} />
            <label
              className={`text-16 font-medium text-black10  ${isSelected ? 'text-primary' : ''}`}
            >
              {label}
            </label>
          </>
        )}
        {!config.icon && (
          <label
            className={`text-16 font-medium text-black10  ${isSelected ? 'text-primary' : ''}`}
          >
            {label}
          </label>
        )}
      </div>
      <label className={`text-20 text-right font-semiBold ${isSelected ? 'text-primary' : ''}`}>
        {formattedCount}
      </label>
    </div>
  );
}
