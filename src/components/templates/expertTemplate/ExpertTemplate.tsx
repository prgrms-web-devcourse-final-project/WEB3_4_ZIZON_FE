import Banner from '@/components/atoms/banner/Banner';
import ExpertList from '@/components/molecules/expert/expertList/ExpertList';
import ExpertListItem, {
  ExpertListItemProps,
} from '@/components/molecules/expert/expertListItem/ExpertListItem';
import SortButtons, { SortType } from '@/components/molecules/sortButtons/SortButtons';
import ExpertSidebar from '@/components/organisms/sidebar/ExpertSidebar/ExpertSidebar';

interface ExpertTemplateProps {
  expertList: Array<ExpertListItemProps>;
}

export default function ExpertTemplate({ expertList }: ExpertTemplateProps) {
  return (
    <div className="w-full h-fit mt-46 flex flex-col items-center">
      <Banner />
      {/* 사이드바 영역 */}
      <div className=" flex gap-24 mt-40 ">
        <ExpertSidebar />
        {/* 컨텐츠 영역 */}
        <div className="w-full flex flex-col gap-16">
          <SortButtons />
          <ExpertList>
            {expertList.map(expert => (
              <ExpertListItem {...expert} key={expert.expert_id} />
            ))}
          </ExpertList>
        </div>
      </div>
    </div>
  );
}
