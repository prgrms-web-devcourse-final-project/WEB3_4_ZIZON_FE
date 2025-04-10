interface EmptyStateProps {
  title: string;
  description?: string;
}

export default function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <div className="flex flex-col gap-8 items-center justify-center py-40">
      <h3 className="text-20 font-semibold text-black7">{title}</h3>
      {description && <p className="text-13 text-black6">{description}</p>}
    </div>
  );
}
