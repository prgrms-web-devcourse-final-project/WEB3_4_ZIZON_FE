'use client'
import React, { useEffect, useState } from 'react';
import HobbyStepFourTemplate from '@/components/templates/stepperTemplate/hobby/HobbyStepFourTemplate';
import { selectedOptionIndexObject } from '@/components/molecules/selectedOptionList/SelectedOptionList';
import { useRouter } from 'next/navigation';

const checkSelectDayItems: {key:string, label: string;}[] = [
  {key: "mo", label: '월요일'},
  {key: "tu", label: '화요일'},
  {key: "we", label: '수요일'},
  {key: "th", label: '목요일'},
  {key: "fr", label: '금요일'},
  {key: "sa", label: '토요일'},
  {key: "su", label: '일요일'},
];
const checkSelectTimeItems: {key: string; label: string;}[] = [
  {key: "morning", label: '아침(9시 이전)'},
  {key: "am", label: '오전(9시-12시)'},
  {key: "pm", label: '오후(12시-3시)'},
  {key: "afternoon", label: '늦은 오후(3시-6시)'},
  {key: "twilight", label: '저녁(6시-9시)'},
  {key: "lateEvening", label: '늦은 저녁(9시 이후)'},
];
export default function HobbyFourPage() {
  const [selectedOptionList, setSelectedOptionList] = useState<selectedOptionIndexObject[]>([]);
  const [selectedOptionListNewItem, setSelectedOptionListNewItem] = useState<selectedOptionIndexObject[]>([]);
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const storedData = localStorage.getItem('selectedIndex');
    if (storedData) setSelectedOptionList(JSON.parse(storedData));
  }, []);
  const onClickBeforeHandler = () => {
    const copyList = selectedOptionList;
    copyList.pop();
    localStorage.setItem('selectedIndex', JSON.stringify(copyList));
    router.push('/commission/hobby/step3');
  }
  const onClickNextHandler = () => {
    if (selectedDay === null || selectedTime === null) return;
    localStorage.setItem('selectedIndex', JSON.stringify([...selectedOptionList, ...selectedOptionListNewItem]));
    router.push('/commission/hobby/step5');
  }
  const onSelectedDayHandler = (key: string, label: string) => {
    setSelectedDay(key);
    setSelectedOptionListNewItem([{"희망 요일": label}]);
  }
  const onSelectedTimeHandler = (key: string, label: string) => {
    setSelectedTime(key);
    setSelectedOptionListNewItem(prev => {
      if (prev.length === 0) return prev;
      const updated = [...prev];
      updated[0]['희망 시간'] = label;
      return updated;
    });
  }
  return (
    <HobbyStepFourTemplate
      checkSelectBoxProps1={checkSelectDayItems.map(({key, label}) => ({
        key,
        label,
        caption: '',
        checked: selectedDay === key,
        onChange: () => onSelectedDayHandler(key, label)
      }))}
      checkSelectBoxProps2={checkSelectTimeItems.map(({key, label}) => ({
        key,
        label,
        caption: '',
        checked: selectedTime === key,
        onChange: () => onSelectedTimeHandler(key, label)
      }))}
      onClickBefore={onClickBeforeHandler}
      onClickNext={onClickNextHandler}
      selectedOptionListProps={[...selectedOptionList, ...selectedOptionListNewItem]}
    />
  );
}