import type { Meta, StoryObj } from '@storybook/react';
import RecentProjectSection from './RecentProjectSection';

const meta: Meta<typeof RecentProjectSection> = {
  title: 'Organisms/HomePage/RecentProjectSection',
  component: RecentProjectSection,
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
type Story = StoryObj<typeof RecentProjectSection>;

export const Default: Story = {};
