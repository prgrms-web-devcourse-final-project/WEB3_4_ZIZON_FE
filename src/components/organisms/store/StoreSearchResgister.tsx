'use client';

import StandardButton from '@/components/atoms/buttons/standardButton/StandardButton';
import SearchBar from '@/components/atoms/inputs/searchBar/SearchBar';
import useDebounce from '@/hooks/useDebounce';
import useSetSearchParams from '@/hooks/useSetSearchParams';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
export default function StoreSearchRegister() {
  const [search, setSearch] = useState<string>('');
  const debouncedValue = useDebounce(search, 200);
  const setSearchParams = useSetSearchParams();
  const router = useRouter();

  const handleRegister = () => {
    router.push('/store/register');
  };

  useEffect(() => {
    if (debouncedValue) {
      setSearchParams('search', debouncedValue, '/store');
    }
  }, [debouncedValue]);
  return (
    <div className="w-full flex justify-between max-w-1280">
      <SearchBar
        placeholder="검색어를 입력해주세요"
        type="default"
        onChange={value => setSearch(value)}
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
