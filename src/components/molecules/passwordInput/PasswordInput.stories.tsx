import type { Meta, StoryObj } from '@storybook/react';
import PasswordInput from './PasswordInput';

const meta = {
  title: 'Molecules/PasswordInput',
  component: PasswordInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'text',
      description: '입력 필드의 값입니다.',
    },
    onChange: {
      description: '입력값이 변경될 때 호출되는 콜백 함수입니다.',
    },
    errorText: {
      control: 'text',
      description: '에러 메시지입니다.',
    },
    label: {
      control: 'text',
      description: '입력 필드의 라벨입니다.',
    },
    placeholder: {
      control: 'text',
      description: '입력 필드의 플레이스홀더입니다.',
    },
    id: {
      control: 'text',
      description: '입력 필드의 고유 식별자입니다.',
    },
  },
} satisfies Meta<typeof PasswordInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: '',
    onChange: value => console.log('Password changed:', value),
  },
};

export const WithValue: Story = {
  args: {
    value: 'password123',
    onChange: value => console.log('Password changed:', value),
  },
};

export const WithError: Story = {
  args: {
    value: '',
    errorText: '비밀번호는 8자 이상이어야 합니다.',
    onChange: value => console.log('Password changed:', value),
  },
};

export const CustomLabel: Story = {
  args: {
    value: '',
    label: '비밀번호 확인',
    placeholder: '비밀번호를 다시 입력해주세요',
    onChange: value => console.log('Password changed:', value),
  },
};
