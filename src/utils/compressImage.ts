import Compressor from 'compressorjs';

export const compressImage = (file: File): Promise<File> => {
  return new Promise((resolve, reject) => {
    new Compressor(file, {
      quality: 0.6,
      convertSize: 0,
      mimeType: 'image/webp',
      maxHeight: 1080,
      success(result) {
        resolve(result as File);
      },
      error(err) {
        reject(err);
      },
    });
  });
};