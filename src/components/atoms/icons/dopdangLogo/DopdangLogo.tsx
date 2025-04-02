import Link from 'next/link';
import Image from 'next/image';

type DopdangLogoProps = {
  type: 'kr' | 'en';
};

export default function DopdangLogo({ type = 'kr' }: DopdangLogoProps) {
  const width = type === 'kr' ? 61 : 221;
  const height = type === 'kr' ? 32 : 36;

  return (
    <h1 className={`w-${width} h-${height}`}>
      <Link href="/" className="block">
        <Image
          src={`/logo/dopdang-logo-${type}.svg`}
          alt="dopdang-logo"
          width={width}
          height={height}
        />
      </Link>
    </h1>
  );
}
