import type { Meta, StoryObj } from '@storybook/react';
import LabeledTextArea from './LabeledTextArea';

const meta = {
  title: 'Molecules/LabeledTextArea',
  component: LabeledTextArea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LabeledTextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: '작업 소요 일수',
    placeholder: '작업 소요 일수를 입력해주세요.',
    id: 'estimate-date',
    onChange: () => {},
    value: '',
  },
};
