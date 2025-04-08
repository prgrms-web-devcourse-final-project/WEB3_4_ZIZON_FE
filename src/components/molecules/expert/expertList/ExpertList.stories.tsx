import type { Meta, StoryObj } from '@storybook/react';
import ExpertList from './ExpertList';
import ExpertListItem, { ExpertListItemProps } from '../expertListItem/ExpertListItem';

const meta = {
  title: 'Molecules/Expert/ExpertList',
  component: ExpertList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ExpertList>;

export default meta;
type Story = StoryObj<typeof ExpertList>;

export const EXPERT_LIST: Array<ExpertListItemProps> = [
  {
    expert_id: '1',
    name: '이상훈',
    profile_image: '',
    introduction: '단순한 이사가 아닌, 진짜 이사가 어떤 것인지 보여드립니다.',
    career_years: 13,
    skill: '이사/청소',
  },
  {
    expert_id: '2',
    name: '이상훈',
    profile_image: '',
    introduction: '단순한 이사가 아닌, 진짜 이사가 어떤 것인지 보여드립니다.',
    career_years: 13,
    skill: '이사/청소',
  },
  {
    expert_id: '3',
    name: '이상훈',
    profile_image: '',
    introduction: '단순한 이사가 아닌, 진짜 이사가 어떤 것인지 보여드립니다.',
    career_years: 13,
    skill: '이사/청소',
  },
  {
    expert_id: '4',
    name: '이상훈',
    profile_image: '',
    introduction: '단순한 이사가 아닌, 진짜 이사가 어떤 것인지 보여드립니다.',
    career_years: 13,
    skill: '이사/청소',
  },
  {
    expert_id: '5',
    name: '이상훈',
    profile_image: '',
    introduction: '단순한 이사가 아닌, 진짜 이사가 어떤 것인지 보여드립니다.',
    career_years: 13,
    skill: '이사/청소',
  },
  {
    expert_id: '6',
    name: '이상훈',
    profile_image: '',
    introduction: '단순한 이사가 아닌, 진짜 이사가 어떤 것인지 보여드립니다.',
    career_years: 13,
    skill: '이사/청소',
  },
  {
    expert_id: '7',
    name: '이상훈',
    profile_image: '',
    introduction: '단순한 이사가 아닌, 진짜 이사가 어떤 것인지 보여드립니다.',
    career_years: 13,
    skill: '이사/청소',
  },
];

export const Default = () => (
  <ExpertList>
    {EXPERT_LIST.map(expert => (
      <ExpertListItem {...expert} key={expert.expert_id} />
    ))}
  </ExpertList>
);
