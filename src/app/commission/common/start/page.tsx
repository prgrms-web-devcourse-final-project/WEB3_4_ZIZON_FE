'use client'
import CommonStartStepperTemplate from '@/components/templates/stepperTemplate/common/CommonStartStepperTemplate';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { selectedOptionIndexObject } from '@/components/molecules/selectedOptionList/SelectedOptionList';

type CategoryType = "spanner" | "home" | "pallete" | "pencil" | "women" | "cleaning" | "men" | "question" | "truck" | "ball";

const options: { key: string; title: string; subtitle: string; category: CategoryType; }[] = [
  { key: 'settingFix', title: '설치 및 수리', subtitle: '가전제품부터 가구까지 손쉽게 옮기고 고쳐요', category: 'spanner' },
  { key: 'lesson', title: '과외', subtitle: '원하는 과목을 원하는 시간에 전문가와 공부해요', category: 'pencil' },
  { key: 'move', title: '이사 및 청소', subtitle: '입주 청소부터 이사 마무리까지 전문가의 손길로', category: 'home' },
  { key: 'hobby', title: '취미생활', subtitle: '댄스, 음악, 미술을 전문가와 함께 더 즐겁게 배워요', category: 'pallete' }
];

export default function CommissionPage() {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedOptionList, setSelectedOptionList] = useState<selectedOptionIndexObject[]>([]);
  const router = useRouter();

  const handleSelection = (type: string, label: string) => {
    setSelectedType(type);
    setSelectedOptionList([{ '요청 형식': label }]);
  };

  const onNextHandler = () => {
    if (!selectedType) return alert('하나를 선택해주세요');
    localStorage.setItem('selectedIndex', JSON.stringify(selectedOptionList));
    router.push(`/commission/${selectedType}/step1`);
  };

  return (
    <CommonStartStepperTemplate
      iconSelectBox={options.map(({ key, title, subtitle, category }) => ({
        type: 'left',
        title,
        subtitle,
        category,
        isOn: selectedType === key,
        onClick: () => handleSelection(key, title)
      }))}
      selectedOptionListProps={selectedOptionList}
      onNextHandler={onNextHandler}
    />
  );
}