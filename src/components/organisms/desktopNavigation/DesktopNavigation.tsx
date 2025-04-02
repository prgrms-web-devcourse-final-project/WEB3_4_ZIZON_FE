'use client';

import { useRouter } from 'next/navigation';
import DopdangLogo from '@/components/atoms/icons/dopdangLogo/DopdangLogo';
import NavigationLinks from '@/components/molecules/navigation/navigationLinks/NavigationLinks';
import AuthButtons from '@/components/molecules/navigation/authButtons/AuthButtons';


interface DesktopNavigationProps {
  isLoggedIn?: boolean;
}

function DesktopNavigation({ isLoggedIn = false }: DesktopNavigationProps) {
  const router = useRouter();

  return (
    <header className="w-full py-20 flex justify-center items-center border-b border-black4">
      <div className="flex justify-between items-center w-1920 px-320">
        <div className="flex items-center gap-40">
          <DopdangLogo />
          <NavigationLinks />
        </div>
        <AuthButtons isLoggedIn={isLoggedIn} onLoginClick={() => router.push('/')} />
      </div>
    </header>
  );
}

export default DesktopNavigation;
