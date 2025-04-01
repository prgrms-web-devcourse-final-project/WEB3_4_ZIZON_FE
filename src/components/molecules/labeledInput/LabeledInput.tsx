import InputLabel, { InputLabelProps } from '@/components/atoms/texts/inputLabel/InputLabel';
import TextInput, { TextInputProps } from '@/components/atoms/inputs/textInput/TextInput';

type LabeledInputProps = InputLabelProps & TextInputProps;

export default function LabeledInput({
  id,
  placeholder,
  type,
  onChange = () => {},
  value,
  color = 'transparent',
  disabled = false,
  error = false,
  errorText = '',
  label,
  children,
}: LabeledInputProps & { children?: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="flex justify-between items-center">
        <InputLabel label={label} htmlFor={id} />
        <div>{children}</div>
      </div>
      <TextInput
        id={id}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        value={value}
        color={color}
        disabled={disabled}
        error={error}
        errorText={errorText}
      />
    </div>
  );
}
