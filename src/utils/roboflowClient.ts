export const uploadImageToRoboflow = async (file: File): Promise<unknown> => {
    const apiKey = import.meta.env.VITE_ROBOFLOW_API_KEY;
    const modelId = import.meta.env.VITE_ROBOFLOW_MODEL_ID;
    const formData = new FormData();
  
    formData.append('file', file);
    formData.append('api_key', apiKey ?? '');
    formData.append('name', file.name);
  
    const response = await fetch(`https://detect.roboflow.com/${modelId}?api_key=${apiKey}`, {
      method: 'POST',
      body: formData,
    });
  
    if (!response.ok) {
      throw new Error(`Errore upload: ${response.statusText}`);
    }
  
    return response.json();
  };
  