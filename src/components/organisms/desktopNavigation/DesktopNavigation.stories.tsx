import type { Meta, StoryObj } from '@storybook/react';
import DesktopNavigation from './DesktopNavigation';

const meta = {
  title: 'Organisms/DesktopNavigation',
  component: DesktopNavigation,
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
      navigation: {
        push: () => {},
      },
    },
  },
  decorators: [
    Story => (
      <div className="w-full">
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof DesktopNavigation>;

export default meta;
type Story = StoryObj<typeof DesktopNavigation>;

export const LoggedOut: Story = {
  args: {
    isLoggedIn: false,
  },
};

export const LoggedIn: Story = {
  args: {
    isLoggedIn: true,
  },
};
