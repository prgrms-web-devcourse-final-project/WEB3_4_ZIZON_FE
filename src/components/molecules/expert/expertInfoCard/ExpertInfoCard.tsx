interface InfoProps {
  title: string;
  content: string;
}
interface ExpertInfoCardProps {
  infoArray: Array<InfoProps>;
  type: 'small' | 'large';
}

function Info({ title, content }: InfoProps) {
  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <p className="text-black8 font-medium text-13">{title}</p>
      <p className="text-black10 font-bold text-20">{content}</p>
    </div>
  );
}

export default function ExpertInfoCard({ infoArray, type }: ExpertInfoCardProps) {
  const bgVariant = {
    small: 'w-338 h-80 justify-center items-center gap-[30px] rounded-[8px] bg-black2',
    large: 'w-628 h-80 justify-center items-center gap-[75px] rounded-[12px] bg-black1',
  };

  const dividerVariant = {
    small: 'w-1 h-45  bg-black3',
    large: 'w-1 h-45  bg-black5',
  };

  const gapVariant = {
    small: 'gap-[30px]',
    large: 'gap-[75px]',
  };

  return (
    <div className={` flex ${bgVariant[type]}`}>
      {infoArray.map((info, index) => (
        <div className={`flex ${gapVariant[type]} `} key={index}>
          <Info title={info.title} content={info.content} key={index} />
          {index !== infoArray.length - 1 && <div className={`${dividerVariant[type]}`}></div>}
        </div>
      ))}
    </div>
  );
}
