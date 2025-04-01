import type { Meta, StoryObj } from '@storybook/react';
import ExpertInfoCard from './ExpertInfoCard';

const meta: Meta<typeof ExpertInfoCard> = {
  title: 'Molecules/ExpertInfoCard',
  component: ExpertInfoCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof ExpertInfoCard>;

export const Default: Story = {
  args: {
    infoArray: [
      { title: '이름', content: '홍길동' },
      { title: '직업', content: '개발자' },
      { title: '경력', content: '5년' },
    ],
    type: 'small',
  },
};
