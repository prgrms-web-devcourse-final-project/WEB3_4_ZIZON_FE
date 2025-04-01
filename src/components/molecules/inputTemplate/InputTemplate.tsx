import InputLabel from '@/components/atoms/inputLabel/InputLabel';
import StandardButton from '@/components/atoms/standardButton/StandardButton';
import TextInput from '@/components/atoms/textInput/TextInput';
import React, { ReactElement } from 'react';

interface InputTemplateProps {
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
      <div className="flex gap-12">
        {InputComponent}
        {ButtonComponent}
      </div>
    </div>
  );
}
