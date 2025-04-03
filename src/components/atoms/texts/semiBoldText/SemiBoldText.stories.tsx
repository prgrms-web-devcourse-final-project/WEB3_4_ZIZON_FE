import type { Meta, StoryObj } from '@storybook/react';
import SemiBoldText from './SemiBoldText';

const meta = {
  title: 'Atoms/Texts/SemiBoldText',
  component: SemiBoldText,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SemiBoldText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: '기본 텍스트',
  },
};

export const LargeFontSize: Story = {
  args: {
    title: '큰 글씨 텍스트',
    fontSize: 24,
  },
};

export const SmallFontSize: Story = {
  args: {
    title: '작은 글씨 텍스트',
    fontSize: 16,
  },
};
