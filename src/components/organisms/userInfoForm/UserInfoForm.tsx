import { useState } from 'react';
import EditableField from '@/components/molecules/editableField/EditableField';
import StandardButton from '@/components/atoms/buttons/standardButton/StandardButton';

interface UserInfoFormProps {
  initialData: {
    nickname: string;
    email: string;
    password: string;
    phoneNumber: string;
  };
}

export default function UserInfoForm({ initialData }: UserInfoFormProps) {
  const [nickname, setNickname] = useState(initialData.nickname);
  const [email] = useState(initialData.email);
  const [password, setPassword] = useState(initialData.password);
  const [phoneNumber, setPhoneNumber] = useState(initialData.phoneNumber);
  const [authCode, setAuthCode] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [isNicknameEditable, setIsNicknameEditable] = useState(false);
  const [isPasswordEditable, setIsPasswordEditable] = useState(false);
  const [isPhoneEditable, setIsPhoneEditable] = useState(false);

  const handleNicknameEditClick = () => {
    if (isNicknameEditable) {
      // 수정 완료 로직 추가 (예: API 호출)
      setIsNicknameEditable(false);
    } else {
      setIsNicknameEditable(true);
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
        id="nickname"
        label="닉네임"
        value={nickname}
        placeholder="장난스러운팽구534"
        onChange={setNickname}
        isEditable={isNicknameEditable}
        onEditClick={handleNicknameEditClick}
      />

      <EditableField
        id="email"
        label="이메일"
        type="email"
        value={email}
        placeholder="jinu17@naver.com"
        onChange={() => {}}
        isEditable={false}
        disabled={true}
      />

      <EditableField
        id="password"
        label="비밀번호"
        type="password"
        value={password}
        placeholder="jin********"
        onChange={setPassword}
        isEditable={isPasswordEditable}
        onEditClick={handlePasswordEditClick}
      />

      <EditableField
        id="phone"
        label="휴대폰 번호"
        type="tel"
        value={phoneNumber}
        placeholder="010-1312-1231"
        onChange={setPhoneNumber}
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
