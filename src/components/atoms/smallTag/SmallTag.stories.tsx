import { Meta, StoryObj } from '@storybook/react';
import SmallTag from './SmallTag';

const meta = {
  title: 'atoms/SmallTag',
  component: SmallTag,
  tags: ['autodocs'],
} as Meta<typeof SmallTag>;

export default meta;

type Story = StoryObj<typeof SmallTag>;

export const Default: Story = {
  args: {
    text: '키워드',
    theme: ""
  },
};

export const LightBlue: Story = {
  args: {
    text: '키워드',
    theme: "lightBlue"
  },
};

export const LightGreen: Story = {
  args: {
    text: '키워드',
    theme: "lightGreen"
  },
};

export const LightOrange: Story = {
  args: {
    text: '키워드',
    theme: "lightOrange"
  },
};

export const LightPurple: Story = {
  args: {
    text: '키워드',
    theme: "lightPurple"
  },
};

export const Blue: Story = {
  args: {
    text: '키워드',
    theme: "blue"
  },
};

export const Dark: Story = {
  args: {
    text: '키워드',
    theme: "dark"
  },
};

export const Grey: Story = {
  args: {
    text: '키워드',
    theme: "grey"
  },
};
