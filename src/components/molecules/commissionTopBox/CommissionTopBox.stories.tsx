import { Meta, StoryObj } from '@storybook/react';
import CommissionTopBox from './CommissionTopBox';

const meta = {
  title: 'Molecules/CommissionTopBox',
  component: CommissionTopBox,
  tags: ['autodocs'],
} as Meta<typeof CommissionTopBox>;

export default meta;

type Story = StoryObj<typeof CommissionTopBox>;

export const Default: Story = {
  args: {
    title: "1. 요청 분류",
    progressStep: 1,
    isBefore: false,
  },
};

export const Step2: Story = {
  args: {
    title: "2. 요청 분류",
    progressStep: 2,
    isBefore: true,
    onClickBefore: () => alert("step2")
  },
};

export const Step3: Story = {
  args: {
    title: "3. 요청 분류",
    progressStep: 3,
    isBefore: true,
    onClickBefore: () => alert("step2")
  },
};

export const Step4: Story = {
  args: {
    title: "4. 요청 분류",
    progressStep: 4,
    isBefore: true,
    onClickBefore: () => alert("step2")
  },
};

export const Step5: Story = {
  args: {
    title: "5. 요청 분류",
    progressStep: 5,
    isBefore: true,
    onClickBefore: () => alert("step2")
  },
};