import EditableField from '@/components/molecules/editableField/EditableField';

interface CareerSectionProps {
  value: string;
  onChange: (value: string) => void;
  isEditable: boolean;
  onEditClick: () => void;
  onSave: () => void;
  disabled: boolean;
}

export default function CareerSection({
  value,
  onChange,
  isEditable,
  onEditClick,
  onSave,
  disabled,
}: CareerSectionProps) {
  const handleEditClick = () => {
    if (isEditable) {
      onSave();
    } else {
      onEditClick();
    }
  };

  return (
    <EditableField
      id="careerYears"
      label="경력"
      type="number"
      value={value}
      placeholder={value}
      onChange={onChange}
      isEditable={isEditable}
      onEditClick={handleEditClick}
      disabled={disabled}
    />
  );
}
