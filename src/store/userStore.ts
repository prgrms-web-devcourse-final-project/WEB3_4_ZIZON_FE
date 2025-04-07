import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { UserState, UserRole } from '@/types/user';
import { APIBuilder } from '@/utils/APIBuilder';
export const useUserStore = create<UserState>()(
  persist(
    set => ({
      member: null,
      expert: null,
      currentRole: 'client' as UserRole,
      setMember: member => set(() => ({ member })),
      setExpert: expert => set(() => ({ expert })),
      setCurrentRole: (role: UserRole) => set(() => ({ currentRole: role })),
      logout: async () => {
        try {
          const response = await APIBuilder.post('/users/logout', {}).build().call();

          if (response.status !== 200) {
            throw new Error('로그아웃 실패');
          }

          set(() => ({ member: null, expert: null, currentRole: 'client' }));
          window.location.href = '/';
        } catch (error) {
          console.error('로그아웃 중 오류 발생:', error);
          throw error;
        }
      },
    }),
    {
      name: 'user-storage',
    },
  ),
);
