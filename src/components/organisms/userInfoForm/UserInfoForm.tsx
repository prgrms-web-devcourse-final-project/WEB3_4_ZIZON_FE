import { useState } from 'react';
import EditableField from '@/components/molecules/editableField/EditableField';
import StandardButton from '@/components/atoms/buttons/standardButton/StandardButton';

interface UserInfoFormProps {
  initialData: {
    name: string;
    email: string;
    password: string;
    phone: string;
  };
}

export default function UserInfoForm({ initialData }: UserInfoFormProps) {
  const [name, setName] = useState(initialData.name);
  const [email, setEmail] = useState(initialData.email);
  const [password, setPassword] = useState(initialData.password);
  const [phone, setPhone] = useState(initialData.phone);
  const [authCode, setAuthCode] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [isNameEditable, setIsNameEditable] = useState(false);
  const [isEmailEditable, setIsEmailEditable] = useState(false);
  const [isPasswordEditable, setIsPasswordEditable] = useState(false);
  const [isPhoneEditable, setIsPhoneEditable] = useState(false);

  const handleNameEditClick = () => {
    if (isNameEditable) {
      // 수정 완료 로직 추가 (예: API 호출)
      setIsNameEditable(false);
    } else {
      setIsNameEditable(true);
    }
  };

  const handleEmailEditClick = () => {
    if (isEmailEditable) {
      // 수정 완료 로직 추가 (예: API 호출)
      setIsEmailEditable(false);
    } else {
      setIsEmailEditable(true);
    }
  };

  const handlePasswordEditClick = () => {
    if (isPasswordEditable) {
      // 수정 완료 로직 추가 (예: API 호출)
      setIsPasswordEditable(false);
    } else {
      setIsPasswordEditable(true);
    }
  };

  const handlePhoneEditClick = () => {
    if (isPhoneEditable) {
      // 수정 완료 로직 추가 (예: API 호출)
      setIsPhoneEditable(false);
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
      />

      <EditableField
        id="email"
        label="이메일"
        type="email"
        value={email}
        placeholder={email}
        onChange={setEmail}
        isEditable={isEmailEditable}
        onEditClick={handleEmailEditClick}
      />

      <EditableField
        id="password"
        label="비밀번호"
        type="password"
        value={password}
        placeholder={password}
        onChange={setPassword}
        isEditable={isPasswordEditable}
        onEditClick={handlePasswordEditClick}
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
        ButtonComponent={
          <StandardButton
            onClick={handleVerifyClick}
            state="dark"
            text="재인증"
            disabled={!isPhoneEditable || isVerifying}
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
        />
      )}
    </div>
  );
}
