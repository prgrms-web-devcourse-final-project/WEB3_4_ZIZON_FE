'use client';

import { useRouter } from 'next/navigation';
import DopdangLogo from '@/components/atoms/icons/dopdangLogo/DopdangLogo';
import NavigationLinks from '@/components/molecules/navigationLink/NavigationLinks';
import AuthButtons from '@/components/molecules/authButtons/AuthButtons';

interface DesktopNavigationProps {
  isLoggedIn?: boolean;
}

function DesktopNavigation({ isLoggedIn = false }: DesktopNavigationProps) {
  const router = useRouter();

  return (
    <header className="w-full px-320 py-20 flex justify-between items-center">
      <div className="flex items-center gap-40">
        <DopdangLogo/>
        <NavigationLinks />
      </div>
      <AuthButtons isLoggedIn={isLoggedIn} onLoginClick={() => router.push('/')} />
    </header>
  );
}

export default DesktopNavigation;
