export const PROJECT_CATEGORY = {
  1000: '이사/청소',
  2000: '설치/수리',
  3000: '과외',
  4000: '취미/자기계발',
};
export type ProjectCategoryIdType = keyof typeof PROJECT_CATEGORY;
export type ProjectCategoryValueType = (typeof PROJECT_CATEGORY)[ProjectCategoryIdType];

export const CAREER_CATEGORY = {
  junior: '0~5년',
  senior: '6~10년',
  expert: '11년 이상',
};
export type CareerCategoryIdType = keyof typeof CAREER_CATEGORY;
export type CareerCategoryValueType = (typeof CAREER_CATEGORY)[CareerCategoryIdType];

export const STORE_CATEGORY = {
  5001: 'IT/Digital',
  5002: '기타',
  6001: '취미/생활',
  6002: '전문 프로그램',
  6003: '외주',
  6004: '기타',
};
