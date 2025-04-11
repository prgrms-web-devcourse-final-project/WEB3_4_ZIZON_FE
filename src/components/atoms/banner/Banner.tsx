import Image from 'next/image';

export default function Banner() {
  return (
    <div className="relative w-1280 h-300">
      <Image
        src="/images/ExpertBanner.png"
        width={1280}
        height={300}
        alt="expert-banner-image w-full h-full"
      />
      <div className="w-fit h-fit absolute top-80 left-72">
        <h2 className="text-black1 font-bold text-32 mb-16 whitespace-pre-line leading-[1.5]">
          원하는 전문가를
          <br />
          쉽고 빠르게 찾아보세요!
        </h2>
        <h3 className="text-black1 font-regular text-16">
          전문가와의 상담을 통해 더 나은 결정을 내릴 수 있습니다.
        </h3>
      </div>
    </div>
  );
}
