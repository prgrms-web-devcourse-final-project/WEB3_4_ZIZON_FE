// 사용자 역할 타입
export type UserRole = 'client' | 'expert';

// MEMBER 테이블 정보 타입 정의
export interface Member {
  id: number; // 사용자 고유 식별자
  email: string; // 이메일 주소
  name: string; // 사용자 이름
  profileImage: string;
  userRole: UserRole;
}

// EXPERT 테이블 정보 타입 정의
export interface Expert {
  id: number;
  member_id: number;
  introduction: string;
  major_category: string;
  sub_category: string[];
  gender: string;
  career_years: number;
  certification: string;
  bank_name: string;
  account_number: string;
}

// 전역 상태 관리를 위한 타입
export interface UserState {
  member: Member | null;
  expert: Expert | null;
  currentRole: UserRole;
  setMember: (member: Member | null) => void;
  setExpert: (expert: Expert | null) => void;
  setCurrentRole: (role: UserRole) => void;
  logout: () => Promise<void>;
}
