import type { Meta, StoryObj } from '@storybook/react';
import DigitalContentUploadField from './DigitalContentUploadField';
import { useState } from 'react';
import React from 'react';

const meta = {
  title: 'Molecules/DigitalContentUploadField',
  component: DigitalContentUploadField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: '업로드 필드의 레이블 텍스트',
    },
    accept: {
      control: 'text',
      description: '허용되는 파일 확장자',
    },
    onFileUpload: {
      action: 'uploaded',
      description: '파일 업로드 시 실행될 함수',
    },
  },
  decorators: [
    Story => (
      <div className="w-full max-w-md">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof DigitalContentUploadField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: '디지털 상품 파일',
    onFileUpload: (file: File | null) => {
      console.log('파일 변경:', file ? file.name : '파일 삭제됨');
    },
  },
};

export const CustomAccept: Story = {
  args: {
    label: 'PDF 파일',
    accept: '.pdf',
    onFileUpload: (file: File | null) => {
      console.log('파일 변경:', file ? file.name : '파일 삭제됨');
    },
  },
};

// 상태를 유지하는 스토리 예제
interface WithStateComponentProps {
  label: string;
  accept?: string;
  onFileUpload: (file: File | null) => void;
}

const WithStateComponent = (props: WithStateComponentProps) => {
  const [file, setFile] = useState<File | null>(null);

  return (
    <div className="flex flex-col gap-16">
      <DigitalContentUploadField {...props} onFileUpload={setFile} />
      <div className="p-12 border border-black5 rounded-sm bg-black1">
        <p className="text-14 text-black10">현재 선택된 파일: {file ? file.name : '없음'}</p>
      </div>
    </div>
  );
};

export const WithState: Story = {
  args: {
    label: '파일 업로드 (상태 유지)',
    onFileUpload: () => {},
  },
  render: args => <WithStateComponent {...args} />,
};
