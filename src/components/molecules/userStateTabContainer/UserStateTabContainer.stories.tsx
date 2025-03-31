import { Meta, StoryObj } from '@storybook/react';
import UserStateTabContainer from './UserStateTabContainer';

const meta = {
  title: 'Molecules/UserStateTabContainer',
  component: UserStateTabContainer,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    componentSubtitle: '마이페이지 탭',
    docs: {
      description: {
        component:
          '의뢰인 전문가 변경은 isState로 변경이 가능합니다. <br/> 현제 페이지 path에 맞는 값을 props로 내려주면 VertialTabItem이 활성화됩니다.',
      },
    },
  },
} as Meta<typeof UserStateTabContainer>;

export default meta;

type Story = StoryObj<typeof UserStateTabContainer>;

export const UserStateTabContainerTrue: Story = {
  args: {
    isState: true,
    tabManager: "myInfo"
  },
};
export const UserStateTabContainerFalse: Story = {
  args: {
    isState: false,
    tabManager: "saleProject"
  },
};