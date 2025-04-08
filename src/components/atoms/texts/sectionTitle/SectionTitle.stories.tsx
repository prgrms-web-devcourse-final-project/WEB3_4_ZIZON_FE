import type { Meta, StoryObj } from '@storybook/react';
import SectionTitle from './SectionTitle';

const meta = {
  title: 'Atoms/Texts/SectionTitle',
  component: SectionTitle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SectionTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: '섹션 제목',
  },
};

export const WithSubtitle: Story = {
  args: {
    title: '섹션 제목',
    subtitle: '섹션 부제목입니다.',
  },
};

export const LongTitle: Story = {
  args: {
    title: '매우 긴 섹션 제목입니다. 이렇게 길어질 수 있습니다.',
    subtitle: '매우 긴 섹션 부제목입니다. 이렇게 길어질 수 있습니다.',
  },
};
