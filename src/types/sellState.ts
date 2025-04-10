import { ContractStatus } from './contract';
import { ProjectStatus } from './project';

export interface SellStateConfig {
  label: string;
  textColor: string;
}

export const sellStateConfig: Record<ProjectStatus | ContractStatus, SellStateConfig> = {
  PENDING: {
    label: '대기중',
    textColor: 'text-primary4',
  },
  DISPUTED: {
    label: '분쟁중',
    textColor: 'text-redWarning',
  },
  OPEN: {
    label: '공고중',
    textColor: 'text-primary4',
  },
  IN_PROGRESS: {
    label: '진행중',
    textColor: 'text-primary4',
  },
  CANCELLED: {
    label: '취소•문제 해결',
    textColor: 'text-redWarning',
  },
  COMPLETED: {
    label: '구매 확정',
    textColor: 'text-black6',
  },
} as const;
