import { RoboflowResult } from '../types/ImageUpload';

export const uploadImageToRoboflow = async (file: File): Promise<RoboflowResult> => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("model", "pixmatch"); // Sostituisci con il tuo
  formData.append("api_key", "rf_zLufYkDCzoax7NVieBkrG9EKRnG2EKRnG2");

  const response = await fetch("https://detect.roboflow.com/pixmatch?api_key=rf_zLufYkDCzoax7NVieBkrG9EKRnG2", {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Upload fallito");
  }

  const data: RoboflowResult = await response.json();
  return data;
};
