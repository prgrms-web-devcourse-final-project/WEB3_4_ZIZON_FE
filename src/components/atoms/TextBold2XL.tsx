interface props {
  text: string;
}
export default function TextBold2XL({text}:props) {
  return (
    <p className="text-black12 font-bold text-2xl min-w-fit max-w-fit">{text}</p>
  );
}