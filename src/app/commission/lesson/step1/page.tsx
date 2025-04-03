'use client'
import React from 'react';
import LessonStepOneTemplate from '@/components/templates/stepperTemplate/lesson/LessonStepOneTemplate';

function Page() {
  return (
    <div>
      <LessonStepOneTemplate
        checkSelectBoxProps1={[
          {label: '미취학아동',caption: '', checked: false, onChange: () => alert('')},
          {label: '초등학생',caption: '', checked: false, onChange: () => alert('')},
          {label: '중학생',caption: '', checked: false, onChange: () => alert('')},
          {label: '고등학교 1학년',caption: '', checked: false, onChange: () => alert('')},
          {label: '고등학교 2학년',caption: '', checked: false, onChange: () => alert('')},
          {label: '고등학교 3학년',caption: '', checked: false, onChange: () => alert('')},
          {label: '성인',caption: '', checked: false, onChange: () => alert('')},
        ]}
        checkSelectBoxProps2={[
          {label: '개인',caption: '', checked: false, onChange: () => alert('')},
          {label: '그룹',caption: '', checked: false, onChange: () => alert('')},
          {label: '온라인(화상)',caption: '', checked: false, onChange: () => alert('')},
          {label: '학원',caption: '', checked: false, onChange: () => alert('')},
        ]}
        onClickBefore={() => alert('')}
        onClickNext={() => alert('')}/>
    </div>
  );
}

export default Page;