import type { Meta, StoryObj } from '@storybook/react';
import NumberReadability from './NumberReadability';


const meta = {
  title: 'Atoms/NumberReadability',
  component: NumberReadability,
} as Meta<typeof NumberReadability>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 3000000,
  },
};
