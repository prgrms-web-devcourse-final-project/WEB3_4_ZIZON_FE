import type { Meta, StoryObj } from '@storybook/react';
import ExpertSubCategoryList from './ExpertSubCategoryList';
import type { Service } from '@/types/expert';
import { ExpertCategory } from '@/components/atoms/buttons/labelWithIconButton/LabelWithIconButton';

const meta = {
  title: 'Organisms/ExpertRegister/ExpertSubCategoryList',
  component: ExpertSubCategoryList,
  parameters: {
    layout: 'centered',
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: '/expert/register',
        query: {
          'expert-category': 'move',
        },
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ExpertSubCategoryList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    selectedServices: [],
    setSelectedServices: (services: Service[ExpertCategory][]) => {
      console.log('Services selected:', services);
    },
  },
};

export const MoveCategorySelected: Story = {
  args: {
    selectedServices: ['packing-moving', 'semi-packing-moving'] as Service['move'][],
    setSelectedServices: (services: Service[ExpertCategory][]) => {
      console.log('Services selected:', services);
    },
  },
};

export const FixCategorySelected: Story = {
  args: {
    selectedServices: ['appliance', 'furniture'] as Service['fix'][],
    setSelectedServices: (services: Service[ExpertCategory][]) => {
      console.log('Services selected:', services);
    },
  },
  parameters: {
    nextjs: {
      navigation: {
        query: {
          'expert-category': 'fix',
        },
      },
    },
  },
};

export const TutorCategorySelected: Story = {
  args: {
    selectedServices: ['korean', 'english'] as Service['tutor'][],
    setSelectedServices: (services: Service[ExpertCategory][]) => {
      console.log('Services selected:', services);
    },
  },
  parameters: {
    nextjs: {
      navigation: {
        query: {
          'expert-category': 'tutor',
        },
      },
    },
  },
};

export const HobbyCategorySelected: Story = {
  args: {
    selectedServices: ['cooking', 'dance'] as Service['hobby'][],
    setSelectedServices: (services: Service[ExpertCategory][]) => {
      console.log('Services selected:', services);
    },
  },
  parameters: {
    nextjs: {
      navigation: {
        query: {
          'expert-category': 'hobby',
        },
      },
    },
  },
};
