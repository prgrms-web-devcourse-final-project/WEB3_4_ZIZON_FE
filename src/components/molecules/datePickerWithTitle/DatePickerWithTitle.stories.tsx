import type { Meta, StoryObj } from '@storybook/react';
import DatePickerWithTitle from './DatePickerWithTitle';

const meta: Meta<typeof DatePickerWithTitle> = {
  title: 'Molecules/DatePickerWithTitle',
  component: DatePickerWithTitle,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof DatePickerWithTitle>;

export const Default: Story = {
  args: {
    title: '이사 날짜를 선택해주세요',
  },
};