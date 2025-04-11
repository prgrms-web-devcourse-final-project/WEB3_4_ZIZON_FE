import { postImageUpload, TableUnionType } from '@/apis/imageUpload/modules/postImageUpload';
import { putS3Upload } from '@/apis/imageUpload/modules/putS3Upload';
import { getMimeType } from '@/utils/getMimeType';

export interface PutFileUpload {
  tableUnionType: TableUnionType;
  file: File;
  fileName?: string;
}

export const putFileUpload = async ({ tableUnionType, file, fileName }: PutFileUpload) => {
  try {
    const extension = file.name.split('.').pop() || '';
    const contentType = getMimeType(extension) || 'image/webp';

    const finalFileName = fileName || `image_${Date.now()}.${extension}`;

    const postImageUploadResponse = await postImageUpload({
      folder: tableUnionType,
      fileName: finalFileName,
      contentType: contentType,
    });

    const { presignedUrl, accessUrl } = postImageUploadResponse;
    await putS3Upload(presignedUrl, file);

    return accessUrl;
  } catch (err) {
    console.error('파일 업로드 중 오류 발생:', err);
  }
};
