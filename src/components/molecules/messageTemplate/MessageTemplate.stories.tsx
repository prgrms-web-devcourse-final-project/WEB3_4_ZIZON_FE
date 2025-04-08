import { Meta, StoryObj } from '@storybook/react';
import MessageTemplate from './MessageTemplate';

const meta = {
  title: 'Molecules/MessageTemplate',
  component: MessageTemplate,
  tags: ['autodocs'],
} as Meta<typeof MessageTemplate>;

export default meta;

type Story = StoryObj<typeof MessageTemplate>;

export const ProfileInfoDefault: Story = {
  args: {
    dateTime: new Date('2025-03-15 13:12:58'),
    message:
      '셀수있는 수량의 순서있는 열거 또는 어떤 순서를 따르는 요소들의 모음을 튜플(tuple)이라고 합니다. n개의 요소를 가진 튜플을 n-튜플(n-tuple)이라고 하며, 다음과 같이 표현할 수 있습니다.',
    tag: 'get',
    senderProfileImage: 'https://placehold.co/400',
  },
};
