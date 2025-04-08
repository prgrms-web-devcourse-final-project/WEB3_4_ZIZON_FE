'use client'
import React, { useEffect, useState } from 'react';
import MoveStepOneTemplate from '@/components/templates/stepperTemplate/move/MoveStepOneTemplate';
import { selectedOptionIndexObject } from '@/components/molecules/selectedOptionList/SelectedOptionList';
import { useRouter } from 'next/navigation';

const IconSelectBoxItems: {key:string; title: string; subtitle: string; category: 'truck' | 'cleaning'}[] = [
  {key: 'move', title: '이사', subtitle: '포장이사부터 보관이사까지 다양한 이사 형태', category: 'truck'},
  {key: 'cleaning', title: '청소', subtitle: '아파트부터 사무실까지 다양한 건물 형태에 따른', category: 'cleaning'},
];
export default function MoveOnePage() {
  const [selectedOptionList, setSelectedOptionList] = useState<selectedOptionIndexObject[]>([]);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const storedData = localStorage.getItem('selectedIndex');
    if (storedData) setSelectedOptionList(JSON.parse(storedData));
  }, []);

  const onClickBeforeHandler = () => {
    const copyList = selectedOptionList;
    copyList.pop();
    localStorage.setItem('selectedIndex', JSON.stringify(copyList));
    router.push('/commission/common/start');
  }
  const onClickNextHandler = () => {
    if(selectedType === null) return;
    localStorage.setItem('selectedIndex', JSON.stringify([...selectedOptionList]));
    if(selectedType === "move") {
      router.push('/commission/move/step2');
    } else {
      router.push('/commission/cleaning/step1');
    }
  }
  const onSelectedTypeHandler = (key: string, title: string) => {
    setSelectedType(key);
    setSelectedOptionList(prev => {
      if (prev.length === 0) return prev;
      const updated = [...prev];

      updated[0]['요청 형식'] = title
      return updated;
    });
  }
  return (
    <div>
      <MoveStepOneTemplate
        iconSelectBox={IconSelectBoxItems.map(({key, title, subtitle, category}) => ({
          type: 'left',
          title,
          subtitle,
          category,
          isOn: selectedType === key,
          onClick: () => onSelectedTypeHandler(key, title)
        }))}
        onClickBeforeAction={onClickBeforeHandler}
        onClickNextAction={onClickNextHandler}
        selectedOptionListProps={[...selectedOptionList]}/>
    </div>
  );
}