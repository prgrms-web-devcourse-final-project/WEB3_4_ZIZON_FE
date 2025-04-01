interface ServiceIntroductionProps {
  title: string;
  content: string;
}

function ServiceIntroduction({ title, content }: ServiceIntroductionProps) {
  return (
    <div className="w-628 flex flex-col gap-24">
      <h3 className="text-20 font-bold text-black12">{title}</h3>
      <p className="text-16 font-regular text-black7 leading-[150%] whitespace-pre-line">
        {content}
      </p>
    </div>
  );
}

export default ServiceIntroduction;
