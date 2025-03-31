import React from 'react';
import Image from 'next/image';

interface CardIconProps {
  category: 'spanner' | 'home' | 'pallete' | 'pencil' | 'women';
  isOn: boolean;
}

function CardIcon({ category, isOn }: CardIconProps) {
  const getIconPath = () => {
    const iconMap = {
      spanner: isOn ? '/icons/FixBlue.svg' : '/icons/Fix.svg',
      home: isOn ? '/icons/HomeBlue.svg' : '/icons/Home.svg',
      pallete: isOn ? '/icons/PalleteBlue.svg' : '/icons/Pallete.svg',
      pencil: isOn ? '/icons/PencilBlue.svg' : '/icons/Pencil.svg',
      women: isOn ? '/icons/WomenBlue.svg' : '/icons/Women.svg',
    };

    return iconMap[category];
  };

  return (
    <div
      className={`w-40 h-40 rounded-full flex items-center justify-center ${
        isOn ? 'bg-primary1' : 'bg-black3'
      }`}
    >
      <Image src={getIconPath()} alt={category} width={24} height={24} />
    </div>
  );
}

export default CardIcon;
