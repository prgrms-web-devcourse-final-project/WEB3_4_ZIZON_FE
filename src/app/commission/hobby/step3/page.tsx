'use client'
import React, { useEffect, useState } from 'react';

import HobbyStepThreeTemplate from '@/components/templates/stepperTemplate/hobby/HobbyStepThreeTemplate';
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
const selectedAgeBoxItems: {label: string; key: string;}[] = [
  {key: 'kid', label: "10대 미만"},
  {key: '10', label: "10대"},
  {key: '20', label: "20대"},
  {key: '30', label: "30대"},
];
export default function Page() {
  const [selectedOptionList, setSelectedOptionList] = useState<selectedOptionIndexObject[]>([]);
  const [selectedOptionListNewItem, setSelectedOptionListNewItem] = useState<selectedOptionIndexObject[]>([]);
  const [selectedAge, setSelectedAge] = useState<string | null>(null);
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
    router.push('/commission/hobby/step2');
  }
  const onClickNextHandler = () => {
    if (selectedAge === null || selectedGender === null || selectPreferGender === null) return;
    localStorage.setItem('selectedIndex', JSON.stringify([...selectedOptionList, ...selectedOptionListNewItem]));
    router.push('/commission/hobby/step4');
  }
  const onSelectedAge = (key: string, label: string) => {
    setSelectedAge(key);
    setSelectedOptionListNewItem(prev => {
      if (prev.length === 0) return [{'학생 연령': label}];
      const updated = [...prev];
      updated[0]['학생 연령'] = label;
      return updated;
    });
  }
  const onSelectedGender = (key: string, label: string) => {
    setSelectedGender(key);
    setSelectedOptionListNewItem(prev => {
      if (prev.length === 0) return  [{'학생 성별': label}];
      const updated = [...prev];
      updated[0]['학생 성별'] = label;
      return updated;
    });
  }
  const onSelectedPreferGender = (key: string, label: string) => {
    setSelectedPreferGender(key);
    setSelectedOptionListNewItem(prev => {
      if (prev.length === 0) return [{'희망 성별': label}];
      const updated = [...prev];
      updated[0]['희망 성별'] = label;
      return updated;
    });
  }
  return (
    <HobbyStepThreeTemplate
      checkSelectBoxProps={selectedAgeBoxItems.map(({key, label}) => ({
        label,
        caption: '',
        checked: selectedAge === key,
        onChange: () => onSelectedAge(key, label)
      }))}
      onClickBefore={onClickBeforeHandler}
      onClickNext={onClickNextHandler}
      iconCenterSelectBox1={selectedGenderItems.map(({key, title, category}) => ({
        type: 'center',
        title,
        category,
        subtitle: "",
        isOn: selectedGender === key,
        onClick: () => onSelectedGender(key, title)
      }))}
      iconCenterSelectBox2={selectedPreferGenderItems.map(({key, title, category}) => ({
        type: 'center',
        title,
        category,
        subtitle: "",
        isOn: selectPreferGender === key,
        onClick: () => onSelectedPreferGender(key, title)
      }))}
      selectedOptionListProps={[...selectedOptionList, ...selectedOptionListNewItem]}
    />
  );
}