'use client'
import React, { useEffect, useState } from 'react';
import CommonEndStepTemplate from '@/components/templates/stepperTemplate/common/CommonEndStepTemplate';
import { selectedOptionIndexObject } from '@/components/molecules/selectedOptionList/SelectedOptionList';
import { useRouter } from 'next/navigation';
import { commissionQuestion } from '@/utils/commissionQuestion';

export default function CommonEndPage() {
  const [selectedOptionList, setSelectedOptionList] = useState<selectedOptionIndexObject[]>([]);
  const [selectedOptionListNewItem, setSelectedOptionListNewItem] = useState<selectedOptionIndexObject[]>([]);
  const [title, setTile] = React.useState<string>('');
  const [subtitle, setSubtitle] = React.useState<string>('');
  const [price, setPrice] = React.useState<string>('');
  const router = useRouter();

  useEffect(() => {
    const storedData = localStorage.getItem('selectedIndex');
    if (storedData) setSelectedOptionList(JSON.parse(storedData));
  }, []);

  const onClickBeforeHandler = () => {
    const copyList = selectedOptionList;
    copyList.pop();
    localStorage.setItem('selectedIndex', JSON.stringify(copyList));
  }
  const onClickNextHandler = () => {
    if (title === '' || subtitle === '' || price === '') return;
    const { description, region } = commissionQuestion([...selectedOptionList]);
    
  }
  const titleChangeHandler = (value: string) => {
    setTile(value);
    setSelectedOptionListNewItem(prev => {
      if (prev.length === 0) return [{"제목": value}];
      const updated = [...prev];
      updated[0]['제목'] = value;
      return updated;
    });
  }
  const subtitleChangeHandler = (value: string) => {
    setSubtitle(value);
    setSelectedOptionListNewItem(prev => {
      if (prev.length === 0) return [{"부제목": value}];
      const updated = [...prev];
      updated[0]['부제목'] = value;
      return updated;
    });
  }
  const priceChangeHandler = (value: string) => {
    setPrice(value);
    setSelectedOptionListNewItem(prev => {
      if (prev.length === 0) return [{"비용": value}];
      const updated = [...prev];
      updated[0]['비용'] = value;
      return updated;
    });
  }
  return (
    <CommonEndStepTemplate
      id1={'address'}
      id2={'th'}
      id3={'men-number'}
      value1={title}
      value2={subtitle}
      value3={price}
      onChange1={titleChangeHandler}
      onChange2={subtitleChangeHandler}
      onChange3={priceChangeHandler}
      onClickBefore={onClickBeforeHandler}
      onClickNext={onClickNextHandler}
      selectedOptionListProps={[...selectedOptionList, ...selectedOptionListNewItem]}/>
  );
}