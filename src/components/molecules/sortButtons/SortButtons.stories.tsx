import type { Meta, StoryObj } from '@storybook/react';
import SortButtons, { SortType } from './SortButtons';
import { useState } from 'react';

const meta: Meta<typeof SortButtons> = {
  title: 'Molecules/SortButtons',
  component: SortButtons,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const Default = () => {
  const [selectedSort, setSelectedSort] = useState<SortType>('latest');

  return (
    <SortButtons
      selectedSort={selectedSort}
      onSortChange={(sort: SortType) => {
        setSelectedSort(sort);
      }}
    />
  );
};
