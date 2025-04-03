export interface InputLabelProps {
  label: string;
  htmlFor?: string;
  size?: string;
}

export default function InputLabel({ label, htmlFor, size = '13' }: InputLabelProps) {
  return (
    <label className={`block text-black10 text-${size} font-medium`} htmlFor={htmlFor}>
      {label}
    </label>
  );
}
