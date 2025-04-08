import type { Meta, StoryObj } from '@storybook/react';
import TextInputWithTitle from './TextInputWithTitle';

const meta: Meta<typeof TextInputWithTitle> = {
  title: 'Organisms/TextInputWithTitle',
  component: TextInputWithTitle,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TextInputWithTitle>;

export const Type1: Story = {
  args: {
    title: '설치 및 수리의 대상이 무엇인가요?',
    id: 'test',
    placeholder: '예) 수능 대비 한국사 과외 선생님 구합니다.',
  },
};