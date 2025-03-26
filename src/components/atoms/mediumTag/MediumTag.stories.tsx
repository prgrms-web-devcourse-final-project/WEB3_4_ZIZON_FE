import { Meta, StoryObj } from '@storybook/react';
import MediumTag from './MediumTag';

const meta = {
  title: 'atoms/MediumTag',
  component: MediumTag,
  tags: ['autodocs'],
  // argTypes: {
  //   text: {
  //     control: {
  //       type: 'select',
  //       options: ['이사/청소', '설치/수리', '취미/자기계발', '과외', '기타'],
  //     },
  //   },
  // },
} as  Meta<typeof MediumTag>;

export default meta;

type Story = StoryObj<typeof MediumTag>;

export const Default: Story = {
  args: {
    text: '이사/청소',
  },
};

export const InstallationRepair: Story = {
  args: {
    text: '설치/수리',
  },
};

export const Hobby: Story = {
  args: {
    text: '취미/자기계발',
  },
};

export const Tutoring: Story = {
  args: {
    text: '과외',
  },
};

export const Other: Story = {
  args: {
    text: '기타',
  },
};
