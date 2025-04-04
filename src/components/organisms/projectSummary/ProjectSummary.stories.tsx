import type { Meta, StoryObj } from '@storybook/react';
import ProjectSummary from './ProjectSummary';

const meta = {
  title: 'Organisms/ProjectSummary',
  component: ProjectSummary,
  parameters: {
    layout: 'centered',
    componentSubtitle: '의뢰서 요약',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ProjectSummary>;

export default meta;
type Story = StoryObj<typeof ProjectSummary>;

const DummyProjectSummary = {
  clientProfile: '/images/DefaultImage.png',
  clientName: '홍길동',
  location: '서울특별시 강남구 역삼동',
  projectName: '과외',
  description: {
    '어떤 도움이 필요한가요': '과외',
    '과외생은 어디에 속해있나요': '고등학교 1학년',
    '어떤 교과과목 인가요': '한국사',
  },
};
export const Default: Story = {
  args: { ...DummyProjectSummary },
};
