export const putS3Upload = async (presignedUrl: string, file: File): Promise<Response> => {
  const uploadResponse = await fetch(presignedUrl, {
    method: 'PUT',
    body: file,
    headers: {
      'Content-Type': 'image/webp',
    },
  });

  return uploadResponse;
};
