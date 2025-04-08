import type { Meta, StoryObj } from '@storybook/react';
import RequestOfferBox from './RequestOfferBox';

const meta = {
  title: 'Molecules/ExpertDetail/RequestOfferBox',
  component: RequestOfferBox,
  parameters: {
    layout: 'centered',
    componentSubtitle: '메인페이지에서 사용되는 최근 등록된 서비스 컴포넌트',
  },
  tags: ['autodocs'],
} as Meta<typeof RequestOfferBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: '이수정',
    expertId: 'expertId',
  },
};
