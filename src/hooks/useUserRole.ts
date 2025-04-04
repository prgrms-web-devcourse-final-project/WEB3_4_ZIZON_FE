'use client';

import { useState, useCallback } from 'react';

export type UserRole = 'client' | 'expert';

export function useUserRole(initialRole: UserRole = 'client') {
  const [role, setRole] = useState<UserRole>(initialRole);

  const toggleRole = useCallback(() => {
    setRole(prev => (prev === 'client' ? 'expert' : 'client'));
  }, []);

  return {
    role,
    toggleRole,
  };
}
