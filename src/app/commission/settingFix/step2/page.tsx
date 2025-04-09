'use client'
import React, { useState, useEffect } from 'react';
import SettingFixStepTwoTemplate from '@/components/templates/stepperTemplate/settingFix/SettingFixStepTwoTemplate';
import { selectedOptionIndexObject } from '@/components/molecules/selectedOptionList/SelectedOptionList';
import { useRouter } from 'next/navigation';

const options = ["협의 가능", "가능한 빨리", "일주일 이내", "특정 날짜"];

export default function SettingFixTwoPage() {
  const [selectedDay, setSelectedDay] = useState<Date | undefined>(new Date());
  const [selectedOptionList, setSelectedOptionList] = useState<selectedOptionIndexObject[]>([]);
  const [selectedOptionListNewItem, setSelectedOptionListNewItem] = React.useState<selectedOptionIndexObject[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [address, setAddress] = React.useState<string>('');
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

      updated[0]['요청 날짜'] = `${month}월 ${day}일`;
      return updated;
    });
  }, [selectedDay]);
  const handleSelection = (index: number) => {
    setSelectedIndex(index);
    if(index === 3) {
      setSelectedOptionListNewItem(prev => {
        const updated = [...prev];
        const date = new Date(`${selectedDay}`);

        const month = date.getMonth() + 1;
        const day = date.getDate();
        if (prev.length === 0 || typeof selectedDay === undefined) return [{'요청 날짜': `${month}월 ${day}일`}];
        updated[0]['요청 날짜'] = `${month}월 ${day}일`;
        return updated;
      });
    } else {
      setSelectedOptionListNewItem([{"요청 날짜": options[index]}])
    }
  };

  const onNextHandler = () => {
    if (selectedIndex === null && selectedDay) return;
    localStorage.setItem('selectedIndex', JSON.stringify([...selectedOptionList, ...selectedOptionListNewItem]));
    router.push('/commission/common/end');
  };

  const onBeforeHandler = () => {
    localStorage.setItem('selectedIndex', JSON.stringify(selectedOptionList));
    router.push('/commission/settingFix/step1');
  };
  const addressChangeHandler = (value: string) => {
    setAddress(value);
    setSelectedOptionListNewItem(prev => {
      if (prev.length === 0) return [{"서비스 지역": value}];
      const updated = [...prev];
      updated[0]['서비스 지역'] = value;
      return updated;
    });
  }
  return (
    <SettingFixStepTwoTemplate
      checkSelectBoxProps={options.map((label, idx) => ({
        label,
        caption: '',
        checked: selectedIndex === idx,
        onChange: () => handleSelection(idx)
      }))}
      id={'address'}
      value={address}
      onChange={addressChangeHandler}
      selectedIndex={selectedIndex}
      selectedOptionListProps={[...selectedOptionList, ...selectedOptionListNewItem]}
      onNextAction={onNextHandler}
      onBeforeAction={onBeforeHandler}
      selectedDay={selectedDay}
      setSelectedDay={setSelectedDay}
    />
  );
}