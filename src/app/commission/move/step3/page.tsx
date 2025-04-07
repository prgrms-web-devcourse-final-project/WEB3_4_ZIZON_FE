'use client'
import React, { useEffect, useState } from 'react';
import MoveStepThreeTemplate from '@/components/templates/stepperTemplate/move/MoveStepThreeTemplate';
import { useRouter } from 'next/navigation';
import { selectedOptionIndexObject } from '@/components/molecules/selectedOptionList/SelectedOptionList';

const checkSelectBoxItems: {key: string; label: string}[] = [
  {key: 'yes', label: '네'},
  {key: 'no', label: '아니요'},
];
export default function MoveThreePage() {
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
    router.push('/commission/move/step2');
  }
  const onClickNextHandler = () => {
    if (address === '' || level === '' || area === '' || selectedStartPoint === null) return;
    localStorage.setItem('selectedIndex', JSON.stringify([...selectedOptionList, ...selectedOptionListNewItem]));
    router.push('/commission/move/step4');
  }
  const onCheckSelectedHandler = (key: string) => {
    setSelectedStartPoint(key);
    setSelectedOptionListNewItem(prev => {
      if (prev.length === 0) return prev;
      const updated = [...prev];
      updated[0]['엘리베이터'] = selectedStartPoint === 'yes' ? '있음' : '없음';
      return updated;
    });
  }
  const addressChangeHandler = (value: string) => {
    setAddress(value);
    setSelectedOptionListNewItem(prev => {
      if (prev.length === 0) return [{"출발 지역": value}];
      const updated = [...prev];
      updated[0]['출발 지역'] = value;
      return updated;
    });
  }
  const levelChangeHandler = (value: string) => {
    setLevel(value);
    setSelectedOptionListNewItem(prev => {
      if (prev.length === 0) return [{"출발 지역": value}];
      const updated = [...prev];
      updated[0]['출발 층수'] = value;
      return updated;
    });
  }
  const areaChangeHandler = (value: string) => {
    setArea(value);
    setSelectedOptionListNewItem(prev => {
      if (prev.length === 0) return [{"출발지 지역": value}];
      const updated = [...prev];
      updated[0]['출발지 정보'] = value;
      return updated;
    });
  }
  return (
    <MoveStepThreeTemplate
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