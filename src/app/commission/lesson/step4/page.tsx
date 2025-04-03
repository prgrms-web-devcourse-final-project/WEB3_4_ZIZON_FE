'use client'
import React from 'react';
import LessonStepFourTemplate from '@/components/templates/stepperTemplate/lesson/LessonStepFourTemplate';

export default function Page() {
  return (
    <div>
      <LessonStepFourTemplate
        iconCenterSelectBox1={[
          {type: 'center', title: '남성', subtitle: '', category: 'men', isOn: false},
          {type: 'center', title: '여성', subtitle: '', category: 'women', isOn: false},
        ]}
        iconCenterSelectBox2={[
          {type: 'center', title: '남성', subtitle: '', category: 'men', isOn: false},
          {type: 'center', title: '여성', subtitle: '', category: 'women', isOn: false},
          {type: 'center', title: '무관', subtitle: '', category: 'question', isOn: false},
        ]}
        onClickBefore={() => alert('')}
        onClickNext={() => alert('')}
      />
    </div>
  );
}