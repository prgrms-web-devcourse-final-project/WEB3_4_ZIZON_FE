import React from 'react';
import CommissionTopBox from '@/components/molecules/commissionTopBox/CommissionTopBox';
import StandardButton from '@/components/atoms/buttons/standardButton/StandardButton';
import SelectedOptionList, {
  selectedOptionIndexObject,
} from '@/components/molecules/selectedOptionList/SelectedOptionList';
import IconCenterSelectBox from '@/components/organisms/iconCenterSelectBox/IconCenterSelectBox';
import { SelectedCardProps } from '@/components/molecules/selectedCard/SelectedCard';
import { CheckboxProps } from '@/components/atoms/checkboxes/checkboxWithLabel/CheckboxWithLabel';
import CheckSelectBox from '@/components/organisms/checkSelectBox/CheckSelectBox';

interface HobbyStepThreeTemplateProps {
  checkSelectBoxProps: CheckboxProps[];
  iconCenterSelectBox1: SelectedCardProps[];
  iconCenterSelectBox2: SelectedCardProps[];
  onClickBefore: () => void;
  onClickNext: () => void;
  selectedOptionListProps: selectedOptionIndexObject[];
}
export default function HobbyStepThreeTemplate({selectedOptionListProps, checkSelectBoxProps, iconCenterSelectBox1, iconCenterSelectBox2, onClickBefore, onClickNext}: HobbyStepThreeTemplateProps) {
  return (
    <div className='w-1062 bg-black2'>
      <h1 className="text-24 font-semibold pt-78 mb-28">견적 요청서를 작성하는 중이에요</h1>
      <CommissionTopBox title={'4.레슨생 및 희망 전문가 '} progressStep={3} isBefore={true} onClickBefore={onClickBefore} />
      <div className='flex mt-24 items-start w-full'>
        <div className='mr-24 w-full bg-black1 rounded-lg pb-40'>
          <CheckSelectBox checkSelectBoxProps={checkSelectBoxProps} title={'레슨생의 연령대는 어떻게 되나요?'}/>
          <IconCenterSelectBox title={'과외생의 성별은 무엇인가요?'} selectedCardProps={iconCenterSelectBox1}/>
          <IconCenterSelectBox title={'선호하는 전문가의 성별이 있나요?'} selectedCardProps={iconCenterSelectBox2}/>
          <div className="float-end mt-16 mr-40">
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