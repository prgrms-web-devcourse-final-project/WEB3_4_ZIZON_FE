export type ExpertCategory = 'move' | 'fix' | 'tutor' | 'hobby';

export type ExpertCategoryName = '이사/청소' | '설치/수리' | '과외' | '취미생활';

export type Service = {
  move:
    | 'packing-moving'
    | 'semi-packing-moving'
    | 'general-moving'
    | 'storage-moving'
    | 'moving-cleaning'
    | 'move-in-cleaning'
    | 'remodeling-cleaning'
    | 'business-cleaning';
  fix: 'appliance' | 'furniture' | 'household' | 'house';
  tutor:
    | 'korean'
    | 'english'
    | 'math'
    | 'korean-history'
    | 'research'
    | 'essay'
    | 'physical'
    | 'coding';
  hobby: 'cooking' | 'dance' | 'sports' | 'music' | 'art';
};

export const SERVICES: Record<ExpertCategory, { value: Service[ExpertCategory]; label: string }[]> =
  {
    move: [
      { value: 'packing-moving', label: '포장 이사' },
      { value: 'semi-packing-moving', label: '반포장 이사' },
      { value: 'general-moving', label: '일반 이사' },
      { value: 'storage-moving', label: '보관 이사' },
      { value: 'moving-cleaning', label: '이사 청소' },
      { value: 'move-in-cleaning', label: '입주 청소' },
      { value: 'remodeling-cleaning', label: '리모델링 후 청소' },
      { value: 'business-cleaning', label: '사업장 청소' },
    ],
    fix: [
      { value: 'appliance', label: '가전제품' },
      { value: 'furniture', label: '가구' },
      { value: 'household', label: '생활용품' },
      { value: 'house', label: '집' },
    ],
    tutor: [
      { value: 'korean', label: '국어' },
      { value: 'english', label: '영어' },
      { value: 'math', label: '수학' },
      { value: 'korean-history', label: '한국사' },
      { value: 'research', label: '탐구' },
      { value: 'essay', label: '논술' },
      { value: 'physical', label: '체육' },
      { value: 'coding', label: '코딩' },
    ],
    hobby: [
      { value: 'cooking', label: '요리' },
      { value: 'dance', label: '댄스' },
      { value: 'sports', label: '스포츠' },
      { value: 'music', label: '음악' },
      { value: 'art', label: '미술' },
    ],
  };
