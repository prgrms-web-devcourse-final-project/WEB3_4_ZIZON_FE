'use client'
import React, { useEffect, useState } from 'react';
import LessonStepFourTemplate from '@/components/templates/stepperTemplate/lesson/LessonStepFourTemplate';
import { selectedOptionIndexObject } from '@/components/molecules/selectedOptionList/SelectedOptionList';
import { useRouter } from 'next/navigation';

type CategoryType = "spanner" | "home" | "pallete" | "pencil" | "women" | "cleaning" | "men" | "question" | "truck" | "ball";
const selectedGenderItems: {key: string; title: string; category: CategoryType;}[] = [
  {key: 'men', title: '남성', category: 'men'},
  {key: 'women', title: '여성', category: 'women'},
];
const selectedPreferGenderItems: {key: string; title: string; category: CategoryType;}[] = [
  {key: 'men', title: '남성', category: 'men'},
  {key: 'women', title: '여성', category: 'women'},
  {key: 'none', title: '무관', category: 'question'},
];
export default function LessonFourPage() {
  const [selectedOptionList, setSelectedOptionList] = useState<selectedOptionIndexObject[]>([]);
  const [selectedOptionListNewItem, setSelectedOptionListNewItem] = useState<selectedOptionIndexObject[]>([]);
  const [selectedGender, setSelectedGender] = useState<string | null>(null);
  const [selectPreferGender, setSelectedPreferGender] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const storedData = localStorage.getItem('selectedIndex');
    if (storedData) setSelectedOptionList(JSON.parse(storedData));
  }, []);
  const onClickBeforeHandler = () => {
    const copyList = selectedOptionList;
    copyList.pop();
    localStorage.setItem('selectedIndex', JSON.stringify(copyList));
    router.push('/commission/lesson/step3');
  }
  const onClickNextHandler = () => {
    localStorage.setItem('selectedIndex', JSON.stringify([...selectedOptionList, ...selectedOptionListNewItem]));
    router.push('/commission/lesson/step5');
  }
  const onSelectGenderHandler = (key: string, title: string) => {
    setSelectedGender(key);
    setSelectedOptionListNewItem(prev => {
      if (prev.length === 0) return [{'학생 성별': title}];
      const updated = [...prev];
      updated[0]['학생 성별'] = title;
      return updated;
    });
  }
  const onSelectGenderItemHandler = (key: string, title: string) => {
    setSelectedPreferGender(key);
    setSelectedOptionListNewItem(prev => {
      if (prev.length === 0) return [{'희망 성별': title}];
      const updated = [...prev];
      updated[0]['희망 성별'] = title;
      return updated;
    });
  }
  return (
    <LessonStepFourTemplate
      selectedGenderItems={selectedGenderItems.map(({key, title, category}) => ({
        type: 'center',
        title,
        subtitle: '',
        category,
        isOn: selectedGender === key,
        onClick: () => onSelectGenderHandler(key, title),
      }))}
      selectedPreferGenderItems={selectedPreferGenderItems.map(({key, title, category}) => ({
        type: 'center',
        title,
        subtitle: '',
        category,
        isOn: selectPreferGender === key,
        onClick: () => onSelectGenderItemHandler(key, title),
      }))}
      onClickBefore={onClickBeforeHandler}
      onClickNext={onClickNextHandler}
      selectedOptionListProps={[...selectedOptionList, ...selectedOptionListNewItem]}
    />
  );
}