'use client'
import React, { useEffect, useState } from 'react';
import MoveStepFiveTemplate from '@/components/templates/stepperTemplate/move/MoveStepFiveTemplate';
import { selectedOptionIndexObject } from '@/components/molecules/selectedOptionList/SelectedOptionList';
import { useRouter } from 'next/navigation';

const checkSelectBoxItems: {key: string; label: string}[] = [
  {key: 'yes', label: '네'},
  {key: 'no', label: '아니요'},
];
export default function MoveFivePage() {
  const [selectedOptionList, setSelectedOptionList] = useState<selectedOptionIndexObject[]>([]);
  const [selectedOptionListNewItem, setSelectedOptionListNewItem] = useState<selectedOptionIndexObject[]>([]);
  const [address, setAddress] = React.useState<string>('');
  const [level, setLevel] = React.useState<string>('');
  const [area, setArea] = React.useState<string>('');
  const [selectedStartPoint, setSelectedStartPoint] = React.useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const storedData = localStorage.getItem('selectedIndex');
    if (storedData) setSelectedOptionList(JSON.parse(storedData));
  }, []);

  const onClickBeforeHandler = () => {
    const copyList = selectedOptionList;
    copyList.pop();
    localStorage.setItem('selectedIndex', JSON.stringify(copyList));
    router.push('/commission/move/step4');
  }
  const onClickNextHandler = () => {
    if (address === '' || level === '' || area === '' || selectedStartPoint === null) return;
    localStorage.setItem('selectedIndex', JSON.stringify([...selectedOptionList, ...selectedOptionListNewItem]));
    router.push('/commission/common/end');
  }
  const onCheckSelectedHandler = (key: string) => {
    setSelectedStartPoint(key);
    setSelectedOptionListNewItem(prev => {
      if (prev.length === 0) return prev;
      const updated = [...prev];
      updated[0]['a.엘리베이터'] = selectedStartPoint === 'yes' ? '없음' : '있음';
      return updated;
    });
  }
  const addressChangeHandler = (value: string) => {
    setAddress(value);
    setSelectedOptionListNewItem(prev => {
      if (prev.length === 0) return [{"도착 지역": value}];
      const updated = [...prev];
      updated[0]['도착 지역'] = value;
      return updated;
    });
  }
  const levelChangeHandler = (value: string) => {
    setLevel(value);
    setSelectedOptionListNewItem(prev => {
      if (prev.length === 0) return [{"도착 지역": value}];
      const updated = [...prev];
      updated[0]['도착 층수'] = value;
      return updated;
    });
  }
  const areaChangeHandler = (value: string) => {
    setArea(value);
    setSelectedOptionListNewItem(prev => {
      if (prev.length === 0) return [{"도착지 지역": value}];
      const updated = [...prev];
      updated[0]['도착지 정보'] = value;
      return updated;
    });
  }
  return (
    <MoveStepFiveTemplate
      id1={'address'}
      id2={'th'}
      id3={'men-number'}
      value1={address}
      value2={level}
      value3={area}
      onChange1={addressChangeHandler}
      onChange2={levelChangeHandler}
      onChange3={areaChangeHandler}
      checkSelectBoxProps={checkSelectBoxItems.map(({key, label}) => ({
        label,
        caption: '',
        checked: selectedStartPoint === key,
        onChange: () => onCheckSelectedHandler(key)
      }))}
      onClickBeforeAction={onClickBeforeHandler}
      onClickNextAction={onClickNextHandler}
      selectedOptionListProps={[...selectedOptionList, ...selectedOptionListNewItem]}/>
  );
}