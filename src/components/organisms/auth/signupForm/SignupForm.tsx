'use client';

import { useState } from 'react';
import LoginButton from '@/components/atoms/buttons/loginButton/LoginButton';
import LabeledInput from '@/components/molecules/labeledInput/LabeledInput';
import PasswordInput from '@/components/molecules/passwordInput/PasswordInput';
import PhoneAuthField from '@/components/molecules/phoneAuthField/PhoneAuthField';
import { SignupFormData } from '@/utils/FormValidator';
import useForm from '@/hooks/useForm';

interface SignupFormProps {
  formData: SignupFormData;
  onSubmit: (data: SignupFormData) => Promise<void>;
  onPhoneVerification: (data: SignupFormData) => Promise<boolean>;
}

function SignupForm({ formData: initialFormData, onSubmit, onPhoneVerification }: SignupFormProps) {
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
      // API 명세서에 맞게 authCode를 formData에 추가
      const submitData = {
        ...formData,
        authCode,
      };
      await onSubmit(submitData);
    } finally {
      setIsSubmitting(false);
    }
  };

  // 전화번호 인증 시도
  const handleVerifyClick = async () => {
    // 전화번호 형식 검증
    if (errors.phoneNumber) {
      setAuthCodeError('올바른 전화번호 형식이 아닙니다.');
      return;
    }

    setIsVerifying(true);

    // 인증번호 요청 시에는 authCode를 빈 문자열로 설정
    setAuthCode('');

    const isSuccess = await onPhoneVerification({
      ...formData,
      authCode: '',
    });

    if (!isSuccess) {
      setAuthCodeError('인증번호 요청에 실패했습니다.');
      setIsVerifying(false);
    } else {
      setAuthCodeError('');
      alert('인증번호가 전송되었습니다.');
    }
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
      <PasswordInput
        errorText={errors.password}
        onChange={value => handleChange('password', value)}
        value={formData.password}
      />
      <PasswordInput
        errorText={errors.passwordCheck}
        onChange={value => handleChange('passwordCheck', value)}
        value={formData.passwordCheck}
        label="비밀번호 확인"
        placeholder="비밀번호를 다시 입력해주세요"
        id="passwordCheck"
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

      <LoginButton disabled={isSubmitting} onClick={() => {}} type="signup" />
    </form>
  );
}

export default SignupForm;
