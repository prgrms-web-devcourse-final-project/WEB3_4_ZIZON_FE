import React from 'react';
import CommissionTopBox from '@/components/molecules/commissionTopBox/CommissionTopBox';
import CheckSelectBox from '@/components/organisms/checkSelectBox/CheckSelectBox';
import StandardButton from '@/components/atoms/buttons/standardButton/StandardButton';
import SelectedOptionList, {
  selectedOptionIndexObject,
} from '@/components/molecules/selectedOptionList/SelectedOptionList';
import DatePickerWithTitle from '@/components/molecules/datePickerWithTitle/DatePickerWithTitle';
import { DatePickerProps } from '@/components/atoms/datePicker/DatePicker';
import { CheckboxProps } from '@/components/atoms/checkboxes/checkboxWithLabel/CheckboxWithLabel';
import TextInputWithTitle from '@/components/molecules/textInputWithTitle/TextInputWithTitle';

interface SettingFixStepTwoTemplateProps extends DatePickerProps{
  onBeforeAction: () => void;
  onNextAction: () => void;
  checkSelectBoxProps:  CheckboxProps[];
  selectedOptionListProps: selectedOptionIndexObject[];
  id: string;
  value: string;
  onChange: ((value: string) => void);
  selectedIndex: number | null;
}
export default function SettingFixStepTwoTemplate({id, value, onChange, selectedIndex, selectedOptionListProps, checkSelectBoxProps, onBeforeAction, onNextAction, selectedDay, setSelectedDay}: SettingFixStepTwoTemplateProps) {

  return (
    <div className='w-1062 bg-black2'>
      <h1 className="text-24 font-semibold pt-78 mb-28">견적 요청서를 작성하는 중이에요</h1>
      <CommissionTopBox title={'2.서비스 날짜 및 지역'} progressStep={4} isBefore={true} onClickBefore={onBeforeAction} />
      <div className='flex mt-24 items-start w-full'>
        <div className='mr-24 w-full bg-black1 rounded-lg pb-40'>
          <CheckSelectBox checkSelectBoxProps={checkSelectBoxProps} title={"설치 및 수리의 대상이 무엇인가요?"} />
          {selectedIndex === 3 ? <DatePickerWithTitle title={'날짜를 선택해주세요'} selectedDay={selectedDay}
                                                      setSelectedDay={setSelectedDay} /> : null}
          <div className="mt-32">
            <TextInputWithTitle title={'서비스 지역을 선택해주세요'} id={id} placeholder={"예)서울특별시 강남구"} type={'text'} value={value}
                                onChange={onChange} />
          </div>
          <div className="float-end mr-40 mt-32">
            <StandardButton text={'다음'} disabled={false} onClick={onNextAction} state={'dark'} size={'fit'} />
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
