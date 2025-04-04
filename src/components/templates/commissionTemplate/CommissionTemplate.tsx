import React from 'react';
import SearchBar from '@/components/atoms/inputs/searchBar/SearchBar';
import VerticalTabItem from '@/components/atoms/tabs/verticalTabItem/VerticalTabItem';
import ResetButton from '@/components/atoms/buttons/ResetButton/ResetButton';
import CommissionListItem from '@/components/molecules/commissionListItem/ComissionListItem';

interface CommissionTemplateProps {
  value: string;
  onChange: (value: string) => void;
  onReset: () => void;
}

function CommissionTemplate({value, onChange, onReset}: CommissionTemplateProps) {
  return (
    <div className="mt-72">
      <h3 className="text-32 font-semibold">등록된 요청</h3>
      <SearchBar type={'default'} placeholder={'검색어를 입력해주세요.'} onChange={onChange} value={value}/>
      <div className="flex mt-38">
        <div>
          <div className="flex mr-38">
            <p className="text-24 font-semibold mr-28">요청 항목</p>
            <ResetButton onReset={onReset}/>
          </div>
          <VerticalTabItem name={'move'} isFocused={false} text={'이사 및 청소'} onClick={() => {}} size={'small'}/>
          <VerticalTabItem name={'setting'} isFocused={false} text={'설치 및 수리'} onClick={() => {}} size={'small'}/>
          <VerticalTabItem name={'lesson'} isFocused={false} text={'과외'} onClick={() => {}} size={'small'}/>
          <VerticalTabItem name={'hobby'} isFocused={false} text={'취미생활'} onClick={() => {}} size={'small'}/>
        </div>
        <div className="grid grid-cols-1 gap-32">
          <CommissionListItem location={'서울시 마포구'} title={'수능 대비 한국사'} description={'2025 수능 대비 한국사 과외를 진행해주실 선생님을 구합니다. 연락주세요!'} budget={150000} deadline={new Date()} created_at={new Date()}/>
          <CommissionListItem location={'서울시 마포구'} title={'수능 대비 한국사'} description={'2025 수능 대비 한국사 과외를 진행해주실 선생님을 구합니다. 연락주세요!'} budget={150000} deadline={new Date()} created_at={new Date()}/>
        </div>
      </div>
    </div>
  );
}

export default CommissionTemplate;