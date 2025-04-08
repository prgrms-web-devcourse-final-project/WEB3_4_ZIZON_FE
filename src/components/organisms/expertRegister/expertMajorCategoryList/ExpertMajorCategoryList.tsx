'use client';

import { ExpertCategory } from '@/components/atoms/buttons/labelWithIconButton/LabelWithIconButton';
import SemiBoldText from '@/components/atoms/texts/semiBoldText/SemiBoldText';
import LabelWithIconButton from '@/components/atoms/buttons/labelWithIconButton/LabelWithIconButton';
import ProgressBar, { ProgressStep } from '@/components/atoms/bars/progressBar/ProgressBar';

interface ExpertCategoryProps {
  selectedValue: ExpertCategory | null;
  setSelectedValue: (name: string, value: ExpertCategory | null) => void;
}

function ExpertCategoryList({ selectedValue, setSelectedValue }: ExpertCategoryProps) {
  const handleButtonClick = (name: string, value: ExpertCategory) => {
    setSelectedValue(name, value);
  };

  return (
    <article className="w-636 flex flex-col items-center gap-64 px-54 py-64 bg-black1 rounded-xl">
      <ProgressBar step={ProgressStep.STEP1} />
      <SemiBoldText title="어떤 전문가로 활동하실 건가요?" fontSize={28} />
      <div className="w-full grid grid-cols-2 gap-24">
        <LabelWithIconButton
          onClick={() => handleButtonClick('expert-category', 'move')}
          state={selectedValue === 'move' ? 'active' : 'default'}
          value="move"
          name="expert-category"
        />
        <LabelWithIconButton
          onClick={() => handleButtonClick('expert-category', 'fix')}
          state={selectedValue === 'fix' ? 'active' : 'default'}
          value="fix"
          name="expert-category"
        />
        <LabelWithIconButton
          onClick={() => handleButtonClick('expert-category', 'tutor')}
          state={selectedValue === 'tutor' ? 'active' : 'default'}
          value="tutor"
          name="expert-category"
        />
        <LabelWithIconButton
          onClick={() => handleButtonClick('expert-category', 'hobby')}
          state={selectedValue === 'hobby' ? 'active' : 'default'}
          value="hobby"
          name="expert-category"
        />
      </div>
    </article>
  );
}

export default ExpertCategoryList;
