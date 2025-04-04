'use client'
import React from 'react';
import CommissionTopBox from '@/components/molecules/commissionTopBox/CommissionTopBox';
import StandardButton from '@/components/atoms/buttons/standardButton/StandardButton';
import SelectedOptionList from '@/components/molecules/selectedOptionList/SelectedOptionList';
import { SelectedCardProps } from '@/components/molecules/selectedCard/SelectedCard';
import IconSelectBox from '@/components/organisms/iconSelectBox/IconSelectBox';

interface MoveStepOneTemplateProps {
  iconCenterSelectBox: SelectedCardProps[];
  onClickBefore: () => void;
  onClickNext: () => void;
}
export default function MoveStepOneTemplate({iconCenterSelectBox, onClickBefore, onClickNext}: MoveStepOneTemplateProps) {

  return (
    <div className='w-1062 bg-black2'>
      <h1 className="text-24 font-semibold pt-78 mb-28">견적 요청서를 작성하는 중이에요</h1>
      <CommissionTopBox title={'2.서비스 선택'} progressStep={2} isBefore={true} onClickBefore={onClickBefore} />
      <div className='flex mt-24 items-start w-full'>
        <div className='mr-24 w-full bg-black1 rounded-lg pb-40'>
          <IconSelectBox iconSelectBoxProps={iconCenterSelectBox} title={'어떤 서비스를 원하시나요?'}/>
          <div className="float-end mr-40 mt-32">
            <StandardButton text={'다음'} disabled={false} onClick={onClickNext} state={'dark'} size={'fit'} />
          </div>
        </div>
        <div className="w-3/4">
          <SelectedOptionList
            selectedOptionIndex={[{ '과외 학생': '고등학교 1학년', '과외 형태': '개인' }, { '과목 구분': '교과 과정 내', '선택 과목': '한국사' }]} />
        </div>
      </div>
    </div>
  );
}

