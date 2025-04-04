'use client';

import VerticalTabItem from '@/components/atoms/tabs/verticalTabItem/VerticalTabItem';
import VerticalTabTitle from '@/components/atoms/tabs/verticalTabTitle/VerticalTabTitle';
import useSetSearchParams from '@/hooks/useSetSearchParams';
import { useSearchParams } from 'next/navigation';
import { text } from 'stream/consumers';

const DIGITAL_CATEGORY_LIST = [
  {
    name: 'digital-itdesign',
    text: 'IT/Digital',
  },
  {
    name: 'ditigal-etc',
    text: '기타',
  },
];

const LIVING_CATEGORY_LIST = [
  {
    name: 'living-hobby',
    text: '취미',
  },
  {
    name: 'living-program',
    text: '전문 프로그램',
  },
  {
    name: 'living-outsourcing',
    text: '외주',
  },
  {
    name: 'living-etc',
    text: '기타',
  },
];

export default function StoreTab() {
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get('category');
  const setSearchParams = useSetSearchParams();
  return (
    <div className="flex flex-col">
      <VerticalTabTitle size="large" text="디지털 컨텐츠" />
      {DIGITAL_CATEGORY_LIST.map(category => (
        <VerticalTabItem
          key={category.name}
          text={category.text}
          name={category.name}
          size="large"
          isFocused={selectedCategory === category.name}
          onClick={name => setSearchParams('category', name, '/store')}
        />
      ))}
      <VerticalTabTitle size="large" text="리빙" />
      {LIVING_CATEGORY_LIST.map(category => (
        <VerticalTabItem
          key={category.name}
          text={category.text}
          name={category.name}
          size="large"
          isFocused={selectedCategory === category.name}
          onClick={name => setSearchParams('category', name, '/store')}
        />
      ))}
    </div>
  );
}
