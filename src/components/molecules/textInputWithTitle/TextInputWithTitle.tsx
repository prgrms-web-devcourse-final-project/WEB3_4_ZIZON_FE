import React from 'react';
import TextInput, { TextInputProps } from '@/components/atoms/inputs/textInput/TextInput';
import SemiBoldText20Black10 from '@/components/atoms/texts/semiBoldText20Black10/SemiBoldText20Black10';

interface TextInputWithTitleProps extends TextInputProps{
  title: string;
}
function TextInputWithTitle({title, id, placeholder, type='text', value, onChange}: TextInputWithTitleProps) {
  return (
    <div className="w-full min-w-full max-w-full">
      <SemiBoldText20Black10 title={title}/>
      <TextInput id={id} placeholder={placeholder} type={type} value={value} onChange={onChange}/>
    </div>
  );
}

export default TextInputWithTitle;