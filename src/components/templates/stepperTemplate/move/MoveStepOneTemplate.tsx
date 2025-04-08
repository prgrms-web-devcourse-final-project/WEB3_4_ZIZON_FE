'use client'
import React from 'react';
import CommissionTopBox from '@/components/molecules/commissionTopBox/CommissionTopBox';
import StandardButton from '@/components/atoms/buttons/standardButton/StandardButton';
import SelectedOptionList, {
  selectedOptionIndexObject,
} from '@/components/molecules/selectedOptionList/SelectedOptionList';
import { SelectedCardProps } from '@/components/molecules/selectedCard/SelectedCard';
import IconSelectBox from '@/components/organisms/iconSelectBox/IconSelectBox';

interface MoveStepOneTemplateProps {
  iconSelectBox: SelectedCardProps[];
  onClickBeforeAction: () => void;
  onClickNextAction: () => void;
  selectedOptionListProps: selectedOptionIndexObject[];
}
export default function MoveStepOneTemplate({selectedOptionListProps, iconSelectBox, onClickBeforeAction, onClickNextAction}: MoveStepOneTemplateProps) {

  return (
    <div className='w-1062 bg-black2'>
      <h1 className="text-24 font-semibold pt-78 mb-28">견적 요청서를 작성하는 중이에요</h1>
      <CommissionTopBox title={'2.서비스 선택'} progressStep={2} isBefore={true} onClickBefore={onClickBeforeAction} />
      <div className='flex mt-24 items-start w-full'>
        <div className='mr-24 w-full bg-black1 rounded-lg pb-40'>
          <IconSelectBox iconSelectBoxProps={iconSelectBox} title={'어떤 서비스를 원하시나요?'}/>
          <div className="float-end mr-40 mt-32">
            <StandardButton text={'다음'} disabled={false} onClick={onClickNextAction} state={'dark'} size={'fit'} />
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

