'use client'
import React from 'react';
import LessonStepFiveTemplate from '@/components/templates/stepperTemplate/lesson/LessonStepFiveTemplate';

function Page() {
  const [selectedDay, setSelectedDay] = React.useState<Date | undefined>(undefined);
  const [address, setAddress] = React.useState<string>('');

  return (
    <div>
      <LessonStepFiveTemplate
        checkSelectBoxProps={[
          {label: "협의 가능", caption: "", checked: false, onChange: () => alert('') },
          {label: "가능한 빨리", caption: "", checked: false, onChange: () => {} },
          {label: "일주일 이내", caption: "", checked: false, onChange: () => {} },
          {label: "특정 날짜", caption: "", checked: false, onChange: () => {} },
        ]}
        id={'addFive'}
        placeholder={'예) 서울특별시 강남구'}
        type={'text'}
        value={address}
        title={''}
        onChange={setAddress}
        onClickNext={() => alert("다음")}
        onClickBefore={() => alert('이전')}
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}/>
    </div>
  );
}

export default Page;