import React from 'react';
import SearchBar from '@/components/atoms/inputs/searchBar/SearchBar';
import VerticalTabTitle from '@/components/atoms/tabs/verticalTabTitle/VerticalTabTitle';
import VerticalTabItem from '@/components/atoms/tabs/verticalTabItem/VerticalTabItem';

interface CommissionTemplateProps {
  value: string;
  onChange: (value: string) => void;
}

function CommissionTemplate({value, onChange}: CommissionTemplateProps) {
  return (
    <div>
      <h3 className="text-32 font-semibold">등록된 요청</h3>
      <SearchBar type={'default'} placedholder={'검색어를 입력해주세요.'} onChange={onChange} value={value}/>
      <div>
        <div>
          <VerticalTabTitle text={'요청 항목'} size={'small'}/>
          {/*<VerticalTabItem name={} isFocused={} text={} onClick={} size={}/>*/}
          {/*<VerticalTabItem name={} isFocused={} text={} onClick={} size={}/>*/}
          {/*<VerticalTabItem name={} isFocused={} text={} onClick={} size={}/>*/}
          {/*<VerticalTabItem name={} isFocused={} text={} onClick={} size={}/>*/}
        </div>
        <div>

        </div>
      </div>
    </div>
  );
}

export default CommissionTemplate;