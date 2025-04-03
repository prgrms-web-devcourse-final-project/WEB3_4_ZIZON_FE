import React from 'react';
import { CheckboxProps } from '@/components/atoms/checkboxes/checkboxWithLabel/CheckboxWithLabel';
import CommissionTopBox from '@/components/molecules/commissionTopBox/CommissionTopBox';
import CheckSelectBox from '@/components/organisms/checkSelectBox/CheckSelectBox';
import StandardButton from '@/components/atoms/buttons/standardButton/StandardButton';
import SelectedOptionList from '@/components/molecules/selectedOptionList/SelectedOptionList';
import DatePickerWithTitle from '@/components/molecules/datePickerWithTitle/DatePickerWithTitle';
import TextInputWithTitle, {
  TextInputWithTitleProps,
} from '@/components/molecules/textInputWithTitle/TextInputWithTitle';

interface CleaningStepFiveTemplateProps{
  checkSelectBoxProps: CheckboxProps[];
  onClickBefore: () => void;
  onClickNext: () => void;
  selectedDay:  Date | undefined ;
  setSelectedDay: React.Dispatch<React.SetStateAction<Date | undefined>>;
  id1: string;
  id2: string;
  value1: string;
  value2: string;
  onChange1: (value: string) => void;
  onChange2: (value: string) => void;
}
export default function CleaningStepFiveTemplate({id1, id2, value1, value2, onChange1, onChange2, checkSelectBoxProps, onClickBefore, onClickNext, selectedDay, setSelectedDay}: CleaningStepFiveTemplateProps) {
  return (
    <div className='px-230 bg-black2'>
      <h1 className="text-24 font-semibold pt-78 mb-28">견적 요청서를 작성하는 중이에요</h1>
      <CommissionTopBox title={'6.서비스 희망 날짜 및 지역'} progressStep={4} isBefore={true} onClickBefore={onClickBefore} />
      <div className='flex mt-24 items-start w-full'>
        <div className='mr-24 w-full bg-black1 rounded-lg pb-40'>
          <CheckSelectBox checkSelectBoxProps={checkSelectBoxProps} title={'서비스를 받고 싶은 날이 언제인가요?'} />
          <DatePickerWithTitle title={'날짜를 선택해주세요'} selectedDay={selectedDay} setSelectedDay={setSelectedDay}/>
          <TextInputWithTitle title={'서비스 지역을 선택해주세요'} id={id1} placeholder={'예)서울특별시 강남구'} type={'text'} value={value1} onChange={onChange1}/>
          <TextInputWithTitle title={'청소 관련 문의사항을 작성해주세요'} id={id2} placeholder={'궁금한 점이 있다면 작성해주세요'} type={'text'} value={value2} onChange={onChange2}/>
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
