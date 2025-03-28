import Image from 'next/image';

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export default function Checkbox({ label, checked = false, onChange }: CheckboxProps) {
  return (
    <div
      className="flex items-center gap-8 min-w-363 rounded px-12 py-8 hover:bg-black2"
      onClick={() => onChange(!checked)}
    >
      <div className="relative w-20 h-20">
        <input
          type="checkbox"
          checked={checked}
          onChange={e => onChange(e.target.checked)}
          className="absolute w-0 h-0 opacity-0 cursor-pointer"
        />
        <div className="w-20 h-20 flex items-center justify-center cursor-pointer">
          {checked ? (
            <Image src="/icons/CheckboxOn.svg" alt="checked" width={20} height={20} />
          ) : (
            <Image src="/icons/CheckboxOff.svg" alt="unchecked" width={20} height={20} />
          )}
        </div>
      </div>
      <label className="text-16 text-black12 cursor-pointer">{label}</label>
    </div>
  );
}
