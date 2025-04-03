import type { Meta, StoryObj } from '@storybook/react';
import ExpertRegisterTemplete from './ExpertRegisterTemplete';

const meta = {
  title: 'Templates/ExpertRegister/ExpertRegisterTemplete',
  component: ExpertRegisterTemplete,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ExpertRegisterTemplete>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
