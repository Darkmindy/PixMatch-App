// src/components/HeroSection.tsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="min-h-[85vh] flex items-center justify-center text-center px-4 bg-gradient-to-br from-indigo-100 via-white to-indigo-50">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 text-indigo-700">
          Trova tutto quello che cerchi<br className="hidden sm:inline" /> senza scrivere una parola.
        </h1>
        <p className="text-gray-600 mb-8 text-lg sm:text-xl">
          Carica un'immagine e lascia che PixMatch trovi i prodotti perfetti per te.
        </p>
        <Link
          to="/upload"
          className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-indigo-700 transition"
        >
          Inizia ora
        </Link>
      </motion.div>
    </section>
  );
};

export default HeroSection;
