'use client';

import { useQuery } from '@tanstack/react-query';
import StandardButton from '@/components/atoms/buttons/standardButton/StandardButton';
import SectionTitle from '@/components/atoms/texts/sectionTitle/SectionTitle';
import ProjectItemCard, {
  ProjectItemCardProps,
} from '@/components/molecules/projectItemCard/ProjectItemCard';
import { useRouter } from 'next/navigation';
import getProjectsAll from '@/apis/project/getProjectsAll';
import { ProjectCategoryIdType } from '@/constants/category';

function RecentProjectSection() {
  const router = useRouter();

  // TanStack Query를 사용하여 프로젝트 데이터 가져오기
  const { data, isLoading, error } = useQuery<ProjectItemCardProps[]>({
    queryKey: ['recentProjects'],
    queryFn: async () => {
      const response = await getProjectsAll({});
      // 최대 6개의 프로젝트만 사용
      return response.projects.slice(0, 6).map(project => {
        // Project 타입을 ProjectItemCardProps 타입으로 변환
        return {
          categoryId: 1000 as ProjectCategoryIdType, // 기본값 설정 (실제로는 프로젝트 카테고리 정보가 필요함)
          title: project.title,
          budget: project.budget,
          deadline: project.deadline,
          projectId: project.id.toString(),
        };
      });
    },
  });

  return (
    <section className="flex flex-col gap-40">
      <div className="flex justify-between items-end">
        <SectionTitle
          title="최근 등록된 프로젝트"
          subtitle="의뢰인이 방금 등록한 프로젝트를 확인해보세요."
        />
        <StandardButton
          text="모두보기"
          onClick={() => {
            router.push('/commission');
          }}
          disabled={false}
          state="default"
        />
      </div>
      <div className="grid grid-cols-3 gap-24">
        {isLoading ? (
          <div className="col-span-3 text-center py-10">로딩 중...</div>
        ) : error ? (
          <div className="col-span-3 text-center py-10 text-red-500">
            프로젝트 데이터를 불러오는 중 오류가 발생했습니다.
          </div>
        ) : data && data.length > 0 ? (
          data.map((project, index) => <ProjectItemCard key={index} {...project} />)
        ) : (
          <div className="col-span-3 text-center py-10">등록된 프로젝트가 없습니다.</div>
        )}
      </div>
    </section>
  );
}

export default RecentProjectSection;
