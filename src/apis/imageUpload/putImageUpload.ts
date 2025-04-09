import { postImageUpload, TableUnionType } from '@/apis/imageUpload/modules/postImageUpload';
import { compressImage } from '@/utils/compressImage';
import { putS3Upload } from '@/apis/imageUpload/modules/putS3Upload';

export interface PutImageUpload {
  tableUnionType: TableUnionType;
  file: File;
}
export const putImageUpload = async ({tableUnionType, file}: PutImageUpload) => {
  try {
    const postImageUploadResponse = await postImageUpload({folder: tableUnionType, fileName: 'testImage.webp', contentType: 'image/webp'});
    const compressedFile = await compressImage(file);
    const { presignedUrl, accessUrl } = postImageUploadResponse;
    await putS3Upload(presignedUrl, compressedFile);

    return accessUrl
  } catch (err) {
    console.error('압축 중 오류 발생:', err);
  }
}