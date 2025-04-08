export default function Loading() {
  return (
    <div className="w-full h-fit mt-46 flex flex-col items-center animate-pulse">
      {/* 배너 섹션 */}
      <div className="relative w-1280 h-300 bg-black3 rounded"></div>

      {/* 필터 및 콘텐츠 섹션 */}
      <div className="flex gap-24 mt-40">
        {/* 필터 섹션 */}
        <div className="w-411 h-full flex flex-col gap-16">
          {/* 필터 헤더 */}
          <div className="flex items-center justify-between">
            <div className="w-150 h-24 bg-black3 rounded"></div> {/* 필터 제목 */}
            <div className="w-100 h-40 bg-black3 rounded"></div> {/* 초기화 버튼 */}
          </div>

          {/* 검색 입력 */}
          <div className="relative">
            <div className="w-411 h-48 bg-black3 rounded"></div>
          </div>

          {/* 카테고리 필터 */}
          <div className="w-411 h-fit px-24 py-32 bg-black3 rounded-16">
            <div className="w-150 h-24 bg-black4 rounded mb-24"></div> {/* 카테고리 제목 */}
            <div className="flex flex-col gap-8">
              <div className="w-full h-40 bg-black4 rounded"></div>
              <div className="w-full h-40 bg-black4 rounded"></div>
              <div className="w-full h-40 bg-black4 rounded"></div>
              <div className="w-full h-40 bg-black4 rounded"></div>
            </div>
          </div>

          {/* 경력 필터 */}
          <div className="w-411 h-fit px-24 py-32 bg-black3 rounded-16">
            <div className="w-150 h-24 bg-black4 rounded mb-24"></div> {/* 경력 제목 */}
            <div className="flex flex-col gap-8">
              <div className="w-full h-40 bg-black4 rounded"></div>
              <div className="w-full h-40 bg-black4 rounded"></div>
              <div className="w-full h-40 bg-black4 rounded"></div>
            </div>
          </div>
        </div>

        {/* 전문가 카드 섹션 */}
        <div className="w-full flex flex-col gap-16">
          {/* 정렬 버튼 */}
          <div className="flex gap-12">
            <div className="w-150 h-40 bg-black3 rounded"></div>
            <div className="w-150 h-40 bg-black3 rounded"></div>
          </div>

          {/* 전문가 카드 리스트 */}
          <div className="grid grid-cols-2 gap-24 w-844">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="w-410 flex flex-col p-24 bg-black3 rounded-20 border-2 border-gray-300"
              >
                {/* 카드 이미지 */}
                <div className="w-full h-240 mb-16 bg-black4 rounded-xl"></div>

                {/* 카드 태그 */}
                <div className="flex gap-8 mb-16">
                  <div className="w-80 h-32 bg-black4 rounded-full"></div>
                  <div className="w-80 h-32 bg-black4 rounded-full"></div>
                </div>

                {/* 카드 텍스트 */}
                <div className="flex flex-col gap-8">
                  <div className="w-150 h-24 bg-black4 rounded"></div> {/* 이름 */}
                  <div className="w-full h-20 bg-black4 rounded"></div> {/* 소개 */}
                </div>

                {/* 프로필 보기 버튼 */}
                <div className="w-full h-48 bg-black4 rounded mt-16"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
