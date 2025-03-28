import { Meta, StoryObj } from '@storybook/react';
import CertificationBadge from './CertificationBadge';

const meta = {
  title: 'atoms/CertificationBadge',
  component: CertificationBadge,
  tags: ['autodocs'],
} as Meta<typeof CertificationBadge>;

export default meta;

type Story = StoryObj<typeof CertificationBadge>;

export const Default: Story = {
  args: {
    text: '이사/청소',
  },
};