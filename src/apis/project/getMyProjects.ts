import { APIBuilder } from '@/utils/APIBuilder';
import { MyProjectPageResponse } from '@/types/project';

interface GetMyProjectsRequestType {
  page?: number;
  size?: number;
  sort?: string[];
}

export default async function getMyProjects({
  page = 0,
  size = 10,
  sort = [],
}: GetMyProjectsRequestType = {}): Promise<MyProjectPageResponse> {
  const params: Record<string, string | number> = {
    page,
    size,
    sort: sort.join(','),
  };

  const response = await APIBuilder.get('/projects/my')
    .params(params)
    .timeout(10000)
    .build()
    .call<MyProjectPageResponse>();

  return response.data;
}
