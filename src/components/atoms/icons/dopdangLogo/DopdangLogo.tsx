import Link from 'next/link';
import Image from 'next/image';

type DopdangLogoProps = {
  type: 'kr' | 'en' | 'signup';
};

const logoStyles: Record<
  DopdangLogoProps['type'],
  {
    src: string;
    width: number;
    height: number;
  }
> = {
  kr: {
    src: '/logo/dopdang-logo-kr.svg',
    width: 61,
    height: 32,
  },
  en: {
    src: '/logo/dopdang-logo-en.svg',
    width: 221,
    height: 36,
  },
  signup: {
    src: '/logo/dopdang-logo-signup.svg',
    width: 180,
    height: 36,
  },
} as const;

export default function DopdangLogo({ type = 'kr' }: DopdangLogoProps) {
  const { src, width, height } = logoStyles[type];
  return (
    <h1 className={`w-${width} h-${height}`}>
      <Link href="/" className="block">
        <Image src={src} alt="dopdang-logo" width={width} height={height} />
      </Link>
    </h1>
  );
}
