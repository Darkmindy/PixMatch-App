import ImageUploader from '../components/ImageUploader';

const UploadPage = () => {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center px-4 py-10 bg-white">
      <h1 className="text-3xl font-bold text-indigo-700 mb-6">Carica una o più immagini</h1>
      <p className="text-gray-600 mb-4 text-center max-w-md">
        PixMatch analizzerà l'immagine e ti mostrerà i prodotti più simili.
      </p>
      <ImageUploader />
    </section>
  );
};

export default UploadPage;
