import type { Meta, StoryObj } from '@storybook/react';
import DopdangLogo from './DopdangLogo';

const meta = {
  title: 'Atoms/DopdangLogo',
  component: DopdangLogo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DopdangLogo>;

export default meta;
type Story = StoryObj<typeof DopdangLogo>;

export const Default: Story = {};
