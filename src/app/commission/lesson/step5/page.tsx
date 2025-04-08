'use client'
import React, { useEffect, useState } from 'react';
import LessonStepFiveTemplate from '@/components/templates/stepperTemplate/lesson/LessonStepFiveTemplate';
import { selectedOptionIndexObject } from '@/components/molecules/selectedOptionList/SelectedOptionList';
import { useRouter } from 'next/navigation';

const checkSelectedBoxItems: {label: string; key: string;}[] = [
  {key: 'consultation', label: "협의 가능"},
  {key: 'quickly', label: "가능한 빨리"},
  {key: 'within', label: "일주일 이내"},
  {key: 'particular', label: "특정 날짜"},
];
export default function LessonFivePage() {
  const [selectedOptionList, setSelectedOptionList] = useState<selectedOptionIndexObject[]>([]);
  const [selectedOptionListNewItem, setSelectedOptionListNewItem] = useState<selectedOptionIndexObject[]>([]);
  const [selectedDay, setSelectedDay] = React.useState<Date | undefined>(new Date());
  const [address, setAddress] = React.useState<string>('');
  const [checkSelected, setCheckSelected] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const storedData = localStorage.getItem('selectedIndex');
    if (storedData) setSelectedOptionList(JSON.parse(storedData));
  }, []);
  useEffect(() => {
    if (checkSelected === null) return;
    setSelectedOptionListNewItem(prev => {
      const updated = [...prev];
      const date = new Date(`${selectedDay}`);

      const month = date.getMonth() + 1;
      const day = date.getDate();
      if (prev.length === 0 || typeof selectedDay === undefined) return [{'이사 날짜': `${month}월 ${day}일`}];

      updated[0]['이사 날짜'] = `${month}월 ${day}일`;
      return updated;
    });
  }, [selectedDay]);
  const onClickBeforeHandler = () => {
    const copyList = selectedOptionList;
    copyList.pop();
    localStorage.setItem('selectedIndex', JSON.stringify(copyList));
    router.push('/commission/lesson/step4');
  }
  const onClickNextHandler = () => {
    if (address.length === 0) return;
    localStorage.setItem('selectedIndex', JSON.stringify([...selectedOptionList, ...selectedOptionListNewItem]));
    router.push('/commission/common/end');
  }
  const onCheckSelectedHandler = (key: string, label: string) => {
    setCheckSelected(key);
    setSelectedOptionListNewItem(prev => {
      if (prev.length === 0) return [{'희망 날짜': label}];
      const updated = [...prev];
      updated[0]['희망 날짜'] = label;
      return updated;
    });
  }
  const addressChangeHandler = (value: string) => {
    setAddress(value);
    setSelectedOptionListNewItem(prev => {
      if (prev.length === 0) return [{'지역': value}];
      const updated = [...prev];
      updated[0]['지역'] = value;
      return updated;
    });
  }
  return (
    <LessonStepFiveTemplate
      checkSelectBoxProps={checkSelectedBoxItems.map(({key, label}) => ({
        key,
        label,
        caption: '',
        checked: checkSelected === key,
        onChange: () => onCheckSelectedHandler(key, label)
      }))}
      id={'addFive'}
      placeholder={'예) 서울특별시 강남구'}
      type={'text'}
      value={address}
      title={''}
      checkSelected={checkSelected}
      onChange={addressChangeHandler}
      onClickNext={onClickNextHandler}
      onClickBefore={onClickBeforeHandler}
      selectedOptionListProps={[...selectedOptionList, ...selectedOptionListNewItem]}
      selectedDay={selectedDay}
      setSelectedDay={setSelectedDay}/>
  );
}
