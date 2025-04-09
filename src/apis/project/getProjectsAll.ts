import { APIBuilder } from '@/utils/APIBuilder';
import { CommissionListItemProps } from '@/components/molecules/commissionListItem/ComissionListItem';

interface ProjectRequestType {
  page?: number;
}

export interface ProjectType {
  id: number; // 프로젝트 ID
  title: string; // 프로젝트 제목
  summary: string; // 프로젝트 요약
  description: string; // 프로젝트 상세 설명
  region: string; // 지역 정보
  budget: number; // 예산
  deadline: string; // 마감일 (ISO 날짜 문자열)
  status: string; // 프로젝트 상태
  clientName: string; // 클라이언트 이름
  clientProfileImageUrl: string; // 클라이언트 프로필 이미지 URL
  imageUrls: string[]; // 프로젝트 이미지 URL 배열
}
export interface ProjectResponseType {
  projects: CommissionListItemProps[];
  currentPage: number;
  pageSize: number;
  hasNext: boolean;
}
export default async function getProjectsAll({
                                           page,
                                         }: ProjectRequestType): Promise<ProjectResponseType> {
  const response = await APIBuilder.get(`/projects/all`)
    .timeout(10000)
    .withCredentials(true)
    .build()
    .call<ProjectResponseType>();

  return response.data;
}
