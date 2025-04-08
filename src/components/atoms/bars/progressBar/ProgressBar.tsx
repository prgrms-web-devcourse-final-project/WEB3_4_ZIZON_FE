export enum ProgressStep {
  STEP1 = 1,
  STEP2 = 2,
  STEP3 = 3,
  STEP4 = 4,
  STEP5 = 5,
}

const PROGRESS_STYLES: Record<ProgressStep, string> = {
  [ProgressStep.STEP1]: 'w-[15%] bg-primary5',
  [ProgressStep.STEP2]: 'w-1/4 bg-primary5',
  [ProgressStep.STEP3]: 'w-1/2 bg-primary5',
  [ProgressStep.STEP4]: 'w-3/4 bg-primary5',
  [ProgressStep.STEP5]: 'w-full bg-primary5',
} as const;

interface ProgressBarProps {
  step: ProgressStep;
}

function ProgressBar({ step }: ProgressBarProps) {
  return (
    <div className="w-full h-15 bg-black2 rounded-full overflow-hidden">
      <div
        className={`h-full rounded-full transition-all duration-300 ease-in-out ${PROGRESS_STYLES[step]}`}
      />
    </div>
  );
}

export default ProgressBar;
