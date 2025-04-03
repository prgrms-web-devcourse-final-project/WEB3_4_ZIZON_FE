'use client'
import React from 'react';
import HobbyStepOneTemplate from '@/components/templates/stepperTemplate/hobby/HobbyStepOneTemplate';

function Page() {
  const [like, setLike] = React.useState<string>('');

  return (
    <div>
      <HobbyStepOneTemplate
        checkSelectBoxProps={[
          {label: "협의 가능", caption: "", checked: false, onChange: () => alert('') },
          {label: "가능한 빨리", caption: "", checked: false, onChange: () => {} },
          {label: "일주일 이내", caption: "", checked: false, onChange: () => {} },
          {label: "특정 날짜", caption: "", checked: false, onChange: () => {} },
        ]}
        id={'addFive'}
        placeholder={'예) 서울특별시 강남구'}
        type={'text'}
        value={like}
        title={''}
        onChange={setLike}
        onClickNext={() => alert("다음")}
        onClickBefore={() => alert('이전')}/>
    </div>
  );
}

export default Page;