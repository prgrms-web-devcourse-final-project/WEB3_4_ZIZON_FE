import React from 'react';
import SearchBar from '@/components/atoms/inputs/searchBar/SearchBar';
import VerticalTabItem from '@/components/atoms/tabs/verticalTabItem/VerticalTabItem';
import ResetButton from '@/components/atoms/buttons/ResetButton/ResetButton';
import CommissionListItem, {
  CommissionListItemProps,
} from '@/components/molecules/commissionListItem/ComissionListItem';

interface CommissionTemplateProps {
  value: string;
  onChange: (value: string) => void;
  onReset: () => void;
  ScrollHookRef: React.ReactNode;
  commissionList: CommissionListItemProps[];
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
  const filteredList = commissionList.filter((item) => {
    const matchesCategory = category === 0 || item.categoryId === category;
    const matchesSearch = item.title.toLowerCase().includes(value.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="mt-72">
      <h3 className="text-32 font-semibold">등록된 요청</h3>
      <SearchBar
        type="default"
        placeholder="검색어를 입력해주세요."
        onChange={onChange}
        value={value}
      />
      <div className="flex mt-38">
        <div>
          <div className="flex mr-38">
            <p className="text-24 font-semibold mr-28">요청 항목</p>
            <ResetButton onReset={onReset} />
          </div>
          <VerticalTabItem name="move" isFocused={category === 1000} text="이사 및 청소" onClick={() => onCategoryClick(1000)} size="small" />
          <VerticalTabItem name="setting" isFocused={category === 2000} text="설치 및 수리" onClick={() => onCategoryClick(2000)} size="small" />
          <VerticalTabItem name="lesson" isFocused={category === 3000} text="과외" onClick={() => onCategoryClick(3000)} size="small" />
          <VerticalTabItem name="hobby" isFocused={category === 4000} text="취미생활" onClick={() => onCategoryClick(4000)} size="small" />
        </div>
        <div className="grid grid-cols-1 gap-32">
          <div className="grid grid-cols-1 gap-32">
            {filteredList.map((item) => (
              <CommissionListItem key={item.id} {...item} />
            ))}
          </div>
          {ScrollHookRef}
        </div>
      </div>
    </div>
  );
}
