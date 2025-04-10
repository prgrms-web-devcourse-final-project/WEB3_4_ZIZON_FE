import { APIBuilder } from '@/utils/APIBuilder';

interface Expert {
  name: string;
  categoryName: string;
  careerYears: number;
  introduction: string;
  profileImage: string;
  expertId: number;
  mainCategoryId: number;
}

export type SortedExperts = Record<string, Expert[]>;

export const getSortedExpertsByCategory = async (): Promise<SortedExperts> => {
  try {
    const response = await APIBuilder.get('/experts').build().call<Expert[]>();
    const experts: Expert[] = response.data;

    const sortedMap: SortedExperts = {};
    const allTopExperts: Expert[] = [];

    for (const expert of experts) {
      const { categoryName } = expert;
      if (!sortedMap[categoryName]) {
        sortedMap[categoryName] = [];
      }
      sortedMap[categoryName].push(expert);
    }

    // 각 카테고리 안의 전문가 리스트를 경력순으로 정렬
    for (const category in sortedMap) {
      sortedMap[category].sort((a, b) => b.careerYears - a.careerYears);

      // 경력 1위 전문가를 '전체' 키에 추가
      if (sortedMap[category][0]) {
        allTopExperts.push(sortedMap[category][0]);
      }
    }

    sortedMap['전체'] = allTopExperts;

    return sortedMap;
  } catch (error) {
    console.error('전문가 데이터 정렬 중 오류 발생:', error);
    return {};
  }
};