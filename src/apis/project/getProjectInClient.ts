import { APIBuilder } from '@/utils/APIBuilder';
import { ProjectRequestType, ProjectResponseType } from './getProject';

export default async function getProjectInClient({
  projectId,
}: ProjectRequestType): Promise<ProjectResponseType> {
  const response = await APIBuilder.get(`/projects/${projectId}`)
    .withCredentials(true)
    .timeout(10000)
    .build()
    .call<ProjectResponseType>();

  return response.data;
}
