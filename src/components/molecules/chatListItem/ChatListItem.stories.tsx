import type { Meta, StoryObj } from '@storybook/react';
import ChatListItem from './ChatListItem';

const meta = {
  title: 'Molecules/ChatListItem',
  component: ChatListItem,
  parameters: {
    layout: 'centered',
    componentSubtitle: '채팅방 목록을 이루는 각각의 아이템 컴포넌트',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ChatListItem>;

export default meta;
type Story = StoryObj<typeof ChatListItem>;

export const Default: Story = {
  args: {
    chatRoomId: '12wer',
    recentChatDate: new Date('2025-10-01'),
    text: '안녕하세요 전문가님 \n 제안드리는 내용이 있습니다 \n사진 확인 부탁드립니다.감사합니다.',
    userName: '압도적인까치',
    userProfile: 'public/images/DefaultImage.png',
    isSelected: false,
    onClick: (chatRoomId: string) => alert(`채팅방 ${chatRoomId} 클릭`),
  },
};

export const Selected: Story = {
  args: {
    chatRoomId: '12wer',
    recentChatDate: new Date('2025-10-01'),
    text: '안녕하세요 전문가님 \n 제안드리는 내용이 있습니다 \n사진 확인 부탁드립니다.감사합니다.',
    userName: '압도적인까치',
    userProfile: 'public/images/DefaultImage.png',
    isSelected: true,
  },
};
