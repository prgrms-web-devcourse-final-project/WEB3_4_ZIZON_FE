import React from 'react';
import { CheckboxProps } from '@/components/atoms/checkboxes/checkboxWithLabel/CheckboxWithLabel';
import CommissionTopBox from '@/components/molecules/commissionTopBox/CommissionTopBox';
import CheckSelectBox from '@/components/organisms/checkSelectBox/CheckSelectBox';
import StandardButton from '@/components/atoms/buttons/standardButton/StandardButton';
import SelectedOptionList, {
  selectedOptionIndexObject,
} from '@/components/molecules/selectedOptionList/SelectedOptionList';
import TextInputWithTitle from '@/components/molecules/textInputWithTitle/TextInputWithTitle';

interface MoveStepThreeTemplateProps {
  checkSelectBoxProps: CheckboxProps[];
  onClickBeforeAction: () => void;
  onClickNextAction: () => void;
  id1: string;
  id2: string;
  id3: string;
  value1: string;
  value2: string;
  value3: string;
  onChange1: ((value: string) => void);
  onChange2: ((value: string) => void);
  onChange3: ((value: string) => void);
  selectedOptionListProps: selectedOptionIndexObject[];
}
export default function MoveStepThreeTemplate({selectedOptionListProps, id1, id2, id3, value1, value2, value3, onChange1, onChange2, onChange3, checkSelectBoxProps, onClickBeforeAction, onClickNextAction}: MoveStepThreeTemplateProps) {
  return (
    <div className='w-1062 bg-black2'>
      <h1 className="text-24 font-semibold pt-78 mb-28">견적 요청서를 작성하는 중이에요</h1>
      <CommissionTopBox title={'4.출발지 정보'} progressStep={3} isBefore={true} onClickBefore={onClickBeforeAction} />
      <div className='flex mt-24 items-start w-full'>
        <div className='mr-24 w-full bg-black1 rounded-lg pb-40'>
          <TextInputWithTitle title={'서비스 지역을 선택해주세요'} id={id1} placeholder={'예)서울특별시 강남구'} type={'text'} value={value1} onChange={onChange1}/>
          <TextInputWithTitle title={'출발 층수를 알려주세요'} id={id2} placeholder={'예)15층'} type={'text'} value={value2} onChange={onChange2}/>
          <TextInputWithTitle title={'출발지 실평수와 거주 인원을 알려주세요'} id={id3} placeholder={'예)24평2명'} type={'text'} value={value3} onChange={onChange3}/>
          <CheckSelectBox checkSelectBoxProps={checkSelectBoxProps} title={'출발지에 엘리베이터가 있나요?'} />
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
