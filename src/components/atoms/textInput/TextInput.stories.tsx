import type { Meta, StoryObj } from '@storybook/react';
import TextInput from './TextInput';
import { fn } from '@storybook/test';

const meta = {
  title: 'Atoms/TextInput',
  component: TextInput,
  parameters: {
    layout: 'centered',
    componentSubtitle: '문자열 타입을 받는 Input 컴포넌트',
  },
  tags: ['autodocs'],
  args: { onChange: fn() },
} as Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: '제목을 입력해주세요',
    type: 'text',
    disabled: false,
    value: '',
    onChange: (value: string) => console.log(value),
  },
};

export const WithLabel: Story = {
  args: {
    placeholder: '이메일을 입력해주세요',
    type: 'email',
    disabled: false,
    value: '',
    label: '이메일',
    onChange: (value: string) => console.log(value),
  },
};

export const Error: Story = {
  args: {
    placeholder: '이메일을 입력해주세요',
    type: 'email',
    disabled: false,
    value: '',
    label: '이메일',
    onChange: (value: string) => console.log(value),
    error: true,
    errorText: '이메일 형식이 올바르지 않습니다.',
  },
};
