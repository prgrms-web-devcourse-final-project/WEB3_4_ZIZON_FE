import { Meta, StoryObj } from '@storybook/react';
import LikeTag from './LikeTag';

const meta = {
  title: 'atoms/LikeTag',
  component: LikeTag,
  tags: ['autodocs'],
} as Meta<typeof LikeTag>;

export default meta;

type Story = StoryObj<typeof LikeTag>;

export const LikeOff: Story = {
  args: {
    type: 'like-off',
    count: 2000
  },
};

export const LikeOn: Story = {
  args: {
    type: 'like-on',
    count: 2123
  },
};
