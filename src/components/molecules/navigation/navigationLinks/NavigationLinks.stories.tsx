import type { Meta, StoryObj } from '@storybook/react';
import NavigationLinks from './NavigationLinks';

const meta = {
  title: 'Molecules/NavigationLinks',
  component: NavigationLinks,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NavigationLinks>;

export default meta;
type Story = StoryObj<typeof NavigationLinks>;

export const Default: Story = {};
