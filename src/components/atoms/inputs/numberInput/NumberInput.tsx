import { ChangeEvent } from 'react';

export interface NumberInputProps {
  id: string;
  placeholder: string;
  value: number;
  onChange: (value: number) => void;
  color?: 'transparent' | 'white';
  error?: boolean;
  errorText?: string;
  disabled?: boolean;
  isEditable?: boolean;
}

export default function NumberInput({
  id,
  placeholder,
  value,
  onChange,
  color = 'white',
  error = false,
  errorText = '',
  disabled = false,
}: NumberInputProps) {
  const borderVariant = error ? 'border-redWarning' : 'border-black5';
  const bgColorVariant = color === 'white' ? 'bg-black1' : 'bg-transparent';

  return (
    <div className="flex flex-col gap-2 w-full relative">
      <input
        className={`w-full border rounded-sm text-16 px-16 py-12
        placeholder:font-regular placeholder:text-black6  text-black12 
        focus:outline-none focus:ring-1 focus:ring-primary5 focus:border-transparent
        focus:shadow-input disabled:bg-black3  ${borderVariant} ${bgColorVariant}`}
        type="number"
        placeholder={placeholder}
        onChange={(event: ChangeEvent<HTMLInputElement>) => onChange(Number(event.target.value))}
        value={value}
        disabled={disabled}
        id={id}
      />
      {error && errorText && (
        <span className="text-redWarning text-13 font-regular mt-2 pl-2">{errorText}</span>
      )}
    </div>
  );
}
