import { APIBuilder } from '@/utils/APIBuilder';

interface ProjectIdRequest {
  id: number;
}
export interface ProjectIdResponse {
  categoryId: number;
  title: string;
  summary: string;
  description: string;
  region: string;
  budget: number;
  deadline: string;
  status: 'OPEN' | 'IN_PROGRESS' | 'COMPLETED' | 'CANCELLED';
  clientName: string;
  clientProfileImageUrl: string;
  imageUrls: string[];
}

export const getProjectId = async ({ id }: ProjectIdRequest) => {
  const response = await APIBuilder.get(`/projects/${id}`)
    .headers({
      'Content-Type': 'application/json',
    })
    .timeout(10000)
    .withCredentials(true)
    .build()
    .call<ProjectIdResponse>();

  return response.data;
};
