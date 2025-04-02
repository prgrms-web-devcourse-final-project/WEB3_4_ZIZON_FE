export interface ValidationResult {
  isValid: boolean;
  errorMessage: string;
}

// 기본 폼 데이터 인터페이스 (로그인에서 사용)
export interface BaseFormData {
  email: string;
  password: string;
}

// 회원가입 폼 데이터 인터페이스
export interface SignupFormData extends BaseFormData {
  passwordCheck: string;
  name: string;
  phoneNumber: string;
}

// 기본 폼 에러 인터페이스 (로그인에서 사용)
export interface BaseFormErrors {
  email: string;
  password: string;
}

// 회원가입 폼 에러 인터페이스
export interface SignupFormErrors extends BaseFormErrors {
  passwordCheck: string;
  phoneNumber: string;
  authCode: string;
  name: string;
}

export class FormValidator {
  private static readonly EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  private static readonly PHONE_REGEX = /^010-\d{4}-\d{4}$/;
  private static readonly AUTH_CODE_REGEX = /^\d{6}$/;

  static validateEmail(email: string): ValidationResult {
    if (!this.EMAIL_REGEX.test(email)) {
      return {
        isValid: false,
        errorMessage: '이메일 형식으로 입력해주세요.',
      };
    }
    return {
      isValid: true,
      errorMessage: '',
    };
  }

  static validatePassword(password: string): ValidationResult {
    if (password.length < 8) {
      return {
        isValid: false,
        errorMessage: '비밀번호는 8자 이상이어야 합니다.',
      };
    }
    return {
      isValid: true,
      errorMessage: '',
    };
  }

  static validatePasswordCheck(password: string, passwordCheck: string): ValidationResult {
    if (password !== passwordCheck) {
      return {
        isValid: false,
        errorMessage: '비밀번호가 일치하지 않습니다.',
      };
    }
    return {
      isValid: true,
      errorMessage: '',
    };
  }

  static validateName(name: string): ValidationResult {
    if (name.length < 2) {
      return {
        isValid: false,
        errorMessage: '이름은 2자 이상이어야 합니다.',
      };
    }
    return {
      isValid: true,
      errorMessage: '',
    };
  }

  static validatePhoneNumber(phoneNumber: string): ValidationResult {
    if (!this.PHONE_REGEX.test(phoneNumber)) {
      return {
        isValid: false,
        errorMessage: '올바른 전화번호 형식이 아닙니다.',
      };
    }
    return {
      isValid: true,
      errorMessage: '',
    };
  }

  static validateAuthCode(authCode: string): ValidationResult {
    if (!this.AUTH_CODE_REGEX.test(authCode)) {
      return {
        isValid: false,
        errorMessage: '인증번호는 6자리 숫자여야 합니다.',
      };
    }
    return {
      isValid: true,
      errorMessage: '',
    };
  }

  static validateSignupForm(formData: SignupFormData, authCode?: string): SignupFormErrors {
    const errors: SignupFormErrors = {
      email: '',
      password: '',
      passwordCheck: '',
      phoneNumber: '',
      authCode: '',
      name: '',
    };

    const emailValidation = this.validateEmail(formData.email);
    if (!emailValidation.isValid) {
      errors.email = emailValidation.errorMessage;
    }

    const passwordValidation = this.validatePassword(formData.password);
    if (!passwordValidation.isValid) {
      errors.password = passwordValidation.errorMessage;
    }

    const passwordCheckValidation = this.validatePasswordCheck(
      formData.password,
      formData.passwordCheck,
    );
    if (!passwordCheckValidation.isValid) {
      errors.passwordCheck = passwordCheckValidation.errorMessage;
    }

    const nameValidation = this.validateName(formData.name);
    if (!nameValidation.isValid) {
      errors.name = nameValidation.errorMessage;
    }

    const phoneValidation = this.validatePhoneNumber(formData.phoneNumber);
    if (!phoneValidation.isValid) {
      errors.phoneNumber = phoneValidation.errorMessage;
    }

    if (authCode) {
      const authCodeValidation = this.validateAuthCode(authCode);
      if (!authCodeValidation.isValid) {
        errors.authCode = authCodeValidation.errorMessage;
      }
    }

    return errors;
  }

  static validateLoginForm(formData: BaseFormData): BaseFormErrors {
    const errors: BaseFormErrors = {
      email: '',
      password: '',
    };

    const emailValidation = this.validateEmail(formData.email);
    if (!emailValidation.isValid) {
      errors.email = emailValidation.errorMessage;
    }

    const passwordValidation = this.validatePassword(formData.password);
    if (!passwordValidation.isValid) {
      errors.password = passwordValidation.errorMessage;
    }

    return errors;
  }
}
