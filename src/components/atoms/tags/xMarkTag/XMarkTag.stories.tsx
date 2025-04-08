import { Meta, StoryObj } from '@storybook/react';
import XMarkTag from './XMarkTag';

const meta = {
  title: 'atoms/XMarkTag',
  component: XMarkTag,
  tags: ['autodocs'],
} as Meta<typeof XMarkTag>;

export default meta;

type Story = StoryObj<typeof XMarkTag>;

export const Default: Story = {
  args: {
    text: "키워드",
    color: "default",
  },
};

export const Gray: Story = {
  args: {
    text: "키워드",
    color: "gray",
  },
};

export const Blue: Story = {
  args: {
    text: "키워드",
    color: "blue",
  },
};

export const Dark: Story = {
  args: {
    text: "키워드",
    color: "dark",
  },
};


