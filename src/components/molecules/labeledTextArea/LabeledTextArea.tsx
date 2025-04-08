import InputLabel from '@/components/atoms/texts/inputLabel/InputLabel';

interface LabeledTextAreaProps {
  id: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  label: string;
}

export default function LabeledTextArea({
  id,
  placeholder,
  value,
  onChange,
  label,
}: LabeledTextAreaProps) {
  return (
    <div className="flex flex-col gap-8 w-full">
      <InputLabel label={label} htmlFor={id} />
      <textarea
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e.target.value)}
        className="w-full border rounded-sm text-16 px-16 py-12
      placeholder:font-regular placeholder:text-black6  text-black12 border-black5 bg-black1 focus:outline-none focus:ring-1 focus:ring-primary5 focus:border-transparent
      focus:shadow-input"
      />
    </div>
  );
}
