import { useState, useCallback, useEffect } from 'react';
import {
  FormValidator,
  SignupFormData,
  SignupFormErrors,
  BaseFormData,
  BaseFormErrors,
} from '@/utils/FormValidator';
import useDebounce from './useDebounce';

type FormType = 'signup' | 'login';

type FormDataMap = {
  signup: SignupFormData;
  login: BaseFormData;
};

type FormErrorsMap = {
  signup: SignupFormErrors;
  login: BaseFormErrors;
};

interface UseFormOptions<T extends FormType> {
  type: T;
  initialFormData: FormDataMap[T];
  initialErrors?: FormErrorsMap[T];
}

const initialSignupErrorState: SignupFormErrors = {
  email: '',
  password: '',
  passwordCheck: '',
  phoneNumber: '',
  authCode: '',
  name: '',
};

const initialLoginErrorState: BaseFormErrors = {
  email: '',
  password: '',
};

const initialErrorStateMap: FormErrorsMap = {
  signup: initialSignupErrorState,
  login: initialLoginErrorState,
};

const useForm = <T extends FormType>({
  type,
  initialFormData,
  initialErrors,
}: UseFormOptions<T>) => {
  const [formData, setFormData] = useState<FormDataMap[T]>(initialFormData);
  const [errors, setErrors] = useState<FormErrorsMap[T]>(
    initialErrors || initialErrorStateMap[type],
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [currentField, setCurrentField] = useState<keyof FormDataMap[T] | null>(null);
  const [currentValue, setCurrentValue] = useState<string>('');

  const validateField = useCallback(
    (field: keyof FormDataMap[T], value: string): string => {
      switch (field) {
        case 'email':
          return FormValidator.validateEmail(value).errorMessage;
        case 'password':
          return FormValidator.validatePassword(value).errorMessage;
        case 'passwordCheck':
          if (type === 'signup') {
            return FormValidator.validatePasswordCheck(value, (formData as SignupFormData).password)
              .errorMessage;
          }
          return '';
        case 'phoneNumber':
          if (type === 'signup') {
            return FormValidator.validatePhoneNumber(value).errorMessage;
          }
          return '';
        case 'name':
          if (type === 'signup') {
            return FormValidator.validateName(value).errorMessage;
          }
          return '';
        default:
          return '';
      }
    },
    [formData, type],
  );

  // 디바운스된 값 설정
  const debouncedValue = useDebounce(currentValue, 300);

  // 디바운스된 값이 변경될 때마다 검증 실행
  useEffect(() => {
    if (currentField && debouncedValue) {
      if (debouncedValue.trim() !== '') {
        const newError = validateField(currentField, debouncedValue);
        setErrors(prev => ({ ...prev, [currentField]: newError }));
      } else {
        setErrors(prev => ({ ...prev, [currentField]: '' }));
      }
    }
  }, [debouncedValue, currentField, validateField]);

  const handleChange = useCallback((field: keyof FormDataMap[T], value: string) => {
    // 입력값 sanitize
    const sanitizedValue = FormValidator.sanitizeInput(value);

    // 즉시 폼 데이터 업데이트
    setFormData(prev => ({ ...prev, [field]: sanitizedValue }));

    // 디바운스 검증을 위한 상태 업데이트
    setCurrentField(field);
    setCurrentValue(sanitizedValue);
  }, []);

  const setAuthCodeError = useCallback(
    (errorMessage: string) => {
      if (type === 'signup') {
        setErrors(prev => ({ ...(prev as SignupFormErrors), authCode: errorMessage }));
      }
    },
    [type],
  );

  const validateForm = useCallback(
    (authCode?: string): boolean => {
      if (type === 'signup') {
        const validationErrors = FormValidator.validateSignupForm(
          formData as SignupFormData,
          authCode,
        );
        setErrors(validationErrors);
        return !Object.values(validationErrors).some(error => error !== '');
      } else {
        const validationErrors = FormValidator.validateLoginForm(formData as BaseFormData);
        setErrors(validationErrors as FormErrorsMap[T]);
        return !Object.values(validationErrors).some(error => error !== '');
      }
    },
    [formData, type],
  );

  const resetForm = useCallback(() => {
    setFormData(initialFormData);
    setErrors(initialErrorStateMap[type]);
    setSubmitError(null);
  }, [initialFormData, type]);

  return {
    formData,
    setFormData,
    errors,
    setErrors,
    isSubmitting,
    setIsSubmitting,
    submitError,
    setSubmitError,
    validateField,
    handleChange,
    validateForm,
    setAuthCodeError,
    resetForm,
  };
};

export default useForm;
