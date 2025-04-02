import React from 'react';
import { StandardButtonProps } from '@/components/atoms/buttons/standardButton/StandardButton';
import SemiBoldText20Black10 from '@/components/atoms/texts/semiBoldText20Black10/SemiBoldText20Black10';
import Checkbox, { CheckboxProps } from '@/components/atoms/checkboxes/checkboxWithLabel/CheckboxWithLabel';


interface CheckSelectBoxProps extends StandardButtonProps{
  checkSelectBoxProps: CheckboxProps[];
  title: string;
}
export default function CheckSelectBox({title, checkSelectBoxProps}: CheckSelectBoxProps) {
  return (
    <div className="p-40 rounded-lg bg-black1">
      <SemiBoldText20Black10 title={title}/>
      <div className="grid grid-cols-1 gap-12 place-items-end">
        {checkSelectBoxProps.map((item, index) => {
          return (
           <Checkbox key={index} label={item.label} caption={item.caption} checked={item.checked} onChange={item.onChange}/>
          )
        })}
      </div>
    </div>
  );
}