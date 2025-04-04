import React from 'react';
import CommissionTopBox from '@/components/molecules/commissionTopBox/CommissionTopBox';
import StandardButton from '@/components/atoms/buttons/standardButton/StandardButton';
import SelectedOptionList from '@/components/molecules/selectedOptionList/SelectedOptionList';
import SemiBoldText20Black10 from '@/components/atoms/texts/semiBoldText20Black10/SemiBoldText20Black10';
import ImageUploadButton from '@/components/atoms/buttons/imageUploadButton/ImageUploadButton';
import { CheckboxProps } from '@/components/atoms/checkboxes/checkboxWithLabel/CheckboxWithLabel';
import CheckSelectBox from '@/components/organisms/checkSelectBox/CheckSelectBox';

interface MoveStepFourTemplateProps {
  checkSelectBoxProps1: CheckboxProps[];
  checkSelectBoxProps2: CheckboxProps[];
  onClickBefore: () => void;
  onClickNext: () => void;
  onImageUpload: (file: File) => void
}
export default function MoveStepFourTemplate({checkSelectBoxProps1, checkSelectBoxProps2, onClickBefore, onClickNext, onImageUpload}: MoveStepFourTemplateProps) {
  return (
    <div className='w-1062 bg-black2'>
      <h1 className="text-24 font-semibold pt-78 mb-28">견적 요청서를 작성하는 중이에요</h1>
      <CommissionTopBox title={'5.옮길 물건 정보'} progressStep={4} isBefore={true} onClickBefore={onClickBefore} />
      <div className='flex mt-24 items-start w-full'>
        <div className='mr-24 w-full bg-black1 rounded-lg pb-40'>
          <CheckSelectBox checkSelectBoxProps={checkSelectBoxProps1} title={'욺길 가전제품을 모두 선택해주세요?'}/>
          <CheckSelectBox checkSelectBoxProps={checkSelectBoxProps2} title={'욺길 가구를 모두 선택해주세요?'}/>
          <div className="px-40 mt-40">
            <SemiBoldText20Black10 title={'이삿짐 사진을 보내주세요'}/>
            <ImageUploadButton onImageUpload={onImageUpload}/>
          </div>
          <div className="float-end mt-32 pr-40">
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