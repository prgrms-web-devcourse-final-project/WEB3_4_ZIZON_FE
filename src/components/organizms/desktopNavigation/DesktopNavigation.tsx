'use client';

import Logo from '@/components/atoms/Logo/Logo';
import NavigationLinks from '@/components/molecules/NavigationLinks/NavigationLinks';
import AuthButtons from '@/components/molecules/AuthButtons/AuthButtons';
import { useRouter } from 'next/navigation';

interface DesktopNavigationProps {
  isLoggedIn?: boolean;
}

function DesktopNavigation({ isLoggedIn = false }: DesktopNavigationProps) {
  const router = useRouter();

  return (
    <header className="w-full px-320 py-20 flex justify-between items-center">
      <div className="flex items-center gap-40">
        <Logo />
        <NavigationLinks />
      </div>
      <AuthButtons isLoggedIn={isLoggedIn} onLoginClick={() => router.push('/')} />
    </header>
  );
}

export default DesktopNavigation;
