'use client';

import { useSearchParams } from 'next/navigation';
import ProgressBar from '@/components/atoms/bars/progressBar/ProgressBar';
import SemiBoldText from '@/components/atoms/texts/semiBoldText/SemiBoldText';
import CheckboxWithLabel from '@/components/atoms/checkboxes/checkboxWithLabel/CheckboxWithLabel';
import type { ExpertCategory } from '@/components/atoms/buttons/labelWithIconButton/LabelWithIconButton';
import type { Service } from '@/types/expert';
import { SERVICES } from '@/types/expert';

interface ExpertServicesProps {
  selectedServices: Service[ExpertCategory][];
  setSelectedServices: (services: Service[ExpertCategory][]) => void;
}

function ExpertServices({ selectedServices, setSelectedServices }: ExpertServicesProps) {
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get('expert-category') as ExpertCategory | null;

  const handleServiceChange = (value: Service[ExpertCategory], checked: boolean) => {
    if (checked) {
      setSelectedServices([...selectedServices, value]);
    } else {
      setSelectedServices(selectedServices.filter(service => service !== value));
    }
  };

  return (
    <article className="w-636 flex flex-col items-center gap-64 px-54 py-64 bg-black1 rounded-xl">
      <ProgressBar step={3} />
      <SemiBoldText title="어떤 서비스를 제공할 수 있나요?" fontSize={28} />

      {selectedCategory && (
        <div className="w-full flex flex-col gap-20">
          {SERVICES[selectedCategory].map(service => (
            <CheckboxWithLabel
              key={service.value}
              label={service.label}
              caption=""
              checked={selectedServices.includes(service.value)}
              onChange={checked => handleServiceChange(service.value, checked)}
            />
          ))}
        </div>
      )}
    </article>
  );
}

export default ExpertServices;
