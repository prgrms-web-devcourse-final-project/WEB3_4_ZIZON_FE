import React from 'react';
import SelectedCard, { SelectedCardProps } from '@/components/molecules/selectedCard/SelectedCard';
import SemiBoldText20Black10 from '@/components/atoms/texts/semiBoldText20Black10/SemiBoldText20Black10';

interface IconCenterSelectBoxProps {
  title: string;
  selectedCardProps: SelectedCardProps[]
}
function IconCenterSelectBox({title, selectedCardProps}:IconCenterSelectBoxProps) {
  return (
    <div className="px-40 pt-40">
      <SemiBoldText20Black10 title={title} />
      <div className={`grid grid-cols-${selectedCardProps.length} grid-rows-1 gap-24`}>
        {selectedCardProps.map((item, index) => {
          return(
            <SelectedCard key={index} type={'center'} title={item.title} subtitle={''} category={item.category} isOn={item.isOn} />
          )
        })}
      </div>
    </div>
  );
}

export default IconCenterSelectBox;