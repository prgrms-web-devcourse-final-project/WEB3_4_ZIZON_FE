'use client'
import React, { useEffect, useState } from 'react';
import CleaningStepThreeTemplate from '@/components/templates/stepperTemplate/cleaning/CleaningStepThreeTemplate';
import { selectedOptionIndexObject } from '@/components/molecules/selectedOptionList/SelectedOptionList';
import { useRouter } from 'next/navigation';

function Page() {
  const [roomCount, setRoomCount] = React.useState<string>('');
  const [wcCount, setWCCount] = React.useState<string>('');
  const [verandaCount, setVerandaCount] = React.useState<string>('');
  const [selectedOptionList, setSelectedOptionList] = useState<selectedOptionIndexObject[]>([]);
  const [selectedOptionListNewItem, setSelectedOptionListNewItem] = useState<selectedOptionIndexObject[]>([]);
  const router = useRouter();

  useEffect(() => {
    const storedData = localStorage.getItem('selectedIndex');
    if (storedData) setSelectedOptionList(JSON.parse(storedData));
  }, []);

  const onClickBeforeHandler = () => {
    const copyList = selectedOptionList;
    copyList.pop();
    localStorage.setItem('selectedIndex', JSON.stringify(copyList));
    router.push('/commission/cleaning/step2');
  }
  const onClickNextHandler = () => {
    if (roomCount === '' || wcCount === '' || verandaCount === '') return;
    localStorage.setItem('selectedIndex', JSON.stringify([...selectedOptionList, ...selectedOptionListNewItem]));
    router.push('/commission/cleaning/step4');
  }

  const roomCountChangeHandler = (value: string) => {
    setRoomCount(value);
    setSelectedOptionListNewItem(prev => {
      if (prev.length === 0) return [{"방 개수": value}];
      const updated = [...prev];
      updated[0]['방 개수'] = value;
      return updated;
    });
  }
  const wcCountChangeHandler = (value: string) => {
    setWCCount(value);
    setSelectedOptionListNewItem(prev => {
      if (prev.length === 0) return [{"화장실 개수": value}];
      const updated = [...prev];
      updated[0]['화장실 개수'] = value;
      return updated;
    });
  }
  const verandaCountChangeHandler = (value: string) => {
    setVerandaCount(value);
    setSelectedOptionListNewItem(prev => {
      if (prev.length === 0) return [{"베란다 개수": value}];
      const updated = [...prev];
      updated[0]['베란다 개수'] = value;
      return updated;
    });
  }
  return (
    <CleaningStepThreeTemplate
      id1={'roomCount'}
      id2={'wcCount'}
      id3={'verandaCount'}
      value1={roomCount}
      value2={wcCount}
      value3={verandaCount}
      onChange1={roomCountChangeHandler}
      onChange2={wcCountChangeHandler}
      onChange3={verandaCountChangeHandler}
      onClickBefore={onClickBeforeHandler}
      onClickNext={onClickNextHandler}
      selectedOptionListProps={[...selectedOptionList, ...selectedOptionListNewItem]}/>
  );
}

export default Page;