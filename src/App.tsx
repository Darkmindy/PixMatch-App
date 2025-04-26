import ImageUploader from './components/ImageUploader';

function App() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-800 to-purple-800 text-white p-4">
      <h1 className="text-4xl font-bold mb-8">🔍 Ricerca Visiva</h1>
      <ImageUploader />
    </main>
  );
}

export default App;
