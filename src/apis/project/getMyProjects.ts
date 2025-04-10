import { APIBuilder } from '@/utils/APIBuilder';
import { MyProjectPageResponse } from '@/types/project';

interface GetMyProjectsRequestType {
  lastProjectId?: number;
  limit?: number;
}

export default async function getMyProjects({
  lastProjectId,
  limit = 10,
}: GetMyProjectsRequestType = {}): Promise<MyProjectPageResponse> {
  const params: Record<string, string | number> = { limit };

  if (lastProjectId) {
    params.lastProjectId = lastProjectId;
  }

  const response = await APIBuilder.get('/projects/my')
    .params(params)
    .timeout(10000)
    .withCredentials(true)
    .build()
    .call<MyProjectPageResponse>();

  return response.data;
}
