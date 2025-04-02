import type { Meta, StoryObj } from '@storybook/react';
import ChargeInfo from './ChargeInfo';

const meta = {
  title: 'Molecules/Order/ChargeInfo',
  component: ChargeInfo,
  parameters: {
    layout: 'centered',
    componentSubtitle: '결제 금액 정보 ',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ChargeInfo>;

export default meta;
type Story = StoryObj<typeof ChargeInfo>;

export const Default = () => {
  return (
    <div className="w-646">
      <ChargeInfo serviceFee={10000} totalPrice={8000} />
    </div>
  );
};
