export type SellState = 'inProgress' | 'waiting' | 'cancelled' | 'completed';

export interface SellStateConfig {
  label: string;
  textColor: string;
}

export const sellStateConfig: Record<SellState, SellStateConfig> = {
  inProgress: {
    label: '진행중',
    textColor: 'text-primary4',
  },
  waiting: {
    label: '작업 완료 대기',
    textColor: 'text-greenComplete',
  },
  cancelled: {
    label: '취소•문제 해결',
    textColor: 'text-redWarning',
  },
  completed: {
    label: '구매 확정',
    textColor: 'text-black6',
  },
} as const;
