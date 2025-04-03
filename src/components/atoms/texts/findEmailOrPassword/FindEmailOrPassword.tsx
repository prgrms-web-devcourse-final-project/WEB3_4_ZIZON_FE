import Link from 'next/link';

function FindEmailOrPassword() {
  return (
    <div className="flex gap-8 text-black7 my-32">
      <Link href="/find-email">이메일 찾기</Link>
      <span>|</span>
      <Link href="/find-password">비밀번호 찾기</Link>
    </div>
  );
}

export default FindEmailOrPassword;
