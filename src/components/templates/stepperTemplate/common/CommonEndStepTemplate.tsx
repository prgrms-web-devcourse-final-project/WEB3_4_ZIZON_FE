import React from 'react';
import CommissionTopBox from '@/components/molecules/commissionTopBox/CommissionTopBox';
import TextInputWithTitle from '@/components/molecules/textInputWithTitle/TextInputWithTitle';
import StandardButton from '@/components/atoms/buttons/standardButton/StandardButton';
import SelectedOptionList, {
  selectedOptionIndexObject,
} from '@/components/molecules/selectedOptionList/SelectedOptionList';

interface CommonEndStepTemplateProps {
  onClickBefore: () => void;
  onClickNext: () => void;
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
export default function CommonEndStepTemplate({selectedOptionListProps, id1, id2, id3, value1, value2, value3, onChange1, onChange2, onChange3, onClickNext, onClickBefore}: CommonEndStepTemplateProps) {
  return (
    <div className='w-1062 bg-black2'>
      <h1 className="text-24 font-semibold pt-78 mb-28">견적 요청서를 작성하는 중이에요</h1>
      <CommissionTopBox title={'7.요청서 상세 정보 입력'} progressStep={5} isBefore={true} onClickBefore={onClickBefore} />
      <div className='flex mt-24 items-start w-full'>
        <div className='mr-24 w-full bg-black1 rounded-lg pb-40'>
          <TextInputWithTitle title={'요청서 제목을 입력해주세요.'} id={id1} placeholder={'예)수능 대비 한국사 과외 선생님 구합니다.'} type={'text'} value={value1}
                              onChange={onChange1} />
          <TextInputWithTitle title={'요청서 한줄 설명을 입력해주세요.'} id={id2} placeholder={'예)2025 수능을 대비해서 한국사 과외를 진행해주실 선생님을 구합니다. 연락주세요!'} type={'text'} value={value2}
                              onChange={onChange2} />
          <TextInputWithTitle title={'예산을 입력해주세요.'} id={id3} placeholder={'예)150000'} type={'text'} value={value3}
                              onChange={onChange3} />
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