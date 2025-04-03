import InputTemplate from '@/components/molecules/inputTemplate/InputTemplate';
import TextInput, { TextInputType } from '@/components/atoms/inputs/textInput/TextInput';
import InputLabel from '@/components/atoms/texts/inputLabel/InputLabel';
import TextButton from '@/components/atoms/buttons/textButton/TextButton';
import StandardButton from '@/components/atoms/buttons/standardButton/StandardButton';
import { ReactElement } from 'react';

interface EditableFieldProps {
  id: string;
  label: string;
  value: string;
  type?: TextInputType;
  placeholder: string;
  onChange: (value: string) => void;
  isEditable: boolean;
  onEditClick?: () => void;
  disabled?: boolean;
  ButtonComponent?: ReactElement<typeof StandardButton>;
}

export default function EditableField({
  id,
  label,
  value,
  type = 'text',
  placeholder,
  onChange,
  isEditable,
  onEditClick,
  disabled = false,
  ButtonComponent,
}: EditableFieldProps) {
  return (
    <InputTemplate
      InputComponent={
        <TextInput
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled || !isEditable}
        />
      }
      LabelComponent={<InputLabel label={label} htmlFor={id} />}
      TextButtonComponent={
        onEditClick && <TextButton onClick={onEditClick} text={isEditable ? '완료' : '수정'} />
      }
      ButtonComponent={ButtonComponent}
    />
  );
}
