import React from 'react';
import CommissionTopBox from '@/components/molecules/commissionTopBox/CommissionTopBox';
import CheckSelectBox from '@/components/organisms/checkSelectBox/CheckSelectBox';
import StandardButton from '@/components/atoms/buttons/standardButton/StandardButton';
import SelectedOptionList, {
  selectedOptionIndexObject,
} from '@/components/molecules/selectedOptionList/SelectedOptionList';
import { CheckboxProps } from '@/components/atoms/checkboxes/checkboxWithLabel/CheckboxWithLabel';

interface LessonStepOneTemplateProps {
  checkSelectBoxProps1: CheckboxProps[];
  checkSelectBoxProps2: CheckboxProps[];
  onBeforeAction: () => void;
  onNextAction: () => void;
  selectedOptionListProps: selectedOptionIndexObject[];
}
export default function LessonStepOneTemplate({selectedOptionListProps, checkSelectBoxProps1, checkSelectBoxProps2, onBeforeAction, onNextAction }: LessonStepOneTemplateProps) {
  return (
    <div className='w-1062 bg-black2'>
      <h1 className="text-24 font-semibold pt-78 mb-28">견적 요청서를 작성하는 중이에요</h1>
      <CommissionTopBox title={'2.과외 정보'} progressStep={2} isBefore={true} onClickBefore={onBeforeAction} />
      <div className='flex mt-24 items-start w-full'>
        <div className='mr-24 w-full bg-black1 rounded-lg pb-40'>
          <CheckSelectBox checkSelectBoxProps={checkSelectBoxProps1} title={'과외생은 어디에 속해있나요?'}/>
          <CheckSelectBox checkSelectBoxProps={checkSelectBoxProps2} title={'어떤 과외 형태를 원하나요?'}/>
          <div className="float-end mr-40 mt-16">
            <StandardButton text={'완료'} disabled={false} onClick={onNextAction} state={'dark'} size={'fit'} />
          </div>
        </div>
        <div className="w-3/4">
          <SelectedOptionList
            selectedOptionIndex={selectedOptionListProps} />
        </div>
      </div>
    </div>
  );
}