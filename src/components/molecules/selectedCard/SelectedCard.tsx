import CardIcon from '../../atoms/cardIcon/CardIcon';

interface SelectedCardProps {
  type: 'left' | 'center';
  checked: boolean;
  title: string;
  subtitle: string;
  category: 'spanner' | 'home' | 'pallete' | 'pencil' | 'women';
}

function SelectedCard({ type, checked, title, subtitle, category }: SelectedCardProps) {
  return (
    <div
      className={`rounded-2xl p-16 cursor-pointer transition-colors duration-200
        ${checked ? 'bg-primary1/30' : 'bg-black2'}
        ${type === 'center' ? 'w-262 text-center pt-20' : 'w-548 '}`}
    >
      <div
        className={`flex ${type === 'center' ? 'flex-col items-center' : 'items-center gap-12'}`}
      >
        <div className={type === 'center' ? 'mb-8' : ''}>
          <CardIcon category={category} isOn={checked} />
        </div>
        <div className={`flex flex-col ${type === 'center' ? 'items-center' : ''}`}>
          <span
            className={`text-16 font-medium mb-4 ${checked ? 'text-primary5' : 'text-black10'}`}
          >
            {title}
          </span>
          {type !== 'center' && (
            <span className={`text-13 font-regular ${checked ? 'text-primary4' : 'text-black7'}`}>
              {subtitle}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default SelectedCard;
