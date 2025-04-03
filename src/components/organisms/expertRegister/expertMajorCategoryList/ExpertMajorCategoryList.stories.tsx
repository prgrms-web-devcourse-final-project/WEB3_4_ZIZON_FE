import type { Meta, StoryObj } from '@storybook/react';
import ExpertMajorCategoryList from './ExpertMajorCategoryList';
import { ExpertCategory } from '@/components/atoms/buttons/labelWithIconButton/LabelWithIconButton';

const meta = {
  title: 'Organisms/ExpertRegister/ExpertMajorCategoryList',
  component: ExpertMajorCategoryList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ExpertMajorCategoryList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    selectedValue: null,
    setSelectedValue: (name: string, value: ExpertCategory | null) => {
      console.log('Category selected:', { name, value });
    },
  },
};

export const WithSelectedCategory: Story = {
  args: {
    selectedValue: 'move',
    setSelectedValue: (name: string, value: ExpertCategory | null) => {
      console.log('Category selected:', { name, value });
    },
  },
};
