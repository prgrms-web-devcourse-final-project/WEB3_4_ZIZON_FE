export const CHATTING_STATE = [
  {
    state: 'all',
    name: '전체',
  },
  {
    state: 'unread',
    name: '안읽음',
  },
  {
    state: 'waiting',
    name: '거래중',
  },
  {
    state: 'favorite',
    name: '즐겨찾기',
  },
] as const;
// 'state' 값만 묶은 타입 생성
export type ChattingStateType = (typeof CHATTING_STATE)[number]['state'];
