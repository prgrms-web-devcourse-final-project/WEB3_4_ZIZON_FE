import type { Meta, StoryObj } from '@storybook/react';
import PhoneAuthField from './PhoneAuthField';

const meta = {
  title: 'Molecules/PhoneAuthField',
  component: PhoneAuthField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    phoneNumber: {
      control: 'text',
      description: '전화번호 입력값',
    },
    authCode: {
      control: 'text',
      description: '인증번호 입력값',
    },
    isVerifying: {
      control: 'boolean',
      description: '인증 진행 중 여부',
    },
    onVerifyClick: {
      description: '인증하기 버튼 클릭 핸들러',
    },
    onPhoneNumberChange: {
      description: '전화번호 입력 핸들러',
    },
    onAuthCodeChange: {
      description: '인증번호 입력 핸들러',
    },
    phoneError: {
      control: 'boolean',
      description: '전화번호 입력 에러 여부',
    },
    phoneErrorText: {
      control: 'text',
      description: '전화번호 에러 메시지',
    },
    authCodeError: {
      control: 'boolean',
      description: '인증번호 입력 에러 여부',
    },
    authCodeErrorText: {
      control: 'text',
      description: '인증번호 에러 메시지',
    },
  },
} satisfies Meta<typeof PhoneAuthField>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockHandlers = {
  onVerifyClick: async () => {
    console.log('인증하기 버튼 클릭');
    // 실제 구현에서는 API 호출이 있을 수 있음
    return true;
  },
  onPhoneNumberChange: (value: string) => console.log('전화번호 변경:', value),
  onAuthCodeChange: (value: string) => console.log('인증번호 변경:', value),
};

// 기본 스토리
export const Default: Story = {
  args: {
    phoneNumber: '',
    authCode: '',
    isVerifying: false,
    phoneError: false,
    phoneErrorText: '',
    authCodeError: false,
    authCodeErrorText: '',
    ...mockHandlers,
  },
};

// 전화번호가 입력된 상태
export const WithPhoneNumber: Story = {
  args: {
    phoneNumber: '010-1234-5678',
    authCode: '',
    isVerifying: false,
    phoneError: false,
    phoneErrorText: '',
    authCodeError: false,
    authCodeErrorText: '',
    ...mockHandlers,
  },
};

// 전화번호 에러 상태
export const WithPhoneError: Story = {
  args: {
    phoneNumber: '010-123',
    authCode: '',
    isVerifying: false,
    phoneError: true,
    phoneErrorText: '올바른 전화번호 형식이 아닙니다.',
    authCodeError: false,
    authCodeErrorText: '',
    ...mockHandlers,
  },
};

// 인증번호 입력 중인 상태
export const Verifying: Story = {
  args: {
    phoneNumber: '010-1234-5678',
    authCode: '',
    isVerifying: true,
    phoneError: false,
    phoneErrorText: '',
    authCodeError: false,
    authCodeErrorText: '',
    ...mockHandlers,
  },
};

// 인증번호까지 입력된 상태
export const WithAuthCode: Story = {
  args: {
    phoneNumber: '010-1234-5678',
    authCode: '123456',
    isVerifying: true,
    phoneError: false,
    phoneErrorText: '',
    authCodeError: false,
    authCodeErrorText: '',
    ...mockHandlers,
  },
};

// 인증번호 에러 상태
export const WithAuthCodeError: Story = {
  args: {
    phoneNumber: '010-1234-5678',
    authCode: '123',
    isVerifying: true,
    phoneError: false,
    phoneErrorText: '',
    authCodeError: true,
    authCodeErrorText: '인증번호가 일치하지 않습니다.',
    ...mockHandlers,
  },
};

// 인증 실패 상태
export const WithVerificationError: Story = {
  args: {
    phoneNumber: '010-1234-5678',
    authCode: '123456',
    isVerifying: true,
    phoneError: false,
    phoneErrorText: '',
    authCodeError: true,
    authCodeErrorText: '전화번호 인증에 실패했습니다.',
    ...mockHandlers,
  },
};
