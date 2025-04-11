/**
 * 파일 확장자에 따른 MIME 타입을 반환하는 유틸리티 함수
 * @param extension 파일 확장자 (예: 'png', 'jpg', 'pdf')
 * @returns 해당 확장자의 MIME 타입 또는 undefined (알 수 없는 확장자인 경우)
 */
export const getMimeType = (extension: string): string | undefined => {
  const mimeTypes: Record<string, string> = {
    // 이미지 파일
    png: 'image/png',
    jpg: 'image/jpeg',
    jpeg: 'image/jpeg',
    gif: 'image/gif',
    webp: 'image/webp',
    avif: 'image/avif',

    // 문서 파일
    pdf: 'application/pdf',
    txt: 'text/plain',
    md: 'text/markdown',
    csv: 'text/csv',

    // 압축 파일
    zip: 'application/zip',
    tar: 'application/x-tar',
    gz: 'application/gzip',

    // 비디오 파일
    mp4: 'video/mp4',
    mov: 'video/quicktime',
    webm: 'video/webm',

    // 오디오 파일
    mp3: 'audio/mpeg',
    wav: 'audio/wav',
    ogg: 'audio/ogg',
  };

  // 확장자에서 점(.) 제거하고 소문자로 변환
  const normalizedExtension = extension.replace(/^\./, '').toLowerCase();

  return mimeTypes[normalizedExtension];
};

/**
 * 파일 객체에서 MIME 타입을 추출하는 유틸리티 함수
 * @param file File 객체
 * @returns 파일의 MIME 타입 또는 undefined (알 수 없는 확장자인 경우)
 */
export const getFileMimeType = (file: File): string | undefined => {
  // 파일 이름에서 확장자 추출
  const extension = file.name.split('.').pop() || '';
  return getMimeType(extension);
};
