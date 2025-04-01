interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="flex flex-col gap-16">
      <h3 className="text-28 font-bold">{title}</h3>
      {subtitle && <p className="text-16 font-medium text-black7">{subtitle}</p>}
    </div>
  );
}
