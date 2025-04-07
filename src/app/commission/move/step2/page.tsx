'use client'
import React, { useEffect, useState } from 'react';
import MoveStepTwoTemplate from '@/components/templates/stepperTemplate/move/MoveStepTwoTemplate';
import { selectedOptionIndexObject } from '@/components/molecules/selectedOptionList/SelectedOptionList';
import { useRouter } from 'next/navigation';

const checkSelectedBoxItems: {label: string; key: string;}[] = [
  {key: 'pave', label: "포장 이사"},
  {key: 'halfPave', label: "반포장 이사"},
  {key: 'basic', label: "일반 이사"},
  {key: 'keep', label: "보관 이사"},
];
export default function MoveTwoPage() {
  const [selectedOptionList, setSelectedOptionList] = useState<selectedOptionIndexObject[]>([]);
  const [selectedOptionListNewItem, setSelectedOptionListNewItem] = useState<selectedOptionIndexObject[]>([]);
  const [selectedDay, setSelectedDay] = React.useState<Date | undefined>(undefined);
  const [checkSelected, setCheckSelected] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const storedData = localStorage.getItem('selectedIndex');
    if (storedData) setSelectedOptionList(JSON.parse(storedData));
  }, []);
  useEffect(() => {
    setSelectedOptionListNewItem(prev => {
      if (prev.length === 0 || typeof selectedDay === undefined) return prev;
      const updated = [...prev];
      const date = new Date(`${selectedDay}`);

      const month = date.getMonth() + 1;
      const day = date.getDate();

      updated[0]['이사 날짜'] = `${month}월 ${day}일`;
      return updated;
    });
  }, [selectedDay]);
  const onClickBeforeHandler = () => {
    const copyList = selectedOptionList;
    copyList.pop();
    localStorage.setItem('selectedIndex', JSON.stringify(copyList));
    router.push('/commission/move/step1');
  }
  const onClickNextHandler = () => {
    if (selectedDay === undefined || checkSelected === null) return;
    localStorage.setItem('selectedIndex', JSON.stringify([...selectedOptionList, ...selectedOptionListNewItem]));
    router.push('/commission/move/step3');
  }
  const onCheckSelectedHandler = (key: string, label: string) => {
    setCheckSelected(key);
    setSelectedOptionListNewItem([{"이사 형태": label}])
  }
  return (
    <div>
      <MoveStepTwoTemplate
        checkSelectBoxProps={checkSelectedBoxItems.map(({key, label, }) => ({
          label,
          caption: '',
          checked: checkSelected === key,
          onChange: () => onCheckSelectedHandler(key, label)
        }))}
        onClickNextAction={onClickNextHandler}
        onClickBeforeAction={onClickBeforeHandler}
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
        selectedOptionListProps={[...selectedOptionList, ...selectedOptionListNewItem]}/>
    </div>
  );
}