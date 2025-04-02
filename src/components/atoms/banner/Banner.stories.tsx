import type { Meta, StoryObj } from '@storybook/react';
import Banner from './Banner';

const meta = {
  title: 'Atoms/Banner',
  component: Banner,
  parameters: {
    layout: 'centered',
    componentSubtitle: '이미지가 고정된 배너 컴포넌트',
  },
  tags: ['autodocs'],
} as Meta<typeof Banner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
