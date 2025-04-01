import type { Meta, StoryObj } from '@storybook/react';
import LargeButton from './LoginButton';
import { fn } from '@storybook/test';

const meta = {
  title: 'Atoms/LoginButton',
  component: LargeButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} as Meta<typeof LargeButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: 'default',
    onClick: () => alert('버튼 클릭'),
    disabled: false,
  },
};
