import Hero from '../components/HeroSection';
import ImageUploader from '../components/ImageUploader';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      <Hero />
      <section className="flex-1 p-8">
        <ImageUploader />
      </section>
    </main>
  );
}
