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
          await APIBuilder.post('/users/logout', {}).build().call();
        } catch (error) {
          console.error('로그아웃 API 호출 실패:', error);
        } finally {
          set(() => ({ member: null, expert: null, currentRole: 'client' }));
          window.location.href = '/';
        }
      },
    }),
    {
      name: 'user-storage',
    },
  ),
);
