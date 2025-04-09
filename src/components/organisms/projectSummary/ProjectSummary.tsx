import { ProjectResponseType } from '@/apis/project/getProject';
import Image from 'next/image';
// 의뢰서에서 파생된 정보가 필요함
export interface ProjectSummaryProps {
  projectData: ProjectResponseType;
}

const Divider = () => {
  return <div className="w-full h-1 bg-black3" />;
};

export default function ProjectSummary({ projectData }: ProjectSummaryProps) {
  const rawDescription = projectData?.description;
  const description = JSON.parse(rawDescription).flatMap(obj =>
    Object.entries(obj).map(([key, value]) => ({ [key]: value })),
  );

  return (
    <div className="w-402 min-w-300 rounded-[8px] flex flex-col gap-32 px-32 py-32 bg-black1">
      {/* 유저 프로필 이미지과 정보영역 */}
      <div className="flex gap-20">
        <Image
          src={projectData?.clientProfileImageUrl}
          width={100}
          height={100}
          className="rounded-[8px]"
          alt="profile-image"
        />
        <div className="flex flex-col gap-12 w-full">
          <h2 className="font-semibold text-20 text-black10">{projectData?.clientName}</h2>
          <span className="font-medium text-black6 text-16">{projectData?.title}</span>
          <span className="font-medium text-black6 text-16">{projectData?.region}</span>
        </div>
      </div>

      <Divider />

      {/* 프로젝트 설명 */}
      <div className="flex flex-col gap-32">
        <h2 className="font-semibold text-16 text-black10">요청 상세</h2>
        {Object.entries(description).map(([index, obj]) => (
          <div key={index} className="flex flex-col gap-8">
            <span className="font-medium text-black6 text-13">{Object.keys(obj)}</span>
            <span className="font-medium text-black10 text-16">{Object.values(obj)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
