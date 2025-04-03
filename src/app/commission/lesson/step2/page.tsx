'use client'
import React from 'react';
import LessonStepTwoTemplate from '@/components/templates/stepperTemplate/lesson/LessonStepTwoTemplate';

export default function Page() {
  return (
    <div>
      <LessonStepTwoTemplate
        checkSelectBoxProps1={[
          {label: '국어',caption: '', checked: false, onChange: () => alert('')},
          {label: '영어',caption: '', checked: false, onChange: () => alert('')},
          {label: '수학',caption: '', checked: false, onChange: () => alert('')},
          {label: '한국사',caption: '', checked: false, onChange: () => alert('')},
          {label: '탐구',caption: '', checked: false, onChange: () => alert('')},
        ]}
        checkSelectBoxProps2={[
          {label: '논술',caption: '', checked: false, onChange: () => alert('')},
          {label: '체육',caption: '', checked: false, onChange: () => alert('')},
          {label: '미술',caption: '', checked: false, onChange: () => alert('')},
          {label: '음악',caption: '', checked: false, onChange: () => alert('')},
        ]}
        onClickBefore={() => alert('')}
        onClickNext={() => alert('')}
        iconSelectBoxProps={[
          {type: 'left', title: "교과 과정 내", subtitle: "국어, 영어, 수학, 외국어 등", category: 'pencil', isOn: false},
          {type: 'left', title: "교과 과정 외", subtitle: "논슬, 체육, 미술, 음악 등", category: 'ball', isOn: false}
        ]}
        title={''}
      />
    </div>
  );
}