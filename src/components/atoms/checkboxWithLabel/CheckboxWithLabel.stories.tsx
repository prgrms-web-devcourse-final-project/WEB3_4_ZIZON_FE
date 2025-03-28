import type { Meta, StoryObj } from '@storybook/react';
import CheckboxWithLabel from './CheckboxWithLabel';
import { fn } from '@storybook/test';

const meta = {
  title: 'Atoms/CheckboxWithLabel',
  component: CheckboxWithLabel,
  parameters: {
    layout: 'centered',
    componentSubtitle: '라벨이 있는 체크박스 컴포넌트',
  },
  tags: ['autodocs'],
  args: { onChange: fn() },
} as Meta<typeof CheckboxWithLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: '라벨',
    caption: '캡션이 이곳에 들어가야 합니다.',
    checked: false,
    onChange: (checked: boolean) => console.log('체크박스 상태:', checked),
  },
};

export const Checked: Story = {
  args: {
    label: '라벨',
    caption: '캡션이 이곳에 들어가야 합니다.',
    checked: true,
    onChange: (checked: boolean) => console.log('체크박스 상태:', checked),
  },
};
