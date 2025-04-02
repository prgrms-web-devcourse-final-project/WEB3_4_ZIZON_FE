import type { Meta, StoryObj } from '@storybook/react';
import AuthButtons from './AuthButtons';


const meta = {
  title: 'Molecules/AuthButtons',
  component: AuthButtons,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AuthButtons>;

export default meta;
type Story = StoryObj<typeof AuthButtons>;

export const LoggedOut: Story = {
  args: {
    isLoggedIn: false,
    onLoginClick: () => console.log('로그인 버튼 클릭'),
  },
};

export const LoggedIn: Story = {
  args: {
    isLoggedIn: true,
  },
};
