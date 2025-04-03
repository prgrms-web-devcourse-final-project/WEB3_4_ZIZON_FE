'use client';

import { useState } from 'react';
import SemiBoldText from '@/components/atoms/texts/semiBoldText/SemiBoldText';
import LabelWithIconButton, {
  ButtonValue,
} from '@/components/atoms/buttons/labelWithIconButton/LabelWithIconButton';

function ExpertMajorCategory() {
  const [selectedValue, setSelectedValue] = useState<ButtonValue | null>(null);

  const handleButtonClick = (value: ButtonValue) => {
    setSelectedValue(value);
  };

  return (
    <article className="w-636 flex flex-col items-center gap-64 px-54 py-64 bg-black1 rounded-xl">
      <SemiBoldText title="어떤 전문가로 활동하실 건가요?" fontSize={28} />
      <div className="w-full grid grid-cols-2 gap-24">
        <LabelWithIconButton
          onClick={() => handleButtonClick('move')}
          state={selectedValue === 'move' ? 'active' : 'default'}
          value="move"
          name="expert-category"
        />
        <LabelWithIconButton
          onClick={() => handleButtonClick('fix')}
          state={selectedValue === 'fix' ? 'active' : 'default'}
          value="fix"
          name="expert-category"
        />
        <LabelWithIconButton
          onClick={() => handleButtonClick('tutor')}
          state={selectedValue === 'tutor' ? 'active' : 'default'}
          value="tutor"
          name="expert-category"
        />
        <LabelWithIconButton
          onClick={() => handleButtonClick('hobby')}
          state={selectedValue === 'hobby' ? 'active' : 'default'}
          value="hobby"
          name="expert-category"
        />
      </div>
    </article>
  );
}

export default ExpertMajorCategory;
