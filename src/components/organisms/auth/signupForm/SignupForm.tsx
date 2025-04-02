'use client';

import { useState } from 'react';
import LoginButton from '@/components/atoms/buttons/loginButton/LoginButton';
import LabeledInput from '@/components/molecules/labeledInput/LabeledInput';
import PhoneAuthField from '@/components/molecules/phoneAuthField/PhoneAuthField';
import { SignupFormData } from '@/utils/FormValidator';
import useForm from '@/hooks/useForm';

interface SignupFormProps {
  formData: SignupFormData;
  onSubmit: (data: SignupFormData) => Promise<void>;
  onPhoneVerification: (phoneNumber: string, authCode: string) => Promise<boolean>;
  isPhoneVerified: boolean;
}

function SignupForm({
  formData: initialFormData,
  onSubmit,
  onPhoneVerification,
  isPhoneVerified,
}: SignupFormProps) {
  const [authCode, setAuthCode] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);

  const {
    formData,
    errors,
    isSubmitting,
    setIsSubmitting,
    handleChange,
    validateForm,
    setAuthCodeError,
  } = useForm<'signup'>({
    type: 'signup',
    initialFormData,
  });

  // 폼 제출 핸들러
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm(authCode)) return;

    setIsSubmitting(true);
    try {
      await onSubmit(formData);
    } finally {
      setIsSubmitting(false);
    }
  };

  // 전화번호 인증 시도
  const handleVerifyClick = async () => {
    setIsVerifying(true);

    const isSuccess = await onPhoneVerification(formData.phoneNumber, authCode);
    if (!isSuccess) {
      setAuthCodeError('전화번호 인증에 실패했습니다.');
    }

    setIsVerifying(false);
  };

  // 인증번호 변경 핸들러
  const handleAuthCodeChange = (value: string) => {
    setAuthCode(value);
    validateForm(value);
  };

  return (
    <form className="flex flex-col gap-32 mt-64" onSubmit={handleSubmit}>
      <LabeledInput
        color="transparent"
        errorText={errors.email}
        htmlFor="email"
        id="email"
        label="이메일"
        onChange={value => handleChange('email', value)}
        placeholder="이메일을 입력해주세요"
        type="email"
        value={formData.email}
      />
      <LabeledInput
        color="transparent"
        errorText={errors.password}
        htmlFor="password"
        id="password"
        label="비밀번호"
        onChange={value => handleChange('password', value)}
        placeholder="비밀번호를 입력해주세요"
        type="password"
        value={formData.password}
      />
      <LabeledInput
        color="transparent"
        errorText={errors.passwordCheck}
        htmlFor="passwordCheck"
        id="passwordCheck"
        label="비밀번호 확인"
        onChange={value => handleChange('passwordCheck', value)}
        placeholder="비밀번호를 다시 입력해주세요"
        type="password"
        value={formData.passwordCheck}
      />

      <PhoneAuthField
        phoneNumber={formData.phoneNumber}
        authCode={authCode}
        isVerifying={isVerifying}
        onVerifyClick={handleVerifyClick}
        onPhoneNumberChange={value => handleChange('phoneNumber', value)}
        onAuthCodeChange={handleAuthCodeChange}
        phoneError={errors.phoneNumber !== ''}
        phoneErrorText={errors.phoneNumber}
        authCodeError={errors.authCode !== ''}
        authCodeErrorText={errors.authCode}
      />

      <LabeledInput
        color="transparent"
        errorText={errors.name}
        htmlFor="name"
        id="name"
        label="이름"
        onChange={value => handleChange('name', value)}
        placeholder="이름을 입력해주세요."
        type="text"
        value={formData.name}
      />

      <LoginButton disabled={!isPhoneVerified || isSubmitting} onClick={() => {}} type="signup" />
    </form>
  );
}

export default SignupForm;
