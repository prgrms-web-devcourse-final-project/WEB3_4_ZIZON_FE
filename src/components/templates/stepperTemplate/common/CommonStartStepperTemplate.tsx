'use client'
import React from 'react';
import StandardButton from '@/components/atoms/buttons/standardButton/StandardButton';
import IconSelectBox from '@/components/organisms/iconSelectBox/IconSelectBox';
import CommissionTopBox from '@/components/molecules/commissionTopBox/CommissionTopBox';
import SelectedOptionList, {
  selectedOptionIndexObject,
} from '@/components/molecules/selectedOptionList/SelectedOptionList';
import { SelectedCardProps } from '@/components/molecules/selectedCard/SelectedCard';

interface CommonStartStepperProps {
  iconSelectBox: SelectedCardProps[];
  onNextHandler: () => void;
  selectedOptionListProps: selectedOptionIndexObject[];
}
function CommonStartStepperTemplate({selectedOptionListProps, iconSelectBox, onNextHandler}: CommonStartStepperProps) {

  return (
    <div className='bg-black2 w-1062'>
      <h1 className="text-24 font-semibold pt-78 mb-28">견적 요청서를 작성하는 중이에요</h1>
      <CommissionTopBox title={'1.요청 분류'} progressStep={1} isBefore={false} onClickBefore={()=>{}}/>
      <div className='flex mt-24 items-start w-full'>
        <div className='mr-24 w-full bg-black1 rounded-lg pb-40'>
          <IconSelectBox iconSelectBoxProps={iconSelectBox} title={'어떤 도움이 필요하신가요?'}/>
          <div className="float-end mr-40">
            <StandardButton text={'다음'} disabled={false} onClick={onNextHandler} state={'dark'} size={'fit'}/>
          </div>
        </div>
        <div className="w-3/4">
          <SelectedOptionList selectedOptionIndex={selectedOptionListProps}/>
        </div>
      </div>
    </div>
  );
}

export default CommonStartStepperTemplate;