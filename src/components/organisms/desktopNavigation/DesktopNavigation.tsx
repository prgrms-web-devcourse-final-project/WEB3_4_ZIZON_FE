'use client';

import { useRouter } from 'next/navigation';
import DopdangLogo from '@/components/atoms/icons/dopdangLogo/DopdangLogo';
import NavigationLinks from '@/components/molecules/navigation/navigationLinks/NavigationLinks';
import AuthButtons from '@/components/molecules/navigation/authButtons/AuthButtons';
import { useUserStore } from '@/store/userStore';
import { UserRole } from '@/types/user';

interface DesktopNavigationProps {
  userRole?: UserRole;
}

function DesktopNavigation({ userRole = 'client' }: DesktopNavigationProps) {
  const router = useRouter();
  const member = useUserStore(state => state.member);

  return (
    <header className="w-full py-20 flex justify-center items-center border-b border-black4">
      <div className="flex justify-between items-center min-w-1920 px-320">
        <div className="flex items-center gap-40">
          <DopdangLogo type="kr" />
          <NavigationLinks />
        </div>
        <AuthButtons
          isLoggedIn={!!member}
          onLoginClick={() => router.push('/login')}
          member={member}
          userRole={userRole}
        />
      </div>
    </header>
  );
}

export default DesktopNavigation;
