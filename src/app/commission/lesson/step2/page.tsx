'use client'
import React, { useEffect, useState } from 'react';
import LessonStepTwoTemplate from '@/components/templates/stepperTemplate/lesson/LessonStepTwoTemplate';
import { selectedOptionIndexObject } from '@/components/molecules/selectedOptionList/SelectedOptionList';
import { CategoryType } from '@/app/commission/common/start/page';
import { useRouter } from 'next/navigation';

const iconSelectBoxItems: {key: string; title: string; subtitle: string; category: CategoryType}[] = [
  {key: "humanities", title: "교과 과정 내", subtitle: "국어, 영어, 수학, 외국어 등", category: "pencil"},
  {key: "entertainment", title: "교과 과정 외", subtitle: "논슬, 체육, 미술, 음악 등", category: "ball"},
];
const humanitiesItems: {key: string; label: string; }[] = [
  {key: "korean", label: "국어"},
  {key: "english", label: "영어"},
  {key: "math", label: "수학"},
  {key: "korean_history", label: "한국사"},
  {key: "research", label: "탐구"},
];
const entertainmentItems: {key: string; label: string; }[] = [
  {key: "discuss", label: "논술"},
  {key: "pt", label: "체육"},
  {key: "art", label: "미술"},
  {key: "music", label: "음악"},
];
export default function LessonTwoPage() {
  const [selectedOptionList, setSelectedOptionList] = useState<selectedOptionIndexObject[]>([]);
  const [selectedOptionListNewItem, setSelectedOptionListNewItem] = useState<selectedOptionIndexObject[]>([]);
  const [iconSelectedItem, setIconSelectedItem] = useState<string | null>(null);
  const [humanitiesItem, setHumanitiesItem] = useState<string | null>(null);
  const [entertainmentItem, setEntertainmentItem] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const storedData = localStorage.getItem('selectedIndex');
    if (storedData) setSelectedOptionList(JSON.parse(storedData));
  }, []);
  const onClickBeforeHandler = () => {
    const copyList = selectedOptionList;
    copyList.pop();
    localStorage.setItem('selectedIndex', JSON.stringify(copyList));
    router.push('/commission/lesson/step1');
  }
  const onClickNextHandler = () => {
    if(!(iconSelectedItem && (humanitiesItem || entertainmentItem))) return;
    localStorage.setItem('selectedIndex', JSON.stringify([...selectedOptionList, ...selectedOptionListNewItem]));
    router.push('/commission/lesson/step3');
  }
  const onIconSelectedHandler = (key: string, title: string) => {
    setIconSelectedItem(key);
    setSelectedOptionListNewItem([{"과정 구분": title}]);
  }
  const onHumanitiesSelectedHandler = (key: string, label: string) => {
    setHumanitiesItem(key);
    setSelectedOptionListNewItem(prev => {
      if (prev.length === 0) return prev;
      const updated = [...prev];
      updated[0]['선택 과목'] = label;
      return updated;
    });
  }
  const onEntertainmentSelectedHandler = (key: string, label: string) => {
    setEntertainmentItem(key);
    setSelectedOptionListNewItem(prev => {
      if (prev.length === 0) return prev;
      const updated = [...prev];
      updated[0]['선택 과목'] = label;
      return updated;
    });
  }
  return (
    <LessonStepTwoTemplate
      iconSelectBoxProps={iconSelectBoxItems.map(({key, title, subtitle, category}) => ({
        type: 'left',
        key,
        title,
        subtitle,
        category,
        isOn: iconSelectedItem === key,
        onClick: () => onIconSelectedHandler(key, title)
      }))}
      checkSelectBoxProps1={humanitiesItems.map(({key, label})=>({
        key,
        label,
        caption: '',
        checked: humanitiesItem === key,
        onChange: () => onHumanitiesSelectedHandler(key, label)
      }))}
      checkSelectBoxProps2={entertainmentItems.map(({key, label})=>({
        key,
        label,
        caption: '',
        checked: entertainmentItem === key,
        onChange: () => onEntertainmentSelectedHandler(key, label)
      }))}
      iconSelectedItem={iconSelectedItem}
      onClickBefore={onClickBeforeHandler}
      onClickNext={onClickNextHandler}
      title={''}
      selectedOptionListProps={[...selectedOptionList, ...selectedOptionListNewItem]}
    />
  );
}