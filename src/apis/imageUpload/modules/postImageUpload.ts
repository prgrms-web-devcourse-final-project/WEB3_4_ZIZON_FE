import { APIBuilder } from '@/utils/APIBuilder';

interface S3Response {
  presignedUrl: string;
  accessUrl: string;
}

export type TableUnionType = 'projects' | 'members' | 'products' | 'portfolios' | 'chating';
export interface ImageUploadRequest {
  folder: TableUnionType;
  fileName: string;
  contentType: string;
}
export const postImageUpload = async (request: ImageUploadRequest): Promise<S3Response> => {
  const response = await APIBuilder.post('/api/s3/upload-url', request).build().call<S3Response>();

  return response.data;
};
