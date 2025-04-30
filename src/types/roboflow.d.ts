export interface RoboflowPrediction {
  predictions: {
    class: string;
    confidence: number;
    [key: string]: unknown;
  }[];
}

export interface UploadedImage {
  file: File;
  previewUrl: string;
  isUploading: boolean;
  prediction?: RoboflowPrediction | null;
}
