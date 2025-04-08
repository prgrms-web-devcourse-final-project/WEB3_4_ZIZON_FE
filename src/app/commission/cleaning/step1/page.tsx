'use client'
import React, { useEffect, useState } from 'react';
import CleaningStepOneTemplate from '@/components/templates/stepperTemplate/cleaning/CleaningStepOneTemplate';
import { selectedOptionIndexObject } from '@/components/molecules/selectedOptionList/SelectedOptionList';
import { useRouter } from 'next/navigation';

type CategoryType = "spanner" | "home" | "pallete" | "pencil" | "women" | "cleaning" | "men" | "question" | "truck" | "ball";
const selectedCleaningItems: {key: string; title: string; category: CategoryType;}[] = [
  {key: 'move', title: '이사 청소', category: 'truck'},
  {key: 'home', title: '입주 청소', category: 'home'},
  {key: 'cleaning', title: '리모델링 후 청소', category: 'cleaning'},
];
export default function CleaningOnePage() {
  const [selectedOptionList, setSelectedOptionList] = useState<selectedOptionIndexObject[]>([]);
  const [selectedOptionListNewItem, setSelectedOptionListNewItem] = useState<selectedOptionIndexObject[]>([]);
  const [selectedCleaning, setSelectedCleaning] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const storedData = localStorage.getItem('selectedIndex');
    if (storedData) setSelectedOptionList(JSON.parse(storedData));
  }, []);
  const onClickBeforeHandler = () => {
    const copyList = selectedOptionList;
    copyList.pop();
    localStorage.setItem('selectedIndex', JSON.stringify(copyList));
    router.push('/commission/move/step1');
  }
  const onClickNextHandler = () => {
    localStorage.setItem('selectedIndex', JSON.stringify([...selectedOptionList, ...selectedOptionListNewItem]));
    router.push('/commission/cleaning/step2');
  }
  const onSelectCleaningItemHandler = (key: string, title: string) => {
    setSelectedCleaning(key);
    setSelectedOptionListNewItem([{"청소 형태": title}]);
  }
  return (
    <CleaningStepOneTemplate
      iconCenterSelectBox={selectedCleaningItems.map(({key, title, category}) => ({
        type: 'center',
        title,
        category,
        isOn: selectedCleaning === key,
        onClick: () => onSelectCleaningItemHandler(key, title)
      }))}
      onClickBefore={onClickBeforeHandler}
      onClickNext={onClickNextHandler}
      selectedOptionListProps={[...selectedOptionList, ...selectedOptionListNewItem]}
    />
  );
}