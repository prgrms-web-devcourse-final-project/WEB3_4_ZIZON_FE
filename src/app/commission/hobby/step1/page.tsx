'use client'
import React, { useEffect, useState } from 'react';
import HobbyStepOneTemplate from '@/components/templates/stepperTemplate/hobby/HobbyStepOneTemplate';
import { useRouter } from 'next/navigation';
import { selectedOptionIndexObject } from '@/components/molecules/selectedOptionList/SelectedOptionList';

const checkSelectedBoxItems: {label: string; key: string;}[] = [
  {key: 'cook', label: "요리"},
  {key: 'dance', label: "댄스"},
  {key: 'sport', label: "스포츠"},
  {key: 'music', label: "음악"},
  {key: 'art', label: "미술"},
];
export default function HobbyOnePage() {
  const [selectedOptionList, setSelectedOptionList] = useState<selectedOptionIndexObject[]>([]);
  const [selectedOptionListNewItem, setSelectedOptionListNewItem] = useState<selectedOptionIndexObject[]>([]);
  const [selectedHobby, setSelectedHobby] = useState<string | null>(null);
  const [lesson, setLesson] = React.useState<string>('');
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
    if (selectedHobby === null || lesson === '') return;
    localStorage.setItem('selectedIndex', JSON.stringify([...selectedOptionList, ...selectedOptionListNewItem]));
    router.push('/commission/hobby/step2');
  }
  const onCheckSelectedHandler = (key: string, label: string) => {
    setSelectedHobby(key);
    setSelectedOptionListNewItem(prev => {
      if (prev.length === 0) return [{'취미 분류': label}];
      const updated = [...prev];
      updated[0]['취미 분류'] = label;
      return updated;
    });
  }
  const onChangeLesson = (value: string) => {
    setLesson(value);
    setSelectedOptionListNewItem(prev => {
      if (prev.length === 0) return [{'세부 사항': value}];
      const updated = [...prev];
      updated[0]['세부 사항'] = value;
      return updated;
    });
  }
  return (
    <HobbyStepOneTemplate
      checkSelectBoxProps={checkSelectedBoxItems.map(({key, label}) => ({
        label,
        caption: '',
        checked: selectedHobby === key,
        onChange: () => onCheckSelectedHandler(key, label)
      }))}
      id={'addFive'}
      placeholder={'피아노, 바이올린, 보컬, 성악, 미디어 등'}
      type={'text'}
      value={lesson}
      title={''}
      onChange={onChangeLesson}
      onClickNext={onClickNextHandler}
      onClickBefore={onClickBeforeHandler}
      selectedOptionListProps={[...selectedOptionList, ...selectedOptionListNewItem]}/>
  );
}