import { useState } from 'react';
import LabeledInput from '@/components/molecules/labeledInput/LabeledInput';
import EyeIcon from '@/components/atoms/icons/eyeIcon/EyeIcon';

interface PasswordInputProps {
  value: string;
  onChange: (value: string) => void;
  errorText?: string;
  label?: string;
  placeholder?: string;
  id?: string;
}

function PasswordInput({
  value,
  onChange,
  errorText,
  label = '비밀번호',
  placeholder = '비밀번호를 입력해주세요',
  id = 'password',
}: PasswordInputProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <div className="w-full relative group">
      <LabeledInput
        color="transparent"
        errorText={errorText}
        htmlFor={id}
        id={id}
        label={label}
        onChange={onChange}
        placeholder={placeholder}
        type={isPasswordVisible ? 'text' : 'password'}
        value={value}
      />
      <div
        className="absolute right-16 top-35 cursor-pointer"
        onMouseEnter={() => setIsPasswordVisible(true)}
        onMouseLeave={() => setIsPasswordVisible(false)}
        role="button"
        tabIndex={0}
        aria-label="비밀번호 보기"
      >
        <EyeIcon isVisible={isPasswordVisible} />
      </div>
    </div>
  );
}

export default PasswordInput;
