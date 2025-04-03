'use client'
import React from 'react';
import CleaningStepThreeTemplate from '@/components/templates/stepperTemplate/cleaning/CleaningStepThreeTemplate';

function Page() {
  const [roomCount, setRoomCount] = React.useState<string>('');
  const [wcCount, setWCCount] = React.useState<string>('');
  const [verandaCount, setVerandaCount] = React.useState<string>('');
  return (
    <div>
      <CleaningStepThreeTemplate
        id1={'address'}
        id2={'th'}
        id3={'men-number'}
        value1={roomCount}
        value2={wcCount}
        value3={verandaCount}
        onChange1={setRoomCount}
        onChange2={setWCCount}
        onChange3={setVerandaCount}
        onClickBefore={() => alert('')}
        onClickNext={() => alert('')}/>
    </div>
  );
}

export default Page;