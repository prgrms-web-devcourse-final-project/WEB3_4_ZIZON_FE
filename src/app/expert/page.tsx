import { EXPERT_LIST } from '@/components/molecules/expert/expertList/ExpertList.stories';
import { ExpertListItemProps } from '@/components/molecules/expert/expertListItem/ExpertListItem';

import ExpertTemplate from '@/components/templates/expertTemplate/ExpertTemplate';

export default async function ExpertPage() {
  // 여기서 expert-list 정보를 불러와야 함
  // expert-list는 검색어, 카테고리, 경력, 정렬 방식이 바뀜에 따라 새롭게 불러와져야 함

  // Template에 내려줘야 할 정보,
  const expertList: Array<ExpertListItemProps> = [...EXPERT_LIST];
  const ExpertResponse = await fetch(`${process.env.SERVER_URL}/api/experts`).then(res =>
    res.json(),
  );

  if (!ExpertResponse.ok) {
    throw new Error('Failed to fetch expert list');
  }
  console.log('expertResponse, ', ExpertResponse);

  return (
    <div className="w-full px-320 flex justify-center">
      <ExpertTemplate expertList={expertList} />
    </div>
  );
}
