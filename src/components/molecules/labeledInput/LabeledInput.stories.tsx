import type { Meta, StoryObj } from '@storybook/react';
import LabeledInput from './LabeledInput';

const meta = {
  title: 'Molecules/LabeledInput',
  component: LabeledInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LabeledInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 'default-input',
    label: '기본 입력',
    placeholder: '입력해주세요',
    type: 'text',
    value: '',
  },
};

export const WithError: Story = {
  args: {
    id: 'error-input',
    label: '에러 입력',
    placeholder: '입력해주세요',
    type: 'text',
    value: '',
    errorText: '올바른 값을 입력해주세요',
  },
};

export const Disabled: Story = {
  args: {
    id: 'disabled-input',
    label: '비활성화 입력',
    placeholder: '입력해주세요',
    type: 'text',
    value: '',
    disabled: true,
  },
};

export const WithCustomColor: Story = {
  args: {
    id: 'color-input',
    label: '커스텀 색상 입력',
    placeholder: '입력해주세요',
    type: 'text',
    value: '',
    color: 'white',
  },
};
