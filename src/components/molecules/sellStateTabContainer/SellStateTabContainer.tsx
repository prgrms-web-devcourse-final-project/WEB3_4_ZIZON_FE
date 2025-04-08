'use client';

import SellStateTabItem from '@/components/atoms/tabs/sellStateTabItem/SellStateTabItem';
import { SellState } from '@/types/sellState';

interface SellStateTabContainerProps {
  counts: {
    inProgress: number;
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
    <div className="grid grid-cols-3 gap-x-16 gap-y-16 p-16 border border-black3 rounded-2xl mb-32">
      <SellStateTabItem
        state="inProgress"
        count={counts.inProgress}
        isSelected={selectedState === 'inProgress'}
        isExpertView={isExpertView}
        onClick={() => onStateSelect('inProgress')}
      />
      <SellStateTabItem
        state="cancelled"
        count={counts.cancelled}
        isSelected={selectedState === 'cancelled'}
        isExpertView={isExpertView}
        onClick={() => onStateSelect('cancelled')}
      />
      <SellStateTabItem
        state="completed"
        count={counts.completed}
        isSelected={selectedState === 'completed'}
        isExpertView={isExpertView}
        onClick={() => onStateSelect('completed')}
      />
    </div>
  );
}
