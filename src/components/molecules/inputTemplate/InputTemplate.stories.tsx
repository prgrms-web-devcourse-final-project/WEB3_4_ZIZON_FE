import type { Meta, StoryObj } from '@storybook/react';
import InputTemplate from './InputTemplate';
import React from 'react';
import TextInput from '@/components/atoms/inputs/textInput/TextInput';
import StandardButton from '@/components/atoms/buttons/standardButton/StandardButton';
import InputLabel from '@/components/atoms/texts/inputLabel/InputLabel';
import TextButton from '@/components/atoms/buttons/textButton/TextButton';

const meta = {
  title: 'molecules/InputTemplate',
  component: InputTemplate,
  parameters: {
    layout: 'centered',
    componentSubtitle: 'input, label, button, text-button이 조합될 수 있는 템플릿 컴포넌트',
  },
  tags: ['autodocs'],
} as Meta<typeof InputTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    InputComponent: (
      <TextInput
        id="title"
        onChange={() => {}}
        placeholder="제목을 입력해주세요"
        type="text"
        value=""
      />
    ),
    ButtonComponent: <StandardButton onClick={() => {}} text="Button" disabled={false} />,
    LabelComponent: <InputLabel label="라벨" htmlFor="title" />,
    TextButtonComponent: <TextButton onClick={() => {}} text="수정" />,
  },
};

export const NonEditableInput: Story = {
  args: {
    InputComponent: (
      <TextInput
        id="title"
        onChange={() => {}}
        placeholder="제목을 입력해주세요"
        type="text"
        value=""
        isEditable={false}
      />
    ),
    LabelComponent: <InputLabel label="라벨" htmlFor="title" />,
  },
};
