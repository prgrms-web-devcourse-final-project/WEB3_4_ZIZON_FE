import type { Meta, StoryObj } from '@storybook/react';
import SelectedOption from './SelectedOption';

const meta: Meta<typeof SelectedOption> = {
  title: 'Atoms/SelectedOption',
  component: SelectedOption,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div className="w-363">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof SelectedOption>;

export const LeftImpact: Story = {
  args: {
    type: 'left-impact',
    leftText: '요청 항목',
    rightText: '선택된 옵션',
  },
};

export const RightImpact: Story = {
  args: {
    type: 'right-impact',
    leftText: '요청 항목',
    rightText: '선택된 옵션',
  },
};

export const PriceSmall: Story = {
  args: {
    type: 'price-small',
    leftText: '서비스 금액',
    rightText: '150,000원',
  },
};

export const PriceLarge: Story = {
  args: {
    type: 'price-large',
    leftText: '최종 결제 금액',
    rightText: '150,000원',
  },
};
