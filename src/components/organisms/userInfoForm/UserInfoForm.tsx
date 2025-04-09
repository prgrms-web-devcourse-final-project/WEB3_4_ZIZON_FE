import { useState } from 'react';
import EditableField from '@/components/molecules/editableField/EditableField';
import { useUserStore } from '@/store/userStore';
import { updateUserField } from '@/utils/userUtils';

interface UserInfoFormProps {
  initialData: {
    name: string;
    email: string;
    password: string;
    phone: string;
  };
}

export default function UserInfoForm({ initialData }: UserInfoFormProps) {
  const { member, setMember } = useUserStore();
  const [name, setName] = useState(initialData.name);
  const [phone, setPhone] = useState(initialData.phone);
  const [isNameEditable, setIsNameEditable] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleNameEditClick = async () => {
    if (isNameEditable) {
      if (!member?.id) return;

      setIsLoading(true);
      const success = await updateUserField({
        userId: member.id,
        field: 'name',
        value: name,
        setMember,
        currentName: name,
      });

      if (success) {
        setIsNameEditable(false);
      }
      setIsLoading(false);
    } else {
      setIsNameEditable(true);
    }
  };

  return (
    <div className="flex flex-col gap-32">
      <EditableField
        id="name"
        label="이름"
        value={name}
        placeholder={name}
        onChange={setName}
        isEditable={isNameEditable}
        onEditClick={handleNameEditClick}
        disabled={isLoading}
      />

      <EditableField
        id="email"
        label="이메일"
        type="email"
        value={initialData.email}
        placeholder={initialData.email}
        onChange={() => {}}
        isEditable={false}
        disabled={true}
      />

      <EditableField
        id="password"
        label="비밀번호"
        type="password"
        value="********"
        placeholder="********"
        onChange={() => {}}
        isEditable={false}
        disabled={true}
      />

      <EditableField
        id="phone"
        label="휴대폰 번호"
        type="tel"
        value={phone}
        placeholder={phone}
        onChange={setPhone}
        isEditable={false}
        disabled={true}
      />
    </div>
  );
}
