import type { Meta, StoryObj } from '@storybook/react';
import CardIcon from './CardIcon';

const meta: Meta<typeof CardIcon> = {
  title: 'Atoms/CardIcon',
  component: CardIcon,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CardIcon>;

export const SpannerOn: Story = {
  args: {
    category: 'spanner',
    isOn: true,
  },
};

export const SpannerOff: Story = {
  args: {
    category: 'spanner',
    isOn: false,
  },
};

export const HomeOn: Story = {
  args: {
    category: 'home',
    isOn: true,
  },
};

export const HomeOff: Story = {
  args: {
    category: 'home',
    isOn: false,
  },
};

export const PalleteOn: Story = {
  args: {
    category: 'pallete',
    isOn: true,
  },
};

export const PalleteOff: Story = {
  args: {
    category: 'pallete',
    isOn: false,
  },
};

export const PencilOn: Story = {
  args: {
    category: 'pencil',
    isOn: true,
  },
};

export const PencilOff: Story = {
  args: {
    category: 'pencil',
    isOn: false,
  },
};

export const WomenOn: Story = {
  args: {
    category: 'women',
    isOn: true,
  },
};

export const WomenOff: Story = {
  args: {
    category: 'women',
    isOn: false,
  },
};
