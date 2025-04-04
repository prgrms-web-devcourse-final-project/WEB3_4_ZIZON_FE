import type { Meta, StoryObj } from '@storybook/react';
import NumberInput from './NumberInput';
import { fn } from '@storybook/test';

const meta = {
  title: 'Atoms/NumberInput',
  component: NumberInput,
  parameters: {
    layout: 'centered',
    componentSubtitle: '숫자 타입을 받는 Input 컴포넌트',
  },
  tags: ['autodocs'],
  args: { onChange: fn() },
} as Meta<typeof NumberInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 'charge',
    placeholder: '금액을 입력해주세요',
    disabled: false,
    value: '',
    onChange: (value: number) => console.log(value),
  },
};
