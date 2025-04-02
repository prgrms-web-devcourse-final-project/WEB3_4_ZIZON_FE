import Image from 'next/image';

export interface CheckboxProps {
  label: string;
  caption: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export default function Checkbox({ label, caption, checked = false, onChange }: CheckboxProps) {
  return (
    <div
      className={`flex items-center justify-between gap-8 min-w-548 rounded-lg px-20 py-12 cursor-pointer ${
        checked ? 'bg-primary0' : 'bg-black2'
      }`}
      onClick={() => onChange(!checked)}
    >
      <div className="flex gap-12">
        <label
          className={`min-w-64 text-16 font-semibold ${
            checked ? 'text-primary5' : 'text-black12'
          } `}
        >
          {label}
        </label>
        <span className={`text-16 font-regular ${checked ? 'text-primary5' : 'text-black12'}`}>
          {caption}
        </span>
      </div>
      <div className="relative w-20 h-20">
        <input
          type="checkbox"
          checked={checked}
          onChange={e => onChange(e.target.checked)}
          className="absolute w-0 h-0 opacity-0 "
        />
        <div className="w-20 h-20 flex items-center justify-center">
          {checked ? (
            <Image src="/icons/RoundCheckboxOn.svg" alt="checked" width={20} height={20} />
          ) : (
            <Image src="/icons/RoundCheckboxOff.svg" alt="unchecked" width={20} height={20} />
          )}
        </div>
      </div>
    </div>
  );
}
