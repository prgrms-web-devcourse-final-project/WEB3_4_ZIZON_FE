'use client'
import React from 'react';
import HobbyStepTwoTemplate from '@/components/templates/stepperTemplate/hobby/HobbyStepTwoTemplate';

function Page() {
  return (
    <div>
      <HobbyStepTwoTemplate
        checkSelectBoxProps1={[
          {label: '취미 및 다이어트',caption: '', checked: false, onChange: () => alert('')},
          {label: '입시 준비',caption: '', checked: false, onChange: () => alert('')},
          {label: '자격증 시험 준비',caption: '', checked: false, onChange: () => alert('')},
          {label: '기타',caption: '', checked: false, onChange: () => alert('')},
        ]}
        checkSelectBoxProps2={[
          {label: '개인',caption: '', checked: false, onChange: () => alert('')},
          {label: '그룹',caption: '', checked: false, onChange: () => alert('')},
          {label: '온라인(화상)',caption: '', checked: false, onChange: () => alert('')},
          {label: '학원',caption: '', checked: false, onChange: () => alert('')},
          {label: '기타',caption: '', checked: false, onChange: () => alert('')},
        ]}
        onClickBefore={() => alert('')}
        onClickNext={() => alert('')}/>
    </div>
  );
}

export default Page;