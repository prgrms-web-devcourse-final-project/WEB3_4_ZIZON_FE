'use client'
import React from 'react';
import CleaningStepOneTemplate from '@/components/templates/stepperTemplate/cleaning/CleaningStepOneTemplate';

export default function Page() {
  return (
    <div>
      <CleaningStepOneTemplate
        iconCenterSelectBox={[
          {type: 'center', title: '이사 청소', subtitle: '', category: 'truck', isOn: false},
          {type: 'center', title: '입주 청소', subtitle: '', category: 'home', isOn: false},
          {type: 'center', title: '리모델링 후 청소', subtitle: '', category: 'cleaning', isOn: false},
        ]}
        onClickBefore={() => alert('')}
        onClickNext={() => alert('')}
      />
    </div>
  );
}