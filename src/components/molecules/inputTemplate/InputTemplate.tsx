import React, { ReactElement } from 'react';
import InputLabel from '@/components/atoms/texts/inputLabel/InputLabel';
import StandardButton from '@/components/atoms/buttons/standardButton/StandardButton';
import TextInput from '@/components/atoms/inputs/textInput/TextInput';

export interface InputTemplateProps {
  InputComponent: ReactElement<typeof TextInput>;
  LabelComponent: ReactElement<typeof InputLabel>;
  ButtonComponent?: ReactElement<typeof StandardButton>;
  TextButtonComponent?: React.ReactNode;
}

export default function InputTemplate({
  InputComponent,
  LabelComponent,
  ButtonComponent,
  TextButtonComponent,
}: InputTemplateProps) {
  return (
    <div className="w-full">
      <div className="mb-8 flex justify-between items-center">
        {LabelComponent}
        {TextButtonComponent}
      </div>
      <div className="grid grid-cols-4 gap-12">
        <div className="col-span-3">{InputComponent}</div>
        <div className="col-span-1">{ButtonComponent}</div>
      </div>
    </div>
  );
}
