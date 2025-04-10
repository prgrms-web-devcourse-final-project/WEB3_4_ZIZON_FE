import StandardButton from '@/components/atoms/buttons/standardButton/StandardButton';

interface ErrorStateProps {
  title?: string;
  message: string;
  onRetry?: () => void;
}

export default function ErrorState({
  title = '오류가 발생했습니다',
  message,
  onRetry,
}: ErrorStateProps) {
  return (
    <div className="flex flex-col items-center justify-center p-8 gap-12 text-center">
      <h3 className="text-20 font-semibold text-black7">{title}</h3>
      <p className="text-16 text-black6 mb-8">{message}</p>
      {onRetry && (
        <StandardButton text="다시 시도" onClick={onRetry} disabled={false} state="dark" />
      )}
    </div>
  );
}
