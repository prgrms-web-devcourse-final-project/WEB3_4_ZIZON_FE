'use client'
import React from 'react';
import MoveStepFourTemplate from '@/components/templates/stepperTemplate/move/MoveStepFourTemplate';

export default function Page() {
  return (
    <div>
      <MoveStepFourTemplate
        checkSelectBoxProps1={[
          {label: '없음',caption: '', checked: false, onChange: () => alert('')},
          {label: '냉장고',caption: '', checked: false, onChange: () => alert('')},
          {label: '김치냉장고',caption: '', checked: false, onChange: () => alert('')},
          {label: '에어컨',caption: '', checked: false, onChange: () => alert('')},
          {label: 'TV & 모니터',caption: '', checked: false, onChange: () => alert('')},
          {label: 'PC & 노트북',caption: '', checked: false, onChange: () => alert('')},
          {label: '전자레인지',caption: '', checked: false, onChange: () => alert('')},
          {label: '정수기',caption: '', checked: false, onChange: () => alert('')},
          {label: '비데',caption: '', checked: false, onChange: () => alert('')},
          {label: '기타',caption: '', checked: false, onChange: () => alert('')},
        ]}
        checkSelectBoxProps2={[
          {label: '없음',caption: '', checked: false, onChange: () => alert('')},
          {label: '침대',caption: '', checked: false, onChange: () => alert('')},
          {label: '소파',caption: '', checked: false, onChange: () => alert('')},
          {label: '의자',caption: '', checked: false, onChange: () => alert('')},
          {label: '수납장',caption: '', checked: false, onChange: () => alert('')},
          {label: '책장',caption: '', checked: false, onChange: () => alert('')},
          {label: '옷장',caption: '', checked: false, onChange: () => alert('')},
          {label: '화장대',caption: '', checked: false, onChange: () => alert('')},
          {label: '피아노',caption: '', checked: false, onChange: () => alert('')},
          {label: '기타',caption: '', checked: false, onChange: () => alert('')},
        ]}
        onClickBefore={() => alert('')}
        onClickNext={() => alert('')}
        onImageUpload={()=> alert('')}
      />
    </div>
  );
}