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
import LoadingSpinner from '@/components/atoms/loadingSpinner/LoadingSpinner';
import ErrorState from '@/components/molecules/errorState/ErrorState';
import EmptyState from '@/components/molecules/emptyState/EmptyState';

function RecentProjectSection() {
  const router = useRouter();

  const { data, isLoading, error, refetch } = useQuery<ProjectItemCardProps[]>({
    queryKey: ['recentProjects'],
    queryFn: async () => {
      const response = await getProjectsAll({
        page: 0,
        size: 6,
        sort: ['createdAt', 'DESC'],
      });
      return response.projects.map(project => {
        return {
          categoryId: project.categoryId as ProjectCategoryIdType,
          title: project.title,
          budget: project.budget,
          deadline: project.deadline,
          projectId: project.id.toString(),
        };
      });
    },
  });

  return (
    <section className="min-w-1280 flex flex-col gap-40">
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
          <div className="col-span-3 py-20">
            <LoadingSpinner />
          </div>
        ) : error ? (
          <div className="col-span-3">
            <ErrorState
              title="프로젝트 로딩 실패"
              message="최근 등록된 프로젝트를 불러오는 중 오류가 발생했습니다. 다시 시도해주세요."
              onRetry={() => refetch()}
            />
          </div>
        ) : data && data.length > 0 ? (
          data.map((project, index) => <ProjectItemCard key={index} {...project} />)
        ) : (
          <div className="col-span-3">
            <EmptyState
              title="등록된 프로젝트가 없습니다"
              description="현재 등록된 프로젝트가 없습니다. 나중에 다시 확인해주세요."
            />
          </div>
        )}
      </div>
    </section>
  );
}

export default RecentProjectSection;
