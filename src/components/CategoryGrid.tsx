import { motion } from "framer-motion";
import { JSX } from "react";
import { FaGamepad, FaBook, FaMobileAlt, FaCamera, FaTshirt } from "react-icons/fa";

type Category = {
  name: string;
  icon: JSX.Element;
};

const categories: Category[] = [
  { name: "Videogiochi", icon: <FaGamepad size={28} /> },
  { name: "Manga & Libri", icon: <FaBook size={28} /> },
  { name: "Elettronica", icon: <FaMobileAlt size={28} /> },
  { name: "Fotografia", icon: <FaCamera size={28} /> },
  { name: "Abbigliamento", icon: <FaTshirt size={28} /> },
];

const CategoryGrid = () => {
  return (
    <section id="categorie" className="py-20 px-6 bg-zinc-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-zinc-800 mb-12">
          Esplora per categoria
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 hover:bg-indigo-50 transition"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-indigo-600 mb-2">{category.icon}</div>
              <p className="text-sm font-medium text-zinc-700">{category.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
