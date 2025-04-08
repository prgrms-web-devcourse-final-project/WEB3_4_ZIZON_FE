import type { Meta, StoryObj } from '@storybook/react';
import StarDefault from './StarDefault';

const meta = {
  title: 'Atoms/StarDefault',
  component: StarDefault,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof StarDefault>;

export default meta;
type Story = StoryObj<typeof StarDefault>;

export const Default: Story = {
  args: {
    rating: 4.5,
  },
};

export const LowRating: Story = {
  args: {
    rating: 2.1,
  },
};

export const NoReviews: Story = {
  args: {
    rating: 0,
  },
};
