import type { Meta, StoryObj } from '@storybook/react';
import SelectedOptionList from './SelectedOptionList';

const meta: Meta<typeof SelectedOptionList> = {
  title: 'Molecules/SelectedOptionList',
  component: SelectedOptionList,
  tags: ['autodocs'],

};

export default meta;
type Story = StoryObj<typeof SelectedOptionList>;

export const TestValue: Story = {
  args: {
    selectedOptionIndex: [
      {'과외 학생': '고등학교 1학년', '과외 형태': '개인'},
      {'과목 구분': '교과 과정 내', '선택 과목': '한국사'},
      {'희망 요일': '월요일', '희망 시간': '오전(9시-12시)'},
    ],
  },
};
export const TestValue2: Story = {
  args: {
    selectedOptionIndex: [
      {'과외 학생': '고등학교 1학년'},
    ],
  },
};