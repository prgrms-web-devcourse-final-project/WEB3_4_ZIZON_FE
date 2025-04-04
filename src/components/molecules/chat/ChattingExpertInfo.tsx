import ExpertProfile from '@/components/organisms/expertDetail/expertProfile/ExpertProfile';
import ExpertInfoCard from '../expert/expertInfoCard/ExpertInfoCard';
import SmallTag from '@/components/atoms/tags/smallTag/SmallTag';

export default function ChattingExpertInfo() {
  return (
    <div className="w-full bg-black1 px-32 py-32 rounded-[8px] flex flex-col gap-32">
      <ExpertProfile
        ExpertInfoCardComponent={
          <ExpertInfoCard
            infoArray={[
              { content: '홍길동', title: '이름' },
              { content: '개발자', title: '직업' },
              { content: '5년', title: '경력' },
            ]}
            type="small"
          />
        }
        categoryId={1000}
        introduction="단순한 이사가 아닌, 진짜 이사가 어떤 것인지 보여드립니다."
        name="이상훈"
        profileImageUrl="/images/DefaultImage.png"
      />

      <div>
        <h3 className="font-bold text-20 text-black12 mb-12">제공서비스</h3>
        <div className="flex gap-8">
          <SmallTag text={'대분류'} theme="default" />
          <SmallTag text={'소분류'} theme="default" />
        </div>
      </div>
    </div>
  );
}
