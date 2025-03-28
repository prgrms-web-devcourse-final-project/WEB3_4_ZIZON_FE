import InputLabel, { InputLabelProps } from '@/components/atoms/inputLabel/InputLabel';
import TextInput, { TextInputProps } from '@/components/atoms/textInput/TextInput';

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
}: LabeledInputProps) {
  return (
    <div className="flex flex-col gap-8 w-full">
      <InputLabel label={label} htmlFor={id} />
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
