import { useState, useCallback } from 'react';
import {
  FormValidator,
  SignupFormData,
  SignupFormErrors,
  BaseFormData,
  BaseFormErrors,
} from '@/utils/FormValidator';

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

  const handleChange = useCallback(
    (field: keyof FormDataMap[T], value: string) => {
      setFormData(prev => ({ ...prev, [field]: value }));

      if (value.trim() !== '') {
        const newError = validateField(field, value);
        setErrors(prev => ({ ...prev, [field]: newError }));
      } else {
        setErrors(prev => ({ ...prev, [field]: '' }));
      }
    },
    [validateField],
  );

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
  };
};

export default useForm;
