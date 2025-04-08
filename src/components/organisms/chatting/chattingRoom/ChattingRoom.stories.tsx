import type { Meta, StoryObj } from '@storybook/react';
import ChattingRoom from './ChattingRoom';

const meta = {
  title: 'Organisms/Chat/ChattingRoom',
  component: ChattingRoom,
  parameters: {
    layout: 'centered',
    nextRouter: {
      path: '/client/chats',
      query: { id: 'room1' },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ChattingRoom>;

export default meta;
type Story = StoryObj<typeof ChattingRoom>;

export const Default: Story = {
  args: {},
};
