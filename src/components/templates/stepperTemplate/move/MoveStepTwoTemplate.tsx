import React from 'react';
import { CheckboxProps } from '@/components/atoms/checkboxes/checkboxWithLabel/CheckboxWithLabel';
import CommissionTopBox from '@/components/molecules/commissionTopBox/CommissionTopBox';
import CheckSelectBox from '@/components/organisms/checkSelectBox/CheckSelectBox';
import StandardButton from '@/components/atoms/buttons/standardButton/StandardButton';
import SelectedOptionList, {
  selectedOptionIndexObject,
} from '@/components/molecules/selectedOptionList/SelectedOptionList';
import DatePickerWithTitle from '@/components/molecules/datePickerWithTitle/DatePickerWithTitle';

interface MoveStepTwoTemplateProps {
  checkSelectBoxProps: CheckboxProps[];
  onClickBeforeAction: () => void;
  onClickNextAction: () => void;
  selectedDay:  Date | undefined ;
  setSelectedDay: React.Dispatch<React.SetStateAction<Date | undefined>>;
  selectedOptionListProps: selectedOptionIndexObject[];
}
export default function MoveStepTwoTemplate({selectedOptionListProps, checkSelectBoxProps, onClickBeforeAction, onClickNextAction, selectedDay, setSelectedDay}: MoveStepTwoTemplateProps) {
  return (
    <div className='w-1062 bg-black2'>
      <h1 className="text-24 font-semibold pt-78 mb-28">견적 요청서를 작성하는 중이에요</h1>
      <CommissionTopBox title={'3.이사 형태 및 날짜 선택'} progressStep={2} isBefore={true} onClickBefore={onClickBeforeAction} />
      <div className='flex mt-24 items-start w-full'>
        <div className='mr-24 w-full bg-black1 rounded-lg pb-40'>
          <CheckSelectBox checkSelectBoxProps={checkSelectBoxProps} title={'이사 형태를 선택해주세요'} />
          <DatePickerWithTitle title={'이사 날짜를 선택해주세요'} selectedDay={selectedDay} setSelectedDay={setSelectedDay}/>
          <div className="float-end mr-40 mt-32">
            <StandardButton text={'다'} disabled={false} onClick={onClickNextAction} state={'dark'} size={'fit'} />
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
