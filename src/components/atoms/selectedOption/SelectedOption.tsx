interface SelectedOptionProps {
  type: 'left-impact' | 'right-impact' | 'price-small' | 'price-large';
  leftText: string;
  rightText: string;
}

function SelectedOption({ type, leftText, rightText }: SelectedOptionProps) {
  const getStyles = () => {
    const styleMap = {
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
    };

    return styleMap[type];
  };

  const styles = getStyles();

  return (
    <div className={`w-full flex items-center justify-between ${styles.container}`}>
      <span className={`inline-block min-w-[72px] ${styles.left}`}>{leftText}</span>
      <span className={`inline-block ${styles.right}`}>{rightText}</span>
    </div>
  );
}

export default SelectedOption;
