'use client';

import VerticalTabItem from '@/components/atoms/tabs/verticalTabItem/VerticalTabItem';
import VerticalTabTitle from '@/components/atoms/tabs/verticalTabTitle/VerticalTabTitle';
import useSetSearchParams from '@/hooks/useSetSearchParams';
import { useSearchParams } from 'next/navigation';

const DIGITAL_CATEGORY_LIST = [
  {
    name: '5001',
    text: 'IT/Digital',
  },
  {
    name: '5002',
    text: '기타',
  },
];

const LIVING_CATEGORY_LIST = [
  {
    name: '6001',
    text: '취미',
  },
  {
    name: '6002',
    text: '전문 프로그램',
  },
  {
    name: '6003',
    text: '외주',
  },
  {
    name: '6004',
    text: '기타',
  },
];

export default function StoreTab({
  selectedCategory,
  onTabClick,
}: {
  selectedCategory: string;
  onTabClick: (category: string) => void;
}) {
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
          onClick={name => onTabClick(name)}
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
          onClick={name => onTabClick(name)}
        />
      ))}
    </div>
  );
}
