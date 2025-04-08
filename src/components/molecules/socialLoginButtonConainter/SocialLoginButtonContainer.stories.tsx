import type { Meta, StoryObj } from '@storybook/react';
import SocialLoginButtonConainter from './SocialLoginButtonConainter';

const meta = {
  title: 'Molecules/SocialLoginButtonContainer',
  component: SocialLoginButtonConainter,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SocialLoginButtonConainter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
