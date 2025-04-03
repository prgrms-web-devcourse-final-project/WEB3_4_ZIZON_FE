'use client'
import React from 'react';
import CleaningStepTwoTemplate from '@/components/templates/stepperTemplate/cleaning/CleaningStepTwoTemplate';

function Page() {
  return (
    <div>
      <CleaningStepTwoTemplate
        checkSelectBoxProps={[
          {label: '아파트',caption: '', checked: false, onChange: () => alert('')},
          {label: '빌라 & 연립주택',caption: '', checked: false, onChange: () => alert('')},
          {label: '오피스텔',caption: '', checked: false, onChange: () => alert('')},
          {label: '원롬',caption: '', checked: false, onChange: () => alert('')},
          {label: '단독 주택',caption: '', checked: false, onChange: () => alert('')},
          {label: '사무실 & 상가',caption: '', checked: false, onChange: () => alert('')},
        ]}
        onClickBefore={() => alert('')}
        onClickNext={() => alert('')}/>
    </div>
  );
}

export default Page;