import type { Meta, StoryObj } from '@storybook/react';
import ContractModal from './ContractModal';
import { useState } from 'react';
import { serialize } from 'v8';
import ModalContainer from './ModalContainer';

const meta = {
  title: 'Molecules/ContractModal',
  component: ContractModal,
  parameters: {
    layout: 'centered',
    componentSubtitle: '계약서 작성 모달 ',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ContractModal>;

export default meta;
type Story = StoryObj<typeof ContractModal>;

export const Default = () => {
  const [open, setOpen] = useState(false);
  const offerData = {
    expertProfileImage: '/images/DefaultImage.png',
    expertName: '이상훈',
    expertCategory: '이사/청소',
    charge: 1000000,
  };
  return (
    <div>
      <button onClick={() => setOpen(prev => !prev)}> 모달 열기</button>
      <ModalContainer open={open}>
        <ContractModal
          onClose={() => setOpen(prev => !prev)}
          offerData={offerData}
          onSubmit={formdata => alert('제출 완료!')}
        />
      </ModalContainer>
    </div>
  );
};
