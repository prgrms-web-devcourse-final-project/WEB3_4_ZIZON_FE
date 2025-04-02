'use client';

import { useState } from 'react';
import LoginButton from '@/components/atoms/buttons/loginButton/LoginButton';
import LabeledInput from '@/components/molecules/labeledInput/LabeledInput';
import { BaseFormData } from '@/utils/FormValidator';
import useForm from '@/hooks/useForm';

interface LoginFormProps {
  onSubmit: (data: BaseFormData) => Promise<void>;
}

function LoginForm({ onSubmit }: LoginFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { formData, errors, handleChange, validateForm } = useForm<'login'>({
    type: 'login',
    initialFormData: {
      email: '',
      password: '',
    },
  });

  // 폼 제출 핸들러
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      await onSubmit(formData);
    } finally {
      setIsSubmitting(false);
    }
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
      <LoginButton disabled={isSubmitting} onClick={() => {}} type="login" />
    </form>
  );
}

export default LoginForm;
