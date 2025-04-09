import { useState } from 'react';
import EditableField from '@/components/molecules/editableField/EditableField';
import StandardButton from '@/components/atoms/buttons/standardButton/StandardButton';
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
  const [authCode, setAuthCode] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [isNameEditable, setIsNameEditable] = useState(false);
  const [isPhoneEditable, setIsPhoneEditable] = useState(false);
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

  const handlePhoneEditClick = async () => {
    if (isPhoneEditable) {
      if (!member?.id) return;

      setIsLoading(true);
      const success = await updateUserField({
        userId: member.id,
        field: 'phone',
        value: phone,
        setMember,
        currentName: member.name,
      });

      if (success) {
        setIsPhoneEditable(false);
        setIsVerifying(false);
      }
      setIsLoading(false);
    } else {
      setIsPhoneEditable(true);
    }
  };

  const handleVerifyClick = () => {
    setIsVerifying(true);
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
        isEditable={isPhoneEditable}
        onEditClick={handlePhoneEditClick}
        disabled={isLoading}
        ButtonComponent={
          <StandardButton
            onClick={handleVerifyClick}
            state="dark"
            text="재인증"
            disabled={!isPhoneEditable || isVerifying || isLoading}
          />
        }
      />

      {isVerifying && (
        <EditableField
          id="authCode"
          label="인증번호"
          value={authCode}
          onChange={setAuthCode}
          isEditable={true}
          placeholder="인증번호를 입력해주세요"
          disabled={isLoading}
        />
      )}
    </div>
  );
}
