import EditableField from '@/components/molecules/editableField/EditableField';

interface IntroductionSectionProps {
  value: string;
  onChange: (value: string) => void;
  isEditable: boolean;
  onEditClick: () => void;
  onSave: () => void;
  disabled: boolean;
}

export default function IntroductionSection({
  value,
  onChange,
  isEditable,
  onEditClick,
  onSave,
  disabled,
}: IntroductionSectionProps) {
  const handleEditClick = () => {
    if (isEditable) {
      onSave();
    } else {
      onEditClick();
    }
  };

  return (
    <EditableField
      id="introduction"
      label="전문가 소개"
      value={value}
      placeholder="안녕하세요, 5년 경력의 웹 개발 전문가입니다..."
      onChange={onChange}
      isEditable={isEditable}
      onEditClick={handleEditClick}
      useTextarea={true}
      rows={6}
      disabled={disabled}
    />
  );
}
