import Image from 'next/image';

interface BannerProps {
  title: string;
  subTitle: string;
}

export default function Banner({ title, subTitle }: BannerProps) {
  return (
    <div className="relative w-full h-300">
      <Image
        src="/images/ExpertBanner.png"
        width={1280}
        height={300}
        alt="expert-banner-image w-full h-full"
      />
      <div className="w-fit h-fit absolute top-80 left-72">
        <h2 className="text-black1 font-bold text-32 mb-16 whitespace-pre-line leading-[1.5]">
          {title}
        </h2>
        <h3 className="text-black1 font-regular text-16">{subTitle}</h3>
      </div>
    </div>
  );
}
