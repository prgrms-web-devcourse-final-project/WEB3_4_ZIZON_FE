import type { Meta, StoryObj } from '@storybook/react';
import PopularExpertSection from './PopularExpertSection';

const meta: Meta<typeof PopularExpertSection> = {
  title: 'Organisms/HomePage/PopularExpertSection',
  component: PopularExpertSection,
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
type Story = StoryObj<typeof PopularExpertSection>;

export const Default: Story = {};
