import { APIBuilder } from '@/utils/APIBuilder';

interface ProjectRequestType {
  page?: number;
  size?: number;
  sort?: string[];
}

export interface ProjectType {
  id: number; // 프로젝트 ID
  categoryId: number; // 카테고리 ID
  title: string; // 프로젝트 제목
  summary: string; // 프로젝트 요약
  region: string; // 지역 정보
  budget: number; // 예산
  status: string; // 프로젝트 상태
  deadline: string; // 마감일 (ISO 날짜 문자열)
  clientName: string; // 클라이언트 이름
  clientProfileImageUrl: string; // 클라이언트 프로필 이미지 URL
  thumbnailImageUrl: string; // 썸네일 이미지 URL
}
export interface ProjectResponseType {
  projects: ProjectType[];
  currentPage: number;
  pageSize: number;
  hasNext: boolean;
}
export default async function getProjectsAll({
  page = 0,
  size = 10,
  sort = [],
}: ProjectRequestType): Promise<ProjectResponseType> {
  const params: Record<string, string | number> = {
    page,
    size,
    sort: sort.join(','),
  };
  const response = await APIBuilder.get(`/projects/all`)
    .params(params)
    .timeout(10000)
    .build()
    .call<ProjectResponseType>();

  return response.data;
}
