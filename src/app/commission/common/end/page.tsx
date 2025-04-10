'use client'
import React, { useEffect, useState } from 'react';
import CommonEndStepTemplate from '@/components/templates/stepperTemplate/common/CommonEndStepTemplate';
import { selectedOptionIndexObject } from '@/components/molecules/selectedOptionList/SelectedOptionList';
import { useRouter } from 'next/navigation';
import { commissionQuestion } from '@/utils/commissionQuestion';
import { postProject } from '@/apis/project/postProject';
import { getCommissionCategory } from '@/utils/getCommissionCategory';
import { postChatRooms } from '@/apis/chat/postChatRooms';

export default function CommonEndPage() {
  const [selectedDay, setSelectedDay] = React.useState<Date | undefined>(new Date());
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
  useEffect(() => {
    if (title === '' || price === '' || subtitle === '') return;
    setSelectedOptionListNewItem(prev => {
      const updated = [...prev];
      const date = new Date(`${selectedDay}`);

      const month = date.getMonth() + 1;
      const day = date.getDate();
      if (prev.length === 0 || typeof selectedDay === undefined) return [{'마감 날짜': `${month}월 ${day}일`}];

      updated[0]['마감 날짜'] = `${month}월 ${day}일`;
      return updated;
    });
  }, [selectedDay]);
  const onClickBeforeHandler = () => {
    const copyList = selectedOptionList;
    copyList.pop();
    localStorage.setItem('selectedIndex', JSON.stringify(copyList));
  }
  const onClickNextHandler = async () => {
    if (title === '' || subtitle === '' || price === '' || selectedDay === undefined) return;
    const categoryId = getCommissionCategory(selectedOptionList[0]['요청 형식']);
    if (categoryId === 0) return;
    const date = new Date(`${selectedDay}`);

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const { description, region } = commissionQuestion([...selectedOptionList]);

    const cookies = document.cookie.split(';').reduce((acc: Record<string, string>, cookie) => {
      const [key, value] = cookie.trim().split('=');
      acc[key] = decodeURIComponent(value);
      return acc;
    }, {});
    const targetExpertId = cookies['target_expert_id'];

    const requestBody: any = {
      categoryId,
      title,
      summary: subtitle,
      region,
      deadline: `${year}-${month < 10 ? "0"+month : month}-${day < 10 ? "0"+day : day}T01:01:01`,
      description: JSON.stringify(description),
      budget: Number(price),
    };

    if (targetExpertId) {
      requestBody.target_expert_id = targetExpertId;
    }
    const response = await postProject(requestBody);

    if(targetExpertId) {
      const newChatRooms = await postChatRooms({project_id: `${response.projectId}`});
      console.log(newChatRooms);
      if(newChatRooms.message === "채팅방이 생성되었습니다.") {
        router.push(`/client/chat`);
      }
    } else {
      router.push(`/commission/${response.projectId}`);
    }
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
      selectedDay={selectedDay}
      setSelectedDay={setSelectedDay}
      selectedOptionListProps={[...selectedOptionList, ...selectedOptionListNewItem]}/>
  );
}