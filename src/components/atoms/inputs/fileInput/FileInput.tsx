interface FileInputProps {
  label: string;
  name: string;
  accept: string;
  onChange: (value: File) => void;
}

export default function FileInput({ label, name, accept, onChange }: FileInputProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onChange(file);
    }
  };
  return (
    <div>
      <label
        htmlFor={name}
        className="px-16 py-12 rounded-[8px] text-16 font-semibold cursor-pointer border border-black3 bg-black1 text-black7"
      >
        {label}
      </label>
      <input id={name} type="file" accept={accept} className="hidden" onChange={handleChange} />
    </div>
  );
}
