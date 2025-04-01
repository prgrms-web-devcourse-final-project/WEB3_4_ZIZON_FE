import type { Meta, StoryObj } from '@storybook/react';
import ProgressBar, { ProgressStep } from './ProgressBar';

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
    step: ProgressStep.STEP1,
  },
};

export const Quarter: Story = {
  args: {
    step: ProgressStep.STEP2,
  },
};

export const Half: Story = {
  args: {
    step: ProgressStep.STEP3,
  },
};

export const ThreeQuarters: Story = {
  args: {
    step: ProgressStep.STEP4,
  },
};

export const Done: Story = {
  args: {
    step: ProgressStep.STEP5,
  },
};
