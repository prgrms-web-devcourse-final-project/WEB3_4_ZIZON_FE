import { APIBuilder } from '@/utils/APIBuilder';

interface PostProjectInterface {
  title: string;
  summary: string;
  description: string;
  region: string;
  budget: number;
  deadline: string;
  expertId: number | null;
  imageUrls: string[] | null;
}
export const postProject = async ({
                              title,
                              summary,
                              description,
                              region,
                              budget,
                              deadline,
                              expertId,
                              imageUrls
                            }: PostProjectInterface) => {

  const response = await APIBuilder.post('/projects', {
    title,
    summary,
    description,
    region,
    budget,
    deadline,
    expertId,
    imageUrls
  })
}