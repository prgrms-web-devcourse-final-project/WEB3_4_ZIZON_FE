import type { Meta, StoryObj } from '@storybook/react';
import RequestInfoItem from './RequestInfoItem';

const meta = {
  title: 'Atoms/RequestInfoItem',
  component: RequestInfoItem,
  parameters: {
    layout: 'centered',
    componentSubtitle: '요청서의 정보를 표시하는 컴포넌트',
  },
  tags: ['autodocs'],
} as Meta<typeof RequestInfoItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    question: '어떤 서비스를 원하시나요?',
    answer: '일반이사',
    type: 'small',
  },
};

export const Large: Story = {
  args: {
    question: "어떤 서비스를 원하시나요?",
    answer: "일반이사",
    type: "large"
  }
};
