'use client';

import LoginPageTemplate from '@/components/templates/auth/loginTemplate/LoginPageTemplate';
import { Suspense } from 'react';

export default function LoginPage() {
  return <Suspense><LoginPageTemplate /></Suspense>;
}
