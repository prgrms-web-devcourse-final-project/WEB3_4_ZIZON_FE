interface props {
  url: string;
}
export default function MediumWhiteTag({url}:props) {
  return (
    <img className="rounded-lg" src={url}/>
  );
}