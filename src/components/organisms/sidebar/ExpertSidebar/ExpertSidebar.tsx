'use client';

import SearchBar from '@/components/atoms/inputs/searchBar/SearchBar';
import ExpertFilterTab from '@/components/molecules/expertFilterTab/ExpertFilterTab';
import Image from 'next/image';
import ResetIcon from 'public/icons/Refresh.svg';
import { ReactElement } from 'react';
interface ExpertSidebarProps {
  onReset: () => void;
  SearchBarComponent: ReactElement<typeof SearchBar>;
  ExpertFilterTabComponent: ReactElement<typeof ExpertFilterTab>;
}

export default function ExpertSidebar({
  onReset,
  SearchBarComponent,
  ExpertFilterTabComponent,
}: ExpertSidebarProps) {
  return (
    <div className="w-411 h-full flex flex-col gap-16">
      {/* 사이드바 헤더 */}
      <div className="flex items-center justify-between">
        <h4 className="font-semibold text-24 text-black11">전문가 필터</h4>
        <button
          onClick={() => onReset()}
          type="button"
          className="flex items-center gap-4 text-16 text-black10 font-semibold bg-black1 border-1 border-black4 px-12 py-8 rounded-[8px]"
        >
          <Image src={ResetIcon} width={12} height={11} alt="reset-category-option-button-icon" />
          <span>초기화</span>
        </button>
      </div>
      {/* 서치바 */}
      {SearchBarComponent}
      {/* 필터탭 */}
      {ExpertFilterTabComponent}
    </div>
  );
}
