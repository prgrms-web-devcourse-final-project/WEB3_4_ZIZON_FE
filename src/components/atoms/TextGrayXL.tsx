interface props {
  text: string;
}
export default function TextGrayXL({text}:props) {
  return (
    <p className="text-black7 text-xl truncate">{text}</p>
  );
}