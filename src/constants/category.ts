export const PROJECT_CATEGORY = {
  1000: '이사/청소',
  2000: '설치/수리',
  3000: '과외',
  4000: '취미/자기계발',
} as const;
export type ProjectCategoryIdType = keyof typeof PROJECT_CATEGORY;
