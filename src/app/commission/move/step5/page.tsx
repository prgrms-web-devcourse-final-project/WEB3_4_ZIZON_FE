'use client'
import React from 'react';
import MoveStepFiveTemplate from '@/components/templates/stepperTemplate/move/MoveStepFiveTemplate';

function Page() {
  const [address, setAddress] = React.useState<string>('');
  const [level, setLevel] = React.useState<string>('');
  const [area, setArea] = React.useState<string>('');
  return (
    <div>
      <MoveStepFiveTemplate
        id1={'address'}
        id2={'th'}
        id3={'men-number'}
        value1={address}
        value2={level}
        value3={area}
        onChange1={setAddress}
        onChange2={setLevel}
        onChange3={setArea}
        checkSelectBoxProps={[
          {label: '네',caption: '', checked: false, onChange: () => alert('')},
          {label: '아니요',caption: '', checked: false, onChange: () => alert('')},
        ]}
        onClickBefore={() => alert('')}
        onClickNext={() => alert('')}/>
    </div>
  );
}

export default Page;