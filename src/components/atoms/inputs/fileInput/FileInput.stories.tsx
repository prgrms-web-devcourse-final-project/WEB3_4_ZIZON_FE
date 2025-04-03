import type { Meta, StoryObj } from '@storybook/react';
import FileInput from './FileInput';
import { fn } from '@storybook/test';
import React from 'react';

const meta = {
  title: 'Atoms/FileInput',
  component: FileInput,
  parameters: {
    layout: 'centered',
    componentSubtitle: '첨부파일을 받는 Input 컴포넌트',
  },
  tags: ['autodocs'],
  args: { onChange: fn() },
} as Meta<typeof FileInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: '첨부파일',
    name: 'file',
    accept: 'image/*',
  },
};
