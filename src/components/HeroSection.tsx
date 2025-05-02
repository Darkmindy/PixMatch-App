// src/components/HeroSection.tsx
import { motion } from "framer-motion";
import heroImage from "../assets/hero-illustration.gif"; // Usa una GIF o animazione SVG

const HeroSection = () => {
  return (
    <section className="relative px-6 py-24 sm:py-32 bg-gradient-to-br from-zinc-100 via-white to-indigo-100">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        {/* Text */}
        <div className="text-center lg:text-left max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-6xl font-extrabold text-zinc-900 leading-tight"
          >
            Trova ciò che cerchi<br />
            <span className="text-indigo-600">senza scrivere una parola</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-6 text-lg text-zinc-600"
          >
            Con <strong>PixMatch</strong> carichi un’immagine e ottieni prodotti simili in pochi secondi. È la ricerca visuale definitiva.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="mt-10"
          >
            {/* Inserire qui il componente uploader */}
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg text-lg font-medium transition-all">
              Carica immagine
            </button>
          </motion.div>
        </div>

        {/* Animated image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-full max-w-md"
        >
          <img
            src={heroImage}
            alt="Visual discovery illustration"
            className="w-full h-auto drop-shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
