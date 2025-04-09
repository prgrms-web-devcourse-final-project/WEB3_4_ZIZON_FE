import { APIBuilder } from '@/utils/APIBuilder';
import { cookies } from 'next/headers';

export interface ProjectRequestType {
  projectId: string;
}

export interface ProjectResponseType {
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
  emails: string;
}

export default async function getProject({
  projectId,
}: ProjectRequestType): Promise<ProjectResponseType> {
  const cookieStore = await cookies();
  const token = cookieStore.get('accessToken')?.value;
  if (!token) {
    console.error('Access token not found in cookies');
  }

  const response = await APIBuilder.get(`/projects/${projectId}`)
    .headers({
      Cookie: `accessToken=${token}`,
      'Content-Type': 'application/json',
    })
    .withCredentials(true)
    .timeout(10000)
    .build()
    .call<ProjectResponseType>();

  return response.data;
}
