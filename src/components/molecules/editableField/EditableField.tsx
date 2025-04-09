import InputTemplate from '@/components/molecules/inputTemplate/InputTemplate';
import TextInput, { TextInputType } from '@/components/atoms/inputs/textInput/TextInput';
import TextareaInput from '@/components/atoms/inputs/textareaInput/TextareaInput';
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
  useTextarea?: boolean;
  rows?: number;
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
  useTextarea = false,
  rows = 4,
}: EditableFieldProps) {
  return (
    <InputTemplate
      InputComponent={
        useTextarea ? (
          <TextareaInput
            id={id}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            disabled={disabled || !isEditable}
            isEditable={id !== 'email' && id !== 'password' && id !== 'phone'}
            rows={rows}
          />
        ) : (
          <TextInput
            id={id}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            disabled={disabled || !isEditable}
            isEditable={id !== 'email' && id !== 'password' && id !== 'phone'}
          />
        )
      }
      LabelComponent={<InputLabel label={label} htmlFor={id} />}
      TextButtonComponent={
        onEditClick && <TextButton onClick={onEditClick} text={isEditable ? '완료' : '수정'} />
      }
      ButtonComponent={ButtonComponent}
    />
  );
}
