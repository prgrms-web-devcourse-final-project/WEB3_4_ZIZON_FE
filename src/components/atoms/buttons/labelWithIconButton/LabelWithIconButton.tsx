'use client';

import React from 'react';
import Image from 'next/image';

export type ExpertCategory = 'move' | 'fix' | 'tutor' | 'hobby';
export type ButtonState = 'default' | 'active';

interface LabelWithIconButtonProps {
  onClick: () => void;
  value: ExpertCategory;
  state: ButtonState;
  name: string;
}

const BUTTON_CONFIG = {
  move: {
    icon: '/icons/MoveTruck.svg',
    label: '이사/청소',
  },
  fix: {
    icon: '/icons/FixWrench.svg',
    label: '설치/수리',
  },
  tutor: {
    icon: '/icons/LessonHat.svg',
    label: '과외',
  },
  hobby: {
    icon: '/icons/HobbyPalette.svg',
    label: '취미 생활',
  },
} as const;

const BASE_BUTTON_CLASSES =
  'flex text-center min-w-full content-center px-24 py-28 rounded-lg text-16 font-medium text-black12 transition-all duration-300';
const STATE_CLASSES = {
  default: 'bg-black2 hover:bg-black3',
  active: 'bg-primary0',
};

export default function LabelWithIconButton({
  onClick,
  value,
  state,
  name,
}: LabelWithIconButtonProps) {
  const { icon, label } = BUTTON_CONFIG[value];
  const buttonClasses = `${BASE_BUTTON_CLASSES} ${STATE_CLASSES[state]}`;

  return (
    <label className={buttonClasses}>
      <input
        type="radio"
        name={name}
        value={value}
        checked={state === 'active'}
        onChange={onClick}
        className="hidden"
      />
      <div className="flex items-center gap-20">
        <Image src={icon} alt={label} width={30} height={30} />
        <p>{label}</p>
      </div>
    </label>
  );
}
