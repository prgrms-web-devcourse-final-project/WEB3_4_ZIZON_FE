interface EmptyStateProps {
  title: string;
  description?: string;
}

export default function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center">
      <h3 className="text-xl font-semibold text-black7 mb-2">{title}</h3>
      {description && <p className="mt-2 text-sm text-black6">{description}</p>}
    </div>
  );
}
