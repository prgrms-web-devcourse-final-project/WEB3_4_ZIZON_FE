import type { Meta, StoryObj } from '@storybook/react';
import TextButton from './TextButton';
import { fn } from '@storybook/test';

const meta = {
  title: 'Atoms/TextButton',
  component: TextButton,
  parameters: {
    layout: 'centered',
    componentSubtitle: '배경이 없는 문자형식의 버튼 컴포넌트',
    docs: {
      description: {
        component: `input 컴포넌트와 조합되어 사용됩니다.`,
      },
    },
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} as Meta<typeof TextButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: '수정',
    onClick: () => alert('버튼 클릭'),
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    text: "수정",
    disabled: true
  }
};
