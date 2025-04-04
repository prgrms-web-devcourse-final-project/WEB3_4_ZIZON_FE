import React from 'react';
import { CheckboxProps } from '@/components/atoms/checkboxes/checkboxWithLabel/CheckboxWithLabel';
import CommissionTopBox from '@/components/molecules/commissionTopBox/CommissionTopBox';
import CheckSelectBox from '@/components/organisms/checkSelectBox/CheckSelectBox';
import StandardButton from '@/components/atoms/buttons/standardButton/StandardButton';
import SelectedOptionList from '@/components/molecules/selectedOptionList/SelectedOptionList';
import TextInputWithTitle, {
  TextInputWithTitleProps,
} from '@/components/molecules/textInputWithTitle/TextInputWithTitle';

interface HobbyStepOneTemplateProps extends TextInputWithTitleProps{
  checkSelectBoxProps: CheckboxProps[];
  onClickBefore: () => void;
  onClickNext: () => void;
}
export default function HobbyStepOneTemplate({id, placeholder, type, value, onChange, checkSelectBoxProps, onClickBefore, onClickNext}: HobbyStepOneTemplateProps) {
  return (
    <div className='w-1062 bg-black2'>
      <h1 className="text-24 font-semibold pt-78 mb-28">견적 요청서를 작성하는 중이에요</h1>
      <CommissionTopBox title={'2.취미 선택'} progressStep={2} isBefore={true} onClickBefore={onClickBefore} />
      <div className='flex mt-24 items-start w-full'>
        <div className='mr-24 w-full bg-black1 rounded-lg pb-40'>
          <CheckSelectBox checkSelectBoxProps={checkSelectBoxProps} title={'어떤 취미 강의를 원하시나요?'} />
          <div className="mt-32">
            <TextInputWithTitle title={'수강하고자 하는 항목/장르/종목을 알려주세요'} id={id} placeholder={placeholder} type={type} value={value} onChange={onChange}/>
          </div>
          <div className="float-end mr-40 mt-32">
            <StandardButton text={'완료'} disabled={false} onClick={onClickNext} state={'dark'} size={'fit'} />
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
