export interface InputLabelProps {
  label: string;
  htmlFor?: string;
}

export default function InputLabel({ label, htmlFor }: InputLabelProps) {
  return (
    <label className="block text-black10 text-13 font-medium" htmlFor={htmlFor}>
      {label}
    </label>
  );
}
