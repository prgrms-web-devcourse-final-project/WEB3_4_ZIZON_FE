import type { Meta, StoryObj } from '@storybook/react';
import ExpertDetailForm from './ExpertDetailForm';

const meta = {
  title: 'Organisms/ExpertRegister/ExpertDetailForm',
  component: ExpertDetailForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ExpertDetailForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onSubmit: data => {
      console.log('Form submitted:', data);
    },
  },
};
