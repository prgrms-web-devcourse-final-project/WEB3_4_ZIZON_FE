import type { Meta, StoryObj } from '@storybook/react';
import TextInput from './TextInput';
import { fn } from '@storybook/test';
import React from 'react';

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
    name: 'title',
    placeholder: '제목을 입력해주세요',
    type: 'text',
    disabled: false,
    value: '',
    onChange: (value: string) => console.log(value),
  },
};

export const WithLabel: Story = {
  args: {
    name: 'email',
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
    name: 'email',
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

export const Chatting = () => {
  const [value, setValue] = React.useState<string>('');
  return (
    <div className="w-752">
      <TextInput
        name="chatting"
        placeholder="메시지를 입력해주세요. (Enter: 줄바꿈 / Ctrl+Enter: 전송)"
        type="text"
        disabled={false}
        value={value}
        onChange={(value: string) => setValue(value)}
        error={false}
        color="white"
      />
    </div>
  );
};
