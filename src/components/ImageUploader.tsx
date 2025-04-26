import { useState } from "react";

const ImageUploader = () => {
  //const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      //setSelectedImage(file);
      const preview = URL.createObjectURL(file);
      setPreviewUrl(preview);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 gap-4">
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="block w-full text-sm text-gray-500
          file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-indigo-50 file:text-indigo-700
          hover:file:bg-indigo-100
          cursor-pointer"
      />
      {previewUrl && (
        <img
          src={previewUrl}
          alt="Anteprima"
          className="mt-4 max-w-xs rounded-lg shadow-lg"
        />
      )}
    </div>
  );
};

export default ImageUploader;
