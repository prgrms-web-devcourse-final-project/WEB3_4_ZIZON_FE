type OptionType = 'left-impact' | 'right-impact' | 'price-small' | 'price-large';

interface StyleConfig {
  container: string;
  left: string;
  right: string;
}

interface SelectedOptionProps {
  type: OptionType;
  leftText: string;
  rightText: string;
}

const OPTION_STYLES: Record<OptionType, StyleConfig> = {
  'left-impact': {
    container: 'gap-12',
    left: 'text-16 text-black12 font-semibold',
    right: 'text-16 text-black7 font-medium',
  },
  'right-impact': {
    container: 'gap-12',
    left: 'text-16 text-black7 font-medium',
    right: 'text-16 text-black12 font-semibold',
  },
  'price-small': {
    container: '',
    left: 'text-16 text-black7 font-medium',
    right: 'text-16 text-black7 font-semibold',
  },
  'price-large': {
    container: '',
    left: 'text-20 text-black10 font-medium',
    right: 'text-20 text-black12 font-semibold',
  },
} as const;

function SelectedOption({ type, leftText, rightText }: SelectedOptionProps) {
  const styles = OPTION_STYLES[type];

  return (
    <div className={`w-full flex items-center ${styles.container}`}>
      <span className={`inline-block min-w-[72px] ${styles.left}`}>{leftText}</span>
      <span className={`inline-block ${styles.right}`}>{rightText}</span>
    </div>
  );
}

export default SelectedOption;
