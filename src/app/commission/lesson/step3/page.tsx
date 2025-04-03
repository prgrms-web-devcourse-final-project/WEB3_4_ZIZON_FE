'use client'
import React from 'react';
import LessonStepThreeTemplate from '@/components/templates/stepperTemplate/lesson/LessonStepThreeTemplate';

export default function Page() {
  return (
    <div>
      <LessonStepThreeTemplate
        checkSelectBoxProps1={[
          {label: '월요일',caption: '', checked: false, onChange: () => alert('')},
          {label: '화요일',caption: '', checked: false, onChange: () => alert('')},
          {label: '수요일',caption: '', checked: false, onChange: () => alert('')},
          {label: '목요일',caption: '', checked: false, onChange: () => alert('')},
          {label: '금요일',caption: '', checked: false, onChange: () => alert('')},
          {label: '토요일',caption: '', checked: false, onChange: () => alert('')},
          {label: '일요일',caption: '', checked: false, onChange: () => alert('')},
        ]}
        checkSelectBoxProps2={[
          {label: '아침(9시 이전)',caption: '', checked: false, onChange: () => alert('')},
          {label: '오전(9시-12시)',caption: '', checked: false, onChange: () => alert('')},
          {label: '오후(12시-3시)',caption: '', checked: false, onChange: () => alert('')},
          {label: '늦은 오후(3시-6시)',caption: '', checked: false, onChange: () => alert('')},
          {label: '저녁(6시-9시)',caption: '', checked: false, onChange: () => alert('')},
          {label: '늦은 저녁(9시 이후)',caption: '', checked: false, onChange: () => alert('')},
        ]}
        onClickBefore={() => alert('')}
        onClickNext={() => alert('')}
      />
    </div>
  );
}