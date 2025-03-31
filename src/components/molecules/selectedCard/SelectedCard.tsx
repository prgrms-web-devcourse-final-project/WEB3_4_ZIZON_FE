import CardIcon, { CardIconProps } from '@/components/atoms/cardIcon/CardIcon';

interface SelectedCardProps extends CardIconProps {
  type: 'left' | 'center';
  title: string;
  subtitle: string;
}

function SelectedCard({ type, title, subtitle, category, isOn }: SelectedCardProps) {
  return (
    <div
      className={`rounded-2xl p-16 cursor-pointer transition-colors duration-200
        ${isOn ? 'bg-primary1/30' : 'bg-black2'}
        ${type === 'center' ? 'w-262 text-center pt-20' : 'w-548 '}`}
    >
      <div
        className={`flex ${type === 'center' ? 'flex-col items-center' : 'items-center gap-12'}`}
      >
        <div className={type === 'center' ? 'mb-8' : ''}>
          <CardIcon category={category} isOn={isOn} />
        </div>
        <div className={`flex flex-col ${type === 'center' ? 'items-center' : ''}`}>
          <span className={`text-16 font-medium mb-4 ${isOn ? 'text-primary5' : 'text-black10'}`}>
            {title}
          </span>
          {type !== 'center' && (
            <span className={`text-13 font-regular ${isOn ? 'text-primary4' : 'text-black7'}`}>
              {subtitle}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default SelectedCard;
