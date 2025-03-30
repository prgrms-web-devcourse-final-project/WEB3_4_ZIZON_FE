import type { Meta, StoryObj } from '@storybook/react';
import ProgressBar from './ProgressBar';

const meta: Meta<typeof ProgressBar> = {
  title: 'Atoms/ProgressBar',
  component: ProgressBar,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  decorators: [
    Story => (
      <div className="w-548">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = {
  args: {
    progress: 'default',
  },
};

export const Quarter: Story = {
  args: {
    progress: 'quarter',
  },
};

export const Half: Story = {
  args: {
    progress: 'half',
  },
};

export const ThreeQuarters: Story = {
  args: {
    progress: 'three-quarters',
  },
};

export const Done: Story = {
  args: {
    progress: 'done',
  },
};
