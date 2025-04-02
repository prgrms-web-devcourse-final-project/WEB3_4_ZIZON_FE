import Image from 'next/image';

interface LoginButtonProps {
  type: 'kakao' | 'naver' | 'default' | 'signup' | 'login';
  onClick: () => void;
  disabled?: boolean;
}

export default function LoginButton({ type, onClick, disabled }: LoginButtonProps) {
  const styleMap = {
    kakao: {
      color: 'bg-kakao text-black9 disabled:bg-kakao',
      text: '카카오로 시작하기',
    },
    naver: {
      color: 'bg-naver text-black1 disabled:bg-naver',
      text: '네이버로 시작하기',
    },
    default: {
      color: 'bg-white text-black9',
      text: '로그인',
    },
    signup: {
      color: 'bg-primary5 text-black1',
      text: '회원가입',
    },
    login: {
      color: 'bg-primary5 text-black1',
      text: '로그인',
    },
  };
  const style = styleMap[type];

  return (
    <button
      onClick={() => onClick()}
      disabled={disabled}
      className={`w-404 h-47 py-12 px-16 rounded-[8px] flex gap-12 justify-center items-center  disabled:bg-black6 disabled:text-black9  cursor-pointer ${style.color}`}
    >
      {type === 'kakao' && (
        <Image src="/icons/KakaoLogo.svg" alt="kakao-logo" width={25} height={25} />
      )}
      {type === 'naver' && (
        <Image src="/icons/NaverLogo.svg" alt="naver-logo" width={25} height={25} />
      )}
      <span>{style.text}</span>
    </button>
  );
}
