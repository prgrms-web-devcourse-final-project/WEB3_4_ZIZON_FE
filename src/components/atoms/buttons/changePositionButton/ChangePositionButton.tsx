'use client';

import Image from 'next/image';

interface ChangePositionButtonProps {
  isState: 'client' | 'expert';
  onChangeState: () => void;
}

const buttonConfig = {
  client: {
    bgColor: 'bg-black12',
    borderColor: 'border-black3',
    textColor: 'text-black1',
    icon: '/icons/ArrowsRightLeftWhite.svg',
    label: '전문가로 전환',
  },
  expert: {
    bgColor: 'bg-black2',
    borderColor: 'border-black7',
    textColor: 'text-black12',
    icon: '/icons/ArrowsRightLeftBlack.svg',
    label: '의뢰인으로 전환',
  },
} as const;

type ButtonConfigKey = keyof typeof buttonConfig;

function ChangePositionButton({ isState, onChangeState }: ChangePositionButtonProps) {
  const config = buttonConfig[isState as ButtonConfigKey] || buttonConfig.client;

  return (
    <button
      onClick={onChangeState}
      className={`w-194 cursor-pointer ${config.bgColor} border ${config.borderColor} rounded-full py-8 hover:opacity-80 transition-opacity`}
    >
      <div className="flex items-center justify-center">
        <Image src={config.icon} alt="" width={14} height={14} className="cursor-pointer" />
        <span className={`${config.textColor} ml-8 text-16 font-medium cursor-pointer`}>
          {config.label}
        </span>
      </div>
    </button>
  );
}

export default ChangePositionButton;
