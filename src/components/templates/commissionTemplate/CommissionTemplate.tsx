import React from 'react';
import SearchBar from '@/components/atoms/inputs/searchBar/SearchBar';
import VerticalTabItem from '@/components/atoms/tabs/verticalTabItem/VerticalTabItem';
import ResetButton from '@/components/atoms/buttons/ResetButton/ResetButton';
import CommissionListItem from '@/components/molecules/commissionListItem/ComissionListItem';
import { ProjectType } from '@/apis/project/getProjectsAll';

interface CommissionTemplateProps {
  value: string;
  onChange: (value: string) => void;
  onReset: () => void;
  ScrollHookRef: React.ReactNode;
  commissionList: ProjectType[];
  onCategoryClick: (value: number) => void;
  category: number;
}

export default function CommissionTemplate({
  category,
  onCategoryClick,
  ScrollHookRef,
  value,
  onChange,
  onReset,
  commissionList,
}: CommissionTemplateProps) {
  // 🔍 실시간 검색 및 카테고리 필터 적용
  const filteredList = commissionList.filter(item => {
    const matchesCategory = category === 0 || item.categoryId === category;
    const matchesSearch = item.title.toLowerCase().includes(value.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-fit mt-72">
      <h3 className="text-32 font-semibold mb-48">등록된 프로젝트</h3>
      <SearchBar
        type="default"
        placeholder="검색어를 입력해주세요."
        onChange={onChange}
        value={value}
      />
      <section className="flex mt-40">
        <aside className="mr-40 flex flex-col gap-12">
          <div className="flex items-center justify-between mb-12">
            <p className="text-24 font-medium">요청 항목</p>
            <ResetButton onReset={onReset} />
          </div>
          <VerticalTabItem
            name="move"
            isFocused={category === 1000}
            text="이사 및 청소"
            onClick={() => onCategoryClick(1000)}
            size="large"
          />
          <VerticalTabItem
            name="setting"
            isFocused={category === 2000}
            text="설치 및 수리"
            onClick={() => onCategoryClick(2000)}
            size="large"
          />
          <VerticalTabItem
            name="lesson"
            isFocused={category === 3000}
            text="과외"
            onClick={() => onCategoryClick(3000)}
            size="large"
          />
          <VerticalTabItem
            name="hobby"
            isFocused={category === 4000}
            text="취미생활"
            onClick={() => onCategoryClick(4000)}
            size="large"
          />
        </aside>
        <section className="grid grid-cols-1 gap-32">
          <div className="grid grid-cols-1 gap-32">
            {filteredList.map(item => (
              <CommissionListItem key={`${item.id}-${new Date().getTime()}`} {...item} />
            ))}
          </div>
          {ScrollHookRef}
        </section>
      </section>
    </div>
  );
}
