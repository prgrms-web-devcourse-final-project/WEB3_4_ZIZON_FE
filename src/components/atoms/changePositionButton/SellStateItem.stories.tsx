import { Meta, StoryObj } from '@storybook/react';
import ChangePositionButton from '@/components/atoms/changePositionButton/ChangePositionButton';

const meta = {
  title: 'atoms/ChangePositionButton',
  component: ChangePositionButton,
  tags: ['autodocs'],
} as Meta<typeof ChangePositionButton>;

export default meta;

type Story = StoryObj<typeof ChangePositionButton>;

export const ExpertChangeButton: Story = {
  args: {
    isState: true,
    onChangeState: (isState: boolean) => !isState
  },
};

export const CommissionButton: Story = {
  args: {
    isState: false,
    onChangeState: (isState: boolean) => !isState
  },
};
