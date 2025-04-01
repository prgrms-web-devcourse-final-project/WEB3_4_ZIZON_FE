import { Meta, StoryObj } from '@storybook/react';
import LabelWithIconButton from './LabelWithIconButton';

const meta = {
  title: 'atoms/LabelWithIconButton',
  component: LabelWithIconButton,
  tags: ['autodocs'],
} as Meta<typeof LabelWithIconButton>;

export default meta;

type Story = StoryObj<typeof LabelWithIconButton>;

export const MoveClear: Story = {
  args: {
    onClick: () => alert("active 상태로 변경"),
    value: "이사",
    state: 'default'
  },
};

export const Setting: Story = {
  args: {
    onClick: () => alert("active 상태로 변경"),
    value: "설치",
    state: 'active'
  },
};

export const Lesson: Story = {
  args: {
    onClick: () => alert("active 상태로 변경"),
    value: "과외",
    state: 'default'
  },
};

export const Hobby: Story = {
  args: {
    onClick: () => alert("active 상태로 변경"),
    value: "취미",
    state: 'default'
  },
};

