import type { Meta, StoryObj } from '@storybook/react';
import ModalContainer from './ModalContainer';
import { useState } from 'react';

const meta = {
  title: 'Molecules/ModalContainer',
  component: ModalContainer,
  parameters: {
    layout: 'centered',
    componentSubtitle: '모달 컨테이너',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ModalContainer>;

export default meta;
type Story = StoryObj<typeof ModalContainer>;

const ModalContent = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className="w-500 h-500 bg-white flex justify-center items-center">
      <h1 className="text-24 font-bold">모달 내용</h1>
      <button className="w-100 h-50 bg-blue-500 text-white rounded" onClick={onClick}>
        닫기
      </button>
    </div>
  );
};

export const Default = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen(prev => !prev)}> 모달 열기</button>
      <ModalContainer open={open}>
        <ModalContent onClick={() => setOpen(prev => !prev)} />
      </ModalContainer>
    </div>
  );
};
