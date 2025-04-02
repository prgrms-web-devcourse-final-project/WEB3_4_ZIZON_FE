import type { Meta, StoryObj } from '@storybook/react';
import BannerSection from './BannerSection';

const meta: Meta<typeof BannerSection> = {
  title: 'Organisms/HomePage/BannerSection',
  component: BannerSection,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof BannerSection>;

export const Default: Story = {};
