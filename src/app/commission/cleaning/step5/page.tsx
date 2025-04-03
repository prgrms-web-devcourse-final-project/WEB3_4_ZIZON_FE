'use client'
import React from 'react';
import CleaningStepFiveTemplate from '@/components/templates/stepperTemplate/cleaning/CleaningStepFiveTemplate';

function Page() {
  const [selectedDay, setSelectedDay] = React.useState<Date | undefined>(undefined);
  const [address, setAddress] = React.useState<string>('');
  const [question, setQuestion] = React.useState<string>('');
  return (
    <div>
      <CleaningStepFiveTemplate
        checkSelectBoxProps={[
          {label: "협의 가능", caption: "", checked: false, onChange: () => alert('') },
          {label: "가능한 빨리", caption: "", checked: false, onChange: () => {} },
          {label: "일주일 이내", caption: "", checked: false, onChange: () => {} },
          {label: "특정 날짜", caption: "", checked: false, onChange: () => {} },
        ]}
        id1={'address'}
        value1={address}
        onChange1={setAddress}
        id2={'question'}
        value2={question}
        onChange2={setQuestion}
        onClickNext={() => alert("다음")}
        onClickBefore={() => alert('이전')}
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}/>
    </div>
  );
}

export default Page;