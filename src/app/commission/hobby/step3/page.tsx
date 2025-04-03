'use client'
import React from 'react';

import HobbyStepThreeTemplate from '@/components/templates/stepperTemplate/hobby/HobbyStepThreeTemplate';

export default function Page() {
  return (
    <div>
      <HobbyStepThreeTemplate
        checkSelectBoxProps={[
          {label: '10대 미만',caption: '', checked: false, onChange: () => alert('')},
          {label: '10대',caption: '', checked: false, onChange: () => alert('')},
          {label: '20대',caption: '', checked: false, onChange: () => alert('')},
          {label: '30대',caption: '', checked: false, onChange: () => alert('')},
        ]}
        onClickBefore={() => alert('')}
        onClickNext={() => alert('')}
        iconCenterSelectBox1={[
          {type: 'center', title: "남자", subtitle: "", category: 'men', isOn: false},
          {type: 'center', title: "여성", subtitle: "", category: 'women', isOn: false}
        ]}
        iconCenterSelectBox2={[
          {type: 'center', title: "남자", subtitle: "", category: 'men', isOn: false},
          {type: 'center', title: "여성", subtitle: "", category: 'women', isOn: false},
          {type: 'center', title: "무관", subtitle: "", category: 'question', isOn: false},
        ]}
      />
    </div>
  );
}