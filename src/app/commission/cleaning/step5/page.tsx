'use client'
import React, { useEffect, useState } from 'react';
import CleaningStepFiveTemplate from '@/components/templates/stepperTemplate/cleaning/CleaningStepFiveTemplate';
import { selectedOptionIndexObject } from '@/components/molecules/selectedOptionList/SelectedOptionList';
import { useRouter } from 'next/navigation';

const checkSelectedBoxItems: {label: string; key: string;}[] = [
  {key: 'consultation', label: "협의 가능"},
  {key: 'quickly', label: "가능한 빨리"},
  {key: 'within', label: "일주일 이내"},
  {key: 'particular', label: "특정 날짜"},
];
function Page() {
  const [selectedDay, setSelectedDay] = React.useState<Date | undefined>(new Date());
  const [address, setAddress] = React.useState<string>('');
  const [question, setQuestion] = React.useState<string>('');
  const [selectedOptionList, setSelectedOptionList] = useState<selectedOptionIndexObject[]>([]);
  const [selectedOptionListNewItem, setSelectedOptionListNewItem] = useState<selectedOptionIndexObject[]>([]);
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
      if (prev.length === 0 || typeof selectedDay === undefined) return [{'희망 날짜': `${month}월 ${day}일`}];

      updated[0]['희망 날짜'] = `${month}월 ${day}일`;
      return updated;
    });
  }, [selectedDay]);
  const onClickBeforeHandler = () => {
    const copyList = selectedOptionList;
    copyList.pop();
    localStorage.setItem('selectedIndex', JSON.stringify(copyList));
    router.push('/commission/cleaning/step4');
  }
  const onClickNextHandler = () => {
    if (address.length === 0) return;
    localStorage.setItem('selectedIndex', JSON.stringify([...selectedOptionList, ...selectedOptionListNewItem, {"지역": address}]));
    router.push('/commission/common/end');
  }
  const onCheckSelectedHandler = (key: string, label: string) => {
    setCheckSelected(key);
    setSelectedOptionListNewItem(prev => {
      if (prev.length === 0) return [{"희망 날짜": label}];
      const updated = [...prev];
      updated[0]['희망 날짜'] = label;
      return updated;
    });
  }
  const addressChangeHandler = (value: string) => {
    setAddress(value);
    setSelectedOptionListNewItem(prev => {
      if (prev.length === 0) return [{"지역": value}];
      const updated = [...prev];
      updated[0]['지역'] = value;
      return updated;
    });
  }
  const questionChangeHandler = (value: string) => {
    setQuestion(value);
    setSelectedOptionListNewItem(prev => {
      if (prev.length === 0) return [{"문의사항": value}];
      const updated = [...prev];
      updated[0]['문의사항'] = value;
      return updated;
    });
  }
  return (
    <CleaningStepFiveTemplate
      checkSelectBoxProps={checkSelectedBoxItems.map(({key, label}) => ({
        key,
        label,
        caption: '',
        checked: checkSelected === key,
        onChange: () => onCheckSelectedHandler(key, label)
      }))}
      id1={'address'}
      value1={address}
      onChange1={addressChangeHandler}
      id2={'question'}
      value2={question}
      onChange2={questionChangeHandler}
      checkSelected={checkSelected}
      onClickNext={onClickNextHandler}
      onClickBefore={onClickBeforeHandler}
      selectedDay={selectedDay}
      setSelectedDay={setSelectedDay}
      selectedOptionListProps={[...selectedOptionList, ...selectedOptionListNewItem]}/>
  );
}

export default Page;