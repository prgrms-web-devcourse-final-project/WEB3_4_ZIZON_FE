import React from 'react';
import SelectedCard, { SelectedCardProps } from '@/components/molecules/selectedCard/SelectedCard';
import SemiBoldText20Black10 from '@/components/atoms/texts/semiBoldText20Black10/SemiBoldText20Black10';

export interface IconSelectBoxProps {
  iconSelectBoxProps: SelectedCardProps[];
  title: string;
}
export default function IconSelectBox({title, iconSelectBoxProps}: IconSelectBoxProps) {
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