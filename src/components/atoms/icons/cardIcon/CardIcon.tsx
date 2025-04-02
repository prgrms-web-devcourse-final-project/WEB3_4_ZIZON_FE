import Image from 'next/image';

export interface CardIconProps {
  category: 'spanner' | 'home' | 'pallete' | 'pencil' | 'women' | 'cleaning' | 'men' | 'question' | 'truck';
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
  cleaning: {
    on: '/icons/CleaningBlue.svg',
    off: '/icons/Cleaning.svg',
  },
  men: {
    on: '/icons/MenBlue.svg',
    off: '/icons/Men.svg',
  },
  question: {
    on: '/icons/QuestionBlue.svg',
    off: '/icons/Question.svg',
  },
  truck: {
    on: '/icons/TruckBlue.svg',
    off: '/icons/Truck.svg',
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
