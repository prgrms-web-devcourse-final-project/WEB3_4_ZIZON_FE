'use client'
import React from 'react';
import CommissionTopBox from '@/components/molecules/commissionTopBox/CommissionTopBox';
import StandardButton from '@/components/atoms/buttons/standardButton/StandardButton';
import SelectedOptionList, {
  selectedOptionIndexObject,
} from '@/components/molecules/selectedOptionList/SelectedOptionList';
import CheckSelectBox from '@/components/organisms/checkSelectBox/CheckSelectBox';
import TextInputWithTitle from '@/components/molecules/textInputWithTitle/TextInputWithTitle';
import { CheckboxProps } from '@/components/atoms/checkboxes/checkboxWithLabel/CheckboxWithLabel';

interface SettingFixStepOneTemplateProps {
  checkSelectBoxProps: CheckboxProps[];
  value: string;
  onChangeValueAction: React.Dispatch<React.SetStateAction<string>>
  onBeforeAction: () => void;
  onNextHandlerAction: () => void;
  selectedOptionListProps: selectedOptionIndexObject[];
}
export default function SettingFixStepOneTemplate({value, onChangeValueAction, onNextHandlerAction, onBeforeAction, checkSelectBoxProps, selectedOptionListProps}: SettingFixStepOneTemplateProps) {
  return (
    <div className='w-1062 bg-black2'>
      <h1 className="text-24 font-semibold pt-78 mb-28">견적 요청서를 작성하는 중이에요</h1>
      <CommissionTopBox title={'2.대상 선정'} progressStep={2} isBefore={true} onClickBefore={onBeforeAction} />
      <div className='flex mt-24 items-start w-full'>
        <div className='mr-24 w-full bg-black1 rounded-lg pb-40'>
          <CheckSelectBox checkSelectBoxProps={checkSelectBoxProps} title={"설치 및 수리의 대상이 무엇인가요?"}/>
          <TextInputWithTitle title={'구체적인 항목을 알려주세요'} id={''} placeholder={'무엇을 설치, 수리하고 싶으신가요?'} type={'text'} value={value} onChange={onChangeValueAction}/>
          <div className="float-end mr-40 mt-32">
            <StandardButton text={'다음'} disabled={false} onClick={onNextHandlerAction} state={'dark'} size={'fit'} />
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

