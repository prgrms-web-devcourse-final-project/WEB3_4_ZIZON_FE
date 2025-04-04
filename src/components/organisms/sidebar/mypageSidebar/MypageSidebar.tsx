'use client';

import ProfileInfo, { ProfileInfoProps } from '@/components/molecules/profileInfo/ProfileInfo';
import UserStateTabContainer from '@/components/molecules/userStateTabContainer/UserStateTabContainer';
import { useUserRole } from '@/hooks/useUserRole';

interface MypageSidebarProps {
  profileInfo: Omit<ProfileInfoProps, 'onChangeState' | 'isState'>;
  initialRole: 'client' | 'expert';
}

function MypageSidebar({ profileInfo, initialRole }: MypageSidebarProps) {
  const { role, toggleRole } = useUserRole(initialRole);

  return (
    <aside className="col-start-3 col-end-5 flex flex-col gap-24">
      <ProfileInfo {...profileInfo} isState={role} onChangeState={toggleRole} />
      <UserStateTabContainer isState={role} />
    </aside>
  );
}

export default MypageSidebar;
