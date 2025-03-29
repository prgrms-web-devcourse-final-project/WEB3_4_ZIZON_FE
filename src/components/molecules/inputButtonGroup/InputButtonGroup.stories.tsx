import type { Meta, StoryObj } from '@storybook/react';
import InputButtonGroup from './InputButtonGroup';
import { fn } from '@storybook/test';
import React from 'react';

const meta = {
  title: 'molecules/InputButtonGroup',
  component: InputButtonGroup,
  parameters: {
    layout: 'centered',
    componentSubtitle: 'label, input text, button이 조합된 컴포넌트',
  },
  tags: ['autodocs'],
  args: { onChange: fn() },
} as Meta<typeof InputButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    inputProps: {
      id: 'title',
      placeholder: '제목을 입력해주세요',
      type: 'text',
      disabled: false,
      value: '',
      onChange: (value: string) => console.log(value),
    },
    buttonProps: {
      text: 'Button',
      onClick: () => alert('버튼 클릭'),
      disabled: false,
    },
    labelProps: {
      label: '제목',
    },
  },
};

export const Disabled: Story = {
  args: {
    inputProps: {
      id: 'phone',
      placeholder: '전화번호를 입력해주세요',
      type: 'tel',
      disabled: true,
      value: '010-1234-5678',
      onChange: (value: string) => console.log(value),
    },
    buttonProps: {
      text: '재인증',
      onClick: () => alert('버튼 클릭'),
      disabled: false,
      state: 'dark',
    },
    labelProps: {
      label: '전화번호',
    },
  },
};
