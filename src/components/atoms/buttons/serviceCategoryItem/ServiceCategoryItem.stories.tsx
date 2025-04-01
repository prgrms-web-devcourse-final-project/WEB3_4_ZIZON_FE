import type { Meta, StoryObj } from '@storybook/react';
import ServiceCategoryItem from './ServiceCategoryItem';

const meta = {
  title: 'Atoms/ServiceCategoryItem',
  component: ServiceCategoryItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta<typeof ServiceCategoryItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: 'Moving',
  },
};
