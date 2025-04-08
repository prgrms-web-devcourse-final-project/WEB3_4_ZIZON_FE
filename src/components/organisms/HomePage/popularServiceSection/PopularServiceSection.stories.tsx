import type { Meta, StoryObj } from '@storybook/react';
import PopularServiceSection from './PopularServiceSection';

const meta: Meta<typeof PopularServiceSection> = {
  title: 'Organisms/HomePage/PopularServiceSection',
  component: PopularServiceSection,
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
type Story = StoryObj<typeof PopularServiceSection>;

export const Default: Story = {};
