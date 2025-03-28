import { ChangeEvent } from 'react';

type TextInputType = 'text' | 'email' | 'password';

export interface TextInputProps {
  id: string;
  placeholder: string;
  type: TextInputType;
  onChange: (value: string) => void;
  value: string;
  color?: 'transparent' | 'white';
  error?: boolean;
  errorText?: string;
  disabled?: boolean;
}

export default function TextInput({
  id,
  placeholder,
  type,
  onChange = () => {},
  value,
  color = 'transparent',
  disabled = false,
  error = false,
  errorText = '',
}: TextInputProps) {
  const borderVariant = error ? 'border-redWarning' : 'border-black5';
  const bgColorVariant = color === 'white' ? 'bg-black1' : 'bg-transparent';
  return (
    <div className="flex flex-col gap-2 w-full">
      <input
        className={`w-full  border rounded-sm text-16 px-16 py-12
      placeholder:font-regular placeholder:text-black6  text-black12 
      focus:outline-none focus:ring-1 focus:ring-primary5 focus:border-transparent
      focus:shadow-input disabled:bg-black3 ${borderVariant} ${bgColorVariant}`}
        id={id}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        onChange={(event: ChangeEvent<HTMLInputElement>) => onChange(event.target.value)}
        value={value}
      />
      {error && errorText && (
        <span className="text-redWarning text-13 font-regular">{errorText}</span>
      )}
    </div>
  );
}
