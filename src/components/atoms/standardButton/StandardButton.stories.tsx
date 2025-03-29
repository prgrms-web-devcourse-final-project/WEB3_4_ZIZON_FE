import type { Meta, StoryObj } from '@storybook/react';
import StandardButton from './StandardButton';
import { fn } from '@storybook/test';

const meta = {
  title: 'Atoms/StandardButton',
  component: StandardButton,
  parameters: {
    layout: 'centered',
    componentSubtitle: '기본 버튼 컴포넌트',
    docs: {
      description: {
        component:
          '기본적으로 컨텐츠 자체의 너비를 가집니다. <br/> size props에 `full`을 전달하면 부모너비를 채우는 넓은 버튼을 만들 수 있습니다.',
      },
    },
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} as Meta<typeof StandardButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'Button',
    onClick: () => alert('버튼 클릭'),
    disabled: false,
  },
};

export const LightBlue: Story = {
  args: {
    text: 'Button',
    disabled: false,
    state: 'light-blue',
    onClick: () => alert('버튼 클릭'),
  },
};

export const Dark: Story = {
  args: {
    text: 'Button',
    disabled: false,
    state: 'dark',
    onClick: () => alert('버튼 클릭'),
  },
};

export const Blue: Story = {
  args: {
    text: 'Button',
    disabled: false,
    state: 'blue',
    onClick: () => alert('버튼 클릭'),
  },
};

export const BlueOutline: Story = {
  args: {
    text: 'Button',
    disabled: false,
    state: 'blue-outline',
    onClick: () => alert('버튼 클릭'),
  },
};

export const Gray: Story = {
  args: {
    text: 'Button',
    disabled: false,
    state: 'gray',
    onClick: () => alert('버튼 클릭'),
  },
};

export const White: Story = {
  args: {
    text: 'Button',
    disabled: false,
    state: 'white',
    onClick: () => alert('버튼 클릭'),
  },
};

export const Big = () => (
  <div className="w-300">
    <StandardButton
      text="거래하기"
      size="full"
      state="blue"
      disabled={false}
      onClick={() => alert('버튼 클릭')}
    />
  </div>
);
