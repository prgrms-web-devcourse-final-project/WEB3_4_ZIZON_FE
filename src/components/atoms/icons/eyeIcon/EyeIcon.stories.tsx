import type { Meta, StoryObj } from '@storybook/react';
import EyeIcon from './EyeIcon';

const meta = {
  title: 'Atoms/Icons/EyeIcon',
  component: EyeIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isVisible: {
      control: 'boolean',
      description:
        '아이콘의 상태를 결정합니다. true일 때는 눈이 닫힌 아이콘, false일 때는 눈이 열린 아이콘이 표시됩니다.',
    },
  },
} satisfies Meta<typeof EyeIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Visible: Story = {
  args: {
    isVisible: true,
  },
};

export const Hidden: Story = {
  args: {
    isVisible: false,
  },
};
