import Image from 'next/image';

interface LoginButtonProps {
  type: 'kakao' | 'naver' | 'default' | 'blue';
  onClick: () => void;
  disabled?: boolean;
}

export default function LoginButton({ type, onClick, disabled }: LoginButtonProps) {
  const colorVariant = {
    kakao: 'bg-kakao text-black9 disabled:bg-kakao',
    naver: 'bg-naver text-black1 disabled:bg-naver',
    default: 'bg-white text-black9',
    blue: 'bg-primary5 text-black1',
  };

  const textVarient = {
    kakao: '카카오로 시작하기',
    naver: '네이버로 시작하기',
    default: '로그인',
    blue: '로그인',
  };

  return (
    <button
      onClick={() => onClick()}
      disabled={disabled}
      className={`w-404 h-47 py-12 px-16 rounded-[8px] flex gap-12 justify-center items-center  disabled:bg-black6 disabled:text-black9  cursor-pointer ${colorVariant[type]}`}
    >
      {type === 'kakao' && (
        <Image src="/icons/KakaoLogo.svg" alt="kakao-logo" width={25} height={25} />
      )}
      {type === 'naver' && (
        <Image src="/icons/NaverLogo.svg" alt="naver-logo" width={25} height={25} />
      )}
      <span>{textVarient[type]}</span>
    </button>
  );
}
