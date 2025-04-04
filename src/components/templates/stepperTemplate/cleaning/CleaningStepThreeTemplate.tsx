import React from 'react';
import CommissionTopBox from '@/components/molecules/commissionTopBox/CommissionTopBox';
import StandardButton from '@/components/atoms/buttons/standardButton/StandardButton';
import SelectedOptionList from '@/components/molecules/selectedOptionList/SelectedOptionList';
import TextInputWithTitle from '@/components/molecules/textInputWithTitle/TextInputWithTitle';

interface CleaningStepThreeTemplateProps {
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
}
export default function CleaningStepThreeTemplate({id1, id2, id3, value1, value2, value3, onChange1, onChange2, onChange3, onClickBefore, onClickNext}: CleaningStepThreeTemplateProps) {
  return (
    <div className='w-1062 bg-black2'>
      <h1 className="text-24 font-semibold pt-78 mb-28">견적 요청서를 작성하는 중이에요</h1>
      <CommissionTopBox title={'4.건물 내부 정보'} progressStep={3} isBefore={true} onClickBefore={onClickBefore} />
      <div className='flex mt-24 items-start w-full'>
        <div className='mr-24 w-full bg-black1 rounded-lg pb-40'>
          <TextInputWithTitle title={'방 개수를 알려주세요'} id={id1} placeholder={'예)숫자 혹은 없음'} type={'text'} value={value1} onChange={onChange1}/>
          <TextInputWithTitle title={'화장실 개수를 알려주세요'} id={id2} placeholder={'예)숫자 혹은 없음'} type={'text'} value={value2} onChange={onChange2}/>
          <TextInputWithTitle title={'베란다 개수를 알려주세요'} id={id3} placeholder={'예)숫자 혹은 없음'} type={'text'} value={value3} onChange={onChange3}/>
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
