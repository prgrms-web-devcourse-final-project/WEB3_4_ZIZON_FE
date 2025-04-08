import { ExpertListRequestType, getExpertlist } from '@/apis/expert/getExpertlist';
import ExpertTemplate from '@/components/templates/expertTemplate/ExpertTemplate';
import { PROJECT_CATEGORY, ProjectCategoryIdType } from '@/constants/category';

const ALL_CATEGORY = '이사/청소,과외,설치/수리,취미/자기계발';

export default async function ExpertPage({
  searchParams,
}: {
  searchParams: Promise<{
    category: ProjectCategoryIdType;
    career: string;
  }>;
}) {
  const { category, career } = await searchParams;

  const RequestQuery: ExpertListRequestType = {
    careerLevel: career?.toUpperCase() || 'JUNIOR',
    categoryNames: PROJECT_CATEGORY[category as ProjectCategoryIdType] || ALL_CATEGORY,
  };

  const data = await getExpertlist(RequestQuery);
  return <ExpertTemplate expertList={data} />;
}
