'use client'
import React, { useEffect, useState } from 'react';
import HobbyStepTwoTemplate from '@/components/templates/stepperTemplate/hobby/HobbyStepTwoTemplate';
import { selectedOptionIndexObject } from '@/components/molecules/selectedOptionList/SelectedOptionList';
import { useRouter } from 'next/navigation';

const checkSelectedBoxItems1: {label: string; key: string;}[] = [
  {key: 'hobby', label: "취미 및 다이어트"},
  {key: 'entrance', label: "입시 준비"},
  {key: 'certificate', label: "자격증 시험 준비"},
  {key: 'etc', label: "기타"},
];
const checkSelectedBoxItems2: {label: string; key: string;}[] = [
  {key: 'personal', label: "개인"},
  {key: 'group', label: "그룹"},
  {key: 'online', label: "온라인(화상)"},
  {key: 'institute', label: "학원"},
  {key: 'etc', label: "기타"},
];
export default function HobbyTwoPage() {
  const [selectedOptionList, setSelectedOptionList] = useState<selectedOptionIndexObject[]>([]);
  const [selectedOptionListNewItem, setSelectedOptionListNewItem] = useState<selectedOptionIndexObject[]>([]);
  const [selectedPurpose, setSelectedPurpose] = useState<string | null>(null);
  const [selectedShape, setSelectedShape] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const storedData = localStorage.getItem('selectedIndex');
    if (storedData) setSelectedOptionList(JSON.parse(storedData));
  }, []);
  const onClickBeforeHandler = () => {
    const copyList = selectedOptionList;
    copyList.pop();
    localStorage.setItem('selectedIndex', JSON.stringify(copyList));
    router.push('/commission/hobby/step1');
  }
  const onClickNextHandler = () => {
    if (selectedPurpose === null || selectedShape === '') return;
    localStorage.setItem('selectedIndex', JSON.stringify([...selectedOptionList, ...selectedOptionListNewItem]));
    router.push('/commission/hobby/step3');
  }
  const onSelectedPurpose = (key: string, label: string) => {
    setSelectedPurpose(key);
    setSelectedOptionListNewItem(prev => {
      if (prev.length === 0) return [{'레슨 목적': label}];
      const updated = [...prev];
      updated[0]['레슨 목적'] = label;
      return updated;
    });
  }
  const onSelectedShape = (key: string, label: string) => {
    setSelectedShape(key);
    setSelectedOptionListNewItem(prev => {
      if (prev.length === 0) return [{'레슨 형태': label}];
      const updated = [...prev];
      updated[0]['레슨 형태'] = label;
      return updated;
    });
  }
  return (
    <HobbyStepTwoTemplate
      checkSelectBoxProps1={checkSelectedBoxItems1.map(({key, label})=> ({
        label,
        caption: '',
        checked: selectedPurpose === key,
        onChange: () => onSelectedPurpose(key, label)
      }))}
      checkSelectBoxProps2={checkSelectedBoxItems2.map(({key, label})=> ({
        label,
        caption: '',
        checked: selectedShape === key,
        onChange: () => onSelectedShape(key, label)
      }))}
      onClickBefore={onClickBeforeHandler}
      onClickNext={onClickNextHandler}
      selectedOptionListProps={[...selectedOptionList, ...selectedOptionListNewItem]}/>
  );
}