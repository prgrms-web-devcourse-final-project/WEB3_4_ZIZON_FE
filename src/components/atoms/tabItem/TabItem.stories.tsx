import type { Meta, StoryObj } from '@storybook/react';
import TabItem from './TabItem';
import { fn } from '@storybook/test';
import React from 'react';

const meta = {
  title: 'Atoms/TabItem',
  component: TabItem,
  parameters: {
    layout: 'centered',
    componentSubtitle: '하나의 Tab 요소',
    docs: {
      description: {
        component: '여러개의 TabItem이 모여 Tab 을 구성합니다.',
      },
    },
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} as Meta<typeof TabItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: '고수 정보',
    onClick: () => alert('TabItem Clicked'),
    isFocused: false,
    name: 'info',
  },
};

export const TabExample = () => {
  const [currTab, setCurrTab] = React.useState('info');
  const tabArray = [
    { name: 'info', text: '고수 정보' },
    { name: 'review', text: '리뷰' },
    { name: 'portfolio', text: '포트폴리오' },
  ];

  return (
    <ul className="flex gap-32 border-b-[1px] border-b-black4 w-500">
      {tabArray.map(item => (
        <TabItem
          key={item.name}
          name={item.name}
          text={item.text}
          isFocused={item.name === currTab}
          onClick={name => setCurrTab(name)}
        />
      ))}
    </ul>
  );
};
