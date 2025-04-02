import StandardButton from '@/components/atoms/buttons/standardButton/StandardButton';
import TextInput, { TextInputProps } from '@/components/atoms/inputs/textInput/TextInput';
import InputTemplate, {
  InputTemplateProps,
} from '@/components/molecules/inputTemplate/InputTemplate';
import InputLabel from '@/components/atoms/texts/inputLabel/InputLabel';

interface PhoneAuthFieldProps {
  phoneNumber: string;
  authCode: string;
  isVerifying: boolean;
  onVerifyClick: () => void;
  onPhoneNumberChange: (value: string) => void;
  onAuthCodeChange: (value: string) => void;
  phoneError?: boolean;
  phoneErrorText?: string;
  authCodeError?: boolean;
  authCodeErrorText?: string;
}

function PhoneAuthField({
  phoneNumber,
  authCode,
  isVerifying,
  onVerifyClick,
  onPhoneNumberChange,
  onAuthCodeChange,
  phoneError = false,
  phoneErrorText = '',
  authCodeError = false,
  authCodeErrorText = '',
}: PhoneAuthFieldProps) {
  const phoneInputProps: TextInputProps = {
    id: 'phoneNumber',
    placeholder: '010-0000-0000',
    type: 'tel',
    value: phoneNumber,
    onChange: onPhoneNumberChange,
    error: phoneError,
    errorText: phoneErrorText,
    color: 'transparent',
  };

  const authCodeInputProps: TextInputProps = {
    id: 'authCode',
    placeholder: '인증번호를 입력해주세요',
    type: 'text',
    value: authCode,
    onChange: onAuthCodeChange,
    error: authCodeError,
    errorText: authCodeErrorText,
    color: 'transparent',
  };

  const inputTemplateProps: InputTemplateProps = {
    InputComponent: <TextInput {...phoneInputProps} />,
    LabelComponent: <InputLabel label="전화번호" htmlFor="phoneNumber" />,
    ButtonComponent: (
      <StandardButton
        disabled={isVerifying}
        onClick={onVerifyClick}
        text="인증하기"
        size="full"
        state="dark"
      />
    ),
  };

  return (
    <div className="flex flex-col gap-12">
      <InputTemplate {...inputTemplateProps} />
      {isVerifying && <TextInput {...authCodeInputProps} />}
    </div>
  );
}

export default PhoneAuthField;
