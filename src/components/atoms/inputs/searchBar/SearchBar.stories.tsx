import type { Meta, StoryObj } from '@storybook/react';
import SearchBar from './SearchBar';
import React from 'react';
import { useState, useEffect } from 'react';
import useDebounce from '@/hooks/useDebounce';

const meta = {
  title: 'Atoms/SearchBar',
  component: SearchBar,
  parameters: {
    layout: 'centered',
    componentSubtitle: 'type에 따라 너비가 고정된 검색창 컴포넌트',
    docs: {
      description: {
        component:
          '**default** 기본 검색창 \n\n**rounded** 채팅페이지에서 사용되는 검색창 \n\n**large** 메인페이지에서 사용되는 검색창',
      },
    },
  },
  tags: ['autodocs'],
} as Meta<typeof SearchBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: 'default',
    placedholder: '검색어를 입력해주세요',
    onChange: (value: string) => console.log(value),
    value: '',
  },
};

export const Rounded: Story = {
  args: {
    type: 'rounded',
    placedholder: '검색어를 입력해주세요',
    onChange: (value: string) => console.log(value),
    value: '',
  },
};

export const Large: Story = {
  args: {
    type: 'large',
    placedholder: '검색어를 입력해주세요',
    onChange: (value: string) => console.log(value),
    value: '',
  },
};

export const Edit = () => {
  const [value, setValue] = React.useState<string>('');

  return (
    <SearchBar
      type="default"
      placedholder="검색어를 입력해주세요"
      onChange={(value: string) => setValue(value)}
      value={value}
    />
  );
};
export const DebouncedSearchBar = () => {
  const [value, setValue] = React.useState<string>('');
  const debouncedValue = useDebounce(value, 500);

  useEffect(() => {
    if (debouncedValue) {
      console.log('Debounced Value:', debouncedValue);
    }
  }, [debouncedValue]);

  return (
    <div>
      <SearchBar
        type="default"
        placedholder="검색어를 입력해주세요"
        onChange={(value: string) => setValue(value)}
        value={value}
      />
      <p>Debounced Value: {debouncedValue}</p>
    </div>
  );
};

