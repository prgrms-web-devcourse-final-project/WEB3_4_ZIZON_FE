import type { Meta, StoryObj } from '@storybook/react';
import FindEmailOrPassword from './FindEmailOrPassword';

const meta = {
  title: 'Atoms/Texts/FindEmailOrPassword',
  component: FindEmailOrPassword,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FindEmailOrPassword>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
