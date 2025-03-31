import type { Meta, StoryObj } from '@storybook/react';
import PopularServiceItem from './PopularServiceItem';

const meta = {
  title: 'Molecules/PopularServiceItem',
  component: PopularServiceItem,
  parameters: {
    layout: 'centered',
    componentSubtitle: '메인페이지에서 사용되는 인기 서비스 아이템 컴포넌트',
  },
  tags: ['autodocs'],
} as Meta<typeof PopularServiceItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imageSrc: '/public/images/ServiceMock.png',
    title: '빨리빨리 이사서비스',
    numberOfUsers: 12345678,
    linkTo: '/',
  },
};

export const Error: Story = {
  args: {
    imageSrc: '/public/images/Service.png',
    title: '2424 8282 이사서비스',
    numberOfUsers: 12345678,
    linkTo: '/',
  },
};
