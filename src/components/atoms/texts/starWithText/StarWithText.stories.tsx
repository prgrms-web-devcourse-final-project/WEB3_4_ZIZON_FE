import type { Meta, StoryObj } from '@storybook/react';
import StarWithText from './StarWithText';

const meta: Meta<typeof StarWithText> = {
  title: 'Atoms/StarWithText',
  component: StarWithText,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof StarWithText>;

export const Default: Story = {
  args: {
    rating: 3,
    reviewCount: 15,
  },
};

export const FullRating: Story = {
  args: {
    rating: 5,
    reviewCount: 42,
  },
};

export const WithoutReviewCount: Story = {
  args: {
    rating: 0,
    reviewCount: 0,
  },
};
