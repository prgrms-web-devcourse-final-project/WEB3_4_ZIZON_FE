'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import DopdangLogo from '@/components/atoms/icons/dopdangLogo/DopdangLogo';
import NavigationLinks from '@/components/molecules/navigation/navigationLinks/NavigationLinks';
import AuthButtons from '@/components/molecules/navigation/authButtons/AuthButtons';
import { useUserStore } from '@/store/userStore';

function DesktopNavigation() {
  const router = useRouter();
  const { currentRole, member, initializeStore } = useUserStore();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_SERVER_URL}/users/me`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        });

        if (response.status !== 200) {
          initializeStore();
        }
      } catch (error) {
        console.log(error);
      }
    };

    checkAuth();
  }, [initializeStore]);

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
          userRole={currentRole}
        />
      </div>
    </header>
  );
}

export default DesktopNavigation;
