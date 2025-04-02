import type { Meta, StoryObj } from '@storybook/react';
import IconSelectBox from './IconSelectBox';

const meta: Meta<typeof IconSelectBox> = {
  title: 'Organisms/IconSelectBox',
  component: IconSelectBox,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof IconSelectBox>;

export const stepper1: Story = {
  args: {
    title: '어떤 도움이 필요하신가요?',
    iconSelectBoxProps: [
      {type:"left", title:"설치 및 수리", subtitle: "가전제품부터 가구까지 손쉽게 옮기고 고쳐요", category: 'spanner', isOn: true},
      {type:"left", title:"과외", subtitle: "원하는 과목을 원하는 시간에 전문가와 공부해요", category: 'pencil', isOn: false},
      {type:"left", title:"이사 및 청소", subtitle: "입주 청소부터 이사 마무리까지 전문가의 손길로", category: 'home', isOn: false},
      {type:"left", title:"취미생활", subtitle: "댄스, 음악, 미술을 전문가와 함께 더 즐겁게 배워요", category: 'pallete', isOn: false}
    ],
    text: '다음',
    onClick: () => alert("click")
  },
};
export const move1: Story = {
  args: {
    title: '어떤 서비스를 원하시나요?',
    iconSelectBoxProps: [
      {type:"left", title:"이사", subtitle: "가전제품부터 가구까지 손쉽게 옮기고 고쳐요", category: 'home', isOn: true},
      {type:"left", title:"청소", subtitle: "원하는 과목을 원하는 시간에 전문가와 공부해요", category: 'pencil', isOn: false},
    ],
    text: '다음',
    onClick: () => alert("click")
  },
};