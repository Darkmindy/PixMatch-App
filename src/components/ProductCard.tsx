import React from 'react';
import { motion } from 'framer-motion';

interface ProductCardProps {
  image: string;
  title: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title }) => {
  return (
    <motion.div
      className="relative w-72 bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-2xl group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {/* Gradient Border */}
      <div className="absolute inset-0 z-0 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 blur-lg opacity-50 group-hover:opacity-80 transition-all duration-500" />

      <div className="relative z-10 bg-white dark:bg-gray-900 rounded-xl p-4">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-lg mb-4 transition-transform duration-500 group-hover:scale-105"
        />
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

export default ProductCard;
