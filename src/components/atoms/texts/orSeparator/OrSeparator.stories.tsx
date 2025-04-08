import type { Meta, StoryObj } from '@storybook/react';
import OrSeparator from './OrSeparator';

const meta = {
  title: 'Atoms/Texts/OrSeparator',
  component: OrSeparator,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof OrSeparator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
