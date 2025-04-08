import React from 'react';
import { CheckboxProps } from '@/components/atoms/checkboxes/checkboxWithLabel/CheckboxWithLabel';
import CommissionTopBox from '@/components/molecules/commissionTopBox/CommissionTopBox';
import CheckSelectBox from '@/components/organisms/checkSelectBox/CheckSelectBox';
import StandardButton from '@/components/atoms/buttons/standardButton/StandardButton';
import SelectedOptionList, {
  selectedOptionIndexObject,
} from '@/components/molecules/selectedOptionList/SelectedOptionList';
import DatePickerWithTitle from '@/components/molecules/datePickerWithTitle/DatePickerWithTitle';
import TextInputWithTitle, {
  TextInputWithTitleProps,
} from '@/components/molecules/textInputWithTitle/TextInputWithTitle';

interface HobbyStepFiveTemplateProps extends TextInputWithTitleProps{
  checkSelectBoxProps: CheckboxProps[];
  onClickBefore: () => void;
  onClickNext: () => void;
  selectedDay:  Date | undefined ;
  setSelectedDay: React.Dispatch<React.SetStateAction<Date | undefined>>;
  checkSelected: string | null;
  selectedOptionListProps: selectedOptionIndexObject[];
}
export default function HobbyStepFiveTemplate({selectedOptionListProps, checkSelected, id, placeholder, type, value, onChange, checkSelectBoxProps, onClickBefore, onClickNext, selectedDay, setSelectedDay}: HobbyStepFiveTemplateProps) {
  return (
    <div className='w-1062 bg-black2'>
      <h1 className="text-24 font-semibold pt-78 mb-28">견적 요청서를 작성하는 중이에요</h1>
      <CommissionTopBox title={'6.서비스 날짜 및 지역'} progressStep={4} isBefore={true} onClickBefore={onClickBefore} />
      <div className='flex mt-24 items-start w-full'>
        <div className='mr-24 w-full bg-black1 rounded-lg pb-40'>
          <CheckSelectBox checkSelectBoxProps={checkSelectBoxProps} title={'어떤 교과 외 과목을 공부하고 싶나요?'} />
          {checkSelected === 'particular' ? <DatePickerWithTitle title={'날짜를 선택해주세요'} selectedDay={selectedDay} setSelectedDay={setSelectedDay}/> : null}
          <div className="mt-32">
            <TextInputWithTitle title={'서비스 지역을 선택해주세요'} id={id} placeholder={placeholder} type={type} value={value} onChange={onChange}/>
          </div>
          <div className="float-end mr-40 mt-32">
            <StandardButton text={'다음'} disabled={false} onClick={onClickNext} state={'dark'} size={'fit'} />
          </div>
        </div>
        <div className="w-3/4">
          <SelectedOptionList
            selectedOptionIndex={selectedOptionListProps}/>
        </div>
      </div>
    </div>
  );
}
