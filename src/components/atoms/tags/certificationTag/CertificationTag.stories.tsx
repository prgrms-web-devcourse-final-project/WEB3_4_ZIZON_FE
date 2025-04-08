import { Meta, StoryObj } from '@storybook/react';
import CertificationTag from './CertificationTag';

const meta = {
  title: 'atoms/CertificationTag',
  component: CertificationTag,
  tags: ['autodocs'],
} as Meta<typeof CertificationTag>;

export default meta;

type Story = StoryObj<typeof CertificationTag>;

export const Default: Story = {
  args: {
    text: '이사/청소',
  },
};