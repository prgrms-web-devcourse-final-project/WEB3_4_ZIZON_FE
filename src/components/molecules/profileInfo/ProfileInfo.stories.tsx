import { Meta, StoryObj } from '@storybook/react';
import ProfileInfo from './ProfileInfo';

const meta = {
  title: 'Molecules/ProfileInfo',
  component: ProfileInfo,
  tags: ['autodocs'],
} as Meta<typeof ProfileInfo>;

export default meta;

type Story = StoryObj<typeof ProfileInfo>;

export const ProfileInfoDefault:Story = {
  args: {
    profileImage: "https://placehold.co/400",
    userName: "홍길동",
    isState: false,
    onChangeState: () => alert("전문가 전환")
  }
}
export const ProfileInfoExpert:Story = {
  args: {
    profileImage: "https://placehold.co/400",
    userName: "홍길동",
    isState: true,
    certificationBadgeText: "이사/청소",
    onChangeState: () => alert("의뢰인 전환")
  }
}
