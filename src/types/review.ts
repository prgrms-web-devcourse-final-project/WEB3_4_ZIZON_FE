export interface Review {
  projectId: number;
  score: number; // 1부터 (0.5 단위로)
  content: string;
}

// UI 표시를 위한 확장 타입
export interface ReviewWithUI extends Review {
  id?: string; // UI에서 사용할 고유 ID
  userName?: string;
  userProfileImage?: string;
  createdAt?: string;
  projectTitle?: string;
  projectImage?: string;
}
