import { Meta, StoryObj } from '@storybook/react';
import TagIconRight from './TagIconRight';

const meta = {
  title: 'atoms/TagIconRight',
  component: TagIconRight,
  tags: ['autodocs'],
} as Meta<typeof TagIconRight>;

export default meta;

type Story = StoryObj<typeof TagIconRight>;

export const Default: Story = {
  args: {
    text: "키워드",
    color: "",
    onClickXMark: (isState: boolean) => !isState,
  },
};

export const Gray: Story = {
  args: {
    text: "키워드",
    color: "gray",
    onClickXMark: (isState: boolean) => !isState,
  },
};

export const Blue: Story = {
  args: {
    text: "키워드",
    color: "blue",
    onClickXMark: (isState: boolean) => !isState,
  },
};

export const Dark: Story = {
  args: {
    text: "키워드",
    color: "dark",
    onClickXMark: (isState: boolean) => !isState,
  },
};


