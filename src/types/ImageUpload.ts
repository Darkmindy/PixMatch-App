// src/types/ImageUpload.ts

export interface RoboflowPrediction {
  class: string;
  confidence: number;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
}

export interface RoboflowResult {
  predictions: RoboflowPrediction[];
}
