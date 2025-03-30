import React from 'react';

interface ProgressBarProps {
  progress: 'default' | 'quarter' | 'half' | 'three-quarters' | 'done';
}

function ProgressBar({ progress }: ProgressBarProps) {
  const getProgressWidth = () => {
    const progressMap = {
      default: '15%',
      quarter: '25%',
      half: '50%',
      'three-quarters': '75%',
      done: '100%',
    };

    return progressMap[progress];
  };

  return (
    <div className="w-full h-15 bg-black2 rounded-full overflow-hidden">
      <div
        className="h-full bg-primary5 rounded-full transition-all duration-300 ease-in-out"
        style={{ width: getProgressWidth() }}
      />
    </div>
  );
}

export default ProgressBar;
