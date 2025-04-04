import type { Meta, StoryObj } from '@storybook/react';
import EditableField from './EditableField';
import StandardButton from '@/components/atoms/buttons/standardButton/StandardButton';

const meta = {
  title: 'Molecules/EditableField',
  component: EditableField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    id: {
      control: 'text',
      description: '입력 필드의 고유 식별자',
    },
    label: {
      control: 'text',
      description: '입력 필드의 레이블 텍스트',
    },
    value: {
      control: 'text',
      description: '입력 필드의 현재 값',
    },
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'tel'],
      description: '입력 필드의 타입',
    },
    placeholder: {
      control: 'text',
      description: '입력 필드의 플레이스홀더 텍스트',
    },
    isEditable: {
      control: 'boolean',
      description: '입력 필드의 편집 가능 여부',
    },
    disabled: {
      control: 'boolean',
      description: '입력 필드의 비활성화 여부',
    },
    onEditClick: {
      action: 'clicked',
      description: '수정/완료 버튼 클릭 시 실행될 함수',
    },
    onChange: {
      action: 'changed',
      description: '입력값 변경 시 실행될 함수',
    },
  },
  decorators: [
    Story => (
      <div className="w-full">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof EditableField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 'name',
    label: '이름',
    value: '홍길동',
    placeholder: '이름을 입력하세요',
    isEditable: true,
    onChange: (value: string) => console.log('이름 변경:', value),
  },
};

export const Disabled: Story = {
  args: {
    id: 'email',
    label: '이메일',
    value: 'hong@example.com',
    placeholder: '이메일을 입력하세요',
    isEditable: false,
    disabled: true,
    onChange: (value: string) => console.log('이메일 변경:', value),
  },
};

export const Password: Story = {
  args: {
    id: 'password',
    label: '비밀번호',
    value: '********',
    type: 'password',
    placeholder: '비밀번호를 입력하세요',
    isEditable: true,
    onChange: (value: string) => console.log('비밀번호 변경:', value),
  },
};

export const WithCustomButton: Story = {
  args: {
    id: 'phone',
    label: '전화번호',
    value: '010-1234-5678',
    type: 'tel',
    placeholder: '전화번호를 입력하세요',
    isEditable: true,
    onChange: (value: string) => console.log('전화번호 변경:', value),
    ButtonComponent: (
      <StandardButton text="저장" state="dark" onClick={() => {}} disabled={false} />
    ),
  },
};
