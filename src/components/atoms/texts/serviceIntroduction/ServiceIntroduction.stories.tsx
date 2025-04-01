import type { Meta, StoryObj } from '@storybook/react';
import ServiceIntroduction from './ServiceIntroduction';

const meta = {
  title: 'Atoms/ServiceIntroduction',
  component: ServiceIntroduction,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ServiceIntroduction>;

export default meta;
type Story = StoryObj<typeof ServiceIntroduction>;

export const Default: Story = {
  args: {
    title: '서비스 소개',
    content: '전문가와 함께하는 맞춤형 서비스를 제공합니다.',
  },
};

export const ExpertIntroduction: Story = {
  args: {
    title: '전문가 소개',
    content: `대학입시·논술·국영수 과외 전문가 이수정입니다.
    저는 15년 이상의 경력을 바탕으로, 대학입시와 논술, 국어, 영어, 수학 과외를 전문으로 지도하고 있습니다. 학생들의 개별적인 학습 스타일과 수준에 맞춘 맞춤형 수업을 제공하며, 그들의 학습 목표를 달성할 수 있도록 최선을 다하고 있습니다.`,
  },
};

export const ProductIntroduction: Story = {
  args: {
    title: '상품 정보',
    content: `구불구불 휘어진 수형의 해송 소나무로 동양의 미를 한껏 뽐내는 미니 소나무입니다.
학명은 [ Pinus thunbergii PARL ]이며, 우리나라를 대표하는 나무로 상록 침엽수입니다.
해안 절벽에서 자생하는 소나무로 곰처럼 크고 우직한 수형 때문에 곰솔 또는 해송이라고도 불립니다.
소나무의 피톤치드는 해충, 곰팡이, 병균 등으로부터 자신을 보호하기 위한 천연 항생 물질입니다.
피톤치드는 사람에게 마음을 편안하게 상쾌한 기분이 들도록 해주어 스트레스 완화는 물론 새집증후군, 알레르기, 아토피 등에 좋은 작용을 합니다.`,
  },
};
