import type { Meta, StoryObj } from '@storybook/react';
import StoreCategorySection from './StoreCategorySection';

const meta: Meta<typeof StoreCategorySection> = {
  title: 'Organisms/HomePage/StoreCategorySection',
  component: StoreCategorySection,
  parameters: {
    layout: 'padded',
  },
  decorators: [
    Story => (
      <div className="w-1920 px-320">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof StoreCategorySection>;

export const Default: Story = {};
