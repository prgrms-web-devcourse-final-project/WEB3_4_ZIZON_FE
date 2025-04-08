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
    onClick: () => alert('active 상태로 변경'),
    value: 'move',
    state: 'default',
  },
};

export const Setting: Story = {
  args: {
    onClick: () => alert('active 상태로 변경'),
    value: 'fix',
    state: 'active',
  },
};

export const Lesson: Story = {
  args: {
    onClick: () => alert('active 상태로 변경'),
    value: 'tutor',
    state: 'default',
  },
};

export const Hobby: Story = {
  args: {
    onClick: () => alert('active 상태로 변경'),
    value: 'hobby',
    state: 'default',
  },
};
