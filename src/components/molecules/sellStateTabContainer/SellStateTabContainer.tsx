'use client';

import SellStateTabItem from '@/components/atoms/tabs/sellStateTabItem/SellStateTabItem';
import { SellState } from '@/types/sellState';

interface SellStateTabContainerProps {
  counts: {
    inProgress: number;
    waiting: number;
    cancelled: number;
    completed: number;
  };
  selectedState: SellState | null;
  onStateSelect: (state: SellState) => void;
  isExpertView?: boolean;
}

export default function SellStateTabContainer({
  counts,
  selectedState,
  onStateSelect,
  isExpertView = false,
}: SellStateTabContainerProps) {
  return (
    <div className="grid grid-cols-2 gap-x-24 gap-y-16 p-16 border border-black3 rounded-2xl mb-32">
      <div className="cursor-pointer" onClick={() => onStateSelect('inProgress')}>
        <SellStateTabItem
          state="inProgress"
          count={counts.inProgress}
          isSelected={selectedState === 'inProgress'}
          isExpertView={isExpertView}
        />
      </div>
      <div className="cursor-pointer" onClick={() => onStateSelect('waiting')}>
        <SellStateTabItem
          state="waiting"
          count={counts.waiting}
          isSelected={selectedState === 'waiting'}
          isExpertView={isExpertView}
        />
      </div>
      <div className="cursor-pointer" onClick={() => onStateSelect('cancelled')}>
        <SellStateTabItem
          state="cancelled"
          count={counts.cancelled}
          isSelected={selectedState === 'cancelled'}
          isExpertView={isExpertView}
        />
      </div>
      <div className="cursor-pointer" onClick={() => onStateSelect('completed')}>
        <SellStateTabItem
          state="completed"
          count={counts.completed}
          isSelected={selectedState === 'completed'}
          isExpertView={isExpertView}
        />
      </div>
    </div>
  );
}
