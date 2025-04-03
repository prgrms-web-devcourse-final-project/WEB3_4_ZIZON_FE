import type { Meta, StoryObj } from '@storybook/react';
import SignupForm from './SignupForm';
import { SignupFormData } from '@/utils/FormValidator';

const meta = {
  title: 'Organisms/Auth/SignupForm',
  component: SignupForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    formData: {
      control: 'object',
      description: '초기 폼 데이터',
      table: {
        type: {
          summary: 'SignupFormData',
          detail: `{
  email: string;
  password: string;
  passwordCheck: string;
  name: string;
  phoneNumber: string;
}`,
        },
      },
    },
    onSubmit: {
      description: '폼 제출 핸들러',
      action: 'submitted',
    },
    onPhoneVerification: {
      description: '전화번호 인증 핸들러',
      action: 'verified',
    },
    isPhoneVerified: {
      control: 'boolean',
      description: '전화번호 인증 완료 여부',
      defaultValue: false,
    },
  },
} satisfies Meta<typeof SignupForm>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockFormData: SignupFormData = {
  email: '',
  password: '',
  passwordCheck: '',
  name: '',
  phoneNumber: '',
};

const mockHandlers = {
  onSubmit: async (data: SignupFormData) => {
    console.log('폼 제출:', data);
    await new Promise(resolve => setTimeout(resolve, 1000)); // API 호출 시뮬레이션
  },
  onPhoneVerification: async (phoneNumber: string, authCode: string) => {
    console.log('전화번호 인증:', { phoneNumber, authCode });
    await new Promise(resolve => setTimeout(resolve, 1000)); // API 호출 시뮬레이션
    return true;
  },
};

// 기본 스토리
export const Default: Story = {
  args: {
    formData: mockFormData,
    isPhoneVerified: false,
    ...mockHandlers,
  },
};

// 전화번호 인증 완료 상태
export const WithPhoneVerified: Story = {
  args: {
    formData: {
      ...mockFormData,
      phoneNumber: '010-1234-5678',
    },
    isPhoneVerified: true,
    ...mockHandlers,
  },
};

// 모든 필드 입력 완료 상태
export const WithAllFieldsFilled: Story = {
  args: {
    formData: {
      email: 'test@example.com',
      password: 'password123',
      passwordCheck: 'password123',
      name: '홍길동',
      phoneNumber: '010-1234-5678',
    },
    isPhoneVerified: true,
    ...mockHandlers,
  },
};

// 전화번호 인증 진행 중 상태
export const VerifyingPhone: Story = {
  args: {
    formData: {
      ...mockFormData,
      phoneNumber: '010-1234-5678',
    },
    isPhoneVerified: false,
    ...mockHandlers,
  },
};

// 에러 상태
export const WithErrors: Story = {
  args: {
    formData: {
      email: 'invalid-email',
      password: 'short', // 8자 미만
      passwordCheck: 'different',
      name: '홍', // 2자 미만
      phoneNumber: '010-123', // 잘못된 형식
    },
    isPhoneVerified: false,
    ...mockHandlers,
  },
};
