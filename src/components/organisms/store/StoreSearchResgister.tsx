'use client'

import StandardButton from '@/components/atoms/buttons/standardButton/StandardButton';
import SearchBar from '@/components/atoms/inputs/searchBar/SearchBar';
import useSetSearchParams from '@/hooks/useSetSearchParams';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
export default function StoreSearchRegister() {
  const [search, setSearch] = useState<string>('');
  const setSearchParams = useSetSearchParams();
  const router = useRouter();

  const handleRegister = () => {
    router.push('/store/products/register');
  };

  const handleSearchChange = (value: string) => {
    setSearch(value);
    setSearchParams('search', value, '/store');
  };

  return (
    <div className="w-full flex justify-between max-w-1280">

      <SearchBar
        placeholder="검색어를 입력해주세요"
        type="default"
        onChange={value => handleSearchChange(value)}
        value={search}
      />

      <StandardButton
        text="등록하기"
        size="fit"
        state="dark"
        onClick={handleRegister}
        disabled={false}
      />
    </div>
  );
}
