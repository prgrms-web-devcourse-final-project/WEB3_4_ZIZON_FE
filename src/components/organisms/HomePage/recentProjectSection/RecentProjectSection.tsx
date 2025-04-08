'use client';

import StandardButton from '@/components/atoms/buttons/standardButton/StandardButton';
import SectionTitle from '@/components/atoms/texts/sectionTitle/SectionTitle';
import ProjectItemCard, {
  ProjectItemCardProps,
} from '@/components/molecules/projectItemCard/ProjectItemCard';
import { useRouter } from 'next/navigation';

const RECENT_PROJECTS: ProjectItemCardProps[] = [
  {
    categoryId: 1000,
    title: '원룸 이사 도와주실 분 구합니다',
    budget: 300000,
    dueDate: '2024-03-31',
    comissionId: '1234df',
  },
  {
    categoryId: 2000,
    title: '화장실 수도꼭지 고장 수리 필요합니다',
    budget: 150000,
    dueDate: '2024-03-25',
    comissionId: '5678gh',
  },
  {
    categoryId: 3000,
    title: '초등학교 6학년 수학 과외 선생님 구합니다',
    budget: 50000,
    dueDate: '2024-04-15',
    comissionId: '9012jk',
  },
  {
    categoryId: 4000,
    title: '기타 레슨 선생님 구합니다',
    budget: 80000,
    dueDate: '2024-04-30',
    comissionId: '3456mn',
  },
  {
    categoryId: 1000,
    title: '가구 이전 및 조립 도와주실 분 구합니다',
    budget: 200000,
    dueDate: '2024-03-28',
    comissionId: '7890pq',
  },
  {
    categoryId: 2000,
    title: '에어컨 청소 및 점검 필요합니다',
    budget: 100000,
    dueDate: '2024-04-05',
    comissionId: '2345rs',
  },
];

function RecentProjectSection() {
  const router = useRouter();

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
        {RECENT_PROJECTS.map((project, index) => (
          <ProjectItemCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default RecentProjectSection;
