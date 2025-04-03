import type { Meta, StoryObj } from '@storybook/react';
import ChattingList from './ChattingList';
import { ChattingRoomType } from '@/types/chat';

const meta = {
  title: 'Organisms/Chat/ChattingList',
  component: ChattingList,
  parameters: {
    layout: 'centered',
    nextRouter: {
      path: '/client/chats',
      query: { id: 'room1' },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ChattingList>;

export default meta;
type Story = StoryObj<typeof ChattingList>;

const chattingRoomDummyData: ChattingRoomType[] = [
  {
    id: 'room1',
    client_id: 'client1',
    expert_id: 'expert1',
    created_at: '2025-04-01T10:00:00Z',
    lasst_message: '안녕하세요, 상담 요청드립니다.',
    last_message_time: '2025-04-01T10:05:00Z',
    expert_name: '이상훈',
    expert_profile_image: '/images/DefaultImage.png',
  },
  {
    id: 'room2',
    client_id: 'client2',
    expert_id: 'expert2',
    created_at: '2025-04-02T11:00:00Z',
    lasst_message: '견적서를 확인해주세요.',
    last_message_time: '2025-04-02T11:15:00Z',
    expert_name: '김민수',
    expert_profile_image: '/images/DefaultImage.png',
  },
  {
    id: 'room3',
    client_id: 'client3',
    expert_id: 'expert3',
    created_at: '2025-04-03T12:00:00Z',
    lasst_message: '감사합니다. 좋은 하루 되세요.',
    last_message_time: '2025-04-03T12:30:00Z',
    expert_name: '박지훈',
    expert_profile_image: '/images/DefaultImage.png',
  },
  {
    id: 'room4',
    client_id: 'client4',
    expert_id: 'expert4',
    created_at: '2025-04-04T13:00:00Z',
    lasst_message: '추가 문의사항이 있습니다.',
    last_message_time: '2025-04-04T13:20:00Z',
    expert_name: '최유리',
    expert_profile_image: '/images/DefaultImage.png',
  },
];

export const Default: Story = {
  args: {
    chatList: [...chattingRoomDummyData],
  },
};
