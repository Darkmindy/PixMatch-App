import { RoboflowResponse } from "../types/roboflow";

export const uploadImageToRoboflow = async (image: File): Promise<RoboflowResponse> => {
  const apiKey = import.meta.env.VITE_ROBOFLOW_API_KEY;
  const modelEndpoint = import.meta.env.VITE_ROBOFLOW_MODEL_ENDPOINT;

  if (!apiKey || !modelEndpoint) {
    throw new Error("API Key o Model Endpoint mancanti. Controlla il tuo file .env!");
  }

  const formData = new FormData();
  formData.append("file", image);

  const url = `${modelEndpoint}?api_key=${apiKey}`;

  const response = await fetch(url, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Errore nella richiesta a Roboflow.");
  }

  const data = (await response.json()) as RoboflowResponse;
  return data;
};
