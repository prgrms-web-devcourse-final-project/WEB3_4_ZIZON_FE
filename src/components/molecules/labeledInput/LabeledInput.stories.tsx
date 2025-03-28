import type { Meta, StoryObj } from '@storybook/react';
import LabeledInput from './LabeledInput';
import { fn } from '@storybook/test';
import React from 'react';
import TextButton from '@/components/atoms/textButton/TextButton';

const meta = {
  title: 'Molecules/LabeledInput',
  component: LabeledInput,
  parameters: {
    layout: 'centered',
    componentSubtitle: '라벨이 붙어있는 Input 컴포넌트',
  },
  tags: ['autodocs'],
  args: { onChange: fn() },
} as Meta<typeof LabeledInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 'title',
    placeholder: '제목을 입력해주세요',
    type: 'text',
    disabled: false,
    value: '',
    onChange: (value: string) => console.log(value),
    label: '제목',
    htmlFor: 'title',
  },
};

export const Large = () => {
  const [state, setState] = React.useState<string>('');
  return (
    <div className="w-300">
      <LabeledInput
        id="title"
        placeholder="제목을 입력해주세요"
        type="text"
        disabled={false}
        value={state}
        onChange={value => setState(value)}
        label="제목"
        htmlFor="title"
      />
    </div>
  );
};

export const WithTextButton = () => {
  const [state, setState] = React.useState<string>('수정해보세요');
  const [isDisabled, setIssDisabled] = React.useState<boolean>(true);
  return (
    <LabeledInput
      id="title"
      placeholder="제목을 입력해주세요"
      type="text"
      disabled={isDisabled}
      value={state}
      onChange={value => setState(value)}
      label="제목"
      htmlFor="title"
    >
      <div className="flex gap-4">
        <TextButton
          text={isDisabled ? '수정' : '저장'}
          onClick={() => setIssDisabled(prev => !prev)}
        />
      </div>
    </LabeledInput>
  );
};
