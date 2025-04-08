'use client'
import React, { useEffect, useState } from 'react';
import CleaningStepFourTemplate from '@/components/templates/stepperTemplate/cleaning/CleaningStepFourTemplate';
import { selectedOptionIndexObject } from '@/components/molecules/selectedOptionList/SelectedOptionList';
import { useRouter } from 'next/navigation';

const SelectServiceItems: {key:string, label: string;}[] = [
  {key: 'none', label: '없음'},
  {key: 'mold', label: '곰팡이 제거'},
  {key: 'glass',label: '외부 유리창 청소'},
  {key: 'home', label: '새집 증후군'},
  {key: 'sticker', label: '스티커 및 시트지 제거'},
  {key: 'etc', label: '기타'},
];

export default function CleaningFourPage() {
  const [area, setArea] = React.useState<string>('');
  const [selectedOptionList, setSelectedOptionList] = useState<selectedOptionIndexObject[]>([]);
  const [selectedOptionListNewItem, setSelectedOptionListNewItem] = useState<selectedOptionIndexObject[]>([]);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const storedData = localStorage.getItem('selectedIndex');
    if (storedData) setSelectedOptionList(JSON.parse(storedData));
  }, []);

  const onClickBeforeHandler = () => {
    const copyList = selectedOptionList;
    copyList.pop();
    localStorage.setItem('selectedIndex', JSON.stringify(copyList));
    router.push('/commission/cleaning/step3');
  }
  const onClickNextHandler = () => {
    if (area === '' ) return;
    localStorage.setItem('selectedIndex', JSON.stringify([...selectedOptionList, ...selectedOptionListNewItem]));
    router.push('/commission/cleaning/step5');
  }
  const areaChangeHandler = (value: string) => {
    setArea(value);
    setSelectedOptionListNewItem(prev => {
      if (prev.length === 0) return [{"방 개수": value}];
      const updated = [...prev];
      updated[0]['방 개수'] = value;
      return updated;
    });
  }
  const onCheckSelectedHandler = (key: string, label: string) => {
    setSelectedOption(key);
    setSelectedOptionListNewItem(prev => {
      if (prev.length === 0) return prev;
      const updated = [...prev];
      updated[0]['추가 서비스'] = label;
      return updated;
    });
  }
  return (
    <div>
      <CleaningStepFourTemplate
        checkSelectBoxProps={SelectServiceItems.map(({key, label}) => ({
          label,
          caption: '',
          checked: selectedOption === key,
          onChange: () => onCheckSelectedHandler(key, label)
        }))}
        onClickBefore={onClickBeforeHandler}
        onClickNext={onClickNextHandler}
        id={'area'}
        value={area}
        onChange={areaChangeHandler}
        selectedOptionListProps={[...selectedOptionList, ...selectedOptionListNewItem]}/>
    </div>
  );
}