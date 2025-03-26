import MediumTag from '@/components/atoms/mediumTag/MediumTag';
import TextBold2XL from '@/components/atoms/TextBold2XL';
import TextGrayXL from '@/components/atoms/TextGrayXL';

export default function Home() {

  return <div>
    <MediumTag text={'이사/청소'}/>
    <MediumTag text={'설치/수리'}/>
    <MediumTag text={'취미/자기계발'}/>
    <MediumTag text={'과외'}/>
    <MediumTag text={'13년 경력'}/>

    <TextBold2XL text={"이상훈"}/>
    <TextGrayXL text={"단순한 이사가 아닌, 진짜 이사가 어떤 것인지 보여드립니다."} />
  </div>;
}
