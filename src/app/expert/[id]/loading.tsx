export default function Loading() {
  return (
    <div className="mt-78 flex justify-center">
      <div className="w-953 relative">
        <div className="w-628 h-fit flex flex-col gap-24">
          {/* 프로필 섹션 */}
          <div className="flex flex-col gap-24">
            <div className="w-150 h-150 bg-black3 rounded-16 animate-pulse"></div>{' '}
            {/* 프로필 이미지 */}
            <div className="flex flex-col gap-16">
              <div className="w-120 h-22 bg-black3 rounded animate-pulse"></div> {/* 직업 */}
              <div className="w-200 h-28 bg-black3 rounded animate-pulse"></div> {/* 이름 */}
              <div className="w-300 h-20 bg-black3 rounded animate-pulse"></div> {/* 소개 */}
            </div>
          </div>

          {/* 정보 카드 섹션 */}
          <div className="flex w-628 h-80 justify-center items-center gap-75 rounded-12 bg-black3 animate-pulse"></div>

          {/* 탭 섹션 */}
          <div className="w-full flex flex-col gap-40">
            <ul className="flex gap-32 border-b-1 border-b-gray-300 w-full">
              <li className="w-80 h-20 bg-black3 rounded animate-pulse"></li>
              <li className="w-100 h-20 bg-black3 rounded animate-pulse"></li>
              <li className="w-80 h-20 bg-black3 rounded animate-pulse"></li>
            </ul>

            {/* 전문가 소개 섹션 */}
            <div className="flex flex-col gap-52">
              <div className="w-628 flex flex-col gap-24">
                <div className="w-150 h-24 bg-black3 rounded animate-pulse"></div> {/* 섹션 제목 */}
                <div className="w-full h-60 bg-black3 rounded animate-pulse"></div>{' '}
                {/* 소개 텍스트 */}
              </div>

              {/* 제공 서비스 섹션 */}
              <div className="w-full flex flex-col gap-24">
                <div className="w-150 h-24 bg-black3 rounded animate-pulse"></div> {/* 섹션 제목 */}
                <div className="flex gap-8">
                  <div className="w-100 h-40 bg-black3 rounded-16 animate-pulse"></div>{' '}
                  {/* 서비스 태그 */}
                </div>
              </div>

              {/* 경력 섹션 */}
              <div className="w-full flex flex-col gap-24">
                <div className="w-150 h-24 bg-black3 rounded animate-pulse"></div> {/* 섹션 제목 */}
                <div className="w-200 h-20 bg-black3 rounded animate-pulse"></div>{' '}
                {/* 경력 텍스트 */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
