import React from 'react';
import { CheckboxProps } from '@/components/atoms/checkboxes/checkboxWithLabel/CheckboxWithLabel';
import CommissionTopBox from '@/components/molecules/commissionTopBox/CommissionTopBox';
import CheckSelectBox from '@/components/organisms/checkSelectBox/CheckSelectBox';
import StandardButton from '@/components/atoms/buttons/standardButton/StandardButton';
import SelectedOptionList, {
  selectedOptionIndexObject,
} from '@/components/molecules/selectedOptionList/SelectedOptionList';
import TextInputWithTitle from '@/components/molecules/textInputWithTitle/TextInputWithTitle';

interface CleaningStepFourTemplateProps {
  checkSelectBoxProps: CheckboxProps[];
  onClickBefore: () => void;
  onClickNext: () => void;
  id: string;
  value: string;
  onChange: ((value: string) => void);
  selectedOptionListProps: selectedOptionIndexObject[];
}
export default function CleaningStepFourTemplate({selectedOptionListProps, id, value, onChange, checkSelectBoxProps, onClickBefore, onClickNext}: CleaningStepFourTemplateProps) {
  return (
    <div className='w-1062 bg-black2'>
      <h1 className="text-24 font-semibold pt-78 mb-28">견적 요청서를 작성하는 중이에요</h1>
      <CommissionTopBox title={'5.추가 요구사항'} progressStep={4} isBefore={true} onClickBefore={onClickBefore} />
      <div className='flex mt-24 items-start w-full'>
        <div className='mr-24 w-full bg-black1 rounded-lg pb-40'>
          <TextInputWithTitle title={'공간 평수를 알려주세요.'} id={id} placeholder={'예)24평'} type={'text'} value={value} onChange={onChange}/>
          <CheckSelectBox checkSelectBoxProps={checkSelectBoxProps} title={'추가로 원하는 서비스가 있나요?'} />
          <div className="float-end mr-40 mt-32">
            <StandardButton text={'다음'} disabled={false} onClick={onClickNext} state={'dark'} size={'fit'} />
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
