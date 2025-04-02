import React from 'react';
import SelectedCard, { SelectedCardProps } from '@/components/molecules/selectedCard/SelectedCard';
import StandardButton, { StandardButtonProps } from '@/components/atoms/buttons/standardButton/StandardButton';
import SemiBoldText20Black10 from '@/components/atoms/texts/semiBoldText20Black10/SemiBoldText20Black10';

interface IconSelectBoxProps extends StandardButtonProps{
  iconSelectBoxProps: SelectedCardProps[];
  title: string;
}
export default function IconSelectBox({title, iconSelectBoxProps, text, onClick}: IconSelectBoxProps) {
  return (
    <div className="p-40 rounded-lg bg-black1">
      <SemiBoldText20Black10 title={title}/>
      <div className="grid grid-cols-1 gap-16 place-items-end">
        {iconSelectBoxProps.map((item, index) => {
          return (
            <SelectedCard key={index} type={item.type} title={item.title} subtitle={item.subtitle}
                          category={item.category} isOn={item.isOn} />
          )
        })}
      </div>
    </div>
  );
}