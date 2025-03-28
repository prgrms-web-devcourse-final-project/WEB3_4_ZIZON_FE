import { ChangeEvent } from 'react';

type TextInputType = 'text' | 'email' | 'password';

interface TextInputProps {
  name: string;
  placeholder: string;
  type: TextInputType;
  onChange: (value: string) => void;
  value: string;
  color?: 'transparent' | 'white';
  error?: boolean;
  errorText?: string;
  label?: string;
  disabled?: boolean;
}

export default function TextInput({
  name,
  placeholder,
  type,
  onChange = () => {},
  value,
  label,
  color = 'transparent',
  disabled = false,
  error = false,
  errorText = '',
  ...props
}: TextInputProps) {
  const borderVariant = error ? 'border-redWarning' : 'border-black5';
  const bgColorVariant = color === 'white' ? 'bg-black1' : 'bg-transparent';
  return (
    <div className="flex flex-col w-full">
      {label && (
        <label className="block text-black10 text-13 font-medium mb-8" htmlFor={label}>
          {label}
        </label>
      )}
      <input
        className={`w-full mb-4 border rounded-sm text-16 px-16 py-12
      placeholder:font-regular placeholder:text-black6  text-black12 
      focus:outline-none focus:ring-1 focus:ring-primary5 focus:border-transparent
      focus:shadow-input disabled:bg-black3 ${borderVariant} ${bgColorVariant}`}
        type={type}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
        onChange={(event: ChangeEvent<HTMLInputElement>) => onChange(event.target.value)}
        value={value}
        {...props}
      />
      {error && errorText && (
        <span className="text-redWarning text-13 font-regular">{errorText}</span>
      )}
    </div>
  );
}
