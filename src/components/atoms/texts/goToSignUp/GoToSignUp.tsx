import Link from 'next/link';

function GoToSignUp() {
  return (
    <div className="flex gap-8 text-black7 my-32">
      <span>아직 계정이 없으신가요?</span>
      <Link href="/signup" className="text-primary4 underline">
        회원가입
      </Link>
    </div>
  );
}

export default GoToSignUp;
