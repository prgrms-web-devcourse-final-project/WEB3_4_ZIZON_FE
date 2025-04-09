import TagList from '@/components/molecules/tagList/TagList';

interface CertificatesSectionProps {
  tags: string[];
  newTagValue: string;
  isEditable: boolean;
  onEditClick: () => void;
  onAddTag: (tag: string) => void;
  onRemoveTag: (index: number) => void;
  onNewTagChange: (value: string) => void;
  onSave: () => void;
}

export default function CertificatesSection({
  tags,
  newTagValue,
  isEditable,
  onEditClick,
  onAddTag,
  onRemoveTag,
  onNewTagChange,
  onSave,
}: CertificatesSectionProps) {
  const handleEditClick = () => {
    if (isEditable) {
      onSave();
    } else {
      onEditClick();
    }
  };

  const handleAddTag = () => {
    if (newTagValue.trim()) {
      onAddTag(newTagValue.trim());
    }
  };

  return (
    <TagList
      label="자격증"
      tags={tags}
      isEditable={isEditable}
      newTagValue={newTagValue}
      placeholder="보유한 자격증을 입력하세요"
      onEditClick={handleEditClick}
      onAddTag={handleAddTag}
      onRemoveTag={onRemoveTag}
      onNewTagChange={onNewTagChange}
    />
  );
}
