'use client'
import React from 'react';
import CommonEndStepTemplate from '@/components/templates/stepperTemplate/common/CommonEndStepTemplate';

function Page() {
  const [title, setTile] = React.useState<string>('');
  const [subtitle, setSubtitle] = React.useState<string>('');
  const [price, setPrice] = React.useState<string>('');
  return (
    <div>
      <CommonEndStepTemplate
        id1={'address'}
        id2={'th'}
        id3={'men-number'}
        value1={title}
        value2={subtitle}
        value3={price}
        onChange1={setTile}
        onChange2={setSubtitle}
        onChange3={setPrice}
        onClickBefore={() => alert('')}
        onClickNext={() => alert('')}/>
    </div>
  );
}

export default Page;