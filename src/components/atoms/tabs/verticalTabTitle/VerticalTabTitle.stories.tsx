import type { Meta, StoryObj } from '@storybook/react';
import VerticalTabTitle from './VerticalTabTitle';
import { fn } from '@storybook/test';
import React from 'react';

const meta = {
  title: 'Atoms/VerticalTabTitle',
  component: VerticalTabTitle,
  parameters: {
    layout: 'centered',
    componentSubtitle: '하나의 Tab Group의 이름',
    docs: {
      description: {
        component:
          'VerticalTabTitle은 TabGroup의 이름을 나타내는 컴포넌트입니다.<br /> 여러개의 VerticalTabItem와 사용됩니다.<br /> mypage에서는 small 타입의 탭, shopping페이지에서는 large 타입의 탭을 사용합니다.',
      },
    },
  },
  tags: ['autodocs'],
} as Meta<typeof VerticalTabTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: '제목',
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    text: '제목',
    size: 'large',
  },
};
