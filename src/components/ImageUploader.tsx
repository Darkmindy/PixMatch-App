// src/components/ImageUploader.tsx

import React, { useState } from 'react';
import { uploadImageToRoboflow } from '../utils/uploadImageToRoboflow';
import { RoboflowResult } from '../types/ImageUpload';

const ImageUploader: React.FC = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const [results, setResults] = useState<RoboflowResult[]>([]);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const fileArray = Array.from(files);
      setSelectedFiles(fileArray);
      setPreviews(fileArray.map(file => URL.createObjectURL(file)));
    }
  };

  const handleUpload = async () => {
    setLoading(true);
    try {
      const allResults = await Promise.all(
        selectedFiles.map(async (file) => {
          const result = await uploadImageToRoboflow(file);
          return result;
        })
      );
      setResults(allResults);
    } catch (error) {
      console.error("Errore durante l'upload:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-2xl mx-auto p-4">
      <input
        type="file"
        multiple
        accept="image/*"
        onChange={handleFileChange}
        className="text-sm"
      />
      <button
        onClick={handleUpload}
        disabled={loading || selectedFiles.length === 0}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        {loading ? "Caricamento..." : "Analizza Immagini"}
      </button>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
        {previews.map((src, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <img src={src} alt={`Preview ${idx}`} className="w-full h-auto rounded shadow" />
            {results[idx]?.predictions.length ? (
              <ul className="text-xs mt-2 text-left list-disc pl-4">
                {results[idx].predictions.map((pred, pIdx) => (
                  <li key={pIdx}>
                    {pred.class} – {Math.round(pred.confidence * 100)}%
                  </li>
                ))}
              </ul>
            ) : (
              <span className="text-gray-500 text-xs mt-2">Nessun risultato</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageUploader;
