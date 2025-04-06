'use client';

import ResetButton from '@/components/atoms/buttons/ResetButton/ResetButton';
import SearchBar from '@/components/atoms/inputs/searchBar/SearchBar';
import ExpertFilterTab from '@/components/molecules/expert/expertFilterTab/ExpertFilterTab';
import useSetSearchParams from '@/hooks/useSetSearchParams';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

export default function ExpertSidebar() {
  const [search, setSearch] = useState<string>('');
  const searchParams = useSearchParams();
  const router = useRouter();

  const setSearchParams = useSetSearchParams();
  const handleSearchChange = (value: string) => {
    setSearch(value);
    // 쿼리 스트링 추가
    setSearchParams('search', value, '/expert');
  };

  const onReset = () => {
    setSearch('');
    router.push(`/expert`);
  };
  return (
    <div className="w-411 h-full flex flex-col gap-16">
      {/* 사이드바 헤더 */}
      <div className="flex items-center justify-between">
        <h4 className="font-semibold text-24 text-black11">전문가 필터</h4>
        <ResetButton onReset={onReset} />
      </div>

      {/* 서치바 */}
      <SearchBar
        type="default"
        placeholder="검색어를 입력하세요"
        onChange={handleSearchChange}
        value={search}
      />

      {/* 필터탭 */}
      <ExpertFilterTab />
    </div>
  );
}
