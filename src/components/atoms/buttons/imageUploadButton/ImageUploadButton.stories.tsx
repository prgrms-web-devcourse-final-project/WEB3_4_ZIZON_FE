import type { Meta, StoryObj } from '@storybook/react';
import ImageUploadButton from './ImageUploadButton';

const meta: Meta<typeof ImageUploadButton> = {
  title: 'Atoms/ImageUploadButton',
  component: ImageUploadButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof ImageUploadButton>;

export const Default: Story = {
  args: {
    onImageUpload: (file: File) => {
      console.log('Uploaded file:', file.name);
    },
  },
};
