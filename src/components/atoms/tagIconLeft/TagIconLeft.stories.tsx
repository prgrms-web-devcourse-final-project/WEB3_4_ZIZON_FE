import { Meta, StoryObj } from '@storybook/react';
import TagIconLeft from './TagIconLeft';

const meta = {
  title: 'atoms/TagIconLeft',
  component: TagIconLeft,
  tags: ['autodocs'],
} as Meta<typeof TagIconLeft>;

export default meta;

type Story = StoryObj<typeof TagIconLeft>;

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
