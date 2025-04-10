export type ExpertContractListResponse = Contract[];

export type ContractStatus = 'PENDING' | 'IN_PROGRESS' | 'COMPLETED' | 'CANCELLED' | 'DISPUTED';

export interface Contract {
  contractId: number;
  projectId: number;
  projectTitle: string;
  clientName: string;
  price: number;
  startDate: string;
  endDate: string;
  status: ContractStatus;
}
