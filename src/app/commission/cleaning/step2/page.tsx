'use client'
import React, { useEffect, useState } from 'react';
import CleaningStepTwoTemplate from '@/components/templates/stepperTemplate/cleaning/CleaningStepTwoTemplate';
import { selectedOptionIndexObject } from '@/components/molecules/selectedOptionList/SelectedOptionList';
import { useRouter } from 'next/navigation';

const SelectBuildingItems: {key:string, label: string;}[] = [
  {key: 'apart', label: '아파트'},
  {key: 'villa', label: '빌라 & 연립주택'},
  {key: 'office',label: '오피스텔'},
  {key: 'one', label: '원롬'},
  {key: 'detached', label: '단독 주택'},
  {key: 'shopping', label: '사무실 & 상가'},
];

export default function CleaningTwoPage() {
  const [selectedOptionList, setSelectedOptionList] = useState<selectedOptionIndexObject[]>([]);
  const [selectedOptionListNewItem, setSelectedOptionListNewItem] = useState<selectedOptionIndexObject[]>([]);
  const [selectedBuilding, setSelectedBuilding] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const storedData = localStorage.getItem('selectedIndex');
    if (storedData) setSelectedOptionList(JSON.parse(storedData));
  }, []);
  const onClickBeforeHandler = () => {
    const copyList = selectedOptionList;
    copyList.pop();
    localStorage.setItem('selectedIndex', JSON.stringify(copyList));
    router.push('/commission/cleaning/step1');
  }
  const onClickNextHandler = () => {
    localStorage.setItem('selectedIndex', JSON.stringify([...selectedOptionList, ...selectedOptionListNewItem]));
    router.push('/commission/cleaning/step3');
  }
  const onSelectCleaningItemHandler = (key: string, label: string) => {
    setSelectedBuilding(key);
    setSelectedOptionListNewItem([{"건물 정보": label}]);
  }
  return (
    <div>
      <CleaningStepTwoTemplate
        checkSelectBoxProps={SelectBuildingItems.map(({key, label}) => ({
          label,
          caption: '',
          checked: selectedBuilding === key,
          onChange: () => onSelectCleaningItemHandler(key, label)
        }))}
        onClickBefore={onClickBeforeHandler}
        onClickNext={onClickNextHandler}
        selectedOptionListProps={[...selectedOptionList, ...selectedOptionListNewItem]}/>
    </div>
  );
}
