import { Meta, StoryObj } from '@storybook/react';
import MediumTag from './MediumTag';

const meta = {
  title: 'atoms/MediumTag',
  component: MediumTag,
  tags: ['autodocs'],
} as Meta<typeof MediumTag>;

export default meta;

type Story = StoryObj<typeof MediumTag>;

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
