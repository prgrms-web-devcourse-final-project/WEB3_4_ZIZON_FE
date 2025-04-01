import type { Meta, StoryObj } from '@storybook/react';
import VerticalTabItem from './VerticalTabItem';
import { fn } from '@storybook/test';
import React from 'react';

const meta = {
  title: 'Atoms/VerticalTabItem',
  component: VerticalTabItem,
  parameters: {
    layout: 'centered',
    componentSubtitle: '하나의 Vertical Tab 요소',
    docs: {
      description: {
        component:
          '여러개의 VerticalTabItem이 세로로 모여 Tab 을 구성합니다.<br/> mypage와 shopping 페이지에서 사용되며 size prop을 통해 크기를 명시할 수 있습니다.<br /> mypage에서는 small 타입의 탭, shopping페이지에서는 large 타입의 탭을 사용합니다.',
      },
    },
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} as Meta<typeof VerticalTabItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'mypage',
    isFocused: false,
    text: '마이페이지',
    onClick: (name: string) => alert(`${name} 탭이 클릭되었습니다.`),
    size: 'small',
  },
};

export const focused: Story = {
  args: {
    name: 'mypage',
    isFocused: true,
    text: '마이페이지',
    onClick: (name: string) => alert(`${name} 탭이 클릭되었습니다.`),
    size: 'small',
  },
};
