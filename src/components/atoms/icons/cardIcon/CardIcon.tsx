import Image from 'next/image';

export interface CardIconProps {
  category: 'spanner' | 'home' | 'pallete' | 'pencil' | 'women';
  isOn: boolean;
}

const ICON_PATHS = {
  spanner: {
    on: '/icons/FixBlue.svg',
    off: '/icons/Fix.svg',
  },
  home: {
    on: '/icons/HomeBlue.svg',
    off: '/icons/Home.svg',
  },
  pallete: {
    on: '/icons/PalleteBlue.svg',
    off: '/icons/Pallete.svg',
  },
  pencil: {
    on: '/icons/PencilBlue.svg',
    off: '/icons/Pencil.svg',
  },
  women: {
    on: '/icons/WomenBlue.svg',
    off: '/icons/Women.svg',
  },
} as const;

function CardIcon({ category, isOn }: CardIconProps) {
  const iconPath = ICON_PATHS[category][isOn ? 'on' : 'off'];

  return (
    <div
      className={`w-40 h-40 rounded-full flex items-center justify-center ${
        isOn ? 'bg-primary1' : 'bg-black3'
      }`}
    >
      <Image src={iconPath} alt={category} width={24} height={24} />
    </div>
  );
}

export default CardIcon;
