import { useState, useEffect } from 'react';
import EditableField from '@/components/molecules/editableField/EditableField';
import { useUserStore } from '@/store/userStore';
import { updateUser } from '@/apis/user/updateUser';
import { updatePassword, PasswordError } from '@/apis/user/updatePassword';
import { toast } from 'sonner';
import { Member } from '@/types/user';
import StandardButton from '@/components/atoms/buttons/standardButton/StandardButton';
import PasswordInput from '@/components/molecules/passwordInput/PasswordInput';
import { FormValidator } from '@/utils/FormValidator';

interface UserInfoFormProps {
  initialData: Member;
}

export default function UserInfoForm({ initialData }: UserInfoFormProps) {
  const { member, setMember } = useUserStore();
  const [name, setName] = useState(initialData.name);
  const [phone, setPhone] = useState(initialData.phone);
  const [isNameEditable, setIsNameEditable] = useState(false);
  const [isPasswordEditable, setIsPasswordEditable] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // 유효성 검사 상태
  const [currentPasswordError, setCurrentPasswordError] = useState('');
  const [newPasswordError, setNewPasswordError] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // 비밀번호 유효성 검사
  useEffect(() => {
    // 현재 비밀번호는 비어있지 않아야 함
    if (!currentPassword) {
      setCurrentPasswordError('');
    } else {
      setCurrentPasswordError('');
    }

    // 새 비밀번호 유효성 검사
    if (!newPassword) {
      setNewPasswordError('');
    } else {
      const validationResult = FormValidator.validatePassword(newPassword);
      setNewPasswordError(validationResult.isValid ? '' : validationResult.errorMessage);
    }

    // 폼 유효성 검사
    setIsFormValid(currentPassword.length > 0 && newPassword.length > 0 && !newPasswordError);

    // 입력 필드가 변경될 때마다 제출 오류 초기화
    setSubmitError('');
  }, [currentPassword, newPassword, newPasswordError]);

  const handleNameEditClick = async () => {
    if (isNameEditable) {
      if (!member?.id) return;

      setIsLoading(true);
      const updateUserData = await updateUser({
        userId: member.id,
        data: {
          name: name,
          profileImage: member.profileImage,
        },
      });

      if (!updateUserData) {
        toast.error('이름 수정에 실패했습니다.');
        setIsLoading(false);
        return;
      }

      setMember({
        ...member,
        ...updateUserData,
      });

      setIsNameEditable(false);
      setIsLoading(false);
    } else {
      setIsNameEditable(true);
    }
  };

  const handlePasswordEditClick = async () => {
    if (isPasswordEditable) {
      if (!member?.id) return;

      if (!currentPassword || !newPassword) {
        setSubmitError('현재 비밀번호와 새 비밀번호를 모두 입력해주세요.');
        return;
      }

      if (!isFormValid) {
        setSubmitError('비밀번호는 8자 이상이며, 영문, 숫자, 특수문자를 포함해야 합니다.');
        return;
      }

      setIsLoading(true);
      try {
        await updatePassword({
          userId: member.id,
          currentPassword,
          newPassword,
        });

        toast.success('비밀번호가 성공적으로 변경되었습니다.');
        setCurrentPassword('');
        setNewPassword('');
        setIsPasswordEditable(false);
        setSubmitError('');
      } catch (error) {
        // 에러 타입에 따른 처리
        if (error && typeof error === 'object' && 'code' in error) {
          const passwordError = error as PasswordError;

          switch (passwordError.code) {
            case 400:
              toast.error('현재 사용중인 비밀번호와 일치합니다.');
              break;
            case 401:
              toast.error('현재 비밀번호가 올바르지 않습니다.');
              break;
            case 403:
              toast.error('로그인이 제한된 계정입니다.');
              break;
            case 404:
              toast.error('사용자 정보를 찾을 수 없습니다.');
              break;
            case 429:
              toast.error('비밀번호 변경 시도 횟수가 초과되었습니다. 잠시 후 다시 시도해주세요.');
              break;
            case 500:
              toast.error('서버 내부 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
              break;
            default:
              toast.error(passwordError.message || '비밀번호 변경에 실패했습니다.');
          }
        } else {
          toast.error('비밀번호 변경에 실패했습니다.');
        }
      } finally {
        setIsLoading(false);
      }
    } else {
      setIsPasswordEditable(true);
      setSubmitError('');
    }
  };

  const handlePasswordCancel = () => {
    setIsPasswordEditable(false);
    setCurrentPassword('');
    setNewPassword('');
    setCurrentPasswordError('');
    setNewPasswordError('');
    setSubmitError('');
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

      {isPasswordEditable ? (
        <div className="flex flex-col gap-16 items-end">
          <hr className="w-full" />
          <PasswordInput
            id="currentPassword"
            label="현재 비밀번호"
            value={currentPassword}
            onChange={setCurrentPassword}
            placeholder="현재 비밀번호를 입력하세요"
            errorText={currentPasswordError}
          />
          <PasswordInput
            id="newPassword"
            label="새 비밀번호"
            value={newPassword}
            onChange={setNewPassword}
            placeholder="새 비밀번호를 입력하세요"
            errorText={newPasswordError}
          />
          {submitError && <div className="w-full text-red-500 text-sm mt-2">{submitError}</div>}
          <div className="flex gap-8">
            <StandardButton
              text="취소"
              onClick={handlePasswordCancel}
              disabled={isLoading}
              state="default"
              size="fit"
            />
            <StandardButton
              text={isLoading ? '처리 중...' : '비밀번호 변경'}
              onClick={handlePasswordEditClick}
              disabled={isLoading || !isFormValid}
              state="dark"
              size="fit"
            />
          </div>
          <hr className="w-full" />
        </div>
      ) : (
        <EditableField
          id="password"
          label="비밀번호"
          type="password"
          value="********"
          placeholder="********"
          onChange={() => {}}
          isEditable={false}
          onEditClick={handlePasswordEditClick}
          disabled={isLoading}
        />
      )}

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
