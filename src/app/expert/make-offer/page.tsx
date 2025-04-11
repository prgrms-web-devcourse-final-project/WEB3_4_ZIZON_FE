import getProject from '@/apis/project/getProject';
import MakeOfferTemplate from '@/components/templates/makeOfferTemplate/MakeOfferTemplate';

// 요청서(Project)를 보고 견적서(Offer)를 작성하는 페이지
export default async function MakeOfferPage({
  searchParams,
}: {
  searchParams: Promise<{
    projectId: string;
  }>;
}) {
  const { projectId } = await searchParams;

  // 해당 Id로 프로젝트 정보 조회

  const projectData = await getProject({ projectId });

  return (
    <div className="px-520 mt-46 flex justify-center">
      <MakeOfferTemplate projectSummary={projectData} />
    </div>
  );
}
