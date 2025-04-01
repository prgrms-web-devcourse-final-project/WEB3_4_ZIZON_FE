import type { Meta, StoryObj } from '@storybook/react';
import Banner from './Banner';

const meta = {
  title: 'Atoms/Banner',
  component: Banner,
  parameters: {
    layout: 'centered',
    componentSubtitle: '이미지가 고정된 배너 컴포넌트',
  },
  tags: ['autodocs'],
} as Meta<typeof Banner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: '원하는 전문가를 \n 쉽고 빠르게 찾아보세요!',
    subTitle: '전문가와의 상담을 통해 더 나은 결정을 내릴 수 있습니다.',
  },
};
