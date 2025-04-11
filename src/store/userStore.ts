import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { UserState, UserRole } from '@/types/user';
import { APIBuilder } from '@/utils/APIBuilder';
import { toggleUserRole } from '@/apis/user/toggleUserRole';

export const useUserStore = create<UserState>()(
  persist<UserState>(
    set => ({
      member: null,
      expert: null,
      currentRole: 'client' as UserRole,
      setMember: member => set(() => ({ member })),
      setExpert: expert => set(() => ({ expert })),
      setCurrentRole: async (role: UserRole) => {
        try {
          const currentState = useUserStore.getState();
          const userId = currentState.member?.id;

          if (!userId) {
            throw new Error('사용자 ID를 찾을 수 없습니다.');
          }

          // 현재 역할과 변경하려는 역할이 다른 경우에만 API 호출
          if (currentState.currentRole !== role) {
            // API 호출을 통해 서버에 상태 변경 알림
            await toggleUserRole(String(userId));
          }

          // 로컬 상태 업데이트
          set(() => ({ currentRole: role }));

          return role;
        } catch (error) {
          console.error('역할 변경 중 오류 발생:', error);
          throw error;
        }
      },
      initializeStore: () => set(() => ({ member: null, expert: null, currentRole: 'client' })),
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
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
