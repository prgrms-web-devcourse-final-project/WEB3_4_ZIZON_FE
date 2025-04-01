import type { Meta, StoryObj } from '@storybook/react';
import StarTag from './StarTag';

const meta: Meta<typeof StarTag> = {
  title: 'Atoms/StarTag',
  component: StarTag,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof StarTag>;

export const Default: Story = {
  args: {
    rating: 4.5,
    reviewCount: 128,
  },
};

export const PerfectScore: Story = {
  args: {
    rating: 5.0,
    reviewCount: 128,
  },
};

export const LowScore: Story = {
  args: {
    rating: 2.5,
    reviewCount: 128,
  },
};
