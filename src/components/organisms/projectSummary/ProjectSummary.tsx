import Image from 'next/image';
// 의뢰서에서 파생된 정보가 필요함
export interface ProjectSummaryProps {
  clientProfile: string; // 클라이언트 프로필 이미지 경로
  clientName: string; // 클라이언트 이름
  location: string; // 위치 정보
  projectName: string; // 프로젝트 이름
  description: Record<string, string>; // 설명 (키-값 쌍)
}

const Divider = () => {
  return <div className="w-full h-1 bg-black3" />;
};

export default function ProjectSummary({
  clientProfile,
  clientName,
  location,
  projectName,
  description,
}: ProjectSummaryProps) {
  return (
    <div className="w-402 min-w-300 rounded-[8px] flex flex-col gap-32 px-32 py-32 bg-black1">
      {/* 유저 프로필 이미지과 정보영역 */}
      <div className="flex gap-20">
        <Image
          src={clientProfile}
          width={100}
          height={100}
          className="rounded-[8px]"
          alt="profile-image"
        />
        <div className="flex flex-col gap-12 w-full">
          <h2 className="font-semibold text-20 text-black10">{clientName}</h2>
          <span className="font-medium text-black6 text-16">{projectName}</span>
          <span className="font-medium text-black6 text-16">{location}</span>
        </div>
      </div>

      <Divider />

      {/* 프로젝트 설명 */}
      <div className="flex flex-col gap-32">
        <h2 className="font-semibold text-16 text-black10">요청 상세</h2>
        {Object.entries(description).map(([key, value]) => (
          <div key={key} className="flex flex-col gap-8">
            <span className="font-medium text-black6 text-13">{key}</span>
            <span className="font-medium text-black10 text-16">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
