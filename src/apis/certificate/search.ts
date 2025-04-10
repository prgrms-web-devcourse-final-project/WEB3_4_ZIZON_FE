import { APIBuilder } from '@/utils/APIBuilder';

export interface Certificate {
  id: number;
  name: string;
}

/**
 * 자격증 검색 API
 * @param name 검색할 자격증 이름
 * @returns 검색된 자격증 목록
 */
export const searchCertificates = async (name: string): Promise<Certificate[]> => {
  const response = await APIBuilder.get('/certificates/search')
    .params({ name })
    .build()
    .call<Certificate[]>();

  return response.data;
};
