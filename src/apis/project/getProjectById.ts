import { APIBuilder } from '@/utils/APIBuilder';
import { Project } from '@/types/project';

/**
 * 프로젝트 ID로 단건 조회하는 함수
 * @param projectId 프로젝트 ID
 * @returns 프로젝트 정보
 */
export const getProjectById = async (projectId: number): Promise<Project> => {
  try {
    const response = await APIBuilder.get(`/projects/${projectId}`)
      .timeout(10000)
      .build()
      .call<Project>();

    return response.data;
  } catch (error) {
    console.error('프로젝트 조회 실패:', error);
    throw error;
  }
};
