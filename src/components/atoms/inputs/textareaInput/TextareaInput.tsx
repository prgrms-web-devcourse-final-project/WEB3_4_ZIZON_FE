import { ChangeEvent } from 'react';
import Image from 'next/image';

export interface TextareaInputProps {
  id: string;
  placeholder: string;
  value: string;
  onChange?: (value: string) => void;
  color?: 'transparent' | 'white';
  error?: boolean;
  errorText?: string;
  disabled?: boolean;
  isEditable?: boolean;
  rows?: number;
}

export default function TextareaInput({
  id,
  placeholder,
  value,
  onChange = () => {},
  color = 'transparent',
  disabled = false,
  error = false,
  errorText = '',
  isEditable = true,
  rows = 4,
}: TextareaInputProps) {
  const borderVariant = error ? 'border-redWarning' : 'border-black5';
  const bgColorVariant = color === 'white' ? 'bg-black1' : 'bg-transparent';

  // disabled 상태는
  // 1. editable이 true이면 disabled는 true, false모두 가능
  // 2. editable이 false이면 disabled는 true만 가능
  const disabledState = !isEditable || disabled;

  return (
    <div className="flex flex-col gap-2 w-full relative">
      <textarea
        className={`w-full border rounded-sm text-16 px-16 py-12 resize-none
          placeholder:font-regular placeholder:text-black6 text-black12 
          focus:outline-none focus:ring-1 focus:ring-primary5 focus:border-transparent
          focus:shadow-input disabled:bg-black3 ${borderVariant} ${bgColorVariant}`}
        id={id}
        placeholder={placeholder}
        disabled={disabledState}
        onChange={(event: ChangeEvent<HTMLTextAreaElement>) => onChange(event.target.value)}
        value={value}
        rows={rows}
      />
      {!isEditable && (
        <Image
          src="/icons/LockClosed.svg"
          alt="lock"
          width={20}
          height={20}
          className="absolute right-16 top-14"
        />
      )}
      {isEditable && error && errorText && (
        <span className="text-redWarning text-13 font-regular mt-2 pl-2">{errorText}</span>
      )}
    </div>
  );
}
