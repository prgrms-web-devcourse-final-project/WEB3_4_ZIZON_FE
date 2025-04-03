'use client'
import React from 'react';
import MoveStepOneTemplate from '@/components/templates/stepperTemplate/move/MoveStepOneTemplate';

function Page() {
  return (
    <div>
      <MoveStepOneTemplate
        iconCenterSelectBox={[
          {type: 'left', title: '이사', subtitle: '포장이사부터 보관이사까지 다양한 이사 형태', category: 'truck', isOn: false},
          {type: 'left', title: '청소', subtitle: '아파트부터 사무실까지 다양한 건물 형태에 따른', category: 'cleaning', isOn: false},
        ]}
        onClickBefore={() => alert('')}
        onClickNext={() => alert('')}/>
    </div>
  );
}

export default Page;