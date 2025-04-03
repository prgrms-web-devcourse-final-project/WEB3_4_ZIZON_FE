'use client'
import React from 'react';
import MoveStepTwoTemplate from '@/components/templates/stepperTemplate/move/MoveStepTwoTemplate';

function Page() {
  const [selectedDay, setSelectedDay] = React.useState<Date | undefined>(undefined);

  return (
    <div>
      <MoveStepTwoTemplate
        checkSelectBoxProps={[
          {label: "협의 가능", caption: "", checked: false, onChange: () => alert('') },
          {label: "가능한 빨리", caption: "", checked: false, onChange: () => {} },
          {label: "일주일 이내", caption: "", checked: false, onChange: () => {} },
          {label: "특정 날짜", caption: "", checked: false, onChange: () => {} },
        ]}
        onClickNext={() => alert("다음")}
        onClickBefore={() => alert('이전')}
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}/>
    </div>
  );
}

export default Page;