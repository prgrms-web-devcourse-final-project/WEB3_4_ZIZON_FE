export const getFileSizeAndDimensions = (file: File): Promise<{ sizeMB: number; width: number; height: number }> => {
  return new Promise((resolve, reject) => {
    const sizeMB = file.size / (1024 * 1024);

    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        resolve({
          sizeMB: parseFloat(sizeMB.toFixed(2)),
          width: img.width,
          height: img.height,
        });
      };
      img.onerror = reject;
      img.src = event.target?.result as string;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};