import type { Meta, StoryObj } from '@storybook/react';
import ExpertTemplate from './ExpertTemplate';

const meta = {
  title: 'Template/ExpertTemplate',
  component: ExpertTemplate,
  parameters: {
    layout: 'centered',
    componentSubtitle: '',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ExpertTemplate>;

export default meta;
type Story = StoryObj<typeof ExpertTemplate>;

export const Default: Story = {
  args: {},
};
