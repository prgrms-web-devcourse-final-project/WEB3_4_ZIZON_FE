'use client'
import React from 'react';
import CleaningStepFourTemplate from '@/components/templates/stepperTemplate/cleaning/CleaningStepFourTemplate';

function Page() {
  const [area, setArea] = React.useState<string>('');
  return (
    <div>
      <CleaningStepFourTemplate
        checkSelectBoxProps={[
          {label: '없음',caption: '', checked: false, onChange: () => alert('')},
          {label: '곰팡이 제거',caption: '', checked: false, onChange: () => alert('')},
          {label: '외부 유리창 청소',caption: '', checked: false, onChange: () => alert('')},
          {label: '새집 증후군',caption: '', checked: false, onChange: () => alert('')},
          {label: '스티커 및 시트지 제거',caption: '', checked: false, onChange: () => alert('')},
          {label: '기타',caption: '', checked: false, onChange: () => alert('')},
        ]}
        onClickBefore={() => alert('')}
        onClickNext={() => alert('')}
        id={'area'}
        value={area}
        onChange={setArea}/>
    </div>
  );
}

export default Page;