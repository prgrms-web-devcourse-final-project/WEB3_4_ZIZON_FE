import type { Meta, StoryObj } from '@storybook/react';
import StandardButton from './StandardButton';
import { fn } from '@storybook/test';

const meta = {
  title: 'Atoms/StandardButton',
  component: StandardButton,
  parameters: {
    layout: 'centered',
    // 추가
    componentSubtitle: '기본 버튼 컴포넌트',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} as Meta<typeof StandardButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'Button',
    onClick: () => alert('버튼 클릭'),
    disabled: false,
  },
};

export const LightBlue: Story = {
  args: {
    text: 'Button',
    disabled: false,
    state: 'light-blue',
    onClick: () => alert('버튼 클릭'),
  },
};

export const Dark: Story = {
  args: {
    text: 'Button',
    disabled: false,
    state: 'dark',
    onClick: () => alert('버튼 클릭'),
  },
};

export const Blue: Story = {
  args: {
    text: 'Button',
    disabled: false,
    state: 'blue',
    onClick: () => alert('버튼 클릭'),
  },
};

export const BlueOutline: Story = {
  args: {
    text: 'Button',
    disabled: false,
    state: 'blue-outline',
    onClick: () => alert('버튼 클릭'),
  },
};

export const Gray: Story = {
  args: {
    text: 'Button',
    disabled: false,
    state: 'gray',
    onClick: () => alert('버튼 클릭'),
  },
};

export const White: Story = {
  args: {
    text: 'Button',
    disabled: false,
    state: 'white',
    onClick: () => alert('버튼 클릭'),
  },
};

export const Big = () => (
  <div className="w-300">
    <StandardButton
      text="거래하기"
      state="blue"
      disabled={false}
      onClick={() => alert('버튼 클릭')}
    />
  </div>
);
