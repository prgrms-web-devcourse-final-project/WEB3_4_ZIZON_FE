import XMarkTag from '@/components/atoms/tags/xMarkTag/XMarkTag';
import InputTemplate from '@/components/molecules/inputTemplate/InputTemplate';
import TextInput from '@/components/atoms/inputs/textInput/TextInput';
import InputLabel from '@/components/atoms/texts/inputLabel/InputLabel';
import StandardButton from '@/components/atoms/buttons/standardButton/StandardButton';
import TextButton from '@/components/atoms/buttons/textButton/TextButton';

interface TagListProps {
  label: string;
  tags: string[];
  isEditable: boolean;
  newTagValue: string;
  placeholder: string;
  onEditClick: () => void;
  onAddTag: () => void;
  onRemoveTag: (index: number) => void;
  onNewTagChange: (value: string) => void;
}

export default function TagList({
  label,
  tags,
  isEditable,
  newTagValue,
  placeholder,
  onEditClick,
  onAddTag,
  onRemoveTag,
  onNewTagChange,
}: TagListProps) {
  return (
    <div className="w-full">
      <div className="mb-8 flex justify-between items-center">
        <span className="text-16 font-medium">{label}</span>
        <TextButton onClick={onEditClick} text={isEditable ? '완료' : '수정'} />
      </div>
      {isEditable && (
        <div className="w-full mb-8">
          <InputTemplate
            InputComponent={
              <TextInput
                id={`new${label.replace(/\s+/g, '')}`}
                value={newTagValue}
                onChange={onNewTagChange}
                placeholder={placeholder}
                type="text"
              />
            }
            LabelComponent={<InputLabel label="" htmlFor={`new${label.replace(/\s+/g, '')}`} />}
            ButtonComponent={
              <StandardButton onClick={onAddTag} text="추가" state="dark" disabled={false} />
            }
          />
        </div>
      )}
      <div className="flex flex-wrap gap-8">
        {tags.map((tag, index) => (
          <XMarkTag
            key={index}
            text={tag}
            color="default"
            onClickXMark={() => onRemoveTag(index)}
          />
        ))}
      </div>
    </div>
  );
}
