'use client';

import Image from 'next/image';
import ProgressBlue from 'public/icons/ProgressBlue.svg';
import ProblemRed from 'public/icons/ProblemRed.svg';
import CheckGreen from 'public/icons/CheckGreen.svg';
import { SellState } from '@/types/sellState';

interface SellStateTabItemProps {
  state: SellState;
  count: number;
  isSelected?: boolean;
  isExpertView?: boolean;
}

const stateConfig = {
  inProgress: {
    icon: ProgressBlue,
    label: '진행중',
    hasBorder: false,
  },
  waiting: {
    icon: CheckGreen,
    label: '작업 완료 대기',
    expertLabel: '작업 완료 요청',
    hasBorder: false,
  },
  cancelled: {
    icon: ProblemRed,
    label: '취소•문제 해결',
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
}: SellStateTabItemProps) {
  const config = stateConfig[state];
  const formattedCount = formatNumber(count);
  const label = isExpertView && 'expertLabel' in config ? config.expertLabel : config.label;

  return (
    <div
      className={`h-full flex bg-black1 shadow-style2 py-16 px-20 rounded-lg border border-black2 ${
        config.hasBorder ? 'border-black4' : ''
      } ${isSelected ? 'border-primary4' : ''}`}
    >
      <div className="flex">
        {config.icon && (
          <>
            <Image src={config.icon} alt="" width={30} height={30} />
            <label
              className={`text-16 w-150 font-medium text-black10 ml-12 content-center ${
                isSelected ? 'text-primary' : ''
              }`}
            >
              {label}
            </label>
          </>
        )}
        {!config.icon && (
          <label
            className={`text-16 w-150 font-medium text-black10 ml-8 content-center ${
              isSelected ? 'text-primary' : ''
            }`}
          >
            {label}
          </label>
        )}
      </div>
      <label
        className={`text-20 text-right ml-32 w-full font-semiBold content-center ${
          isSelected ? 'text-primary' : ''
        }`}
      >
        {formattedCount}
      </label>
    </div>
  );
}
