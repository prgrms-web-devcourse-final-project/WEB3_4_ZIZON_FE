export type ProjectStatus = 'OPEN' | 'IN_PROGRESS' | 'COMPLETED' | 'CANCELLED';

export interface Project {
  id: number;
  title: string;
  summary: string;
  region: string;
  budget: number;
  status: ProjectStatus;
  deadline: string;
  thumbnailImageUrl: string;
  contractId: number | null;
}

export interface MyProjectPageResponse {
  projects: Project[];
  currentPage: number;
  pageSize: number;
  hasNext: boolean;
}
