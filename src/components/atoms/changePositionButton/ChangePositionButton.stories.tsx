import { Meta, StoryObj } from '@storybook/react';
import ChangePositionButton from '@/components/atoms/changePositionButton/ChangePositionButton';

const meta = {
  title: 'atoms/ChangePositionButton',
  component: ChangePositionButton,
  tags: ['autodocs'],
} as Meta<typeof ChangePositionButton>;

export default meta;

type Story = StoryObj<typeof ChangePositionButton>;

export const ExpertButton: Story = {
  args: {
    isState: true,
    onChangeState: () => alert("전문가 전환")
  },
};

export const CommissionButton: Story = {
  args: {
    isState: false,
    onChangeState: () => alert("의뢰인 전환")
  },
};
