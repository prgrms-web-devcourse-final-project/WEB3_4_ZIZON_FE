import Image from 'next/image';
import SearchLarge from 'public/icons/SearchLarge.svg';
interface SearchBarProps {
  type: 'default' | 'rounded' | 'large';
  placedholder: string;
  onChange: (value: string) => void;
  value: string;
}
const typeVariation = {
  default: 'w-411 rounded-[12px]  border-1 border-black4 pl-44',
  rounded: 'w-402 rounded-full border-1 border-black4 pr-36',
  large: 'w-540 rounded-[12px]  pl-44 shadow-searchBar',
} as const;

export default function SearchBar({
  type = 'default',
  placedholder,
  onChange,
  value,
}: SearchBarProps) {
  const iconPosition = type === 'rounded' ? 'right-20' : 'left-20';

  return (
    <div className="relative">
      <input
        type="text"
        value={value}
        placeholder={placedholder}
        onChange={event => onChange(event.target.value)}
        className={`bg-black1 py-16 px-20 text-13 font-regular  placeholder:font-light placeholder:text-13 focus:outline-none focus:ring-1 focus:ring-primary5 focus:border-transparent focus:shadow-input ${typeVariation[type]}`}
      />
      <Image
        src={SearchLarge}
        alt="search"
        width={16}
        height={16}
        className={`absolute top-1/2 -translate-y-1/2 ${iconPosition}`}
      />
    </div>
  );
}
