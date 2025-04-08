import React from 'react';
import ProgressBar from '@/components/atoms/bars/progressBar/ProgressBar';
import StandardButton from '@/components/atoms/buttons/standardButton/StandardButton';

export interface CommissionTopBoxProps {
  title: string;
  progressStep: number;
  isBefore: boolean;
  onClickBefore: () => void;
}

function CommissionTopBox({title, progressStep, isBefore, onClickBefore,}: CommissionTopBoxProps) {
  return (
    <div className="grid grid-cols-5 bg-black1 px-40 py-24 rounded-lg justify-between">
      <div className="col-span-3">
        <p className="mb-12 text-20 font-medium">{title}</p>
        <ProgressBar step={progressStep} />
      </div>
      <div></div>
      <div className="place-items-end">
        {isBefore? <StandardButton text={"이전단계"} size={"full"} onClick={onClickBefore} disabled={false}/> : null}
      </div>
    </div>
  );
}

export default CommissionTopBox;