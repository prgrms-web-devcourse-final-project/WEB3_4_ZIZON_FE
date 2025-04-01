import Link from 'next/link';
import Image from 'next/image';

export default function DopdangLogo() {
  return (
    <h1 className="w-61 h-32">
      <Link href="/" className="block">
        <Image src="/logo/dopdang-logo-kr.svg" alt="dopdang-logo" width={61} height={32} />
      </Link>
    </h1>
  );
}
