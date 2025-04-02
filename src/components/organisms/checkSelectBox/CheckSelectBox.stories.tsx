import type { Meta, StoryObj } from '@storybook/react';
import CheckSelectBox from './CheckSelectBox';

const meta: Meta<typeof CheckSelectBox> = {
  title: 'Organisms/CheckSelectBox',
  component: CheckSelectBox,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof CheckSelectBox>;

export const Type1: Story = {
  args: {
    title: '설치 및 수리의 대상이 무엇인가요?',
    checkSelectBoxProps: [
      {label: '가전제품', caption: '냉장고, 세탁기, 에어컨 등', checked: true , onChange:() => alert('')},
      {label: '가구', caption: '소파, 침대, 옷장 등', checked: false , onChange:() => alert('')},
      {label: '생활용품', caption: '전등, 커튼 등', checked: false , onChange:() => alert('')},
      {label: '집', caption: '문고리, 창문, 환풍기, 주방 후드 등', checked: false , onChange:() => alert('')},
    ],
  },
};
export const Type2: Story = {
  args: {
    title: '어떤 서비스를 원하시나요?',
    checkSelectBoxProps: [
      {label: '국어', caption: '', checked: true , onChange:() => alert('')},
      {label: '영어', caption: '', checked: false , onChange:() => alert('')},
      {label: '수학', caption: '', checked: false , onChange:() => alert('')},
      {label: '한국사', caption: '', checked: false , onChange:() => alert('')},
    ],
  },
};