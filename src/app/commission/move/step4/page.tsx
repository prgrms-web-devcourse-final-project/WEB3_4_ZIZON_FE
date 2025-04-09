'use client'
import React, { useEffect, useState } from 'react';
import MoveStepFourTemplate from '@/components/templates/stepperTemplate/move/MoveStepFourTemplate';
import { selectedOptionIndexObject } from '@/components/molecules/selectedOptionList/SelectedOptionList';
import { useRouter } from 'next/navigation';

const appliancesSelectedItems: { key: number; label: string }[] = [
  { key: 0, label: '없음' },
  { key: 1, label: '냉장고' },
  { key: 2, label: '김치냉장고' },
  { key: 3, label: '에어컨' },
  { key: 4, label: 'TV & 모니터' },
  { key: 5, label: 'PC & 노트북' },
  { key: 6, label: '전자레인지' },
  { key: 7, label: '정수기' },
  { key: 8, label: '비데' },
  { key: 9, label: '기타' },
];

const furnitureSelectedItems: { key: number; label: string }[] = [
  { key: 0, label: '없음' },
  { key: 1, label: '침대' },
  { key: 2, label: '소파' },
  { key: 3, label: '의자' },
  { key: 4, label: '수납장' },
  { key: 5, label: '책장' },
  { key: 6, label: '옷장' },
  { key: 7, label: '화장대' },
  { key: 8, label: '피아노' },
  { key: 9, label: '기타' },
];

export default function MoveFourPage() {
  const [selectedOptionList, setSelectedOptionList] = useState<selectedOptionIndexObject[]>([]);
  const [selectedAppliances, setSelectedAppliances] = useState<number[]>([]);
  const [selectedFurniture, setSelectedFurniture] = useState<number[]>([]);
  const router = useRouter();

  useEffect(() => {
    const storedData = localStorage.getItem('selectedIndex');
    if (storedData) setSelectedOptionList(JSON.parse(storedData));
  }, []);

  const toggleItem = (array: number[], key: number): number[] => {
    if (array.includes(key)) {
      return array.filter((k) => k !== key);
    } else {
      return [...array, key];
    }
  };

  const onAppliancesSelectedHandler = (key: number) => {
    const updated = toggleItem(selectedAppliances, key);
    setSelectedAppliances(updated);
  };

  const onFurnitureSelectedHandler = (key: number) => {
    const updated = toggleItem(selectedFurniture, key);
    setSelectedFurniture(updated);
  };

  const onClickBeforeHandler = () => {
    const copyList = [...selectedOptionList];
    copyList.pop();
    localStorage.setItem('selectedIndex', JSON.stringify(copyList));
    router.push('/commission/move/step3');
  };

  const onClickNextHandler = () => {
    if (selectedAppliances.length === 0 || selectedFurniture.length === 0) return;
    const applianceLabels = selectedAppliances.map((key) => appliancesSelectedItems[key].label);
    const furnitureLabels = selectedFurniture.map((key) => furnitureSelectedItems[key].label);

    const newItem = {
      '가전제품': applianceLabels.length > 0 ? applianceLabels : ['없음'],
      '가구': furnitureLabels.length > 0 ? furnitureLabels : ['없음'],
    };

    const updatedList = [...selectedOptionList, newItem];
    localStorage.setItem('selectedIndex', JSON.stringify(updatedList));
    router.push('/commission/move/step5'); // 다음 페이지로
  };
  return (
    <div>
      <MoveStepFourTemplate
        checkSelectBoxProps1={appliancesSelectedItems.map(({ key, label }) => ({
          label,
          caption: '',
          checked: selectedAppliances.includes(key),
          onChange: () => onAppliancesSelectedHandler(key),
        }))}
        checkSelectBoxProps2={furnitureSelectedItems.map(({ key, label }) => ({
          label,
          caption: '',
          checked: selectedFurniture.includes(key),
          onChange: () => onFurnitureSelectedHandler(key),
        }))}
        onClickBefore={onClickBeforeHandler}
        onClickNext={onClickNextHandler}
        tableUnionType={'projects'}
        selectedOptionListProps={[
          ...selectedOptionList,
          {
            '가전제품': selectedAppliances.map((key, index) => index === 0 ? appliancesSelectedItems[key].label : `, ${appliancesSelectedItems[key].label}`),
            '가구': selectedFurniture.map((key,index) => index === 0 ? furnitureSelectedItems[key].label : `, ${furnitureSelectedItems[key].label}`),
          },
        ]}
      />
    </div>
  );
}
