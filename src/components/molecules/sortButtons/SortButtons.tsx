import TextButton from '@/components/atoms/buttons/textButton/TextButton';

export type SortType = 'latest' | 'rating';

interface SortButtonsProps {
  selectedSort: SortType;
  onSortChange: (sort: SortType) => void;
}

export default function SortButtons({ selectedSort, onSortChange }: SortButtonsProps) {
  return (
    <div className="flex gap-12">
      <TextButton
        text="최신 업데이트 순"
        onClick={() => {
          onSortChange('latest');
        }}
        type={selectedSort === 'latest' ? 'dark' : 'normal'}
      />
      <TextButton
        text="평점 높은 순"
        onClick={() => {
          onSortChange('rating');
        }}
        type={selectedSort === 'rating' ? 'dark' : 'normal'}
      />
    </div>
  );
}
