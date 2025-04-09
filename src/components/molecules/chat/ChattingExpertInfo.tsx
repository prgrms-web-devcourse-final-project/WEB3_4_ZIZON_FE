import ExpertProfile from '@/components/organisms/expertDetail/expertProfile/ExpertProfile';
import ExpertInfoCard from '../expert/expertInfoCard/ExpertInfoCard';
import SmallTag from '@/components/atoms/tags/smallTag/SmallTag';
import { ExpertType } from '@/apis/expert/getExpert';
import { ProjectCategoryIdType } from '@/constants/category';

export default function ChattingExpertInfo({ expertData }: { expertData: ExpertType | null }) {
  if (!expertData) return;
  return (
    <div className="w-full bg-black1 px-32 py-32 rounded-[8px] flex flex-col gap-32 transition-opacity duration-500">
      <ExpertProfile
        ExpertInfoCardComponent={
          <ExpertInfoCard
            infoArray={[
              { content: `${expertData.certificateNames.length}개`, title: '보유 자격증' },
              { content: '99%', title: '만족도' },
              { content: `${expertData.careerYears}년`, title: '경력' },
            ]}
            type="small"
          />
        }
        categoryId={expertData.mainCategoryId as ProjectCategoryIdType}
        introduction={expertData.introduction}
        name={expertData.name}
        profileImageUrl={expertData.profileImage}
      />

      <div>
        <h3 className="font-bold text-20 text-black12 mb-12">제공서비스</h3>
        <div className="flex gap-8">
          <SmallTag text={expertData.categoryName} theme="default" />
          {expertData.subCategoryNames.map((item, index) => (
            <SmallTag key={index} text={item} theme="default" />
          ))}
        </div>
      </div>
    </div>
  );
}
