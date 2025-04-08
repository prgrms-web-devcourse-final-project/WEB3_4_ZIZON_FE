'use client'
import React, { useState, useEffect } from 'react';
import LessonStepOneTemplate from '@/components/templates/stepperTemplate/lesson/LessonStepOneTemplate';
import { selectedOptionIndexObject } from '@/components/molecules/selectedOptionList/SelectedOptionList';
import { useRouter } from 'next/navigation';

export default function LessonOnePage() {
  const [selectedOptionList, setSelectedOptionList] = useState<selectedOptionIndexObject[]>([]);
  const [selectedOptionListNewItem, setSelectedOptionListNewItem] = useState<selectedOptionIndexObject[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [selectedSubIndex, setSelectedSubIndex] = useState<number | null>(null);
  const router = useRouter();

  useEffect(() => {
    const storedData = localStorage.getItem('selectedIndex');
    if (storedData) setSelectedOptionList(JSON.parse(storedData));
  }, []);

  const options1 = ['미취학아동', '초등학생', '중학생', '고등학교 1학년', '고등학교 2학년', '고등학교 3학년', '성인'];
  const options2 = ['개인', '그룹', '온라인(화상)', '학원'];

  const handleSelection = (index: number, type: 'main' | 'sub') => {
    if (type === 'main') {
      setSelectedIndex(index);
      setSelectedOptionListNewItem([{ '과외 학생': options1[index] }]);
    } else {
      setSelectedSubIndex(index);
      setSelectedOptionListNewItem(prev => {
        if (prev.length === 0) return prev;
        const updated = [...prev];
        updated[0]['과외 형태'] = options2[index];
        return updated;
      });
    }
  };

  const onNextHandler = () => {
    if (selectedIndex === null || selectedSubIndex === null) return;
    localStorage.setItem('selectedIndex', JSON.stringify([...selectedOptionList, ...selectedOptionListNewItem]));
    router.push('/commission/lesson/step2');
  };

  const onBeforeHandler = () => {
    localStorage.setItem('selectedIndex', JSON.stringify(selectedOptionList));
    router.push('/commission/common/start');
  };

  return (
    <LessonStepOneTemplate
      checkSelectBoxProps1={options1.map((label, idx) => ({
        label,
        caption: '',
        checked: selectedIndex === idx,
        onChange: () => handleSelection(idx, 'main'),
      }))}
      checkSelectBoxProps2={options2.map((label, idx) => ({
        label,
        caption: '',
        checked: selectedSubIndex === idx,
        onChange: () => handleSelection(idx, 'sub'),
      }))}
      selectedOptionListProps={[...selectedOptionList, ...selectedOptionListNewItem]}
      onBeforeAction={onBeforeHandler}
      onNextAction={onNextHandler}
    />
  );
}
