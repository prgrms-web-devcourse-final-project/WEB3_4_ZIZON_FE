import type { Meta, StoryObj } from '@storybook/react';
import SelectedCard from './SelectedCard';

const meta: Meta<typeof SelectedCard> = {
  title: 'Molecules/SelectedCard',
  component: SelectedCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof SelectedCard>;

export const LeftUnchecked: Story = {
  args: {
    type: 'left',
    checked: false,
    title: '헤더',
    subtitle: '컨텐츠',
    category: 'spanner',
  },
};

export const LeftChecked: Story = {
  args: {
    type: 'left',
    checked: true,
    title: '헤더',
    subtitle: '컨텐츠',
    category: 'spanner',
  },
};

export const CenterUnchecked: Story = {
  args: {
    type: 'center',
    checked: false,
    title: '헤더',
    subtitle: '컨텐츠',
    category: 'spanner',
  },
};

export const CenterChecked: Story = {
  args: {
    type: 'center',
    checked: true,
    title: '헤더',
    subtitle: '컨텐츠',
    category: 'spanner',
  },
};
