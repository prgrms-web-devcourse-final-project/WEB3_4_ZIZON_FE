import type { Meta, StoryObj } from '@storybook/react';
import DateInput from './DateInput';
import { fn } from '@storybook/test';
import React from 'react';

const meta = {
  title: 'Atoms/DateInput',
  component: DateInput,
  parameters: {
    layout: 'centered',
    componentSubtitle: '숫자 타입을 받는 Input 컴포넌트',
  },
  tags: ['autodocs'],
  args: { onChange: fn() },
} as Meta<typeof DateInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 'end-date',
    placeholder: '날짜을 입력해주세요',
    disabled: false,
    value: '',
    onChange: (value: string) => console.log(value),
  },
};

export const ComponentWithState = () => {
  const [value, setValue] = React.useState<string>('');
  return (
    <div className="w-752">
      <DateInput
        id="chatting"
        disabled={false}
        value={value}
        onChange={(value: string) => setValue(value)}
        error={false}
        color="white"
      />
    </div>
  );
};
