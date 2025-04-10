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
  console.log('projectData', projectData);

  projectData.description =
    '[{"원하시는 요청 형식이 무엇인가요?":"설치 및 수리"},{"설치 및 수리의 대상이 무엇인가요?":"가구","더 상세한 분류는 무엇인가요?":"소파"},{"서비스를 희망하는 날짜는 언제인가요?":"가능한 빨리","설치 및 수리를 원하는 지역은 어디인가요?":"서울특별시 강남구"}]';
  return (
    <div className="px-520 mt-46 flex justify-center">
      <MakeOfferTemplate projectSummary={projectData} />
    </div>
  );
}
