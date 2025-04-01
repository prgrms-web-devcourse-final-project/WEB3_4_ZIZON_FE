import type { Meta, StoryObj } from '@storybook/react';
import ExpertStepFooterButton from '@/components/atoms/buttons/expertStepFooterButton/ExpertStepFooterButton';

const meta = {
  title: 'Atoms/ExpertStepFooterButton',
  component: ExpertStepFooterButton,
  tags: ['autodocs'],
} as Meta<typeof ExpertStepFooterButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NextExpertStepFooter: Story = {
  args: {
    state: "next",
    onClickBefore: () => alert("이전 버튼"),
    onClickNext: () => alert("다음 버튼"),
  },
};

export const RegisterExpertStepFooter: Story = {
  args: {
    state: "register",
    onClickBefore: () => alert("이전 버튼"),
    onClickRegister: () => alert("등록 버튼"),
  },
};
