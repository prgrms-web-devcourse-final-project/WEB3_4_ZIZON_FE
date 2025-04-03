import type { Meta, StoryObj } from '@storybook/react';
import IconCenterSelectBox from './IconCenterSelectBox';

const meta: Meta<typeof IconCenterSelectBox> = {
  title: 'Organisms/IconCenterSelectBox',
  component: IconCenterSelectBox,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof IconCenterSelectBox>;

export const GenderType1: Story = {
  args: {
    title: '과외생의 성별은 무엇인가요?',
    selectedCardProps: [
      {type: 'center',
        isOn: true,
        title: '남성',
        category: 'men',},
      {type: 'center',
        isOn: false,
        title: '여성',
        category: 'women',}
    ]
  },
};

export const GenderType2: Story = {
  args: {
    title: '선호하는 전문가의 성별이 있나요?',
    selectedCardProps: [
      {type: 'center',
        isOn: true,
        title: '남성',
        category: 'men',},
      {type: 'center',
        isOn: false,
        title: '여성',
        category: 'women',},
      {type: 'center',
        isOn: false,
        title: '무관',
        category: 'question',}
    ]
  },
};
