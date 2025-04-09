export type SellState = 'OPEN' | 'IN_PROGRESS' | 'CANCELLED' | 'COMPLETED';

export interface SellStateConfig {
  label: string;
  textColor: string;
}

export const sellStateConfig: Record<SellState, SellStateConfig> = {
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
